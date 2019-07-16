import React, { Component } from 'react'
import { Link } from "react-router-dom"
import project_icon from "../../images/project_icon.jpg"
import { connect } from "react-redux"
import { deleteProgram } from "../../actions/programActions"
import PropTypes from 'prop-types';

class ProgramItem extends Component {
    onDeleteClick = id => {
        this.props.deleteProgram(id)
    }
    render() {
        const { program } = this.props
        return (
            <div className="card col-md-3 p-1 mb-2">
                <img src={project_icon} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{program.name}</h5>
                    <p className="card-text">{program.description}</p>
                    <Link to={`program/${program.id}`} className="card-link">View</Link>
                    <Link to={`UpdateProgram/${program.id}`} className="card-link">Update</Link>
                    <i className="card-link" onClick={this.onDeleteClick.bind(this, program.id)}>Delete</i>
                </div>
            </div>
        )
    }
}

ProgramItem.propTypes = {
    deleteProgram: PropTypes.func.isRequired
}

export default connect(null, { deleteProgram })(ProgramItem);
