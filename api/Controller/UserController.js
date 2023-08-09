const mongoose = require('mongoose');
const userModule = require('../modules/user.module');
 const User=userModule
//  const smsLibrary = require('infobip-rtc');

 const generateVerificationCode = () => {
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  return verificationCode.toString().slice(0, 6);
};

const getAllUsersID = async () => {
  const users = await User.find({});
  const usersPhone = users.map((user) => user.phone);
  return usersPhone;
};

const IsUserExist = async (phone) => {
  const usersPhone = await getAllUsersID();
  return usersPhone.includes(phone);
};

// إنشاء رمز التحقق
// const verificationCode = generateVerificationCode();

// إرسال رمز التحقق إلى رقم الهاتف باستخدام المكتبة المناسبة
// smsLibrary.sendSMS(phone, `رمز التحقق الخاص بك هو: ${verificationCode}`);



//app.post("/creatNewUser", 
const creatNewUser = async (req, res) => {
  const canCreate = !(await IsUserExist(req.body.phone));
  console.log(canCreate);
  if (canCreate) {
    userModule.create({
      phone: req.body.phone,
      name: req.body.name,
    })
      .then((response) => {
        res.status(200).json({
          message: "done",
          ...req.body
        });
      })
      .catch((e) => {
        res.status(500).json({ message: e.message });
        console.log(e.message);
      });
  } else {
    res.status(500).json({ message: "User already exists" });
  }
};




const deleteUserByPhone = async (req, res) => {
  let phone = req.body.phone;
  console.log(req.body.phone);
  const result = await User.deleteOne({ phone: phone });

  if (result.deletedCount === 1) {
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = { creatNewUser, deleteUserByPhone };
