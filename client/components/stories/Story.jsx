import React from 'react';

class Story extends React.Component {
  render() {
    return (
      <li className="story">
        <a className="story-text" href={this.props.url}>
          {this.props.title}
        </a>
      </li>
    );
  }
}

export default Story;
