import express from "express"
import { checkAdmin, checkUser } from '../utils/verifyTokens.js'
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/rooms.controllers.js";

const router = express.Router()

//CREATE
router.post("/:hotelId", checkAdmin, createRoom);

//UPDATE

router.put("/:id", checkAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId", checkAdmin, deleteRoom);

//GET
router.get("/:id", checkUser, getRoom);

//GET ALL

router.get("/", checkUser, getAllRooms);

export default router