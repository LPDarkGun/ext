import { model, models } from "mongoose";
import mongoose from 'mongoose';

const userDocSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true,
  },
  password: { 
    type: String, 
    required: true,
  }, 
  name: { 
    type: String, 
    required: true,
  }, 
},{timestamps: true});


const userDoc = models.User || model("User", userDocSchema);
export default userDoc;
