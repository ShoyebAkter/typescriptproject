import React, { useState } from 'react'
import { collection, addDoc,getFirestore } from "firebase/firestore";

export default function AddData() {
    const db=getFirestore()
    const [name,setName]=useState<string>("")
    const [date,setDate]=useState<string>("")

    const handleRegister=async(event:any)=>{
        event.preventDefault();
        setName(event.target.name.value);
        setDate(event.target.date.value);
        const docRef = await addDoc(collection(db, "db"), {
            name: name,
            date: date
          });
        setName("")
        setDate("")
    }


  return (
    <div>
        <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="date" name="date" id="" placeholder='Place your date' required />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
    </div>
  )
}


