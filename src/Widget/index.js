import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withSpinner from './withSpinner'

// Styled
import { Position, Cards, Container, Button, Image } from './wrappers'

const totalCards = 5

export class Widget extends Component {
  render() {
    const { pictures, currentCard, onClickBack, onClickNext } = this.props

    if (pictures.length < 1) {
      return <div>Loading...</div>
    }

    const cards = []
    let index = 0

    for (; index <= totalCards - 1; index++) {
      cards.push(
        <Position key={`card-${index}`} active={currentCard === index}>
          <Image src={pictures[index].src} alt={pictures[index].alt} />
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
