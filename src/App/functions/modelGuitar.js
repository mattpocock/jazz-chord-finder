import tunings from '../globals/tunings';
import calculateNotesInString from './calculateNotesInString';

export const config = {
    topFret: 12,
    minFingerDistance: 2,
};

export default class {
    constructor() {
        this.strings = calculateNotesInString(tunings.standard, config);
        this.dots = [3, 5, 7, 9, 12];
    }

    /**
     * Returns a modified set of notes with some highlighted
     * @param {array} notesToFind
     */
    findNotesInStrings(notesToFind) {
        this.strings = this.strings.map(string => (
            string.map(note => ({
                ...note,
                highlight: notesToFind.includes(note.note),
            }))
        ));
        return this.strings;
    }
}

