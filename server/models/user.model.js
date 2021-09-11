import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  plan: String,
  isActived: {
    type: Boolean,
    default: true,
  },
  init_membership: String,
  end_membership: String,
  months: Number,
});

//TimeStamp ex= 10-9-2021
userSchema.methods.getTimeStamp = function (date) {
  this.timeStamp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return this.timeStamp;
};

//Sum days to a date
userSchema.methods.sumDays = function (date) {
  date.setDate(date.getDate() + this.months * 30);
  return this.getTimeStamp(date);
};

export default model("User", userSchema);
