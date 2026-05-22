// require module
const express = require("express");
const editRout = express.Router();
const verifyUser = require("../Middleware/auth.middleware");
const multer = require("multer");
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, 
    },
});
const edit = require("../Controllers/edit.controller")

// edit profile route
// api =>http://localhost:3000/api/
editRout.post("/edit",verifyUser,upload.single("profile_image"),edit);

module.exports = editRout;