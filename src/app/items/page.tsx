"use client"
import { useEffect,useState } from "react";
import ItemsCard from "../components/itemsCard";
import axios from "axios";
import { Result } from "postcss";



interface ItemPropInterface {
    id: string;
    title: string;
    description: string;
    price: number
}

export default function Items(){

    const [data,setData] = useState([])

    useEffect(()  => {

        const fetchData = async () => {
            
            const response = await axios.get("http://localhost:8080/items")
            const result = JSON.stringify(response.data)
            setData(response.data)
            // console.log(data)  this will not give any output because in use effect data will not update asap 

        }

        fetchData();
    },[])
    
    return(
        <div className="text-black h-screen bg-gradient-to-r from-blue-500 to-blue-900">
            <div className="text-center text-7xl p-10">
                <strong> Browse our collection</strong>
            </div>
            {/* <div>
                {data.map((data:ItemPropInterface,index)=>(
                    <ItemsCard key={index} title={data.title} description={data.description} price={data.price} />
                ))}
                
            </div> */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-900">
                <ItemsCard items={data} />
            </div>
        </div>
    )
}