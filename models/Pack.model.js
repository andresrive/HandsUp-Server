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
        toDate: {
            type: String,
            required: true
        },
        fromDate: {
            type: String,
            required: true
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
        participants: [{
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
