import React, { Component } from 'react';

import { connect } from 'react-redux';
import SearchBar from './search-bar';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if(index < 3) {
            return (
                <li key={index}>
                    {posts.title}
                </li>
            )
        }
        })
        return posts
    }

    render() {
        return (
            <div className='recent-posts'>
                <div className='recent_posts_wrapper'>
                    <div className='recent_posts_heading'>Recent Posts</div>
                    <ul className='recent-posts__posts'>
                         {this.renderPosts()}
                    </ul>
                </div>

            </div>
   )
 }
}

function mapStateToProps(state) {
    return {
    recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);