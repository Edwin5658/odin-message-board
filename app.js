const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

const indexRoutes = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
