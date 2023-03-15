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
            required: true
        }],
        toDate: {
            type: String,
            required: true
        },
        fromDate: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        participants: [{
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
