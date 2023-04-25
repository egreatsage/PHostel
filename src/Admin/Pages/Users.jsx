import React, { useState, useEffect } from "react";

import "firebase/firestore";
import { db } from "../../Common/dbconfig";

function Users() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setRooms(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleAddRoom = (event) => {
    event.preventDefault();
    const roomName = event.target.elements.roomName.value;
    const roomDescription = event.target.elements.roomDescription.value;
    db.collection("rooms").add({
      name: roomName,
      description: roomDescription,
    });
  };

  const handleDeleteRoom = (roomId) => {
    db.collection("rooms").doc(roomId).delete();
  };

  return (
    <div>
      <h1>Rooms</h1>
      <form onSubmit={handleAddRoom}>
        <label htmlFor="roomName">Room name:</label>
        <input type="text" id="roomName" />
        <label htmlFor="roomDescription">Description:</label>
        <textarea id="roomDescription"></textarea>
        <button type="submit">Add room</button>
      </form>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
