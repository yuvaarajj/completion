const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Update Location
router.post('/update', async (req, res) => {
    try {
        const { userId, latitude, longitude } = req.body;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.locations.push({ latitude, longitude });
        await user.save();
        res.status(200).json({ message: 'Location updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
