
import { model } from "mongoose";
import { Schema } from 'mongoose';

const noteSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      required: false,
      trim: true,
    },
    tag: {
      type: String,
      default: 'Todo',
      required: false,
      enum: [
        'Todo',
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
      ],
    },
  },
  {
    timestamps: true,
    collection: 'notes'
  },
);


export const Note = model("note", noteSchema);
