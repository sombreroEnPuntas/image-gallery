import React from 'react'
import { mount } from 'enzyme'

import DragAndDrop from './'

// Mocks
import mockPictures from '../mocks/pictures'
const legitImageFile = { type: 'image/png', legit: 'mock file' }
const legitPDFFile = { type: 'application/pdf', legit: 'mock file' }

describe('DragAndDrop', () => {
  it('renders mocks as expected for: Pictures!', () => {
    const wrapper = mount(<DragAndDrop src={mockPictures[0].src} />)
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('rendersempty', () => {
    const wrapper = mount(<DragAndDrop />)
    expect(wrapper.debug()).toMatchSnapshot()
  })

  describe('handles', () => {
    const wrapper = mount(<DragAndDrop />)

    it('handleDrop invalid', () => {
      wrapper.instance().handleDrop({
        image: 'blob:http://localhost:3000/some-other-hash',
        file: legitPDFFile,
      })

      expect(wrapper.state()).toEqual({ file: null })
    })

    it('handleDrop valid', () => {
      wrapper.instance().handleDrop({
        image: 'blob:http://localhost:3000/some-hash',
        file: legitImageFile,
      })

      expect(wrapper.state()).toEqual({ file: legitImageFile })
    })

    it('handleRemove', () => {
      wrapper.instance().handleRemove()

      expect(wrapper.state()).toEqual({ file: null })
    })
  })
})
