const Router = require("express").Router;
const db = require("../models");
const nodemailer = require("nodemailer");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

const htmlRoutes = new Router();

htmlRoutes.get("/", async (req, res) => {
  // const dbHorses = await db.Horses.findAll({});
  // const dbOwners = await db.Owners.findAll({});

  res.render("contactSuccess", {
    msg: "Welcome!"
    // horses: dbHorses
    // owners: dbOwners
  });
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

// Load example page and pass in an example by id
htmlRoutes.get("/example/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };

  const dbExample = await db.Example.findOne(options);

  res.render("example", {
    example: dbExample
  });
});

htmlRoutes.get("/formData", async (req, res) => {
  res.render("dataform");
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
