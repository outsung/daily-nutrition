import styled from "styled-components";

import Page from "../pageStyle";

export const SummaryPage = styled.div`
  ${Page}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SummaryBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SummaryGraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
  border-radius: 200px;

  width: 300px;
  height: 300px;

  background-color: #a4b2f8;

  color: #000;
  font-size: 30px;
  font-weight: bold;

  cursor: pointer;
`;

export const FoodList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
`;
export const FoodListItem = styled.div``;

export const MainLink = styled.div`
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
