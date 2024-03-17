import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'



const Home = () => {
    const users = useSelector((state)=>state.users)
    console.log(users)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
            dispatch(deleteUser({id}))
    }

  return (
    <div className='container'>
        <h2>CRUD APP With JSON Server</h2>
        <Link to="/create" className='btn btn-success my-3'>
            Create +
        </Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {users.map((user,index)=>(
                            <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link
                                            className='btn btn-sm btn-primary'
                                            to={`/edit/${user.id}`}
                                        
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className='btn btn-sm btn-danger ms-2'
                                            onClick={()=>handleDelete(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>


                            </tr>


                    ))}
            </tbody>

        </table>

    </div>
  )
}

export default Home