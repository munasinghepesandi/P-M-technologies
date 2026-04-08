export async function sendContactForm(formData) {
    const response = await fetch("/contactProcess.php", {
        method: "POST",
        body: formData,
    });

    const responseText = (await response.text()).trim();

    if (!response.ok) {
        throw new Error(responseText || "There was an error submitting the form. Please try again later.");
    }

    return responseText;
}