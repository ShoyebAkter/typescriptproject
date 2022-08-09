import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export default function AddData() {
    const [imageUrl,setImageUrl]=useState<string>("")
    const db = getFirestore()
    // console.log(imageRef);
    const handleRegister = async (event: React.SyntheticEvent) => {
        event.preventDefault(); 
        const target = event.target as typeof event.target & {
            date: { value: string };
            name: { value: string };
            image: {value:string};
        };
        
        const docRef = await addDoc(collection(db, "users"), {
            date: target.date.value,
            image: imageUrl,
            name: target.name.value
        }); 
    }

    const handleFile=async(e:any)=>{
           const image=e.target.files[0];
           const imageStorageRef=ref(storage,`images/${image.name}`);
           const uploadData=uploadBytesResumable(imageStorageRef,image)
           uploadData.on(
            "state_changed",
            ()=>{
                getDownloadURL(uploadData.snapshot.ref)
                .then(url=>setImageUrl(url))
            }
        )

        console.log(imageUrl)
    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' /><br/>

                <input type="file" onChange={handleFile}/><br/>
                <input type="date" name="date" id=""  required /><br/>
                <input
                    className=' mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Add" />
            </form>
        </div>
    )
}


