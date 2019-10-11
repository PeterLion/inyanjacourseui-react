import React, { Component } from 'react'


const GuestName = ({ guestName, updateName }) => {
    const handleChange = (e) => {
        updateName(e.target.value)
    }
    return (
        <input type='text' placeholder='Enter your name'
            value={guestName} onChange={handleChange} />
    )
}
class QuizExam extends Component {
    constructor() {
        super()
        this.state = {
            guestName: '',
            counter: 0,
            fizzbuzz: ''
        }
    }
    updateName = (name) => {
        this.setState({ guestName: name })
    }
    clearName = () => {
        this.setState({ guestName: '' })
    }
    isFizzBuzz = () => {
        let i = this.state.counter
        let fb = this.state.fizzbuzz
        if (i % 3 === 0) { fb += 'Fizz,' }
        if (i % 5 === 0) { fb += 'Buzz,' }
        if (i % 5 && i % 3) { fb += i + ',' }

        this.setState({ fizzbuzz: fb })
    }
    increment = () => {
        this.setState({ counter: ++this.state.counter })
        this.isFizzBuzz()
    }
    decrement = () => {
        this.setState({ counter: --this.state.counter })
        this.isFizzBuzz()
    }
    render() {
        const { guestName, fizzbuzz } = this.state
        return (
            <div>
                <GuestName guestName={guestName} updateName={this.updateName} />
                <p>Hello {guestName || 'guest'}!</p>
                <button onClick={this.clearName}>Bye</button>
                <p></p>
                <button type='button' onClick={this.increment}>+</button>{}
                <button type='button' onClick={this.decrement}>-</button><br />
                <p>{fizzbuzz}</p>
            </div>
        )
    }
}

export default QuizExam;
