import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser: (state,action)=>{
                state.push(action.payload)
        },
        
        updateUser: (state,action)=>{
                const {id,name,email} = action.payload;
                const uptUserInfo = state.find(user => user.id == id)
                if(uptUserInfo){
                    uptUserInfo.name = name;
                    uptUserInfo.email = email;
                }
        },
        deleteUser: (state,action)=>{
            const {id} = action.payload;
            const delUserInfo = state.find(user => user.id == id)

            if(delUserInfo){
                return state.filter((f)=>f.id !== id);
            }

        }
        
    }
})

export const {addUser, updateUser,deleteUser} = userSlice.actions
export default userSlice.reducer;