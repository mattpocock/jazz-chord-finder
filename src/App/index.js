import React from 'react';
import modelGuitar from './functions/modelGuitar';
import styles from './css/styles.scss';
import removeNonNotes from './functions/removeNonNotes';

class GuitarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guitar: new modelGuitar(),
        };

        this.handleNotesSelected = this.handleNotesSelected.bind(this);
    }

    handleNotesSelected(value) {
        this.state.guitar.findNotesInStrings(removeNonNotes(value.split('')));
        this.forceUpdate();
    }
    render() {
        return (
            <React.Fragment>
                <table className="GuitarView" style={styles}>
                    <tbody>
                        {this.state.guitar.strings.map((string, index) => (
                            <tr key={index}>
                                {string.map((note, i) => (
                                    <td key={i}>
                                        {note.highlight
                                            ? <b>{note.note}</b>
                                            : <span>{note.note}</span>
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr>
                            {this.state.guitar.strings[0].map((n, index) => (
                                <td key={index}>
                                    {this.state.guitar.dots.includes(index) && '.'}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <input
                    type="text"
                    onChange={({ target }) => this.handleNotesSelected(target.value)}
                />
            </React.Fragment>
        );
    }
}

module.exports = GuitarView;
