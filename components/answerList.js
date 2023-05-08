import styles from '../styles/answerList.module.css';

const answerList = (props) => {
  return (
    <div className={styles.container}>
      {props.answers.map((answer, index) => (
        <p key={index}>{answer}</p>
      ))}
    </div>
  );
}

export default answerList;