import React, { FC, useCallback, useContext, useState } from 'react';
import { Alert, View } from 'react-native';

import SafeAreaView from '@components/SafeAreaView';
import TopNavBar from '@components/TopNavBar';
import Layout from '@components/Layout';
import SettingsButton from '@components/SettingsButton';
import NotesList from '@components/NotesList';
import NotePopup from '@components/NotePopup';
import NotesContext from '@context/notesContext';
import { HomeScreenNavigationProp } from '@typings/navigation';
import { Note } from '@typings/notes';

import styles from './styles';
import AddNoteButton from '@components/AddNoteButton';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: FC<Props> = ({ navigation }) => {
  const [longPressedNote, setLongPressedNote] = useState<Note | null>(null);
  const [isPopupRemoveAction, setPopupRemoveAction] = useState(false);
  const { isNotesLoading, notes, actions } = useContext(NotesContext);

  const onSettingsPress = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  const onNotePress = useCallback(
    (note: Note) => () => {
      Alert.alert('Press', 'Press event triggered');
      navigation.navigate('Note', { note });
    },
    [navigation],
  );

  const onNoteLongPress = useCallback(
    (note: Note) => () => {
      setLongPressedNote(note);
    },
    [],
  );

  const onAddNotePress = useCallback(() => {
    navigation.navigate('Note');
  }, [navigation]);

  return (
    <SafeAreaView>
      <TopNavBar
        title="Your Notes"
        alignment="center"
        accessoryRight={() => (
          <View style={styles.navBarControls}>
            <SettingsButton onPress={onSettingsPress} />
            <AddNoteButton onPress={onAddNotePress} />
          </View>
        )}
      />
      <Layout style={styles.layout}>
        <NotesList
          data={notes}
          refreshing={isNotesLoading}
          onRefresh={actions.refreshState}
          onItemPress={onNotePress}
          onItemLongPress={onNoteLongPress}
        />
        <NotePopup
          visible={!!longPressedNote}
          note={longPressedNote}
          isRemoveAction={isPopupRemoveAction}
          onCancel={() => {
            setLongPressedNote(null);
            setPopupRemoveAction(false);
          }}
          onRemove={(note) => {
            if (isPopupRemoveAction) {
              actions.removeNote(note.id);
              setPopupRemoveAction(false);
            } else {
              setPopupRemoveAction(true);
            }
          }}
          onEdit={(note) => {
            navigation.navigate('Note', { note });
          }}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
