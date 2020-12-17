const express = require ('express')
const router = require ('./routes/index.js')
const app = express ()
const port = process.env.PORT || 4000;

const session = require('express-session')

app.use(session({
  secret: 'ikan',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

app.set ('view engine', 'ejs')
app.use (express.urlencoded ({extended: false}))
app.use ('/', router)
app.listen (port, () => {
  console.log("app listening at " + `http://localhost:${port}`)
}) 