const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const PORT =  5000;

connection = "mongodb+srv://brennakj3:hothx@hothx.qhbffkc.mongodb.net/?retryWrites=true&w=majority"
mongoose
    .connect(
        connection,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Connected to DB'))
    .catch(console.error);

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
});