import React from 'react';
import PropTypes from 'prop-types'

const QuestionForm = ({ idx, questionState, handleQuestionChange }) => {
    const titleId = `title-${idx}`
    const descriptionId = `description-${idx}`
    return (
        <div key={`question-${idx}`}>
            <div className="form-group">
                <label htmlFor={titleId}>{`Question #${idx + 1}`}</label>
                <input
                    type="text"
                    name={titleId}
                    data-idx={idx}
                    id={titleId}
                    value={questionState[idx].title}
                    onChange={handleQuestionChange}
                    className="title"
                />
            </div>
            <div className="form-group">
                <label htmlFor={descriptionId}>Description</label>
                <input
                    type="text"
                    name={descriptionId}
                    data-idx={idx}
                    id={descriptionId}
                    value={questionState[idx].description}
                    onChange={handleQuestionChange}
                    className="description"
                />
            </div>
        </div>
    )
}

QuestionForm.propTypes = {
    idx: PropTypes.number,
    questionState: PropTypes.array,
    handleQuestionCHange: PropTypes.func
}

export default QuestionForm