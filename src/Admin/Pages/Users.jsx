import React, { useState } from 'react';
import dbdataservice from '../../Common/Operations'


const Users = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    name: '',
    capacity: '',
    description: '',
    array1: [],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prevState) => ({ ...prevState, [name]: value }));
  };

 const handleArray1Change = (e) => {
  const { value } = e.target;
  setNewRoom((prevState) => ({ ...prevState, array1: [value] }));
};

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dbdataservice.addRoom(newRoom);
      setNewRoom({
        name: '',
        capacity: '',
        description: '',
        array1: [],
        
      });
     alert('successfull')
    } catch (error) {
    alert(error.message)
    }
  };

  return (
    <div>
      <h1>Room Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newRoom.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="capacity"
          value={newRoom.capacity}
          onChange={handleInputChange}
          placeholder="Capacity"
        />
        <input
          type="text"
          name="description"
          value={newRoom.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="text"
          value={newRoom.array1Value}
          onChange={handleArray1Change}
          placeholder="Array 1 Value"
        />
       
        <button className='border-black p-5 border' type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default Users;
