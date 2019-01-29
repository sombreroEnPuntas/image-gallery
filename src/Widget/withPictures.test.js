import React from 'react'
import { shallow } from 'enzyme'

import withPictures from '../Widget/withPictures'

// Mocks
const legitImageFile = { type: 'image/png', legit: 'mock file' }
const legitPDFFile = { type: 'application/pdf', legit: 'mock file' }

const Widget = withPictures(() => <div>{'Hola!'}</div>)

describe('Widget shows behavior for Picture handles', () => {
  const wrapper = shallow(<Widget />)

  it('handleAddPicture invalid', () => {
    wrapper.instance().handleAddPicture(0)({
      image: 'blob:http://localhost:3000/some-other-hash',
      file: legitPDFFile,
    })

    expect(wrapper.state()).toEqual({ pictures: {} })
  })

  it('handleAddPicture valid', () => {
    wrapper.instance().handleAddPicture(0)({
      image: 'blob:http://localhost:3000/some-hash',
      file: legitImageFile,
    })

    expect(wrapper.state()).toEqual({
      pictures: { 0: 'blob:http://localhost:3000/some-hash' },
    })
  })

  it('handleRemovePicture', () => {
    wrapper.instance().handleRemovePicture(0)()

    expect(wrapper.state()).toEqual({ pictures: {} })
  })
})
