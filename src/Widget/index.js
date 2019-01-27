import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withSpinner from './withSpinner'

// Components
import DragAndDrop from '../DragAndDrop'

// Styled
import { Button, Cards, Container, ImageEmpty, Position } from './wrappers'

export class Widget extends Component {
  render() {
    const {
      currentCard,
      mainCardIndex,
      onClickBack,
      onClickNext,
      totalCards,
    } = this.props

    const cards = []
    let index = 0

    for (; index <= totalCards - 1; index++) {
      const Picture = index === mainCardIndex ? DragAndDrop : ImageEmpty

      cards.push(
        <Position key={`card-${index}`} active={currentCard === index}>
          <Picture />
        </Position>
      )
    }

    return (
      <Container>
        <Button onClick={onClickBack}>&lt;</Button>

        <Cards>{cards}</Cards>

        <Button onClick={onClickNext}>&gt;</Button>
      </Container>
    )
  }
}

Widget.propTypes = {
  currentCard: PropTypes.number.isRequired,
  mainCardIndex: PropTypes.number.isRequired,
  onClickBack: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  totalCards: PropTypes.number.isRequired,
}

Widget.defaultProps = {
  reviews: [],
}

export default withSpinner(Widget)
