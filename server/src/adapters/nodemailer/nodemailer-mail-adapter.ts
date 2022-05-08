import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "16a4c4b34d60cd",
      pass: "4fc0ca9f13ecd6"
    }
});
  
export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Lucas Apolinario <lucas.apolinario97@outlook.com',
            subject,
            html: body,
        });
    };
}