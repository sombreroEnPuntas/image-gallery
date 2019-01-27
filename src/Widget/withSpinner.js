import React, { Component } from 'react'
import PropTypes from 'prop-types'

const totalCards = 5
const mainCardIndex = 2

const withSpinner = WrappedComponent =>
  class WithSpinner extends Component {
    static propTypes = {
      initialCard: PropTypes.number.isRequired,
    }

    static defaultProps = {
      initialCard: 0,
    }

    state = {
      currentCard: this.props.initialCard,
    }

    handleClickBack = () => {
      this.setState(prevState => ({
        currentCard:
          prevState.currentCard > 0
            ? prevState.currentCard - 1
            : totalCards - 1,
      }))
    }

    handleClickNext = () => {
      this.setState(prevState => ({
        currentCard:
          prevState.currentCard < totalCards - 1
            ? prevState.currentCard + 1
            : 0,
      }))
    }

    render() {
      const { ...passThroughProps } = this.props
      const { currentCard } = this.state

      const newProps = {
        currentCard,
        mainCardIndex,
        onClickBack: this.handleClickBack,
        onClickNext: this.handleClickNext,
        onClickToggle: this.handleToggle,
        totalCards,
      }

      return <WrappedComponent {...passThroughProps} {...newProps} />
    }
  }

export default withSpinner
