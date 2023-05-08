import styles from '../styles/Board.module.css';
import Link from 'next/link';
import Cell from '../components/cell.js';
import AnswerList from '../components/answerList.js';
import { useEffect, useState } from 'react';

const Board = () => {
    // Generate a random capital letter A through Z. The probability of more commonly 
    // used letters (e.g. vowels) showing up is higher than others. This probability 
    // is modeled off of Scrabble tiles. 
    const randomLetter = () => {
        const letterOdds = `AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIKJLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ`;
        let num = Math.floor(Math.random() * 99);
        if (num == 98) {
            return 'Z';
        }
        return letterOdds.substring(num, num + 1);
    };

    // Point values of each letter.
    const letterScores = {
        A:1,B:3,C:3,D:2,E:1,F:4,G:2,H:4,I:1,J:8,K:5,L:1,M:3,N:1,O:1,P:3,Q:10,R:1,S:1,T:1,U:1,V:4,W:4,X:8,Y:4,Z:10
    }

    const [score, setScore] = useState(0);
    const [cellLetters, setCellLetters] = useState([]);
    const letterHolder = [];

    // Create a 7x7 square of cells and randomize the letters. The letters are 
    // contained in an array state above.
    const generateGame = () => {
        const rows = 7;
        const cols = 7;
        for (let i = 0; i < rows * cols; i++) {
            letterHolder.push(randomLetter());
        }
        setCellLetters(letterHolder);
    };

    // Generate the board on the first site render.
    useEffect(() => {
        generateGame();
    }, []);

    const [selectedCells, setSelectedCells] = useState([]);

    const handleSelect = (index) => {
        setSelectedCells(selectedCells => [...selectedCells, index]); // add index to existing indices in array state
        setScore(score => score + letterScores[cellLetters[index]]); // increase score count
    }
    
    // Does not currently work properly
    // Will be removed once mousedown mouseover selection is implemented
    const handleDeselect = (index) => {
        setSelectedCells(selectedCells => {
            const newIndex = selectedCells.indexOf(index);
            if (newIndex !== -1) {
                const newSelectedCells = [...selectedCells.slice(0, newIndex), ...selectedCells.slice(newIndex + 1)];
                    const newScore = newSelectedCells.reduce((totalScore, cellIndex) => {
                    return totalScore + letterScores[cellLetters[cellIndex]];
                }, 0);
                setScore(newScore);
                return newSelectedCells;
            }
            return selectedCells;
        });
    }

    const [answersLeft, setAnswersLeft] = useState([]);
    const [answersRight, setAnswersRight] = useState([]);

    const submitWord = async () => {
        const word = selectedCells.map(index => cellLetters[index]).join(''); // show current selected letters above board
        const isWordValid = await checkWord(word); // access dictionary API and check if word is valid
        if (isWordValid) {
            console.log(word)
            if (answersLeft.length >= 6) { // show new word on either left or right side of board
                setAnswersRight([...answersRight, word]);
            } else {
                setAnswersLeft([...answersLeft, word]);
            }
            setScore(score => score + word.length);
            randomizeSelectedCells();
        } else {
            console.error('Invalid word');
        }
        setSelectedCells([]);
    };

    // Randomize the letter state of selected cells
    const randomizeSelectedCells = () => {
        setCellLetters(cellLetters => cellLetters.map((letter, index) => {
            if (selectedCells.includes(index)) {
                return randomLetter();
            }
            return letter;
        }));
    };

    // Use dictionary API to check if a word is valid
    const checkWord = async (word) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            if (data.title === "No Definitions Found") { // No definition == invalid word
                return false;
            }
            return true;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <AnswerList side={'left'} answers={answersLeft} />
                <div className={styles.play}>
                    <h1 style={{ fontSize: "3em" }}>Squrbble</h1>
                    <p className={styles.word}>{selectedCells.map(index => cellLetters[index]).join('')}</p>
                    <button onClick={submitWord}>Submit Word</button>
                    <h2>Score: {score} Words: {answersLeft.length + answersRight.length} / 12</h2>
                    <div className={styles.board} id='board'>
                        {cellLetters.map((letter, index) => (
                            <Cell
                                key={index}
                                letter={letter}
                                points={letterScores[cellLetters[index]]}
                                selected={selectedCells.includes(index)}
                                onSelect={() => handleSelect(index)}
                                onDeselect={() => handleDeselect(index)}
                                index={index}
                                cellLetters={cellLetters}
                            />
                        ))}
                    </div>
                </div>
                <AnswerList side={'right'} answers={answersRight} />
            </div>
            <Link href='/docs'>Documentation</Link>
        </div>
    );
};

export default Board;