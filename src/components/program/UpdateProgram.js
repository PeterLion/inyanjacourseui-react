import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getProgram, updateProgram } from "../../actions/programActions"

class UpdateProgram extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            name: "",
            description: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillReceiveProps(nextProps) {
        const { id, name, description } = nextProps.program
        this.setState({ id, name, description })
    }
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getProgram(id, this.props.history)
    }
    onSubmit(e) {
        e.preventDefault()
        const updatedProgram = {
            name: this.state.name,
            description: this.state.description
        }
        const { id } = this.props.match.params
        this.props.updateProgram(id, updatedProgram, this.props.history)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control form-control-lg" value={this.state.name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <textarea type="text" name="description" className="form-control form-control-lg" value={this.state.description} onChange={this.onChange} ></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Save Changes" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

UpdateProgram.propTypes = {
    program: PropTypes.object.isRequired,
    getProgram: PropTypes.func.isRequired,
    updateProgram: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    program: state.program.program
})

export default connect(mapStateToProps, { getProgram, updateProgram })(UpdateProgram);
