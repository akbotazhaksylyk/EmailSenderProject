async function sendEmail() {
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Example of how you might send data to your backend
    // Adapt this code to match your backend implementation
    const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipient, subject, message }),
    });

    if (response.ok) {
        alert('Email sent successfully!');
    } else {
        alert('Failed to send email.');
    }
}
