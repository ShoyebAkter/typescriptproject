import React, { useEffect, useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {  getDocs } from "firebase/firestore";
import { app, storage } from '../../firebase';
import { getDownloadURL, listAll, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

export default function AddData() {
    const [imageList,setImageList]=useState<string[]>([])
    const [imageUrl,setImageUrl]=useState<string>("")
    const db = getFirestore()
    const imageRef=ref(storage,"images/");
    // console.log(imageRef);
    const handleRegister = async (event: any) => {
        event.preventDefault(); 
        
        const docRef = await addDoc(collection(db, "users"), {
            date: event.target.date.value,
            image: imageUrl,
            name: event.target.name.value
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
    useEffect(()=>{
        
    },[])
    
    

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="file" onChange={handleFile}/>
                <input type="date" name="date" id=""  required />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
        </div>
    )
}


