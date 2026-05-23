const profile = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await userModel.findById(id);
    res.status(200).json({
      success: true,
      message: "user fetch successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const post = async (req, res) => {
  const { id } = req.user;
  try {
    const posts = await postModel.find({
      user: id,
    });

    res.status(200).json({
      success: true,
      message: "post fetch successfully",
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { post, profile };
