import React, { useState } from 'react'
import QuestionForm from "../question/QuestionForm"
const QuizForm = () => {
    const [quizState, setQuizState] = useState({ title: '', description: '' })
    const handleQuizChange = (e) => setQuizState({ ...quizState, [e.target.name]: e.target.value })

    const emptyQuestion = { title: '', description: '' }
    const [questionState, setQuestionState] = useState([{ ...emptyQuestion }])
    const addQuestion = () => {
        setQuestionState([...questionState, { ...emptyQuestion }])
    }
    const handleQuestionChange = (e) => {
        const updatedQuestions = [...questionState]
        updatedQuestions[e.target.dataset.idx][e.target.className] = [e.target.value]
        setQuestionState(updatedQuestions)
    }

    const handleQuestionSubmit = (e) => {
        e.preventDefault()
        const Questions = questionState;
        const newQuiz = quizState;
        console.log(Questions)
        console.log(newQuiz)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <form onSubmit={handleQuestionSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Quiz Title:</label>
                            <input className="form-control" type="text" name="title" id="title" onChange={handleQuizChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input className="form-control" type="text" name="description" id="description" onChange={handleQuizChange} />
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="button" value="Add New Question" onClick={addQuestion} />
                        </div>
                        {
                            questionState.map((val, idx) => (
                                <QuestionForm key={idx} idx={idx} handleQuestionChange={handleQuestionChange} questionState={questionState} />
                            ))
                        }
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default QuizForm;