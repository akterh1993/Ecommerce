const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },

  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
  },
  mobile: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password should be greater than 8 characters"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  image: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "seller",
  },
  status: {
    type: String,
    default: "pending",
  },
  payment: {
    type: String,
    default: "inactive",
  },
  method: {
    type: String,
    required: true,
    
  },
  shopInfo: {
    type: Object,
    default: {},
    
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// comapre password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


//Export the model
module.exports = mongoose.model("users", userSchema);
