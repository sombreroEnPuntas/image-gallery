import React from 'react'
import { shallow } from 'enzyme'

import DragAndDrop from './'

// Mocks
import mockPictures from '../mocks/pictures'

describe('DragAndDrop', () => {
  it('renders mocks as expected for: Pictures!', () => {
    const wrapper = shallow(
      <DragAndDrop
        addPicture={jest.fn()}
        removePicture={jest.fn()}
        src={mockPictures[0].src}
      />
    )
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('rendersempty', () => {
    const wrapper = shallow(
      <DragAndDrop addPicture={jest.fn()} removePicture={jest.fn()} />
    )
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
