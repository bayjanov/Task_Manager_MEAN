 // This file will handle connection logic to the MongoDB database

 const mongoose = require('mongoose');

 mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
 mongoose.connect('mongodb://localhost:27017/TaskManager').then(() => {
    console.log('Connected to MongoDB successfully');
}).catch((e) => {
    console.log('Error while attempting to connect to MongoDB');
    console.log(e);
});



// To prevent deprecation warnings (from MongoDB native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};