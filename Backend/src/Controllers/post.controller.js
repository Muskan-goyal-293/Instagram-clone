const postModel = require("../Model/postModel");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const config = require("../Env/config")

const imageKit = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_URL,
  publicKey: config.IMAGEKIT_PUBLIC_URL,
});

const createPost = async (req, res) => {
 const {id} = req.user

  try {
    // check image
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "image must be required",
      });
    }
      
if(req.file.size > 2 * 1024 * 1024){
  return res.status(400).json({
    success:false,
    message:"Image must be less than 2MB"
  })
}
    // caption frontend se li
    const { caption } = req.body;
    // image imagekit pe upload ki
    const result = await imageKit.files.upload({
      file: await toFile(req.file.buffer, req.file.originalname),
      fileName: req.file.originalname,
      folder: "Instagram_Post_folder",
    });

    // database me post create ki
    const response = await postModel.create({
      caption: caption,
      image: result.url,
      user : id
    });

    // success response
    return res.status(201).json({
      success: true,
      message: "Post created successfully",
    });
  } catch (err) {
    // server error
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { createPost };
