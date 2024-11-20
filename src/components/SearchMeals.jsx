"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SearchMeals = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const loadMealData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setError('');
    } catch (error) {
      // console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    loadMealData();
  }, [search]);

  // console.log(meals);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div className="mt-12">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search here..."
        className="p-3 bg-gray-300 rounded-xl mr-6 outline-none border-transparent"
      />
      <button className="rounded-lg p-3 bg-orange-400">Search</button>
      {meals ? (
        <div className="mt-12 grid grid-cols-3 gap-10">
          {meals?.map((meal) => (
            <div key={meal.idMeal} className="border rounded-md p-4">
              <Image
                src={meal?.strMealThumb}
                alt="meal Image"
                width={500}
                height={500}
              ></Image>
              <h4>{meal.strMeal}</h4>
              <p>{meal.strInstructions}</p>
              <button className="p-3 mt-5 bg-green-500">
                <Link href={`/meals/${meal.idMeal}`}>See Details</Link>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No matches found ...</p>
      )}
    </div>
  );
};

export default SearchMeals;
