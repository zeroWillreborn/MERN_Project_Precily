import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
	text: { type: String, required: true, trim: true },
	upApi: { type: Number, trim: true },
	adApi: { type: Number, trim: true },
});

// Model
const UserModel = mongoose.model("data", userSchema);

export default UserModel;
