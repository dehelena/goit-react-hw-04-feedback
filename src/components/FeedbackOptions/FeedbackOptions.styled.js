import styled from 'styled-components';

export const StyledFeedbackOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 600px;

  & button {
    padding: 15px 25px;
    text-transform: capitalize;
    border: 3px solid orange;
    border-radius: 3px;
    background-color: #ff896b;
    color: #fff;
    cursor: pointer;

    transition: background-color 200ms linear, color 200ms linear;
  }

  & button:hover {
    background-color: #fca48d;
    color: #30302f;
  }

  & button:first-child {
    border-color: green;
  }

  & button:last-child {
    border-color: red;
  }
`;
