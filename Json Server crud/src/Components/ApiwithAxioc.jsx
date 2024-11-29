import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ApiwithAxioc() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchapi();
    }, []);

    const fetchapi = async () => {
        const response = await axios.get("http://localhost:5000/posts");
        console.log(response.data);
        setData(response.data);
    };
    const adddata = async () => {
        const addResponse = await axios.post("http://localhost:5000/posts", { "id": "4", "title": "another title 4", "views": "400" });
        console.log(addResponse.data);
        setData((prevData) => [...prevData, addResponse.data]);

    }
    const deletedata = async (id) => {
        await axios.delete(`http://localhost:5000/posts/${id}`);
        setData(data.filter(item => item.id !== id));
        console.log("Deleted ID:", id);
    }
    
    
    return (
        <div>
            <h1>ApiwithAxioc</h1>
            <button onClick={adddata}>Add Data</button>
            {
                data && data.length > 0 ? (
                    data.map((e, i) => (
                        <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.title}</li>
                            <li>{e.views}</li>
                            <button onClick={() => deletedata(e.id)}>Delete</button>
                        </ul>
                    ))
                ) : (
                    <p>No data available</p>
                )
            }
        </div>
    );
}
