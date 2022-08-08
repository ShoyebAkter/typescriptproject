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
            let dataObj=doc.data();
            setData(prev=>[...prev,{name:doc.data().name,date:doc.data().date,image:doc.data().image}]);
            
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
                        <img style={{height:"120px",width:"140px"}} src={singleData.image} alt=""/>
                        </div>
                        
                    )
                })
                : <div>No data</div>
            }
        </div>
    )
}
