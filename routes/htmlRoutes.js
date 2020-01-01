const Router = require("express").Router;
const db = require("../models");
const nodemailer = require("nodemailer");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

const htmlRoutes = new Router();

// HOME PAGE
htmlRoutes.get("/", async (req, res) => {
  res.render("index");
});

// POST route from the Contact Us form (currently sends to JLGaumnitz's gmail address)
htmlRoutes.post("/contact", (req, res) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  // Specify what the email will look like
  const mailOpts = {
    from: "Hidden Timber Farm Contact Form", // This is ignored by Gmail
    to: GMAIL_USER,
    subject: "New message from Hidden Timber Farm Contact Form",
    text: `${req.body.name} (${req.body.email}) at phone number: ${req.body.phone} sent this message: ${req.body.message}`
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render("contactFailure"); // Shows a page indicating failure
    } else {
      res.render("contactSuccess"); // Show a page indicating success
    }
  });
});

// CONTACT US
htmlRoutes.get("/contact", async (req, res) => {
  res.render("contactUs");
});

// HORSE
htmlRoutes.get("/horse", async (req, res) => {
  const dbHorses = await db.Horses.findAll({});

  res.render("horse", {
    horses: dbHorses
  });
});

// OWNER
htmlRoutes.get("/owner", async (req, res) => {
  const dbOwners = await db.Owners.findAll({});

  res.render("owner", {
    owners: dbOwners
  });
});

// LANDING PAGE
htmlRoutes.get("/ownerlogin", async (req, res) => {
  res.render("horseOwnerLoginLanding");
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
