import React from 'react'
import { mount } from 'enzyme'

import { Widget } from './'

const getProps = customProps => ({
  addPicture: () => jest.fn(),
  currentCard: 0,
  onClickBack: jest.fn(),
  onClickNext: jest.fn(),
  pictures: {},
  removePicture: () => jest.fn(),
  totalCards: 5,
  ...customProps,
})

describe('Widget', () => {
  it('Matches Snapshot with no pictures', () => {
    const props = getProps({})
    const wrapper = mount(<Widget {...props} />)

    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('Matches Snapshot with a picture uploaded', () => {
    const props = getProps({
      currentCard: 2,
      pictures: {
        2: 'blob:http://localhost:3000/some-hash',
      },
    })
    const wrapper = mount(<Widget {...props} />)

    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('Matches Snapshot with all pictures uploaded', () => {
    const props = getProps({
      currentCard: 2,
      pictures: {
        0: 'blob:http://localhost:3000/some-hash',
        1: 'blob:http://localhost:3000/some-hash',
        2: 'blob:http://localhost:3000/some-hash',
        3: 'blob:http://localhost:3000/some-hash',
        4: 'blob:http://localhost:3000/some-hash',
      },
    })
    const wrapper = mount(<Widget {...props} />)

    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('Matches Snapshot for a card near the start of the list', () => {
    const props = getProps({
      currentCard: 0,
      pictures: {
        1: 'blob:http://localhost:3000/some-hash',
      },
    })
    const wrapper = mount(<Widget {...props} />)

    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('Matches Snapshot for a card near the end of the list', () => {
    const props = getProps({
      currentCard: 4,
      pictures: {
        3: 'blob:http://localhost:3000/some-hash',
      },
    })
    const wrapper = mount(<Widget {...props} />)

    expect(wrapper.debug()).toMatchSnapshot()
  })
})
