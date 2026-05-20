//  require function
const jwt = require("jsonwebtoken");
const userModel = require("../Model/registerModel");
const bcrypt = require("bcrypt");

//  register function

const register = async (req, res) => {
  // destructure data from request body
  const { email, password, month, day, year, userName, lastName } = req.body;

  try {
    // check if user already exists with same email or username
    const isUserExits = await userModel.findOne({
      $or: [{ email }, { userName }],
    });

    // if user already exists
    if (isUserExits) {
      return res.status(409).json({
        success: false,
        message: "user already exists",
      });
    }

    // check password field
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    // convert normal password into hashed password
    const hashPassword = await bcrypt.hash(password, 10);

    // create new user in database
    const data = await userModel.create({
      email,
      password: hashPassword,
      month,
      day,
      year,
      userName,
      lastName,
    });

    // generate jwt token
    const jwt_token = jwt.sign(
      {
        id: data._id,
        userName: data.userName,
      },
      process.env.JSON_TOKEN,
      { expiresIn: "48h" },
    );

    // send token in cookie
    res.cookie("jwt_token", jwt_token);

    // remove sensitive data from response
    const safeResponse = {
      id: data._id,
      email: data.email,
      month: data.month,
      day: data.day,
      year: data.year,
      userName: data.userName,
      lastName: data.lastName,
    };

    // send success response
    return res.status(201).json({
      success: true,
      message: "register successfully",
      safeResponse,
    });
  } catch (err) {
    // handle server error
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//  login function

const login = async (req, res) => {
  // destructure data from request body
  const { userName, email, password } = req.body;

  try {
    // find user by email or username
    const findUserExist = await userModel
      .findOne({
        $or: [{ email }, { userName }],
      })
      .select("+password");

    // if user not found
    if (!findUserExist) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // compare entered password with hashed password
    const comparePassword = await bcrypt.compare(
      password,
      findUserExist.password,
    );

    // if password does not match
    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credential",
      });
    }

    // if any field is empty
    if ((!email && !userName) || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // generate jwt token
    const jwt_token = jwt.sign(
      {
        id: findUserExist._id,
        userName: findUserExist.userName,
      },
      process.env.JSON_TOKEN,
      {
        expiresIn: "48h",
      },
    );

    // send token in cookie
    res.cookie("jwt_token", jwt_token);

    // remove sensitive data from response
    const safeResponse = {
      id: findUserExist._id,
      userName: findUserExist.userName,
      email: findUserExist.email,
    };

    // send success response
    return res.status(200).json({
      success: true,
      message: "Successful login",
      safeResponse,
    });
  } catch (err) {
    // handle server error
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { register, login };
