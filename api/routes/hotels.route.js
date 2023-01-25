import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/index.js";
import { checkAdmin, checkUser } from "../utils/verifyTokens.js";
const router = express.Router();

//CREATE
router.post("/", checkAdmin, createHotel);

//UPDATE

router.put("/:id", checkAdmin, updateHotel);

//DELETE
router.delete("/:id", checkAdmin, deleteHotel);

//GET
router.get("/:id", checkUser, getHotel);

//GET ALL

router.get("/", checkUser, getAllHotels);

export default router;
