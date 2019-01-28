import React from 'react'
import PropTypes from 'prop-types'

// Library Components
import ImageDropZone from 'react-image-dropzone'

const DragAndDrop = ({ addPicture, removePicture, src }) => (
  <ImageDropZone
    anySize
    height={150}
    imageDefault={src}
    imageDeleted={removePicture}
    imagePicked={addPicture}
    // showButton
    // showDeleteButton
    style={{ width: '150px', height: '150px' }}
    width={150}
  />
)

DragAndDrop.propTypes = {
  addPicture: PropTypes.func.isRequired,
  removePicture: PropTypes.func.isRequired,
  src: PropTypes.string,
}

DragAndDrop.defaultProps = {}

export default DragAndDrop
