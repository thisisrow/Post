const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Create a schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    salary: Number,
    address: String,
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/api/users', async (req, res) => {
    const { name, dob, salary, address } = req.body;
    const user = new User({ name, dob, salary, address });
    await user.save();
    res.json(user);
});

app.get('/api/users', async (req, res) => {
    const users = await User.find({}, 'name dob salary');
    res.json(users);
});

app.get('/api/users', async (req, res) => {
    const users = await User.find({}, 'name dob salary address _id');
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
