import React, { useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/ai";

import "./todo.css"

export function Todo() {
  const [activity, setActivity] = useState("");
  const [listData , setListData] = useState([])

  
  function addActivity(){
    if(activity.length ==0){
    return  window.alert("fill new tack ")
  }
    // setListData([...listData, activity])
    // console.log(listData)
    setListData((listData)=>{
      const updateList = [...listData , activity]
      setActivity("")
      // console.log(updateList)
      return updateList
    })
  }


  function removeList(i){
  const updateListData = listData.filter((ele , id)=>{
    return i!=id;
  })
 setListData(updateListData)
   
  }

  function allRemove(){
    setListData("")
  }

  

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>

        <div className="input">
        <input
          type="text"
          placeholder="Add Some Activity"
          value={activity}
          required
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button onClick={addActivity} >add </button>
        

        </div>
        <hr></hr>
        
        <div className="todoData">
          <h1 >Here is your Todo List !</h1>
          <hr></hr>

          {listData != [] && listData.map((data ,i)=>{
            return(
              <div className="data">
                <div key={i} className="data1" >
               {data}
              </div>
              <button className="btn" onClick={()=>{
                removeList(i)
              }} >❌</button>
              </div>
              
            )
          })}
          
        </div>
        {
          listData.length >= 1 &&
          <button className="btn1" onClick={allRemove} >All Remove ❌❌</button>
        }
        
      </div>
    </>
  );
}
