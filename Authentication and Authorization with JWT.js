const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');

// Register
async function register(req, res) {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.status(201).send('User registered');
}

// Login
async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
}

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.header('Authorization').split(' ')[1];
  if (token) {
    jwt.verify(token, 'your-secret-key', (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = { register, login, authenticateToken };

