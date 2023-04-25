import React from 'react'
import { db } from "../../Common/dbconfig";

const Users = () => {
    const docRef = db.collection('your_collection_name').doc('your_document_id'); // Replace 'your_collection_name' with the actual name of your collection and 'your_document_id' with the actual document ID

// Fetch the document
docRef.get()
.then(doc => {
  if (doc.exists) {
    // Store the document data in an array
    const dataArray = [];
    dataArray.push(doc.data());

    // Get the length of the array
    const arrayLength = dataArray.length;

    console.log('Document Data:', dataArray);
    console.log('Array Length:', arrayLength);
  } else {
    console.log('Document does not exist');
  }
})
.catch(error => {
  console.error('Error getting document:', error);
});

  return (
    <div>Users</div>
  )
}

export default Users