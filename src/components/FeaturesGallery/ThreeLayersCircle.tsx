import styled from 'styled-components';
import { media } from '@/utils/media';
import HeroImage from '@/assets/heroImage.jpg';

export interface ThreeLayersCircleProps {
  $basecolor: string;
  $secondcolor: string;
}

const ThreeLayersCircle = styled.div<ThreeLayersCircleProps>`
  position: relative;
  display: inline-block;
  opacity: 0.8;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 100rem;
  background: rgb(${(p) => p.$basecolor});
  z-index: 0;
  transition: background 0.2s;

  ${media('<=tablet')} {
    width: 4rem;
    height: 4rem;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100rem;
    z-index: -1;
  }

  &:after {
    width: 3rem;
    height: 3rem;
    background: rgb(${(p) => p.$secondcolor});
    z-index: -2;
  }

  &:before {
    width: 2rem;
    height: 2rem;
    background: rgb(${(p) => p.$basecolor});
  }
`;

export default ThreeLayersCircle;
