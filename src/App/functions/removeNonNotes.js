import notes from '../globals/notes';

export default noteArray => noteArray.filter(note => notes.includes(note));
