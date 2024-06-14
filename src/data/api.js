const fetchNotes = async () => {
    try {
        const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
        if (!response.ok) {
            throw new Error('Failed to fetch notes');
        }
        const responseData = await response.json();
        // Menangani kasus jika respons bukanlah sebuah array
        if (Array.isArray(responseData.data)) {
            return responseData.data;
        } else {
            console.error('Data received from API is not an array:', responseData);
            return [];
        }
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};

const createNote = async (title, body) => {
    try {
        const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        });
        if (!response.ok) {
            throw new Error('Failed to create note');
        }
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
};

const deleteNote = async (noteId) => {
    try {
        const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete note');
        }
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
};

export { fetchNotes, deleteNote, createNote };
