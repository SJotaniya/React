import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice({
    name: "todo",
    initialState: { Students: [] },
    reducers:{
        addData : (state, action)=>{
            state.Students.push(action.payload)
        },
        deleteData: (state , action)=>{
            let data = state.Students.filter((item)=> item.id != action.payload)
            state.Students = data
        },
        updateData:(state , action) => {
            state.Students.map((e,i)=>{
                if(e.id == action.payload.id)
                {
                    e.name = action.payload.name
                    e.sub = action.payload.sub
                }
                else{
                    e
                }
            })
        }
    }
})

export const {addData , deleteData, updateData} = todo.actions
export default todo.reducer