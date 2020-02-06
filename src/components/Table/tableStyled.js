import styled from 'styled-components';

export const CardGrid = styled.ul`
  display: grid;
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