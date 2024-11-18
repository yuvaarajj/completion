const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user1', 'user2'], required: true },
    guardians: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    locations: [
        {
            timestamp: { type: Date, default: Date.now },
            latitude: Number,
            longitude: Number
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
