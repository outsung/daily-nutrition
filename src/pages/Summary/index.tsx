import React from "react";
import history from "../../utils/browserHistory";

import {
  SummaryPage,
  SummaryBox,
  SummaryGraph,
  FoodList,
  FoodListItem,
  MainLink,
} from "./style";

const eatenFoodList = ["밥", "미역국", "냠", "사과", "배"];

function Summary() {
  // 로컬 스토리지에서 가져오기

  return (
    <SummaryPage>
      <SummaryBox>
        <MainLink onClick={() => history.push("./main")}>
          먹은음식 기록하기
        </MainLink>
        <SummaryGraph>영양 그래프</SummaryGraph>
        <FoodList>
          {eatenFoodList.map((eatenFood, k) => (
            <FoodListItem key={k}>{eatenFood}</FoodListItem>
          ))}
        </FoodList>
      </SummaryBox>
    </SummaryPage>
  );
}

export default Summary;
