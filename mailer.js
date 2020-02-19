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
        html: 'Subject: ' + body.subject + ' <br />Message: ' + body.message + ' <br />mobileNo: ' + body.phone + ' <br />email address: ' + body.email + ' <br />name: ' + body.name,
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