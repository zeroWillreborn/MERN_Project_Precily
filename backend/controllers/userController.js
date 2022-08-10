import UserModel from "../models/User.js";

class UserController {
	//function to add data into db
	static addData = async (req, res) => {
		try {
			const { modalText } = req.body;
			let _id = "62f21b765a3d6e9371afac5e";
			let doc = await UserModel.findOne({ _id });
			let i = doc.adApi;
			let d = await UserModel.findByIdAndUpdate(
				{ _id },
				{ $set: { text: modalText, adApi: Number(i) + 1 } },
				{ new: true }
			);
			res.status(200).json({ data: d });
		} catch (error) {
			console.log(error);
		}
	};

	//function to get data from db
	static getData = async (req, res) => {
		try {
			let _id = "62f21b765a3d6e9371afac5e";
			let doc = await UserModel.findOne({ _id });
			res.status(200).json({ data: doc });
		} catch (error) {
			console.log(error);
		}
	};

	//function to update data 
	static updateData = async (req, res) => {
		try {
			const { newText } = req.body;
			let _id = "62f21b765a3d6e9371afac5e";
			let doc = await UserModel.findById({ _id });
			let i = doc.upApi;
			let previousText = doc.text;
			let combinedText = previousText + " " + newText;
			let d = await UserModel.findByIdAndUpdate(
				{ _id },
				{ $set: { text: combinedText, upApi: Number(i) + 1 } },
				{ new: true }
			);
			res.status(200).json({ data: d });
		} catch (error) {
			console.log(error);
			res.send({ status: "failed", message: "Unable to Update" });
		}
	};
}

export default UserController;
