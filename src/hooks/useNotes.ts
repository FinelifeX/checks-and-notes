import { AsyncStorageKeys } from '@constants/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Note } from '@typings/notes';
import { useCallback, useEffect, useReducer, useState } from 'react';

const toJson = (data: any) => JSON.stringify(data);
const fromJson = (string: string) => JSON.parse(string);
const writeToStorage = (data: Note[]) =>
  AsyncStorage.setItem(AsyncStorageKeys.Notes, toJson(data));

type NotesReducerAction = {
  type: 'add' | 'remove' | 'update' | 'set';
  data: Note | Note[] | string;
};

const notesReducer = (state: Note[], action: NotesReducerAction) => {
  switch (action.type) {
    case 'add':
      return [...state, action.data as Note];
    case 'remove':
      return state.filter((stateItem) => stateItem.id !== action.data);
    case 'update': {
      const idx = state.findIndex(
        (item) => item.id === (action.data as Note).id,
      );
      const stateCopy = [...state];

      if (idx < 0) return state;

      stateCopy[idx] = action.data as Note;

      return stateCopy;
    }
    case 'set':
      return action.data as Note[];
    default:
      return state;
  }
};

const useNotes = () => {
  const [notes, changeNotes] = useReducer(notesReducer, []);
  const [isNotesLoading, setNotesLoading] = useState(true);

  const addNote = useCallback((note: Note) => {
    changeNotes({ type: 'add', data: note });
  }, []);

  const removeNote = useCallback((id: Note['id']) => {
    changeNotes({ type: 'remove', data: id });
  }, []);

  const updateNote = useCallback((note: Note) => {
    changeNotes({ type: 'update', data: note });
  }, []);

  const loadNotes = useCallback(() => {
    setNotesLoading(true);

    AsyncStorage.getItem(AsyncStorageKeys.Notes)
      .then((data) => {
        if (data) {
          changeNotes({ type: 'set', data: fromJson(data) });
        }
      })
      .catch((e) => {
        console.log('useNotes gave error:', e);
      })
      .finally(() => {
        setNotesLoading(false);
      });
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  useEffect(() => {
    writeToStorage(notes);
  }, [notes]);

  return {
    notes,
    isNotesLoading,
    addNote,
    removeNote,
    updateNote,
    refreshNotes: loadNotes,
  };
};

export default useNotes;
