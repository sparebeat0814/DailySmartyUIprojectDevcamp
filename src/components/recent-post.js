import React, { Component } from 'react';

class RecentPosts extends Component {
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

export default RecentPosts;