const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
// destructuring

const userSchema = new Schema({
  googleId: String
});

// 2 arguments means create a model using the Schema arg
mongoose.model("users", userSchema);
