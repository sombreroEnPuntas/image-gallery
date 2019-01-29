import styled from 'styled-components'

import {
  cardBackgroundColor,
  cardSizeBigerInPixels,
  cardSizeSmallInPixels,
  mobileBreakpointInPixels,
} from '../data/constants'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2em 0;

  @media (min-width: ${mobileBreakpointInPixels}px) {
    padding: 2em 0 8em;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: ${cardSizeSmallInPixels}px;
  width: ${cardSizeSmallInPixels + 40}px;

  @media (min-width: ${mobileBreakpointInPixels}px) {
    height: ${cardSizeBigerInPixels}px;
    width: ${cardSizeBigerInPixels + 40}px;
  }
`

export const Position = styled.span`
  border: ${props =>
    props.active ? '2px solid transparent' : '2px solid black'};
  display: inline-block;
  height: ${cardSizeSmallInPixels}px;
  width: ${cardSizeSmallInPixels}px;

  @media (min-width: ${mobileBreakpointInPixels}px) {
    height: ${cardSizeBigerInPixels}px;
    width: ${cardSizeBigerInPixels}px;
  }

  &:nth-child(1) {
    transform: rotate(-40deg) scale(0.45) translate(220%, 220%);
    z-index: 0;

    @media (min-width: ${mobileBreakpointInPixels}px) {
      transform: rotate(-40deg) scale(0.7) translate(60%, 120%);
    }
  }
  &:nth-child(2) {
    transform: rotate(-20deg) scale(0.65) translate(100%, 25%);
    z-index: 1;

    @media (min-width: ${mobileBreakpointInPixels}px) {
      transform: rotate(-20deg) scale(0.9) translate(35%, 25%);
    }
  }
  &:nth-child(3) {
    z-index: 2;
  }
  &:nth-last-child(2) {
    transform: rotate(20deg) scale(0.65) translate(-100%, 25%);
    z-index: 1;
    @media (min-width: ${mobileBreakpointInPixels}px) {
      transform: rotate(20deg) scale(0.9) translate(-35%, 25%);
    }
  }
  &:nth-last-child(1) {
    transform: rotate(40deg) scale(0.45) translate(-220%, 220%);
    z-index: 0;

    @media (min-width: 768px) {
      transform: rotate(40deg) scale(0.7) translate(-60%, 120%);
    }
  }
`

export const Image = styled.img`
  background-color: ${cardBackgroundColor};
  height: ${cardSizeSmallInPixels}px;
  width: ${cardSizeSmallInPixels}px;

  @media (min-width: ${mobileBreakpointInPixels}px) {
    height: ${cardSizeBigerInPixels}px;
    width: ${cardSizeBigerInPixels}px;
  }
`

export const ImageEmpty = styled.div`
  background-color: ${cardBackgroundColor};
  height: ${cardSizeSmallInPixels}px;
  width: ${cardSizeSmallInPixels}px;

  @media (min-width: ${mobileBreakpointInPixels}px) {
    height: ${cardSizeBigerInPixels}px;
    width: ${cardSizeBigerInPixels}px;
  }
`

export const Button = styled.button`
  border-radius: 50%;
  border: 0;
  font-size: 32px;
  height: 64px;
  padding: 0;
  width: 64px;
  z-index: 3;

  @media (min-width: ${mobileBreakpointInPixels}px) {
    font-size: unset;
    height: 32px;
    width: 32px;
  }
`
