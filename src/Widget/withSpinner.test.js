import React from 'react'
import { shallow } from 'enzyme'

import withSpinner from '../Widget/withSpinner'

const Widget = withSpinner(() => <div>{'Hola!'}</div>)

const getCurrentCard = wrapper => wrapper.state().currentCard

describe('Widget shows behavior for spinner handles:', () => {
  const wrapper = shallow(<Widget />)

  it('Click back (below 0)...', () => {
    expect(getCurrentCard(wrapper)).toEqual(0)
    wrapper.instance().handleClickBack()
    expect(getCurrentCard(wrapper)).toEqual(4)
  })

  it('Click next (above max)...', () => {
    expect(getCurrentCard(wrapper)).toEqual(4)
    wrapper.instance().handleClickNext()
    expect(getCurrentCard(wrapper)).toEqual(0)
  })

  it('Click next...', () => {
    expect(getCurrentCard(wrapper)).toEqual(0)
    wrapper.instance().handleClickNext()
    expect(getCurrentCard(wrapper)).toEqual(1)
  })

  it('Click back...', () => {
    expect(getCurrentCard(wrapper)).toEqual(1)
    wrapper.instance().handleClickBack()
    expect(getCurrentCard(wrapper)).toEqual(0)
  })
})
