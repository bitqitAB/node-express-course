const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const register = async (req, res) => {
  const email = req?.body;
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists)
    throw new CustomError.BadRequestError(`Email already exists`);

  let userData = req.body;
  let user = new User();
  user = Object.assign(user, userData);

  const createUser = await User.create(user);
  res.status(StatusCodes.CREATED).json({ createUser });
};

const login = async (req, res) => {
  res.send("login user");
};

const logOut = async (req, res) => {
  res.send("logout user");
};

module.exports = {
  register,
  login,
  logOut,
};
