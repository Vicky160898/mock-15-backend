const express = require("express");
const app = express.Router();
const UserModel = require("../model/user");

app.get("/", async (req, res) => {
  const { category, difficulty, amount} = req.query;
  let perPage=1;
  let pages = Math.ceil(amount/perPage);
  let 
  try {
    if (category && difficulty) {
      let data = await UserModel.find({
        category: category,
        difficulty: difficulty,
      }).limit(amount);
      return res.send({ message: "success", data: data });
    } else if (difficulty) {
      let data = await UserModel.find({ difficulty: difficulty }).limit(amount);
      return res.send({ message: "success", data: data });
    } else if (category) {
      let data = await UserModel.find({ category: category }).limit(amount);
      return res.send({ message: "success", data: data });
    } else {
      let data = await UserModel.find().limit(amount);
      return res.send({ message: "success", data: data });
    }
  } catch (e) {
    res.send({ message: e.message });
  }
});

// app.post("/add", async (req, res) => {
//     const { category,difficulty,type,correct_answer,question} = req.body;

//     const data = await UserModel.findOne({ category });
//     try {
//       if (!data) {
//         const newData = new UserModel({
//             difficulty,
//             type,
//             correct_answer,
//             question,
//         });
//         await newData.save();
//         return res.status(200).send(newData);
//       } else {
//         return res.send("data already present");
//       }
//     } catch (err) {
//       return res.status(500).send(err.message);
//     }
//   });

module.exports = app;
