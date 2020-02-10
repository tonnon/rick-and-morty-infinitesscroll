import styled, { keyframes } from 'styled-components';

export const CardGrid = styled.ul`
  display: ${({ loading }) => (loading ? 'block' : 'grid')};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

export const Card = styled.li`
  color: #fff;
  background: #7159c1;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  section {
    header {
      padding: 5px 0 10px 10px;
      h3 {
        span {
          background: rgba(33, 216, 255, 0.8);
          color: #fff;
          border-radius: 3px;
          padding: 0 6px;
        }
      }
      h3 {
        color: #fff;
        margin-top: 5px;
      }
    }
  }
`;

const spinnerAnimation = keyframes`
  0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 100vh;
  opacity: 1;
  position: relative;
  transition: opacity linear 0.1s;
  &::before {
    animation: 2s linear infinite ${spinnerAnimation};
    border: solid 3px #7159c1;
    border-bottom-color: #21d8ff;
    border-radius: 50%;
    content: '';
    height: 40px;
    left: 50%;
    opacity: inherit;
    position: absolute;
    top: 25%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width: 40px;
    will-change: transform;
  }
`;