import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import Header from '../../app/components/Header'
import { Nav, Navbar } from 'react-bootstrap'

describe('<Header/>', () => {
  it('renders a Navbar', function () {
    const wrapper = shallow(<Header/>)
    expect(wrapper.containsAllMatchingElements([
      <Navbar/>,
    ]))
  })
})