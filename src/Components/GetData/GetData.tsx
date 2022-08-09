import React, { useEffect, useState } from 'react'
import { collection,getFirestore,getDocs } from "firebase/firestore";
import IDataType from '../../types/datatype';

export default function GetData() {
    const [data,setData] = useState<
    Array<IDataType>
>([]);
    const db = getFirestore()
    const showData=async()=>{
        const querySnapshot =await getDocs(collection(db, "users"));
        // console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            setData(prev=>[...prev,{name:doc.data().name,date:doc.data().date,image:doc.data().image}]);
            
        });
    }
    
    return (
        <div>
            <button className='mt-5' onClick={showData}>Show Data</button>
            
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>{
                data ?
                data.map((singleData,index)=>{
                    return(
                        <div  key={index}>
                        <div>Name: {singleData.name}</div>    
                        <div>Date: {singleData.date}</div>
                        <img style={{height:"120px",width:"140px"}} src={singleData.image} alt=""/>
                    
                        </div>
                        
                    )
                })
                : <div>No data</div>
            }
            </div>
        </div>
    )
}
