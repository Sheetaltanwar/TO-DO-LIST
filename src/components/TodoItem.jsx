function TodoItem({ todoDate, todoName, handleDeleteItem }) {
  let handledeleteclick=(()=>{
      handleDeleteItem(todoName)
  })
  return (
    <div class="container ">
      <div class="row">
        <div class="col">{todoName}</div>
        <div class="col">{todoDate}</div>
        <div class="col">
          <button
            type="button"
            class="btn btn-danger"
           
            onClick={handledeleteclick}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
