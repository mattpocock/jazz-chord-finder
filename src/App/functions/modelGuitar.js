import tunings from '../globals/tunings';
import calculateNotesInString from './calculateNotesInString';

export const config = {
    topFret: 12,
    minFingerDistance: 2,
};

export default class {
    constructor() {
        this.strings = calculateNotesInString(tunings.standard, config);
    }

    /**
     * Returns a modifi
     * @param {array} notesToFind
     */
    findNoteInStrings(notesToFind) {
        return this.strings.map(string => (
            string.map(note => ({
                ...note,
                highlight: notesToFind.includes(note.note),
            }))
        ));
    }
}

