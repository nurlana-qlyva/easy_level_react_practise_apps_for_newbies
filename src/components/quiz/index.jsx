import React, {useState, useCallback} from 'react';
import data from './data.json';
import style from './index.module.css';

export default function Quiz() {
    const questions = data.questions;
    let [currentQuiz, setCurrentQuiz] = useState(0);
    let [showScore, setShowScore] = useState(false);
    let [score, setScore] = useState(0);

    const handleQuiz = useCallback((isCorrect) => {
        if (isCorrect==='true') {
            setScore(++score);
        }

        currentQuiz = currentQuiz + 1;
        if (currentQuiz < questions.length) {
            setCurrentQuiz(currentQuiz);
        }else {
            setShowScore(true);
        }
    }, []);

    return (
        <div className={style.bg}>
            <div className="row justify-content-center">
                <div className="col-8">
                    <h1 className='text-center mb-5'>React Quiz App</h1>
                    {showScore ? 
                    <div>You scored {score} of {questions.length}</div> : 
                    (
                        <>
                            <h2 className='mb-4'>Question <span>{currentQuiz + 1} / {questions.length}</span></h2>
                            <h3 className='mb-4'>{questions[currentQuiz].question_text}</h3>
                            <div className={style.buttons}>
                                {questions[currentQuiz].answers.map((answer, index) => {
                                    return <button key={index} onClick={() => handleQuiz(answer.isCorrect)}>{answer.answer_text}</button>
                                })}
                            </div>
                        </> 
                    )}
                    
                </div>
            </div>
        </div>
    )
}
