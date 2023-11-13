// SubjectList.jsx

import React , { useState }from 'react';
import './design.css';

export default function SubjectList(props) {
  let dogs_courses = props.data;

  const handleButtonClick = (dog) => {
    // Handle button click add to cart here
    console.log(`Added ${dog.code} to cart!`);
    console.log(`Added ${dog.quantity} to cart!`);
    dog.quantity=dog.quantity+1
    const newDog= {id:dog.id ,code:dog.code,quantity:dog.quantity+1}
    setDogs([...doggies,newDog]);
    
  };
  const handleMinusButtonClick = (dog) => {
    // Handle button click add to cart here
    const newDog= {id:dog.id ,code:dog.code,quantity:dog.quantity-1}
    setDogs([...doggies,newDog]);
    dog.quantity=dog.quantity-1

    
  };



  const handleHomeButtonClick = () => {
    // Handle "Home" button click logic here
    console.log('Home button clicked');
    // Redirect to the home page or perform any other action
  };

  const handleReloadButtonClick = () => {
    // Handle "Reload" button click logic here
    console.log('Reload button clicked');
    // Reload the component or perform any other action
  };

  const [doggies,setDogs]= useState(dogs_courses)


  return (
    <>
      <div className="menu-bar">
        <h1>LazaDOGS x Shoppuppy</h1>
        <button onClick={handleHomeButtonClick}>Home</button>
        <button onClick={handleReloadButtonClick}>Reload</button>
      </div>
      <div className="subject-list-container">
        {dogs_courses.map((dogs_course) => (
          <div key={dogs_course.id} className="subject-item">
            <div className="subject-info">
              <p>{dogs_course.code}</p>
              <img src={dogs_course.url} alt={dogs_course.code} />
            </div>
            
            {/* Add a button to each item */}
            <button onClick={() => handleButtonClick(dogs_course)}>
              Click me
            </button>
          </div>
        ))}
      </div>
      <h1>Shopping Cart Total {doggies.length-3}</h1>
      <div className="subject-list-container">
        
        {doggies.slice(0, 3).map((dogs_course) => (
          <div key={dogs_course.id} className="subject-item">
            <div className="subject-info">
              <p>{dogs_course.code}   |   Quantity: {dogs_course.quantity} <button onClick={() => handleMinusButtonClick(dogs_course)}>
             X
            </button></p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
