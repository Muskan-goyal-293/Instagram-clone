// imagekit package
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

// user model
const userModel = require("../Model/registerModel");

// imagekit config
const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_URL,
    publicKey: process.env.IMAGEKIT_PUBLIC_URL,
});


 const edit= async (req, res) => {

        // user id from token
        const { id } = req.user;

        try {

            // data from frontend
            const { bio, hobbies, isPrivate } = req.body;

            // object for update fields
            const data = {};

            // bio update
            if (bio) {
                data.bio = bio;
            }

            // hobbies update
            if (hobbies) {
                data.hobbies = hobbies;
            }

            // private account update
            if (isPrivate !== undefined) {
                data.isPrivate = isPrivate;
            }

            // if image exists
            if (req.file) {

                // upload image on imagekit
                const result = await imageKit.files.upload({
                    file: await toFile(
                        req.file.buffer,
                        req.file.originalname
                    ),

                    fileName: req.file.originalname,

                    folder: "Instagram_Post_folder",
                });

                // save image url in db
                data.profile_image = result.url;
            }

            // update user data
            const response = await userModel.findByIdAndUpdate(
                id,
                data,
            );

            // success response
            return res.status(200).json({
                success: true,
                message: "profile updated",
                response,
            });

        } catch (err) {

            // error response
            return res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    }


 module.exports = edit   