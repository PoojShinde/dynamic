import React, { useState } from 'react'

export default function Dynamic() {

  const [hobbies , setHobbies] = useState([''])

  
  
    // Handle input change
    const handleInputChange = (index, event) => {
      const newHobbies = [...hobbies];
      newHobbies[index] = event.target.value;
      setHobbies(newHobbies);
    };
  
    // Add a new hobby input field
    const handleAddField = () => {
      setHobbies([...hobbies, '']);
    };
  
    // Remove a hobby input field
    const handleRemoveField = (index) => {
      const newHobbies = hobbies.filter((_, i) => i !== index);
      setHobbies(newHobbies);
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted Hobbies:', hobbies);
    };
  
   
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Hobbies</h2>
      {hobbies.map((hobby, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={hobby}
            onChange={(e) => handleInputChange(index, e)}
            
            required
            style={{ padding: '8px', width: '70%' }}
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Hobby
      </button>
      <br />
      <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
        Submit
      </button>
    </form>
    </>
  )
}

