import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.controllers.js";
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




router.get("/findHotel/countByCity",  countByCity);
router.get("/findHotel/countByType",  countByType );





export default router;
