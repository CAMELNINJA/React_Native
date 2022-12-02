import { observable } from 'mobx';
import Note from '../models/Note';

class NoteStore {
    @observable notes: Note[] = [];

    saveNote(note: Note) {
        const idx = this.notes.findIndex((n) => note.noteId === n.noteId);
        if (idx < 0) {
            this.notes.push(note);
        } else {
            this.notes[idx] = note;
        }
    }

    deleteNote(note: Note) {
        const idx = this.notes.findIndex((n) => n.noteId === note.noteId);
        if (idx < 0) {
            throw new Error(`Note ${note.noteId} not found`);
        } else {
            this.notes.splice(idx, 1);
        }
    }

    getNote(noteId: string): Note {
        const idx = this.notes.findIndex((n) => n.noteId === noteId);
        if (idx < 0) {
            throw new Error(`Note ${noteId} not found`);
        } else {
            return this.notes[idx];
        }
    }
}

const observableNoteStore = new NoteStore();

const newNote = (title: string, content: string) => {
    const note = {
        noteId: uuid.v4(),
        title: title,
        content: content,
        updatedAt: Date.now(),
        createdAt: Date.now()
    };
    observableNoteStore.saveNote(note);
}

newNote('First Note', 'some content');
newNote('2nd Note', 'some content');
newNote('3rd Note', 'some content');
newNote('4th Note', 'some content');

export default observableNoteStore;