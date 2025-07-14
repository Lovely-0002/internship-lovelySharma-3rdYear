const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      ssl: true
    });
    console.log('✅ Connected to database');
  } catch (err) {
    console.error('❌ Database connection error:', err.message);
  }
};

module.exports = connectDB;
