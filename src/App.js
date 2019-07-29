import React, {Component} from 'react';
import './App.css';
import TopContent from './TopContent';
import BtmContent from './BtmContent';

export default class App extends Component {
  render () {
    return (
      <div>
        <TopContent/>
        <BtmContent />
      </div>
    )
  }
}