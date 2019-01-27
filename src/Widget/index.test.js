import React from 'react'
import { mount } from 'enzyme'

import Widget from './'

// Mocks
import mockPictures from '../mocks/pictures'

describe('Widget renders mocks as expected for:', () => {
  it('Pictures!', () => {
    const wrapper = mount(
      <Widget pictures={mockPictures} totalCards={mockPictures.length} />
    )
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
