const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "field must be require"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "field must be require"],
      minlength: 6,
      select: false,
    },
    month: {
      type: String,
      required: [true, "field must be require"],
    },
    day: {
      type: Number,
      required: [true, "field must be require"],
    },
    year: {
      type: Number,
      required: [true, "field  must be require"],
    },
    userName: {
      type: String,
      unique: true,
      required: [true, "field must be require"],
      minlength: 2,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "field must be required"],
      minlength: 2,
      trim: true,
    },
    profileImage: {
      type: String,
      default:
        "https://ik.imagekit.io/1ris6t5in/3D%20Simple%20User%20Icon%20Isolated_%20Render%20Profile%20Photo%20Symbol%20UI.%20Avatar%20Sign.%20Person%20or%20People%20GUI%20Element.%20Realistic%20Vector%20Illustration?updatedAt=1778138659213",
    },
    bio: {
      type: String,
      default: "",
      trim: true,
    },
    hobbies:{
        type: String,
        default:"",
        trim: true,
      },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
