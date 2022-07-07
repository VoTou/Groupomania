import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const authMiddleWare = async (req, res, next) => {
 try { console.log(req.headers.authorization);
    console.log("text");
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    const userId = decodedToken.userId;
    req.auth = { userId };  
    if (req.auth.userId && req.auth.userId !== userId) {
      throw 'Invalid user ID';
    } 
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleWare;