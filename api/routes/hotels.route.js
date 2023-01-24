import express from "express";
import Hotel from "../models/hotels.model.js";
import { errorMessage } from "../utils/errorMessage.js";
const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findOneAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
router.delete('/:id', async (req,res)=> {
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json(deleteHotel)
    } 
    catch (error) {
    res.status(500).json(error)
  }
})

//GET
router.get('/:id', async (req,res,next)=> {
  // const failed = true
  //   if(failed) return next(errorMessage('401', 'Not authenticated'))
    try {
        const getHotel = await Hotel.findById(
            req.params.id
        )
        res.status(200).send('hotelList')
    }
    catch (error) {
    next(error)
    }
})

//GET ALL

router.get('/', async (req,res,next)=> {

    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }
    catch (error) {
    res.status(500).json(error)
    }
})

export default router;
