/*eslint-disable*/
import { expect } from 'chai';
import calculateNotesInString from '../calculateNotesInString';

describe('calculateNotesInString', () => {
    it('Should return correct notes', () => {
        const result = calculateNotesInString(
            ['E'],
            { topFret: 5 }
        );
        const expectedResult = ['E', 'F', 'F#', 'G', 'G#', 'A'];

        result[0].forEach((noteObject, index) => (
            expect(noteObject.note).to.equal(expectedResult[index]))
        );
    });
})