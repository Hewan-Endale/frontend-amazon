const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// const stripeSec = process.clientPaymentSecretenv.STRIPE_KEY;

const app = express();
app.use(cors({ origion: true }));

// if (!stripeSec) {
//   console.error("Stripe key is missing");
//   throw new Error("Stripe key is missing");
// }

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });

    res.status(201).json({
      // paymentIntent
      clientPaymentSecret: paymentIntent.client_secret,
    });

    res.status(403).json({
      message: "Payment amount must be greater than zero (0).",
    });
  }
});

exports.api = onRequest(app);