const mongoose = require('mongoose')

//Limited Scalability
const userSchema = new mongoose.Schema({
    
 username: { type: String,
     unique: true, 
     required: true },
    
 phone: { type: String,
     unique: true, 
     required: true },

 password: { type: String, 
    required: true },

 email: { type: String, 
    unique: true, 
    required: true },
role: { type: String, enum: ['user', 'admin'], default:'user'},

profile: {
    firstName: { type: String },
    lastName: { type: String },
    avatar: { type: String }, 
    bio: { type: String },
    Gender: {type: String},
    address: {
        street: String,
      city: String,
      zip: String
    }

},

createdAt: { type: Date, default: Date.now()},
updatedAt: { type: Date, default: Date.now()},
})

// userId: { type: Schema.Types.ObjectId, ref: 'User' }, 
// profileId: { type: Schema.Types.ObjectId, ref: 'Profile' }

const User = mongoose.model('POSUser', userSchema);

module.exports = User;