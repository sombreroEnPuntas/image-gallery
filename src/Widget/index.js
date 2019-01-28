import React from 'react'
import PropTypes from 'prop-types'

import withSpinner from './withSpinner'
import withPictures from './withPictures'

// Components
import DragAndDrop from '../DragAndDrop'

// Styled
import {
  Button,
  Cards,
  Container,
  Image,
  ImageEmpty,
  Position,
} from './wrappers'

const displayedCards = 5

const Widget = ({
  addPicture,
  currentCard,
  onClickBack,
  onClickNext,
  pictures,
  removePicture,
  totalCards,
}) => {
  const cards = []
  const halfCards = Math.floor(displayedCards / 2)
  let index = -halfCards

  for (; index <= halfCards; index++) {
    let key = currentCard + index
    if (key < 0) key = key + totalCards
    if (key >= totalCards) key = key - totalCards

    cards.push(
      <Position key={`card-${index}-${pictures[key]}`} active={index === 0}>
        {index === 0 ? (
          <DragAndDrop
            addPicture={addPicture(key)}
            removePicture={removePicture(key)}
            src={pictures[key]}
          />
        ) : pictures[key] ? (
          <Image src={pictures[key]} alt={`Picture ${key + 1}`} />
        ) : (
          <ImageEmpty />
        )}
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

Widget.propTypes = {
  addPicture: PropTypes.func.isRequired,
  currentCard: PropTypes.number.isRequired,
  onClickBack: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  pictures: PropTypes.object,
  removePicture: PropTypes.func.isRequired,
  totalCards: PropTypes.number.isRequired,
}

Widget.defaultProps = {}

export default withPictures(withSpinner(Widget))
