import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import passport from 'passport';
import session from 'express-session';
import flash from 'express-flash';
import methodOverride from 'method-override';

import { initialize } from './passport-config.js';

dotenv.config();

const app = express();
const PORT = 5000
const users = [];

// ✅ Passport config
initialize(
  passport,
  email => users.find(user => user.email === email),
  users
);

// ✅ Middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// ✅ Routes

app.get('/', (req, res) => {
  res.render('index', { name: req.user?.name || 'Guest' });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    res.redirect('/login');
  } catch (e) {
    console.error(e);
    res.redirect('/register');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
