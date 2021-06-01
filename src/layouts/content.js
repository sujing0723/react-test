import React, {Component} from 'react';
import {Homepage} from '../views/homepage/index'

export class ContentComponent extends Component {
  render () {
    return (
      <div className="content">
        <Homepage></Homepage>
      </div>
    )
  }
}