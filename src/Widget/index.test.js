import React from 'react'
import { mount } from 'enzyme'

import Widget from './'

// Mocks
import mockPictures from '../mocks/pictures'

describe('Widget renders mocks as expected for:', () => {
  it('Loading message...', () => {
    const wrapper = mount(<Widget pictures={[]} totalCards={0} />)
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('Pictures!', () => {
    const wrapper = mount(
      <Widget pictures={mockPictures} totalCards={mockPictures.length} />
    )
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
