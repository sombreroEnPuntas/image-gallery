import isMobile from './isMobile'

import { mobileBreakpointInPixels } from '../data/constants'

const resizeScreen = size => {
  global.innerWidth = size
  // eslint-disable-next-line no-undef
  global.dispatchEvent(new Event('resize'))
}

describe('isMobile', () => {
  describe.each`
    size    | expected
    ${320}  | ${true}
    ${768}  | ${false}
    ${1281} | ${false}
  `('at $size', ({ size, expected }) => {
    it(`recognizes ${expected ? 'mobile' : 'desktop'} breakpoint`, () => {
      resizeScreen(size)
      const actual = isMobile(mobileBreakpointInPixels)

      expect(actual).toBe(expected)
    })
  })
})
