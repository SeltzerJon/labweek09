import React, { Component } from 'react'

export default class Student extends Component {
  
    constructor(){
        super()
        this.state ={
            fnm: "Jon"
        }
    }

    render() {
    return (
      <h4>Student of {this.props.college}</h4>
    )
  }
}
