import React, { Component } from 'react'
import PVtR from './PVtR.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className='text-center'>
        <img src={PVtR} alt="Loading" />
      </div>
    )
  }
}
