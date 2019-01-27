import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Library Components
import ImageDropZone from 'react-image-dropzone'

class DragAndDrop extends Component {
  state = {
    file: null,
  }

  static propTypes = {
    src: PropTypes.string,
  }

  static defaultProps = {}

  handleDrop = ({ file, image }) => {
    if (!!image && !!file && file.type.includes('image/')) {
      this.setState({
        file,
      })
    }
  }

  handleRemove = () => {
    this.setState({
      file: null,
    })
  }

  render() {
    const { src } = this.props

    return (
      <ImageDropZone
        anySize
        height={150}
        imageDefault={src}
        imageDeleted={this.handleRemove}
        imagePicked={this.handleDrop}
        // showButton
        // showDeleteButton
        style={{ width: '150px', height: '150px' }}
        width={150}
      />
    )
  }
}

export default DragAndDrop
