import React, { Component } from 'react'
import { connect } from "react-redux"

class MessageItem extends Component {
    render() {
        const { message } = this.props
        return (
            <div>
                <div className="alert alert-success">
                    <button className="close"><span>&times;</span></button>
                    {message.message}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    message: state.message.message
})

export default connect(mapStateToProps)(MessageItem)