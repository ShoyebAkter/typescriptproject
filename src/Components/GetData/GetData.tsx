import React from 'react'
import { Button, Card } from 'react-bootstrap';
import IDataType from '../../types/datatype';

interface GetDataProps {
    data: IDataType[]
}

const GetData: React.FunctionComponent<GetDataProps> = ({ data }) => {

    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                {
                    data ?
                        data.map((singleData, index) => {
                            return (
                                    <div>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={singleData.image} />
                                            <Card.Body>
                                                <Card.Title>Book Name: {singleData.name}</Card.Title>
                                                <Card.Text>
                                                Date: {singleData.date}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
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