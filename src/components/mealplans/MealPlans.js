import React from 'react';
import './MealPlans.css';
import mealPlansData from '../../data/mealplansdata';

const MealPlans = () => {
    return (
        <div className="mealplans">
            <h2 className="mealplans-title">Our Meal Plans</h2>
            <div className="mealplans-list">
                {mealPlansData.map((meal, index) => (
                    <div className="mealplans-item" key={index}>
                        <h3 className="mealplans-name">{meal.name}</h3>
                        <p className="mealplans-description">{meal.description}</p>
                        <p className="mealplans-calories">Calories: {meal.calories} kcal</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPlans;
  