require('dotenv').config();

const config = {
  port: process.env.PORT || 3200,
  secret: process.env.SECRET_KEY,
  mongodbUri:
  process.env.MONGODB_URI || `mongodb://localhost:27017/mernSimpleSetup`  
};

module.exports =  config;
