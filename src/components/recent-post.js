import React, { Component } from 'react';

import { connect } from 'react-redux';
import SearchBar from './search-bar';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    render() {
        return (
            <div className='recent-posts'>
                <div className='recent_posts_wrapper'>
                    <div className='recent_posts_heading'>Recent Posts</div>
                    <ul className='recent-posts__posts'>
                         <li>Recent post 0</li>
                         <li>Recent post 1</li>
                         <li>Recent post 2</li>
                    </ul>
                </div>

            </div>
   )
 }
}

export default connect(null, actions)(RecentPosts);