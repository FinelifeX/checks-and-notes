import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Note from '@screens/Note';
import Settings from '@screens/Settings';
import Home from '@screens/Home';
import NotesContext from '@context/notesContext';
import useNotes from '@hooks/useNotes';

import { navigatorDefaultOptions } from './options';

const { Navigator, Screen } = createStackNavigator();
const NotesProvider = NotesContext.Provider;

export const HomeNavigator: FC = () => {
  const {
    notes,
    isNotesLoading,
    addNote,
    refreshNotes,
    removeNote,
    updateNote,
  } = useNotes();

  return (
    <NotesProvider
      value={{
        notes,
        isNotesLoading,
        actions: {
          addNote,
          refreshState: refreshNotes,
          removeNote,
          updateNote,
        },
      }}
    >
      <Navigator screenOptions={navigatorDefaultOptions}>
        <Screen name="Home" component={Home} />
        <Screen name="Note" component={Note} />
        <Screen name="Settings" component={Settings} />
      </Navigator>
    </NotesProvider>
  );
};
