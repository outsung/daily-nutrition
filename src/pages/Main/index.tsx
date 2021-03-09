import React, { useState } from "react";
import history from "../../utils/browserHistory";

import {
  MainPage,
  MainBox,
  Title,
  Input,
  FoodList,
  FoodListItem,
  SummaryLink,
} from "./style";

type foodType = string;

function Main() {
  const [eatenFoodList, setEatenFoodList] = useState<foodType[]>([]);
  const resetEatenFoodList = () =>
    setTimeout(() => {
      setEatenFoodList([]);
    }, 1000);
  const addEatenFoodList = (food: string) => {
    setEatenFoodList([...eatenFoodList, food]);
    resetState();
  };

  const [mainField, setMainField] = useState({
    foodName: "",
  });
  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMainField({
      ...mainField,
      [name]: value,
    });
  };
  const resetState = () => {
    setMainField({
      foodName: "",
    });
  };

  const { foodName } = mainField;
  return (
    <MainPage>
      <MainBox>
        <SummaryLink onClick={() => history.push("./Summary")}>
          오늘 먹은 음식 보기
        </SummaryLink>
        <Title
          onClick={() => {
            resetEatenFoodList();
            history.push("./#");
          }}
        >
          냠
        </Title>

        <FoodList>
          {eatenFoodList.map((eatenFood, k) => (
            <FoodListItem key={k}>{eatenFood}</FoodListItem>
          ))}
        </FoodList>

        <Input
          name="foodName"
          placeholder="먹은 음식"
          value={foodName}
          onChange={changeState}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") addEatenFoodList(foodName);
          }}
        />
      </MainBox>
    </MainPage>
  );
}

export default Main;
