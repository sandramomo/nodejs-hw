
import { model } from "mongoose";
import { Schema } from 'mongoose';
import { TAGS } from "../constants/tags.js";


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
      enum: TAGS,
    },
  },
  {
    timestamps: true,
    collection: 'notes'
  },
);
noteSchema.index(
  { name: 'text' },
  {
    name: 'NoteTextIndex',
    weights: { title: 10 },
    default_language: 'english',
  },
);

export const Note = model("note", noteSchema);
