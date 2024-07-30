const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const z = require("zod");
const { User } = require("../Database/db");
const { JWT_Secret } = require("../config");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("hii users");
  res.send("welcome to home page");
});

const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

router.post("/signup", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }

  const existingUser = await User.findOne({
    email: req.body.email,
  });

  if (existingUser) {
    return res.status(400).json({ message: "Email already taken" });
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 12);

  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_Secret
  );

  return res.json({
    message: "User created successfully",
    token,
  });

});

const signinBody = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

router.post("/signin", async (req, res) => {
  try {
    const { success } = signinBody.safeParse(req.body);

    if (!success) {
      return res.status(400).json({ message: "Incorrect Inputs" });
    }

    const existingUser = await User.findOne({
      email: req.body.email,
    });

    if (!existingUser) {
      return res.status(400).json({ message: "Email not found" });
    }

    const result = bcrypt.compareSync(req.body.password, existingUser.password);

    if (!result) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
        {
          userId : existingUser._id
        },
        JWT_Secret
      );
    
      return res.json({
        message: "User created successfully",
        token,
      });

  } catch (err) {
    return res.status(500).json({ message: "Error while logging in..." });
  }
});

module.exports = router;
