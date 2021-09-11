const config = {
  port: process.env.PORT || 3200,
  secret: "",
  mongodbUri:
    process.env.MONGODB_URI || `mongodb://localhost:27017/mernSimpleSetup`,
};

export default config;
