// User model import
const userModel = require("../Model/registerModel");
// Post model import

const postModel = require("../Model/postModel");
// ================= PROFILE CONTROLLER =================

const profile = async (req, res) => {
  // Logged in user ka id req.user se le rahe hain

  const { id } = req.user;

  try {
    // Database se user ki details fetch kar rahe hain

    const user = await userModel.findById(id);
    // Success response

    res.status(200).json({
      success: true,
      message: "user fetch successfully",
      data: user,
    });
  } catch (err) {
    // Error response

    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// ================= POST CONTROLLER =================

const post = async (req, res) => {
  // Logged in user ka id nikal rahe hain

  const { id } = req.user;
  try {
    // Sirf us user ki posts fetch kar rahe hain
    // jiska id login user ke equal hai

    const posts = await postModel.find({
      user: id,
    });
    // Success response

    res.status(200).json({
      success: true,
      message: "post fetch successfully",
      data: posts,
    });
  } catch (err) {
    // err response

    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { post, profile };
