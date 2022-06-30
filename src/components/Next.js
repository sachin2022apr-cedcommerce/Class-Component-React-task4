import React, { Component } from 'react'
import One from './One'
import Three from './Three'
import Two from './Two'

export default class Next extends Component {
  render() {
    return (
      <div className='Content'>
       <One />
       <Two />
       <Three />
    </div>
    )
  }
}
