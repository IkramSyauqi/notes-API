import { fetchNotes, deleteNote } from './data/api.js';

const renderNotes = async () => {
    const main = document.getElementById('main');
    main.innerHTML = '<div class="loading">Loading...</div>'; // Menampilkan indikator loading

    try {
        const notes = await fetchNotes();
        main.innerHTML = ''; // Menghapus indikator loading setelah permintaan HTTP selesai

        if (notes.length === 0) {
            main.innerHTML = '<div>No notes available</div>';
        } else {
            notes.forEach(note => {
                const noteElement = document.createElement('div');
                noteElement.classList.add('note');
                noteElement.innerHTML = `
                    <h3>${note.title}</h3>
                    <p>${note.body}</p>
                    <button class="delete-btn" data-id="${note.id}">Delete</button>
                `;
                main.appendChild(noteElement);
            });
        }
    } catch (error) {
        console.error('Error fetching notes:', error);
        main.innerHTML = '<div>Error fetching notes</div>';
    }
    
    main.addEventListener('click', async event => {
        if (event.target.classList.contains('delete-btn')) {
            const noteId = event.target.dataset.id;
            try {
                await deleteNote(noteId);
                renderNotes();
            } catch (error) {
                console.error('Error deleting note:', error);
            }
        }
    });
};

export { renderNotes };
