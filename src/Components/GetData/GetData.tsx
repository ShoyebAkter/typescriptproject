import React, { useEffect, useState } from 'react'
import { collection,getFirestore,getDocs } from "firebase/firestore";




export default function GetData() {
    const [data,setData] = useState<
    Array<{
        name: string,
        date: string
    }>
>([]);
    const db = getFirestore()
    const showData=async()=>{
        const querySnapshot =await getDocs(collection(db, "db"));
        // console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            let dataObj=doc.data();
            setData(prev=>[...prev,{name:doc.data().name,date:doc.data().date}]);
            
        });
    }

    
    
    return (
        <div>
            <button onClick={showData}>Show</button>
            {
                data ?
                data.map(singleData=>{
                    return(
                        <div>
                        <div>{singleData.name}</div>    
                        <div>{singleData.date}</div>
                        </div>
                        
                    )
                })
                : <div>No data</div>
            }
        </div>
    )
}
