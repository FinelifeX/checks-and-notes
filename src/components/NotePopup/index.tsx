import React, { FC, useCallback } from 'react';
import {
  Text,
  Modal,
  Card,
  Button,
  ModalProps,
  CardProps,
} from '@ui-kitten/components';
import { View, ViewProps } from 'react-native';
import { Note } from '@typings/notes';
import styles from './styles';

type Props = ModalProps & {
  note: Note | null;
  containerStyles?: CardProps['style'];
  headerStyles?: ViewProps['style'];
  footerStyles?: ViewProps['style'];
  onCancel?: () => void;
  onEdit?: (note: Note) => void;
  onRemove?: (note: Note) => void;
  isRemoveAction?: boolean;
};

const NotePopup: FC<Props> = ({
  note,
  containerStyles,
  headerStyles,
  footerStyles,
  onCancel = () => {},
  onEdit = () => {},
  onRemove = () => {},
  isRemoveAction = false,
  ...props
}) => {
  const actionWithNote = useCallback(
    (callback, shouldCloseModal = true) => () => {
      if (note) {
        callback(note);
      }

      if (shouldCloseModal) onCancel();
    },
    [note, onCancel],
  );

  return (
    <Modal
      {...props}
      backdropStyle={styles.backdrop}
      onBackdropPress={onCancel}
      style={[styles.modal, containerStyles]}
    >
      <Card
        header={(headerProps) => (
          <View {...headerProps} style={[headerProps?.style, headerStyles]}>
            <Text category="h5" numberOfLines={1}>
              {note?.title}
            </Text>
          </View>
        )}
        footer={(footerProps) => (
          <View
            {...footerProps}
            style={[footerProps?.style, styles.footer, footerStyles]}
          >
            <Button appearance="ghost" status="basic" onPress={onCancel}>
              Cancel
            </Button>
            {!isRemoveAction && (
              <Button appearance="ghost" onPress={actionWithNote(onEdit)}>
                Edit
              </Button>
            )}
            <Button
              appearance="ghost"
              status="danger"
              onPress={actionWithNote(onRemove, isRemoveAction)}
            >
              Remove
            </Button>
          </View>
        )}
      >
        <Text category="p1">
          {isRemoveAction ? 'Are you sure?' : 'What do you want to do?'}
        </Text>
      </Card>
    </Modal>
  );
};

export default NotePopup;
