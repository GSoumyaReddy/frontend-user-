import React,{useState} from 'react'
//import { Link } from 'react-router-dom';
import {useDispatch} from 'react';
import { addUser } from '../actions/user';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function AddUserForm(props){
   
const dispatch = useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
    userLoginId:0,
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    contact:'',
    email:''
}
 
const [user,setUser]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setUser({...user,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if( !user.userLoginId || !user.userName || !user.password||!user.firstName||!user.lastName||
    !user.contact||!user.email) return;
 console.log(user+'from adduserform')
//props.addUser(user);
dispatch(addUser(user));
setUser(initialFormState);

}
return (
   <Form onSubmit={submitHandler} >
     <Form.Group className="mb-3" controlId="formBasicuserLoginId" >
       <Form.Label>userLoginId</Form.Label>
       <Form.Control type="number" placeholder="userLoginId" required
        name='userLoginId'
        value={user.userLoginId}
       onChange={handleInputChange} />
       
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicUserName" >
  <Form.Label>userName</Form.Label>

  <Form.Control type="Name" placeholder="userName" required

       name='userName'
       value={user.userName}
       onChange={handleInputChange} />

</Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
     
     <Form.Label>password</Form.Label>
     
       <Form.Control type="password" placeholder="password" required

       name='password'
       value={user.password}
       onChange={handleInputChange} />


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicFirstName">
       <Form.Label>firstName</Form.Label>
       <Form.Control type="text"  placeholder="FirstName" required
        name='firstName'
        value={user.firstName}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasiLastName">
       <Form.Label>lastName</Form.Label>
       <Form.Control type="text"  placeholder="LastName" required
         name='lastName'
         value={user.lastName}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicContact">
       <Form.Label>contact</Form.Label>
       <Form.Control type="text"  placeholder="ContactNo" required
         name='contact'
         value={user.contact}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasiEmail">
       <Form.Label>email</Form.Label>
       <Form.Control type="text"  placeholder="name@email.com" required
         name='email'
         value={user.email}
       onChange={handleInputChange} />
     </Form.Group>
     
     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form>
 );
}