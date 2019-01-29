import React, { Component } from 'react'

const withPictures = WrappedComponent =>
  class WithPictures extends Component {
    state = {
      pictures: {},
    }

    handleAddPicture = index => ({ file, image }) =>
      !!image &&
      !!file &&
      file.type.includes('image/') &&
      this.setState(prevState => {
        let newState = Object.assign({}, prevState)
        newState.pictures[index] = image
        return newState
      })

    handleRemovePicture = index => () =>
      this.setState(prevState => {
        let newState = Object.assign({}, prevState)
        delete newState.pictures[index]
        return newState
      })

    render() {
      const { ...passThroughProps } = this.props
      const { pictures } = this.state

      const newProps = {
        pictures,
        addPicture: this.handleAddPicture,
        removePicture: this.handleRemovePicture,
      }

      return <WrappedComponent {...passThroughProps} {...newProps} />
    }
  }

export default withPictures
