import React from 'react'
import IDataType from '../../types/datatype';

interface GetDataProps{
    data: IDataType[]
}

const GetData:React.FunctionComponent<GetDataProps>=({data})=> {
       
    return (
        <div>
            
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
                {
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
export default GetData