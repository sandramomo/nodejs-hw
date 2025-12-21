
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'notes',
  },
);
noteSchema.index(
  {
    title: 'text',
    content: 'text',
  },
  {
    name: 'NoteTextIndex',
    weights: { title: 10, content: 1 },
    default_language: 'english',
  },
);

export const Note = model("Note", noteSchema);
