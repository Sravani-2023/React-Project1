import React, { useState } from "react";
import './App.css'
function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const [showList,setShowList] = useState(false);

  // let movies = ['a', 'b', 'c', 'd', 'e'];
  // // const [allList,setAllList] = useState()
  const showData=showList?deleteList:list;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    const newText={text}
    if(text){
      setList((ls)=>[...ls,newText])
      setText("");
    }
  };
  const deleteHandler = (index) => () => {
    // setText((newText) => newText.filter((_, i) => i !== index));
    const filtereddata = list.filter((data, i) => index !== i)
    setList(filtereddata)
    const showDeleteList = list.filter((data, i) => index === i)
    setDeleteList([...deleteList, ...showDeleteList])
    console.log("deleteList", deleteList)
  }
 const ShowList=()=>{
  console.log("completed")
  setShowList(true)
 }
const allList=()=>{
  setShowList(false)
}
    return(
      // <div>
      //    <ul>
      //  {movies.map((a)=>{
      //      return (
      //       <li>{a}</li>
      //      )
      //  })}
      // </ul>
      // </div>
    <div>
      {      console.log("showData",showData)
}
      <form onSubmit={handleSubmit }>
      <label id="label"> Task Name</label>
      <input type="text" placeholder="Enter Task Name" onChange={ e => setText( e.target.value)} />
      <button id="button">Add Task</button>
       <div id="div1">
      <label>Select Filter :             </label>
<label>   <button onClick={allList}>All</button>            </label>
{/* <label>   <button>Pending</button>        </label> */}
<label>    <button onClick={ShowList} >Completed</button>      </label>

    </div>
    </form>
    <p>{
    showData.map((a , index)=><div id="div">
      
      {a.text}       
     <label id="label1"><button onClick={deleteHandler(index)}>Delete</button></label> 
    </div>
     )} </p>

     {/* movies.map */}
    </div>
  )
}
export default App;
