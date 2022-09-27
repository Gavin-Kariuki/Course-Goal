import React, { useState } from 'react';

import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });

  };

  return (
    <div>
      <CourseInput onAddGoal={addGoalHandler} />
    </div>
  );
}

export default App;
