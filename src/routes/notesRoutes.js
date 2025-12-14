import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController.js';

const router = Router();
export default router;

router.get('/notes', getAllNotes);
router.post('/notes', createNote);

router.get('/notes/:noteId', getNoteById);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);
