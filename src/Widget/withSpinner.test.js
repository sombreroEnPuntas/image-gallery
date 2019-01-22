import React from 'react'
import { shallow } from 'enzyme'

import withSpinner from '../Widget/withSpinner'

// Mocks
import mockPictures from '../mocks/pictures'

const Widget = withSpinner(() => <div>{'Hola!'}</div>)

const getCurrentCard = wrapper => wrapper.state().currentCard

describe('Widget shows behavior for:', () => {
  const wrapper = shallow(
    <Widget pictures={mockPictures} totalCards={mockPictures.length} />
  )

  it('Click back (below 0)...', () => {
    expect(getCurrentCard(wrapper)).toEqual(0)
    wrapper.instance().handleOnClickBack()
    expect(getCurrentCard(wrapper)).toEqual(4)
  })

  it('Click next (above max)...', () => {
    expect(getCurrentCard(wrapper)).toEqual(4)
    wrapper.instance().handleOnClickNext()
    expect(getCurrentCard(wrapper)).toEqual(0)
  })

  it('Click next...', () => {
    expect(getCurrentCard(wrapper)).toEqual(0)
    wrapper.instance().handleOnClickNext()
    expect(getCurrentCard(wrapper)).toEqual(1)
  })

  it('Click back...', () => {
    expect(getCurrentCard(wrapper)).toEqual(1)
    wrapper.instance().handleOnClickBack()
    expect(getCurrentCard(wrapper)).toEqual(0)
  })
})
