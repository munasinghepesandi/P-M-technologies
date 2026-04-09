import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

const dbPool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Pabasara2003",
    database: process.env.DB_NAME || "pm_technologies",
    port: Number(process.env.DB_PORT || 3306),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
    const name = String(req.body?.name || "").trim();
    const email = String(req.body?.email || "").trim();
    const message = String(req.body?.message || "").trim();

    if (!name) {
        res.status(400).type("text/plain").send("Name is required");
        return;
    }

    if (!email) {
        res.status(400).type("text/plain").send("Email is required");
        return;
    }

    if (!message) {
        res.status(400).type("text/plain").send("Message is required");
        return;
    }

    try {
        await dbPool.execute(
            "INSERT INTO client (name, email, message) VALUES (?, ?, ?)",
            [name, email, message],
        );

        res.status(200).type("text/plain").send("success");
    } catch (error) {
        console.error("Contact insert failed:", error);
        res.status(500).type("text/plain").send("Internal server error");
    }
});

app.listen(port, () => {
    console.log(`Contact API running on http://localhost:${port}`);
});
