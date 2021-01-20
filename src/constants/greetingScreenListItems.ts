export type GreetingScreenListItem = Record<
  'id' | 'title' | 'description' | 'iconName',
  string
>;

export const greetingScreenListItems: GreetingScreenListItem[] = [
  {
    id: 'note',
    title: 'Notes',
    description: 'Create and edit notes',
    iconName: 'edit-outline',
  },
  {
    id: 'checklist',
    title: 'Check-lists',
    description: 'Create and manage check-lists',
    iconName: 'checkmark',
  },
  {
    id: 'other',
    title: 'What else?',
    description: 'More features may appear later',
    iconName: 'question-mark-outline',
  },
];
