import React, { Component } from 'react';
import NestedContent from './NestedContent';

class Content extends Component {
  render() {
    return (
      <div className="Content">
      	<NestedContent />
      </div>
    );
  }
}

export default Content;
