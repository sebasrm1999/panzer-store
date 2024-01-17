const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();

const stripe = new Stripe(
  "sk_test_51MoapSL2P1pxxie7scPFBFzllszZiMU0c3Lrsv29ivjTfhng4dab2qMw41vkh8WrG7UbsgAKVgUjJExXg5PqYk2n00GKMfil94"
);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.send({ message: "Succesfull payment" });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});
