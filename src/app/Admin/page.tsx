"use client"
import { ChangeEvent, useState } from "react"
import axios from "axios";
import { comma } from "postcss/lib/list";


export default function Admin(){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState(0.00)


    const handleSubmit = async(e:ChangeEvent<HTMLInputElement>) => {    

        e.preventDefault()
        if (title==="" || description==="" || price === 0.00){
            alert("Please fill all the fields")
            return
        }

        const item = {
            title,
            description,
            price
        }

        try{

            const response = await axios.post("http://localhost:8080/items",item,{
                headers:{
                    "Content-Type":"application/json"
                }
            })

            console.log("*****",response.status)
            
            if(response.status === 200){
                alert("Item added successfully")
                setTitle("")
                setDescription("")
                setPrice(0.00)
            }

        }catch(error){
            alert("An error occured please try again later")
            console.log("Error Occured",error)

        }
    }

    return(
        <div className="text-black">
            <div>
                <h1>
                    This is admin page
                </h1>
            </div>
            <div className="border-2">
                <div>               
                    <h2>
                        Add an item
                    </h2>
                </div>

                <div>
                    <form>
                        <div className="pb-1">
                            <label>Title:</label>
                            <input 
                            type="text"
                            placeholder="   Enter title for the item"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            
                            />
                        </div>
                        <div className="pb-1">
                            <label>Description:</label>
                            <input 
                            type="text"
                            placeholder="   Enter title for the item"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            />
                        </div>
                        <div className="pb-1">
                            <label>Price:</label>
                            <input 
                            type="number"
                            placeholder="   Enter title for the item"
                            value={price}
                            onChange={(e)=>setPrice(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <button
                                onClick={handleSubmit}
                            >
                                ADD ITEM
                            </button>
                        </div>                        
                    </form>
                </div>

            </div>
        </div>
    )
}