import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getProgram } from "../../actions/programActions"
import { Link } from "react-router-dom"
import MessageItem from "../message/messageItem"

class Program extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getProgram(id, this.props.history)
    }
    render() {
        const { program } = this.props
        const { message } = this.props.message
        const { Topics } = program
        let messageComponent;
        if (message) {
            messageComponent = (<MessageItem />)
        }
        let topics;
        if (Topics && Topics.length != 0) {
            topics = (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Topics && Topics.map(topic => (
                            <tr key={topic.id}>
                                <td>{topic.name}</td>
                                <td>{topic.description}</td>
                                <td><Link className="btn btn-primary md" to={`/topics/${topic.id}`}>View</Link></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            )
        } else {
            topics = (
                <div>
                    <p>No topic found in this in {program.name}</p> <br />
                </div>
            )
        }
        return (
            <div className="container">
                <div className="row m-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1 className="lead">{program.name}</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-right">
                        <Link to={`/program/${program.id}/addTopic`} className="btn btn-primary lg"> Add Topic</Link>
                    </div>
                </div>
                {messageComponent}
                <div className="row">
                    <p className="lead">Topics covered in this program.</p>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        {topics}
                    </div>
                </div>


            </div>
        )
    }
}
Program.propTyps = {
    getProgram: PropTypes.func.isRequired,
    program: PropTypes.object.isRequired,
    Topics: PropTypes.array
}
const mapStateToProps = state => ({
    program: state.program.program,
    message: state.message.message
})
export default connect(mapStateToProps, { getProgram })(Program);
