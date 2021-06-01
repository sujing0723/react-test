import React, {Component} from 'react';
import './index.css'
import {HeaderComponent} from './header'
import {ContentComponent} from './content'

export class IndexLayout extends Component {
  render() {
    return (
      <div id="indexLayout">
        <HeaderComponent></HeaderComponent>
        <ContentComponent></ContentComponent>
      </div>
    )
  }
}