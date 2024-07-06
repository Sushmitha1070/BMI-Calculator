const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const bmi = weight / (height * height);
    console.log(bmi);
    res.send("Your BMI is: " + bmi);
});

const PORT = 3001; // Change to a different available port
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
