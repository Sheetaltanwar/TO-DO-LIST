import TodoItem from "./TodoItem";

function TodoItems({todoItems,handleDeleteItem}){
    return (
        <div className="items-container">
            {todoItems.map((items) =>(
                <TodoItem todoDate={items.dueDate} todoName={items.name} handleDeleteItem={handleDeleteItem}></TodoItem>
            ))}




            {/* <TodoItem todoDate="4/10/24" todoName="Buy Milk "></TodoItem>
            <TodoItem todoDate="4/10/24" todoName="Go to market "></TodoItem> */}
        </div>
    )

}
export default TodoItems