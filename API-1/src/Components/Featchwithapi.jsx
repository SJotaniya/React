import React, { useState } from 'react'
import { useEffect } from 'react'


export default function Featchwithapi() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fethapi()
    }, [])

    const fethapi = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const res = await response.json();
        setData(res)
    }

    return (
        <div className="api-container">
            <h1 className="heading">Unique Products Collection</h1>
            <div className="products-grid">
                {
                    data && data.map((e, i) => (
                        <div className="product-card" key={i}>
                            <h2 className="product-title">{e.title}</h2>
                            <p className="product-description">{e.description}</p>
                            <img className="product-image" src={e.image} alt={e.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
