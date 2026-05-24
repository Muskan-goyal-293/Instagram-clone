// User model import
const userModel = require("../Model/registerModel");

// Post model import
const postModel = require("../Model/postModel");

// Home controller function
const home = async (req, res) => {

    // Logged in user ka id req.user se nikal rahe hain
    const { id } = req.user;

    try {

        // Sare posts fetch kar rahe hain
        // populate("user") => user ki details bhi la raha hai
        // sort({createdAt : -1}) => latest post pehle aayegi
        const data = await postModel
            .find()
            .populate("user")
            .sort({ createdAt: -1 });

        // Success response
        return res.status(200).json({
            success: true,
            message: "all post fetch",
            data: data
        });

    } catch (err) {

        // Agar error aaye to error response
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Controller export
module.exports = home;