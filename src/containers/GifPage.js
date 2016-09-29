import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { loadTags } from '../actions'
import { Tags } from '../components'

const loadData = props => {
    props.loadTags();
};

class GifPage extends Component {
    static propTypes = {
        tags: PropTypes.object.isRequired,
        loadTags: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    render() {
        console.log(this.props)
        return (
            <div className="GifPage">
                {/*<Tags tags={this.props.tags} />*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { tags } = state;
    return {
        tags
    }
};

export default connect(mapStateToProps, {
    loadTags
})(GifPage)

