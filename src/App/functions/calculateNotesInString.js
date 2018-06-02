import notes from '../globals/notes';

export default (tuning, { topFret }) => (
    tuning.map((rootNote) => {
        const stringNotes = [];
        let noteIndex = notes.findIndex(note => note === rootNote);
        for (let i = 0; i < (topFret + 1); i += 1) {
            stringNotes.push({
                note: notes[noteIndex],
            });
            /**
             * If we're at the end of the note array, go back to the start
             */
            noteIndex = noteIndex === notes.length - 1
                ? 0
                : noteIndex + 1;
        }
        return stringNotes;
    })
);
