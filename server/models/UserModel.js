const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    organizationName: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    qualification: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    pinCode: {
        type: Number,
    },
    state: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jobs',
        default: []
    }]
},
    {
        timestamps: true,
    }
)

// Discard password and createAt field before sending model data to client..
userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    delete obj.createdAt;
    return obj;
}

module.exports = mongoose.model('User', userSchema)
