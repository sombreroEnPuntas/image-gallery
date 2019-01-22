import React, { Component } from 'react'
import PropTypes from 'prop-types'

const withSpinner = WrappedComponent =>
  class WithSpinner extends Component {
    static propTypes = {
      totalCards: PropTypes.number.isRequired,
      initialCard: PropTypes.number.isRequired,
    }

    static defaultProps = {
      initialCard: 0,
    }

    state = {
      currentCard: this.props.initialCard,
    }

    handleOnClickBack = () => {
      this.setState(prevState => ({
        currentCard:
          prevState.currentCard > 0
            ? prevState.currentCard - 1
            : this.props.totalCards - 1,
      }))
    }

    handleOnClickNext = () => {
      this.setState(prevState => ({
        currentCard:
          prevState.currentCard < this.props.totalCards - 1
            ? prevState.currentCard + 1
            : 0,
      }))
    }

    render() {
      const { ...passThroughProps } = this.props

      const newProps = {
        currentCard: this.state.currentCard,
        onClickBack: this.handleOnClickBack,
        onClickNext: this.handleOnClickNext,
      }

      return <WrappedComponent {...passThroughProps} {...newProps} />
    }
  }

export default withSpinner
