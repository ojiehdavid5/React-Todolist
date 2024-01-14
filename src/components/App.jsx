import React ,{useState}from "react";
import ToDoItem from "./ToDoitem"

function App() {
  const [inputText,setInputText]=useState("");
  const [items,setItems]=useState([]);
  function HandleChange(event){
    const newValue=event.target.value;
    setInputText(newValue);
  }

  function AddItem(){
    setItems(prevItems => {
      return [...prevItems,inputText];
    });
    setInputText("");
  }
    function deleteItem(id){
      setItems((prevItems)=>{

        return prevItems.filter(
          (items,index)=>{
            return index !==  id;
          }
        )
        
      })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input  onChange={HandleChange}  type="text" value={inputText} />
        <button  onClick={AddItem}>
          <span>Add</span>
        </button >
      </div>
      <div>
        <ul>
          {  items?.map((todoItem ,index)=>(<ToDoItem
          key={index}
          id={index}
          text={todoItem}
          onChecked={deleteItem}
          />)

          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
