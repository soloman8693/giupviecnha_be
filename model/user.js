const mongoose = require('mongoose');
const userSchema =new mongoose.Schema({
    _id: mongoose.schema.Types.ObjectId,
    name:{
        type: String,
        require: true,
    }
});

export default mongoose.model('Users',userSchema);
