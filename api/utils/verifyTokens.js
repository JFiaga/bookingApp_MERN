import jwt from "jsonwebtoken";
import { errorMessage } from "./errorMessage.js";

export const checkToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorMessage(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorMessage(403, "Token is not valid"));
    req.user = user;
    next();
  });
};

export const checkUser = (req, res, next) => {
  checkToken(req, res,next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

      next()
    } else{
        return next(errorMessage(403, "you are not authorized !"))
    }
  });
};
export const checkAdmin = (req, res, next) => {
  checkToken(req, res,next, () => {
    if (req.user.isAdmin) {
      next()
    } else{
        return next(errorMessage(403, "you are not admin !"))
    }
  });
};

