import React, { Component } from 'react'
import { connect } from "react-redux"
import { getPublicPrograms } from "../../actions/programActions"
import PropTypes from 'prop-types'
import Item from "./Item"

class Programs extends Component {
    componentDidMount() {
        this.props.getPublicPrograms()
    }
    render() {
        const { public_programs } = this.props.program
        return (
            <div className="container">
                <div className="row m-2"></div>
                <div className="row m-2">
                    {
                        public_programs.map(program => (
                            <Item key={program.id} program={program} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

Programs.propTypes = {
    getPublicPrograms: PropTypes.func.isRequired,
    program: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    program: state.program
})

export default connect(mapStateToProps, { getPublicPrograms })(Programs);
