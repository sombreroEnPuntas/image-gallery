import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Cards = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 220px;
  justify-content: center;
  width: 50%;
`

export const Position = styled.span`
  border: ${props =>
    props.active ? '2px solid black' : '2px solid transparent'};
  display: inline-block;
  height: 150px;
  width: 150px;

  &:nth-child(1) {
    transform: rotate(-40deg) scale(0.7) translate(60%, 120%);
    z-index: 0;
  }
  &:nth-child(2) {
    transform: rotate(-20deg) scale(0.9) translate(35%, 25%);
    z-index: 1;
  }
  &:nth-child(3) {
    z-index: 2;
  }
  &:nth-last-child(2) {
    transform: rotate(20deg) scale(0.9) translate(-35%, 25%);
    z-index: 1;
  }
  &:nth-last-child(1) {
    transform: rotate(40deg) scale(0.7) translate(-60%, 120%);
    z-index: 0;
  }
`

export const Image = styled.img`
  background-color: #1cb3ff;
  height: 150px;
  width: 150px;
`

export const Button = styled.button`
  border-radius: 50%;
  border: 0;
  height: 32px;
  padding: 0;
  width: 32px;
  z-index: 3;
`
