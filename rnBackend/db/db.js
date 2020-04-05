const mongoose = require('mongoose');

const mongoDbUrl = "mongodb+srv://react1:admin@react1-4snfw.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {mongoose};



// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));