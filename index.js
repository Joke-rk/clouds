const express = require("express");
const bodyParser = require("body-parser");
const tf = require("@tensorflow/tfjs-node");

const app = express();
app.use(bodyParser.json());

// โหลดโมเดลที่ export จาก Teachable Machine
let model;
(async () => {
  model = await tf.loadLayersModel("file://model/model.json");
})();

app.post("/webhook", async (req, res) => {
  const query = req.body.queryResult.queryText; // ข้อความจากผู้ใช้

  // ตัวอย่าง: ใช้โมเดลประมวลผลภาพ หรือข้อความ
  // let prediction = await model.predict(...);

  const replyText = "ผลจากโมเดล: ...";

  res.json({
    fulfillmentText: replyText,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
