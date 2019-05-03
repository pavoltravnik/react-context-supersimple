import React, { Component } from 'react';
import { ThemeContext } from './../App';

function NestedContent () {
    return (
      <div className="NestedContent">
	      	<ThemeContext.Consumer>
	      		{value => <div>{value.name} {value.surname}</div>}
		</ThemeContext.Consumer>
      </div>
    );
}

export default NestedContent;
