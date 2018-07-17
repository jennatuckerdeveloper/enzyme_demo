import React from 'react'
/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom'
/* eslint-enable no-unused-vars */
import App from './App'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

/* globals beforeEach describe it expect */

describe('with shallow', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App
      prop1={'prop1'}
      />
    )
  })
  it('', () => {
    // the constructor, componentWillMount, and render all log from App.js
    console.log(wrapper.state()) // logs the state from the constructor
    console.log(wrapper.props()) // only logs the className, not the prop above
    console.log(wrapper.props) // a function 
    console.log(wrapper.instance().props) // logs props here in test file, not className
    // THIS LINE STOPPED EVERYTHING BENEATH IT FROM LOGGING 
    // console.log(wrapper.instance().state()) // nothing logs & lines beneath lost
    console.log(wrapper.instance().state) // logs the state from the constructor
    console.log('>>>>End<<<<<')
  })
})

describe('with mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <App
      prop1={'prop1'}
      />
    )
  })
  it('', () => {
    console.log('>>>>>>>>>>>>MOUNT<<<<<<<<<<<<<<<')
    console.log(wrapper.state()) // logs the state from the constructor
    console.log(wrapper.props()) // logs the props passed above and no className
    console.log(wrapper.props) // a function 
    console.log(wrapper.instance().props) // logs the props passed here in test file
    // This line logs nothing and prevents lines beneath from logging.  
    // console.log(wrapper.instance().state()) // nothing logs and lines beneath lost
    console.log(wrapper.instance().state) // state from constructor 

    // the constructor, componentWillMount, and render all log from App.js
  })
})