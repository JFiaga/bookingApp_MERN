import express from "express";
import Hotel from "../models/hotels.model.js";
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

export default router;
