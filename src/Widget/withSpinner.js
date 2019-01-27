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

    handleClickBack = () => {
      this.setState(prevState => ({
        currentCard:
          prevState.currentCard > 0
            ? prevState.currentCard - 1
            : this.props.totalCards - 1,
      }))
    }

    handleClickNext = () => {
      this.setState(prevState => ({
        currentCard:
          prevState.currentCard < this.props.totalCards - 1
            ? prevState.currentCard + 1
            : 0,
      }))
    }

    render() {
      const { ...passThroughProps } = this.props
      const { currentCard } = this.state

      const newProps = {
        currentCard,
        onClickBack: this.handleClickBack,
        onClickNext: this.handleClickNext,
        onClickToggle: this.handleToggle,
      }

      return <WrappedComponent {...passThroughProps} {...newProps} />
    }
  }

export default withSpinner
