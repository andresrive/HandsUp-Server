const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    username: {
      type: String,
      required: [true, "Name is required."],
      unique: true,
      trim: true
    },
<<<<<<< HEAD
    avatar: {
      type: String,
      required: true
    },
    plansMade: [{   //que ha hecho
      type: Schema.Types.ObjectId,
      ref: "Plan"
    }],
    packsMade: [{   //que ha hecho
      type: Schema.Types.ObjectId,
      ref: "Pack"
=======
    posts: [{
      type: Schema.Types.ObjectId,
      ref: "Post"
>>>>>>> aeb7e7c4e4cf62e5b11c164e80a404dd3aa0aa9e
    }],
    isAdmin: {
      type: Boolean,
      default: false
    },
    isCompany: {
      type: Boolean,
      default: false
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
