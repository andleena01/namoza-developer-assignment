const form = document.getElementById("leadForm");
const successMessage = document.getElementById("successMessage");

window.dataLayer = window.dataLayer || [];

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = {
        fullName: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        company: document.getElementById("company").value.trim(),
        service: document.getElementById("service").value,
        message: document.getElementById("message").value.trim()
    };

    window.dataLayer.push({
        event: "lead_form_submit",
        ...formData
    });

    console.log("Lead submitted:", formData);

    form.reset();

    successMessage.style.display = "block";
});
