import React from 'react';
import Posts from './Posts.jsx';
import testData from './samplePostData.json';


const samplePostList = testData.posts;

class ThreadList extends React.Component {
  render() {
    return (
      <div className="column is-three-quarters">
        <Posts numberOfPosts={5} postList={samplePostList} />
        <nav className="pagination">
          <a className="pagination-previous">Previous</a>
          <a className="pagination-next">Next</a>
        </nav>
      </div>
    );
  }
}

export default ThreadList;
