const mongoose = require('mongoose');

module.exports = async () => {

    try {
        await mongoose.connect(
            'mongodb+srv://nirzarbhatt16036:nb03102000@cluster0.lhhaw3w.mongodb.net/?retryWrites=true&w=majority'
        )
    }
    catch (err) {
        console.log(err.message);
    };

}