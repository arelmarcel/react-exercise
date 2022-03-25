//try to implement class component in tweet.js

import PropTypes from 'prop-types'
// import Avatar from './Avatar';
import moment from 'moment';

import './Tweet.css'
import React from 'react';

class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet">
                <div className="tweet-header">
                    <span className="tweet-user">@{this.props.user}</span>
                    <span className="tweet-created-on">
                        {moment(this.props.createdOn).fromNow()}
                    </span>
                </div>
                <div className="tweet-content"> {this.props.children}</div>
            </div>
        )
    }
}
// function Tweet(props) {
//     const { user, createdOn, children } = props;
//     return (
//         <div className="tweet">
//             <div className="tweet-header">
//                 <span className="tweet-user">@{user}</span>
//                 <span className="tweet-created-on">
//                     {moment(createdOn).fromNow()}
//                 </span>
//             </div>
//             <div className="tweet-content"> {children}</div>
//         </div>
//     )
// }
Tweet.propTypes = {
    user: PropTypes.string,
    createdOn: PropTypes.string,
};

export default Tweet;