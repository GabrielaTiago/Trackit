import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  max-height: 500px;
  margin-bottom: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .react-calendar {
    width: 100%;
    height: 100%;
    color: #000000;
    font-family: inherit;
    border-radius: 10px;
    border: none;
    overflow: hidden;
    .finished,
    .unfinished,
    .no-habits {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      cursor: pointer;
    }
    .finished,
    .unfinished {
      color: white;
    }
    .finished {
      background-color: #8cc654;
    }
    .unfinished {
      background-color: #ea5766;
    }
    .react-calendar__navigation {
      height: 55px;
      padding: 1%;
      background-color: #126ba5;
      button {
        color: #ffffff;
      }
      button:enabled:hover,
      button:enabled:focus {
        background-color: transparent;
      }
    }
    .react-calendar__navigation__label {
      font-family: inherit;
      font-weight: 500;
      font-size: 18px;
      font-family: inherit;
      color: #ffffff;
    }
    .react-calendar__tile {
      max-height: 75px;
      padding: 2%;
      aspect-ratio: 1;
      color: inherit;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background-color: inherit;
      .no-habits {
        background-color: #dbdbdb;
      }
    }
    button.react-calendar__month-view__days__day:enabled:hover {
      cursor: initial;
    }
    .react-calendar__month-view__days__day--weekend {
      color: red;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      color: #757575;
    }
    .react-calendar__tile--active {
      background-color: inherit;
    }
  }
`;

export { Container };
