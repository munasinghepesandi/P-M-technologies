const contactEndpoint = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

export async function sendContactForm(payload) {
    let response;

    try {
        response = await fetch(contactEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    } catch {
        throw new Error("Cannot reach the Node backend. Start the API server and verify VITE_CONTACT_API_URL.");
    }

    const responseText = (await response.text()).trim();

    if (!response.ok) {
        if (!responseText && response.status >= 500) {
            throw new Error("Backend error: contact API is unavailable or misconfigured. Check your Node server and endpoint URL.");
        }

        throw new Error(responseText || "There was an error submitting the form. Please try again later.");
    }

    return responseText;
}
