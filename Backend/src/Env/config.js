const dotenv = require("dotenv");
dotenv.config();

if(!process.env.MONGOOSE_URL){
    throw new error("MONGOOSE_URL is not define in environmental variable")
}


if(!process.env.JSON_TOKEN){
    throw new error("JSON_TOKEN is not define in environmental variable")
}

if(!process.env.IMAGEKIT_PRIVATE_URL){
    throw new error("IMAGEKIT_PRIVATE_URL is not define in environmental variable")
}

if(!process.env.IMAGEKIT_PUBLIC_URL){
    throw new error("IMAGEKIT_PUBLIC_URL is not define in environmental variable");
}


const config ={
    MONGOOSE_URL : process.env.MONGOOSE_URL,
    JSON_TOKEN : process.env.JSON_TOKEN,
    IMAGEKIT_PRIVATE_URL: process.env.IMAGEKIT_PRIVATE_URL,
    IMAGEKIT_PUBLIC_URL :process.env.IMAGEKIT_PUBLIC_URL
}

module.exports= config