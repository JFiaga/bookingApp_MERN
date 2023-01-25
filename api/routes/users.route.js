import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/index.js";
import { errorMessage } from "../utils/errorMessage.js";
import { checkAdmin, checkToken, checkUser } from "../utils/verifyTokens.js";
const router = express.Router();


// router.get("/checkauthentication", checkToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", checkUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can modify");
// });
// router.get("/checkadmin/:id", checkAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can modify all account");
// });

//UPDATE

router.put("/:id", checkUser, updateUser);

//DELETE
router.delete("/:id", checkAdmin, deleteUser);

//GET
router.get("/:id", checkUser, getUser);

//GET ALL

router.get("/", checkAdmin, getAllUsers);

export default router;
