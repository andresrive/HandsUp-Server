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
    avatar: {
      type: String,
    },
    plansMade: [{   //que ha hecho
      type: Schema.Types.ObjectId,
      ref: "Plan"
    }],
    packsMade: [{   //que ha hecho
      type: Schema.Types.ObjectId,
      ref: "Pack"
    }],
    isAdmin: {
      type: Boolean,
      default: false
    },
    isCompany: {
      type: Boolean,
      default: false
    },
    plansEnrolled: [{  //a los que esta apuntado
      type: Schema.Types.ObjectId,
      ref: "Plan"
    }],
    packsEnrolled: [{  //a los que esta apuntado
      type: Schema.Types.ObjectId,
      ref: "Pack"
    }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
