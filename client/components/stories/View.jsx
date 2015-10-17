import React from 'react';
import List from './List.jsx';

class View extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          id: 2,
          url: 'http://www.whatever.com',
          title: 'A title'
        },
        {
          id: 1,
          url: 'http://www.google.com',
          title: 'Googs'
        }
      ]
    });
  }

  render() {
    return (
      <div className="stories-view">
        <List data={this.state.data} />
      </div>
    );
  }
}

export default View;

