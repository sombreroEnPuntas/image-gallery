import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withSpinner from './withSpinner'

// Components
import DragAndDrop from '../DragAndDrop'

// Styled
import { Button, Cards, Container, Image, Position } from './wrappers'

const totalCards = 5
const mainCardIndex = 2

export class Widget extends Component {
  render() {
    const { currentCard, onClickBack, onClickNext, pictures } = this.props

    const cards = []
    let index = 0

    for (; index <= totalCards - 1; index++) {
      const Picture = index === mainCardIndex ? DragAndDrop : Image

      cards.push(
        <Position key={`card-${index}`} active={currentCard === index}>
          <Picture src={pictures[index].src} alt={pictures[index].alt} />
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
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ alt: PropTypes.string, src: PropTypes.string })
  ),
  currentCard: PropTypes.number.isRequired,
  onClickBack: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
}

Widget.defaultProps = {
  reviews: [],
}

export default withSpinner(Widget)
