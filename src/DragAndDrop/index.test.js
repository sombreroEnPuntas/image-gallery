import React from 'react'
import { shallow } from 'enzyme'

import DragAndDrop from '.'
import { Button } from './wrappers'

// Mocks
import mockPictures from '../mocks/pictures'

const resizeScreen = size => {
  global.innerWidth = size
  // eslint-disable-next-line no-undef
  global.dispatchEvent(new Event('resize'))
}

const getProps = customProps => ({
  addPicture: jest.fn(),
  removePicture: jest.fn(),
  ...customProps,
})

describe('DragAndDrop', () => {
  describe.each`
    size   | pic                    | buttonLabel
    ${320} | ${mockPictures[0].src} | ${'X'}
    ${768} | ${mockPictures[0].src} | ${'X'}
    ${320} | ${undefined}           | ${'+'}
    ${768} | ${undefined}           | ${false}
  `('at $size', ({ size, pic, buttonLabel }) => {
    resizeScreen(size)
    const wrapper = shallow(
      <DragAndDrop {...getProps(pic ? { src: mockPictures[0].src } : {})} />
    )

    it(`renders ${pic ? 'mock as expected for: Pictures!' : 'empty'}`, () => {
      expect(wrapper.debug()).toMatchSnapshot()
    })

    it(`Has ${buttonLabel} button`, () => {
      buttonLabel
        ? expect(wrapper.find(Button).text()).toBe(buttonLabel)
        : expect(wrapper.find(Button).length).toBe(0)
    })
  })
})
