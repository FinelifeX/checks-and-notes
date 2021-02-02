import React, { FC } from 'react';
import { GestureResponderEvent, RefreshControl, Text } from 'react-native';
import { Divider, List, ListProps } from '@ui-kitten/components';
import { Note } from '@typings/notes';
import NotesListItem from './NotesListItem';
import Colors from '@constants/colors';
import NotesListEmpty from './NotesListEmpty';

type Props = Partial<ListProps> & {
  data: Note[];
  refreshing?: boolean;
  onRefresh?: () => void;
  onItemPress?: (note: Note) => (event: GestureResponderEvent) => void;
  onItemLongPress?: (note: Note) => (event: GestureResponderEvent) => void;
};

const NotesList: FC<Props> = ({
  data,
  refreshing = false,
  onRefresh = () => {},
  onItemPress = () => () => {},
  onItemLongPress = () => () => {},
  ...props
}) => {
  return (
    <List
      data={data}
      renderItem={({ item }) => (
        <NotesListItem
          data={item}
          onPress={onItemPress(item)}
          onLongPress={onItemLongPress(item)}
        />
      )}
      refreshControl={
        <RefreshControl
          tintColor={Colors.white}
          titleColor={Colors.white}
          title="Refreshing..."
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={NotesListEmpty}
      {...props}
    />
  );
};

export default NotesList;
