const Usermodel = require("../../backend/models/Usersmodel");
const db = require("../../backend/db");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "10d",
  });
};

db();
const Signup = async (req, res) => {
  try {
    if (req.method !== "POST") throw new Error("Bad request");
    else {
      const { name, email, password } = req.body;
      var ciphertext = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_KEY
      ).toString();
      const User = await Usermodel.create({
        name: name,
        email: email,
        password: ciphertext,
      });
      if (User) {
        res
          .status(200)
          .send({ name: User.name, token: await generateToken(User._id) });
      } else throw new Error("invalid craditiionals");
    }
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
};
export default Signup;
