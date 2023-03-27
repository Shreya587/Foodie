const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/'
const mongoDB = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food-item");
            fetched_data.find({}).toArray( function( err, data){
                if(err) console.log(err);
                else console.log();
            })
        }
    });
}

module.exports = mongoDB;
