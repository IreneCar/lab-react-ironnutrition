// src/App.js
import './App.css';
import foods from "./foods.json";
import React, {useState} from "react";
import FoodBox from './components/FoodBox.js';
import { Row, Divider, Button } from 'antd';

function App() {
  const [food,setFood] = useState(foods);  



  return <div className="App">
    <h1>Food List</h1>

    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map((foodElem) => {
          return (
            <FoodBox 
            name = {foodElem.name} 
            calories = {foodElem.calories} 
            image = {foodElem.image} 
            servings = {foodElem.servings}/>
      
          );
        })}
      </Row>
  
  </div>;
}
export default App;