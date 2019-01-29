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
  describe('on mobile', () => {
    resizeScreen(320)

    describe('with pic', () => {
      const wrapper = shallow(
        <DragAndDrop {...getProps({ src: mockPictures[0].src })} />
      )

      it('renders mocks as expected for: Pictures!', () => {
        expect(wrapper.debug()).toMatchSnapshot()
      })

      it('Has removal button', () => {
        expect(wrapper.find(Button).text()).toBe('X')
      })
    })

    describe('with mo pic', () => {
      const wrapper = shallow(<DragAndDrop {...getProps()} />)

      it('renders empty', () => {
        expect(wrapper.debug()).toMatchSnapshot()
      })

      it('Has add button', () => {
        expect(wrapper.find(Button).text()).toBe('+')
      })
    })
  })

  describe('on desktop', () => {
    resizeScreen(768)

    describe('with pic', () => {
      const wrapper = shallow(
        <DragAndDrop {...getProps({ src: mockPictures[0].src })} />
      )

      it('renders mocks as expected for: Pictures!', () => {
        expect(wrapper.debug()).toMatchSnapshot()
      })

      it('Has removal button', () => {
        expect(wrapper.find(Button).text()).toBe('X')
      })
    })

    describe('with pic', () => {
      const wrapper = shallow(<DragAndDrop {...getProps()} />)

      it('renders empty', () => {
        expect(wrapper.debug()).toMatchSnapshot()
      })

      it('Has no add button', () => {
        expect(wrapper.find(Button).length).toBe(0)
      })
    })
  })
})
