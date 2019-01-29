import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Library Components
import ImageDropZone from 'react-image-dropzone'

// Utils
import isMobile from '../utils/isMobile'

// Styled
import { Button } from './wrappers'

import {
  cardSizeBigerInPixels,
  cardSizeSmallInPixels,
  mobileBreakpointInPixels,
} from '../data/constants'

// No need to test library functionality, or browser functionality!
/* istanbul ignore next */
const clickAdd = () =>
  // eslint-disable-next-line no-undef
  document.getElementsByClassName('button-container')[0].children[0].click()

/* istanbul ignore next */
const clickRemove = () =>
  // eslint-disable-next-line no-undef
  document.getElementsByClassName('button-container')[1].children[0].click()

const DragAndDrop = ({ addPicture, removePicture, src }) => {
  const isMobileView = isMobile(mobileBreakpointInPixels)
  const size = isMobileView ? cardSizeSmallInPixels : cardSizeBigerInPixels
  const label = src ? 'X' : '+'
  const action = src ? clickRemove : clickAdd

  return (
    <Fragment>
      <ImageDropZone
        anySize
        height={size}
        imageDefault={src}
        imageDeleted={removePicture}
        imagePicked={addPicture}
        showButton
        showDeleteButton
        width={size}
      />
      {(isMobileView || src) && <Button onClick={action}>{label}</Button>}
    </Fragment>
  )
}

DragAndDrop.propTypes = {
  addPicture: PropTypes.func.isRequired,
  removePicture: PropTypes.func.isRequired,
  src: PropTypes.string,
}

DragAndDrop.defaultProps = {}

export default DragAndDrop
