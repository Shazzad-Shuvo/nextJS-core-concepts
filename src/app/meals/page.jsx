import SearchMeals from "@/components/SearchMeals";
import React from "react";

import style from "./style.module.css";

export const metadata = {
  title: "Meals",
  description:
    "Meals page where all the meals are shown and also contains a searchbar for searching meal",
};

const MealsPage = () => {
  return (
    <div className="text-center p-12 mt-20">
      <h2 className="text-3xl text-orange-600 py-5">Choose your Meal</h2>
      <p className={`py-5 ${style.font_tomato}`}>
        Find your meal of the day, just search here ...
      </p>
      <SearchMeals></SearchMeals>
    </div>
  );
};

export default MealsPage;
