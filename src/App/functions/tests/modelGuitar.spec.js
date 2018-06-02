/*eslint-disable*/
import { expect } from 'chai';
import modelGuitar, { config } from '../modelGuitar';

describe('modelGuitar', () => {
    it('Should return a guitar with strings', () => {
        const guitar = new modelGuitar();
        expect(guitar.strings).to.be.an('array');
        expect(guitar.strings[0].length).to.equal(config.topFret + 1);
    });

    test('If findNotesInStrings can find the right notes', () => {
        const guitar = new modelGuitar();
        expect(guitar.findNotesInStrings).to.be.a('function');
        /**
         * Find just an array of highlighted notes
         */

        const onlyHighlightedNotes = guitar.findNotesInStrings(['G', 'B']).map(string => (
            string.filter(note => note.highlight)
        ));
        expect(onlyHighlightedNotes.length > 0).to.equal(true);

        /**
         * Fails if no notes have been found
         */
        onlyHighlightedNotes.forEach(
            string => expect(string.length > 0).to.equal(true)
        );
        
        onlyHighlightedNotes.forEach(string => string.forEach((note) => {
            expect(note.highlight).to.equal(true);
            expect(note.note === 'G' || note.note === 'B').to.equal(true);
        }));
    })
})