var cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.static("public/dist"));

app.get("/:zip", (req, res) => {
  let zip = req.params.zip;
  axios
    .get(
      `https://localcoviddata.com/covid19/v1/cases/newYorkTimes?zipCode=${zip}&daysInPast=1`
    )
    .then((data) => res.send(data.data))
    .catch(() => console.log("error"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
