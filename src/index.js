import { renderNotes } from './element.js';
import { createNote } from './data/api.js';
import './styles/style.css';
import './component/header.js';
import './component/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNotes();

    const addNoteForm = document.getElementById('add-note-form');
    addNoteForm.addEventListener('submit', async event => {
        event.preventDefault();
        const noteTitle = document.getElementById('note-title').value;
        const noteBody = document.getElementById('note-body').value;

        try {
            await createNote(noteTitle, noteBody); // Panggil createNote di sini
            renderNotes();
            addNoteForm.reset();
        } catch (error) {
            console.error('Error adding note:', error);
        }
    });
});

