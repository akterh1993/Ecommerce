
const userModel = require("../models/userModel");
const adminModel = require("../models/adminModel");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");
const bcrypt = require("bcrypt");
const jwtt = require("jsonwebtoken");
const { responseReturn } = require("../utils/response");
const { createToken } = require("../utils/tokenCreate");


class authController {
  admin_register = async (req, res) => {
    const { email, mobile, name, password } = req.body;
  try {
    const getUser = await adminModel.findOne({ email });
    if (getUser) {
      responseReturn(res, 404, { error: "User Already Exist" });
    } else {
      const admin = await adminModel.create({
        name,
        email,
        mobile,
        password,
      })
      const token = await createToken({id: admin.id, role: admin.role})
      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      })
  
      responseReturn(res, 200, { token, message: "Admin Register Success" })
    }
    
  } catch (error) {
    responseReturn(res, 500, { error: error.message})
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

  //User Login

  user_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email }).select("+password");
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = await createToken({
            id: user.id,
            role: user.role,
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
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  //User Register
  user_register = async (req, res) => {
    const { email, mobile, name, password } = req.body;
  try {
    const getUser = await userModel.findOne({ email, mobile });
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
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      })
  
      responseReturn(res, 200, { token, message: "Register Success" })
    }
    console.log('token')
  } catch (error) {
    responseReturn(res, 500, { error: 'Internal Server Error' })
  }
  };


  getUser = async(req,res)=>{
    const {id, role} = req;
    try {
      if(role === 'admin'){
        const user = await adminModel.findById(id)
        responseReturn(res, 200, { userInfo: user });
      }else {
        const seller = await userModel.findById(id)
        responseReturn(res, 200, { userInfo: seller });
      }
    } catch (error) {
      responseReturn(res, 500, { error: 'Internal Server Error' })
    }
  }
  };

module.exports = new authController();
