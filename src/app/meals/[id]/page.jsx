import Image from 'next/image';
import React from 'react';

const getMealData = async (id) =>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const {meals} = await res.json();
    const [meal] = meals;
    return meal;
};

// set metadata
export const generateMetadata = async ({params}) =>{
    const mealId = (await params).id;
    const meal = await getMealData(mealId);
    const {strMeal, strInstructions, strMealThumb} = meal;

    return {
        title: {
            absolute: `${strMeal}`
        },
        description: `${strInstructions}`,
        keywords: strInstructions.split(' ')
    };
};

const MealDetailsPage = async ({params}) => {
    const id = (await params).id;

    // const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    // const {meals} = await res.json();
    // const [meal] = meals;
    // // console.log(meal);

    const meal = await getMealData(id);
    const {strMeal, strInstructions, strMealThumb} = meal;
    return (
        <div className='p-20'>
            <Image src={strMealThumb} alt='meal image' width={500} height={500}></Image>
            <h4>Title: {strMeal}</h4>
            <p>Recipe: {strInstructions}</p>
        </div>
    );
};

export default MealDetailsPage;