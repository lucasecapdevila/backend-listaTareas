import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  nombreTarea: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 75
  }
})