import express from 'express';
import path from 'path';
import router from './routes/index.js';
import { initDB } from './db/initdb.js';

const app = express();
const __dirname = import.meta.dirname;

await initDB();

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
