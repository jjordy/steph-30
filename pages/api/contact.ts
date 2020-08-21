import nodemailer from "nodemailer";
import axios from "axios";
import pino from "pino";

const logger = pino();

export default async (req, res) => {
  const { name } = req.body;
  const transport = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const emailMsg = {
      from: "rsvp@steph30.com",
      to: "jordanrileyaddison@gmail.com, stephanie.mcauliffe90@gmail.com",
      subject: "New RSVP for Stephanies 30th birthday",
      text: `
        Name ${name}
      `,
    };
    logger.info(emailMsg);
    await transport.sendMail(emailMsg);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    logger.fatal({ message: err.message });
    res.status(500).end();
  }
};
