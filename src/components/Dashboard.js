import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Program from './program/Program';
import { getPrograms } from "../actions/programActions"
import PropTypes from 'prop-types'
import MessageItem from './message/messageItem';


class Dashboard extends Component {
    componentDidMount() {
        this.props.getPrograms()
    }
    render() {
        const { programs } = this.props.program
        const { message } = this.props.message
        let messageComponent;
        if (message) {
            messageComponent = (<MessageItem />)
        }
        return (
            <div className="container">

                {messageComponent}
                <Link to="/program">
                    Create Program
                </Link>
                <div className="row mb-3">
                    {
                        programs.map(program => (
                            <Program key={program.id} program={program} />
                        ))
                    }
                </div>


            </div>
        )
    }
}

Dashboard.propTypes = {
    program: PropTypes.object.isRequired,
    getPrograms: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    program: state.program,
    message: state.message.message
})

export default connect(mapStateToProps, { getPrograms })(Dashboard);
