const config = require("../Env/config")
const reelModel = require("../Model/reelModel");
const ImageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs")
const imageKit = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_URL,
  publicKey: config.IMAGEKIT_PUBLIC_URL,
});


const reelFun =   async (req, res) => {

    // user id middleware (auth se aata hai)
    const { id } = req.user;

    // caption frontend se aata hai
    const { caption } = req.body;

    try {

      if (!req.file) {
    return res.status(404).json({
        success: false,
        message: "video must be required"
    });
}

// check file type
if (!req.file.mimetype.startsWith("video")) {

    return res.status(400).json({
        success: false,
        message: "only video files allowed"
    })
}

// check file size
if (req.file.size > 5 * 1024 * 1024) {
    return res.status(404).json({
        success: false,
        message: "video size must be less than 5 mb"
    });
}

      // ImageKit pe file upload kar rahe hain
      const result = await imageKit.files.upload({
        file: await toFile(req.file.buffer, req.file.originalname),
        fileName: req.file.originalname,
        folder: "Instagram_reels_folder",
      });

      // DB me reel save kar rahe hain
      const data = await reelModel.create({
        caption: caption,
        reel: result.url,   // ImageKit ka video URL
        user: id            // kis user ne upload kiya
      });

      // success response
      return res.status(201).json({
        success: true,
        message: "reel create",
        data: data
      });

    } catch (err) {

      // error handling
      return res.status(500).json({
        success: false,
        message: err.message
      });
    }
  }  ;


const fetchReel =  async(req,res)=>{

    try{
    const allReel = await reelModel.find().populate("user").sort({createdAt : -1})
    return res.status(200).json({
        success: true,
        "message" : "fetch all reel",
        data : allReel
    })
}catch(err){
    return res.status(500).json({
        success: false,
        "message" :err.message
    })
}
}


module.exports ={fetchReel,reelFun}