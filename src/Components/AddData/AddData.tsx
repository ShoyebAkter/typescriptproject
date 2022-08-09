import React, { useEffect, useState } from 'react'
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { app, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import IDataType from '../../types/datatype';
import GetData from '../GetData/GetData';

export default function AddData() {
    const [imageUrl,setImageUrl]=useState<string>("")
    const [data,setData] = useState<
    Array<IDataType>
>([]);
    const db = getFirestore()
    // console.log(imageRef);
    const handleRegister = async (event: React.SyntheticEvent) => {
        event.preventDefault(); 
        const target = event.target as typeof event.target & {
            date: { value: string };
            name: { value: string };
        };
        
        await addDoc(collection(db, "users"), {
            date: target.date.value,
            image: imageUrl,
            name: target.name.value
        }); 
    }

    const handleFile=async(e:any)=>{
           const image=e.target.files[0];
           const imageStorageRef=ref(storage,`images/${image.name}`);
           const uploadData=uploadBytesResumable(imageStorageRef,image).then(
            ()=>{
                getDownloadURL(imageStorageRef)
                .then(url=>setImageUrl(url))
            }
           )

        console.log(imageUrl)
    }
    useEffect(()=>{
        const showData=async()=>{
            const querySnapshot =await getDocs(collection(db, "users"));
            // console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                setData(prev=>[...prev,{name:doc.data().name,date:doc.data().date,image:doc.data().image}]);
                
            });
        }
        showData()
    },[])
    
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Book Name' /><br/>

                <input type="file" onChange={handleFile}/><br/>
                <input type="date" name="date" id=""  required /><br/>
                <input
                    className=' mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Add" />
            </form>
            <GetData data={data}/>
        </div>
    )
}


