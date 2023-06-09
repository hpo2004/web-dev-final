import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Cell.module.css';

const Cell = (props) => {
    const [letter, setLetter] = useState('');
    const cellRef = useRef(null);

    useEffect(() => {
        if (cellRef.current) {
            cellRef.current.setAttribute('data-index', props.index);
        }
        setLetter(props.letter);
    }, [props.index]);

    // Change properties when selected
    const handleClick = () => {
        if (props.onSelect) {
            props.onSelect(props.index);
        }
    };

    // Nearly identical as useEffect above, may be able to remove
    useEffect(() => {
        if (cellRef.current) {
            cellRef.current.setAttribute('data-index', props.index);
        }
        if (props.letter !== letter) {
            setLetter(props.letter);
        }
    }, [props.index, props.letter]);

    return (
        <div className={styles.container}>
            <div
                id={`cell-${props.index}`}
                ref={cellRef}
                className={props.selected ? styles.cellSelected : styles.cell} // Style based on selected status
                onClick={handleClick}
            >
                {letter}
            </div>
            <div className={styles.points}>{props.points}</div>
        </div>
    );
};

export default Cell;