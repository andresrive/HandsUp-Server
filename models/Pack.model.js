const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const packSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required."],
        },
        description: {
            type: String,
            required: [true, "Title is required."]
        },
        images: [{
            type: String,
            required: true
        }],
        // date: {
        //     type: Date,
        //     default: Date.now,
        //     required: true
        // },
        toDate: {
            type: Date,
            // required: true
        },
        fromDate: {
            type: Date,
            // required: true
        },
        itinerary: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        userList: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

module.exports = model("Pack", packSchema);
