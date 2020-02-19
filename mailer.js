const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('');

let contactUsEmail = (body) => {
    const msg = {
        to: 'info@cajaindhingra.com',
        from: {
            email: "info@cajaindhingra.com",
            name: "cajaindhingra"
        },
        subject: body.subject,
        text: body.message,
        html: 'Subject: ' + body.subject + ' Message: ' + body.message + ' mobileNo: ' + body.phone + ' email address: ' + body.email + ' name: ' + body.name,
    };
    try {
        sgMail.send(msg);
    } catch (e) {
        console.log('error...', e);
    }
}
module.exports = {
    contactUsEmail
}