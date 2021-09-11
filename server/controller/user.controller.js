import User from "../models/user.model";
import validateDates from "../helpers/dates";

const controller = {
  get_users: async (req, res) => {
    let users = await User.find();
    if (!users) {
      return res.status(404).send({
        message: "Not users found",
      });
    }
    await validateUsersStatus(users);
    users = await User.find();
    return res.status(200).json({
      message: "Success",
      users,
    });
  },
  create_user: async (req, res) => {
    const { months, name, email, phone, plan } = req.body;
    const user = new User({
      months,
      init_membership: "",
      end_membership: "",
      name,
      email,
      phone,
      plan,
    });

    const dateNow = new Date();
    user.init_membership = await user.getTimeStamp(dateNow);
    user.end_membership = await user.sumDays(dateNow);
    await user.save();

    return res.status(200).json({ message: "Saved", user });
  },
};

async function validateUsersStatus(users){
      //Validate status of user
      for (let user in users) {
        let endDate = users[user].end_membership;   
        const isValidate = validateDates.validateRange(endDate);  
        console.log(isValidate);
        if(!isValidate) {
            await User.updateOne({"_id" : users[user]._id}, {
            isActived: false
        })       
        }

        if(isValidate){
            await User.updateOne({"_id" : users[user]._id}, {
                isActived: true
            })               
        }
    }
}


export default controller;
