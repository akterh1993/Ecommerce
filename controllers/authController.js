const adminModel = require("../models/adminModel").default;
const userModel = require("../models/userModel");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");
const bcrypt = require("bcrypt");
const jwtt = require("jsonwebtoken");
const { responseReturn } = require("../utils/response");
const { createToken } = require("../utils/tokenCreate");
class authController {

  admin_register = async (req, res) => {
    const email = req.body.email;
    try {
      const admin = await adminModel.findOne({ email: email });
      if (!admin) {
        const newAdmin = await adminModel.create(req.body);
        responseReturn(res, 200, { message: "Admin Created Successfull",
        });
        res.json(newAdmin);
      } else {
        responseReturn(res, 404, { error: "Admin Already Exist" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "Login Success" });
        } else {
          responseReturn(res, 404, { error: "Password Wrong" });
        }
      } else {
        responseReturn(res, 404, { error: "Email Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  //User Register
  user_register = async (req, res) => {
    const { email, mobile, name, password } = req.body;
  try {
    const getUser = await userModel.findOne({ email });
    if (getUser) {
      responseReturn(res, 404, { error: "User Already Exist" });
    } else {
      const user = await userModel.create({
        name,
        email,
        mobile,
        password,
        method: 'manually',
        shopInfo: {}
      })
      await sellerCustomerModel.create({
        myId: user.id,
      })
      const token = await createToken({id: user.id, role: user.role})
      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      })
      responseReturn(res, 200, { token, message: "Register Success" });
    }
  } catch (error) {
    responseReturn(res, 500, { error: 'Internal Server Error' });
  }
  };


  getUser = async(req,res)=>{
    const {id, role} = req;
    try {
      if(role === 'admin'){
        const user = await adminModel.findById(id)
        responseReturn(res, 200, { userInfo: user });
      }else {
        console.log('seller info')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  };

module.exports = new authController();
