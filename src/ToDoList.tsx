import React, { useState } from "react";
import {useForm} from "react-hook-form"

// function ToDoList(){
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: {value},
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//     if(toDo.length < 10){
//       return setToDoError("To do should be longer");
//     }
//   };
//   return <div>
//     <form onSubmit={onSubmit}>
//       <input  onChange={onChange} value={toDo} placeholder="Write a to do"/>
//       <button>Add</button>
//       {toDoError !== "" ? toDoError : null}
//     </form>
//   </div>;
// }

function ToDoList(){

  const {register, handleSubmit, formState} = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return <div>
    <form onSubmit={handleSubmit(onValid)} style={{display: "flex", flexDirection: "column"}}>
      <input {...register("toDo",{required:"toDo is required", minLength:{
        value: 5,
        message: "too short"
      }})} placeholder="Write a to do"/>
      <input {...register("firstName",{required:"first name is required"})} placeholder="Write a to first name"/>
      <input {...register("lastName",{required:true})} placeholder="Write a to last name"/>
      <input {...register("text",{required:true})} placeholder="Write a to text"/>
      <button>Add</button>
    </form>
  </div>;
}

export default ToDoList;