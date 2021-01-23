import React, { FC } from 'react';
import { ListItem, ListItemProps, Text } from '@ui-kitten/components';

import { Note } from '@typings/notes';
import Icon from '@components/Icon';
import Icons from '@constants/icons';

import styles from './styles';

type Props = ListItemProps & {
  data: Note;
};

const NotesListItem: FC<Props> = ({ data, ...props }) => {
  const { title, content } = data;

  return (
    <ListItem
      style={styles.container}
      title={(titleProps) => (
        <Text {...titleProps} style={[titleProps?.style, styles.title]}>
          {title}
        </Text>
      )}
      description={(descriptionProps) => (
        <Text {...descriptionProps} numberOfLines={1}>
          {content}
        </Text>
      )}
      accessoryRight={() => <Icon name={Icons.ArrowRight} />}
      {...props}
    />
  );
};

export default NotesListItem;
