import express from 'express';
import indexController from "../controllers/indexController.js";

const router = express.Router();

router.get('/', indexController.getMsg);
router.post("/new", indexController.postMsg);

export default router;  