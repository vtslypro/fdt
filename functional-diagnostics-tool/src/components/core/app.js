import React from 'react';
import { Component } from 'react';
import Sidebar from '../layout/sidebar';

export default class App extends Component {
  constructor(props) {
		super(props)
	}
  printLog(){
    console.log("In APP......");
    console.log(this.state);
    console.log(this.props);
  }
  render () {
    //console.log(this.props.children);
    //const { main, sidebar } = this.props.children
    return (
      <div>
        {/*this.printLog()*/}
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}
