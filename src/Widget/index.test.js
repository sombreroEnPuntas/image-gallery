import React from 'react'
import { mount } from 'enzyme'

import Widget from './'

describe('Widget', () => {
  it('Matches Snapshot', () => {
    const wrapper = mount(<Widget />)
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
