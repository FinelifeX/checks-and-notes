import { Note } from '@typings/notes';

const notesMock: Note[] = new Array(15).fill(0).map((value, index) => ({
  id: String(index + 1),
  title: `Note ${index + 1}`,
  content: `Description for note ${index + 1}`,
}));

export default notesMock;
