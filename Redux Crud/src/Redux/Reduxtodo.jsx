import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../Feture/Todoslice'


export default function ReduxTodo() {
    const [name, setname] = useState("")
    const [sub, setsub] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    const count = useSelector((state) => {
        return state.todokey
    })
    const dispatch = useDispatch();


    const addRecord = () => {
        if (editIndex == null) {
            dispatch(addData({ id: Date.now(), name, sub }))
        }
        else {
            dispatch(updateData({ id: editIndex, name, sub}))
            setEditIndex(null)
        }

        setname("")
        setsub("")
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }

    const editRecord = (id) => {
        let singleData = count.Students.find((item) => item.id == id);
        setname(singleData.name)
        setsub(singleData.sub)
        setEditIndex(id)
    }


    return (
        <div>
            <h1>ReduxTodo</h1>

            <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='subject' value={sub} onChange={(e) => setsub(e.target.value)} />
            <button onClick={addRecord}>{editIndex ? "Update Data" : "Add Data"}</button>

            {
                count ?
                    count.Students.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.sub}</li>
                            <button onClick={() => editRecord(e.id)}>edit</button>
                            <button onClick={() => deleteRecord(e.id)}>Delete</button>
                        </ul>
                    })

                    :
                    <p>NO Data</p>
            }
        </div>
    )
}