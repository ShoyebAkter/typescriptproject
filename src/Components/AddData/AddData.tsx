import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {  getDocs } from "firebase/firestore";

export default function AddData() {

    const db = getFirestore()
    
    const handleRegister = async (event: any) => {
        event.preventDefault();
        const docRef = await addDoc(collection(db, "db"), {
            name: event.target.name.value,
            date: event.target.date.value
        });   
        
    }


    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="date" name="date" id=""  required />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
        </div>
    )
}


