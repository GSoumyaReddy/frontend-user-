import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link, Route} from 'react-router-dom'

import {
    retrieveUser,

}from '../actions/user'
export default function UserList(props){
  //we have dispatched the actioncreator retrieveUsers
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentUser,setCurrentUser]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this user array will hold the state of products 
    const users = useSelector((state)=>state.user);
     

    useEffect(()=>{
        dispatch(retrieveUser());
      },[]);

    
    const refreshData=()=>{
        setCurrentUser(null);
        setCurrentIndex(-1);
    }
 

    const setActiveUser= (user,index)=>{
        setCurrentUser(user);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
<table>
    <thead>
        <tr>
            <th>userLoginId</th>
            <th>userName</th>
            <th>password</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>contact</th>
            <th>email</th>
        </tr>
    </thead>
    <tbody>


  {/* //{users?.length > 0 ? ( */}
    {users.map((u)=>(
    <tr key={u.userLoginId}>
        <td>{u.userLoginId}</td>
        <td>{u.userName}</td>
        <td>{u.password}</td>
        <td>{u.firstName}</td>
        <td>{u.lastName}</td>
        <td>{u.contact}</td>
        <td>{u.email}</td>
        <td><button 
         onClick={()=>{props.editUser(u)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.deleteUser(u.userLoginId)}
        className="button muted-button">Delete</button></td>
        
     </tr>))}
     {/* )
     :(
        <tr>
            <td colSpan={6}>No users</td>
        </tr>
     )
     } */}

    </tbody>
</table>




)




}