import AppName from "./components/AppName";
import Inputin from "./components/Inputin";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  
  const initialTodoItems=[{
    name:'Buy Milk',
    dueDate:'4/10/2023' 
  },
{
  name:"Go to Market",
  dueDate:'4/10/2023'
},
{
  name:"doing coding",
  dueDate:"right now"
}];
const [todoItems,setTodoItems]=useState(initialTodoItems)

const handleNewItem=((itemName,itemDueDate)=>{
  //  console.log(`new item added ${itemName} DATE:${itemDueDate}`)
  const newTodoItems=[...todoItems,{name:itemName , dueDate:itemDueDate}];
  setTodoItems(newTodoItems)
})

// let handleDelete=(todoName)=>{
//       console.log("item deleted ",todoName)

//       let newObj=todoItems.filter(item=>item!==todoName)
//       console.log(newObj);
//       setobj(newObj)
// }
// let handleDelete=((item)=>{
//   console.log("item deleted ",item)
//   let itemToDelete=item
//   let newObj=obj.filter(item=>item !== itemToDelete);
//   console.log(newObj)
//   setobj(newObj)
// })

 const handleDeleteItem=(todoItemName)=>{
  console.log(`item delted ${todoItemName}`)
  let newTodo=todoItems.filter(item=>item.name!==todoItemName)
  console.log(newTodo)
  setTodoItems(newTodo)
 }

  return (
    <center class="todo-container">  
      <AppName/>
      <Inputin handleNewItem={handleNewItem}></Inputin>
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
