import React, { useEffect, useState } from 'react'
import { collection,getFirestore,getDocs } from "firebase/firestore";

export default function GetData() {
    const[data,setData]=useState<
    Array<{
        name: string,
        date: string
    }>
>([])
    const db = getFirestore()
    const showData=async()=>{
        const querySnapshot =await getDocs(collection(db, "db"));
        // console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            let dataObj:object=doc.data();
            // setData(dataObj);
            console.log(dataObj)
        });
    }

    useEffect(()=>{
        showData();
    },[])
    
    return (
        <div>
            
        </div>
    )
}
