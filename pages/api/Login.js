const Usermodel = require("../../backend/models/Usersmodel");
const db = require("../../backend/db");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "10d",
  });
};

db();
const Login = async (req, res) => {
  try {
    if (req.method !== "POST") throw new Error("Bad request");
    else {
      const { email, password } = req.body;
      const User = await Usermodel.findOne({
        email: email,
      });
      var bytes = CryptoJS.AES.decrypt(User.password,process.env.SECRET_KEY);
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (originalText == password) {
        res
          .status(200)
          .send({ name: User.name, token:await  generateToken(User._id) });
      } else throw new Error("invalid craditiionals");
    }
  } catch (e) {
    console.log(e.message)
    res.status(400).send({ message: e.message });
  }
};
export default Login;
