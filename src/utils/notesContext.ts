import React from 'react';
import { Note } from '@typings/notes';

type NotesContextState = {
  notes: Note[];
  isNotesLoading: boolean;
  actions: {
    addNote: (note: Note) => void;
    removeNote: (id: string) => void;
    updateNote: (note: Note) => void;
    refreshState: () => void;
  };
};

const NotesContext = React.createContext<NotesContextState>({
  notes: [],
  isNotesLoading: false,
  actions: {
    addNote: () => {},
    removeNote: () => {},
    updateNote: () => {},
    refreshState: () => {},
  },
});

export default NotesContext;
