import React, { useEffect, useState } from 'react'
import { collection,getFirestore,getDocs } from "firebase/firestore";
import IDataType from '../../types/datatype';

interface GetDataProps{
    data: IDataType[]
}

export default function GetData({data}:GetDataProps) {
       
    return (
        <div>
            
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>{
                data ?
                data.map((singleData,index)=>{
                    return(
                        <div  key={index} className="m-5">
                        <div>Book Name: {singleData.name}</div>    
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
