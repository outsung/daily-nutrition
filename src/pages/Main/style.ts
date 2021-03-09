import styled from "styled-components";

import Page from "../pageStyle";

export const MainPage = styled.div`
  ${Page}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 5px;

  color: #000;
  font-size: 100px;
  font-weight: bold;

  cursor: pointer;
`;

export const FoodList = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
`;
export const FoodListItem = styled.div``;

export const Input = styled.input`
  border: solid 1px #dadada;
  border-radius: 6px;

  padding-left: 10px;

  width: 500px;
  height: 45px;

  font-size: 16px;

  background: #fffafa;

  &:focus {
    outline: none;
  }
`;

export const SummaryLink = styled.div`
  position: absolute;
  top: 50%;
  left: -250px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 8px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;

  font-size: 17px;
  font-weight: bold;

  background-color: #fff;

  opacity: 0.3;

  transition: all 0.4s;

  cursor: pointer;

  &:hover {
    left: -260px;

    opacity: 1;
  }
`;
