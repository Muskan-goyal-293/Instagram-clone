const userModel = require("../Model/registerModel");

const searchUser = async(req , res)=>{

    const {name} = req.query;

    try{

        // agar input empty ho
        if(!name){
            return res.status(200).json({
                success:true,
                data:[]
            })
        }

        // partial search
        const users = await userModel.find({

            username:{
                $regex:name,
                $options:"i"
            }

        })

        return res.status(200).json({
            success:true,
            data:users
        })

    }
    catch(err){

        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

module.exports = searchUser;