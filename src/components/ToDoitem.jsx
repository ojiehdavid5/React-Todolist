import React from "react";





function ToDoItem(props){
    // const[isDone,setIsDone]=useState(false);

    // function dashChange(event){
    //  setIsDone((prevValue)=>{
    //    return !prevValue;
            
        
    //   });
    // }//
    return(
    <div onClick={()=>{

        props.onChecked(props.id)
    }}>
        <li>{props.text}</li>
        
          {/* <li style={{textDecoration: isDone ? "line-through":"none"}}>{props.text}</li>) ; */}
    </div>
    

    
)}


export default ToDoItem;