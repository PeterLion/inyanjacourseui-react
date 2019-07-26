import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { getPublicTopics } from "../../actions/topicActions"
import TopicItem from './TopicItem';

class Topics extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getPublicTopics()
    }
    render() {
        const { public_topics } = this.props.topic
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <p className="lead">Explore rich topics on our platform</p>
                    </div>
                </div>
                <div className="row m-2">
                    {
                        public_topics.map(topic => (
                            <TopicItem key={topic.id} topic={topic} />
                        ))
                    }
                </div>

            </div>
        )
    }
}

Topics.propsTypes = {
    getPublicTopics: PropTypes.func.isRequired,
    topic: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    topic: state.topic
})

export default connect(mapStateToProps, { getPublicTopics })(Topics);
