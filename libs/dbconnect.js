const mongoose = require("mongoose");


/// Thông tin Database Collection / Tables
const userName = "dbphathoang";
const userPassword = "0909246357a";

const dbName = "ATN_ShopToy";

const url = "mongodb+srv://" + userName + ":" + userPassword + "@cluster0.r21sv.mongodb.net/" + dbName + "?retryWrites=true&w=majority";

function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}