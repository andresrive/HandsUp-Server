const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const planSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: [{
            type: String,
            // required: true
        }],
        date: {
            type: Date,
            default: Date.now,
            // required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        userList: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

module.exports = model("Plan", planSchema);
