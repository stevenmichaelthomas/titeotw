import React from 'react';
import Story from './Story.jsx'

class List extends React.Component {
  render() {
    var stories = this.props.data.map(function (story) {
      return (
        <Story key={story.id} title={story.title} url={story.url} />
      )
    });

    return (
      <ul className="stories-list">
        {stories}
      </ul>
    );
  }
}

export default List;
