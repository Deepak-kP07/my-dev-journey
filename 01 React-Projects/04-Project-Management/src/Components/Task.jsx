import DisplayTasksTask from "./DisplayTasksTask";
import { useState } from "react";

export default function Tasks ( ){
  const [entredTask , setEntredTask] = useState('');
   const [allTasks, setAllTasks] = useState([]);

  function handleChnage(e){
    setEntredTask (e.target.value);
  }
  function handleClick (){
    setAllTasks( prevElement => {
      return (
        [...prevElement , entredTask]
      )
    }
    );
    setEntredTask("");
  }
    function handleClear(indexToRemove) {
    setAllTasks(prevTasks => 
      prevTasks.filter((_, index) => index !== indexToRemove)
    );
  }
  
    return (
       <>
        <div className=" mt-24 border w-[35rem] border-blue rounded  mx-auto p-4  bg-stone-100 pb-12">
            <h2 className="font-semibold text-2xl underline text-stone-700 mb-4"> Task </h2>
              <div className=" flex mt-10  mb-4">
                <input
                  type="text"
                  placeholder="Enter a Task for Project "
                  value={entredTask}
                  onChange={handleChnage}
                  className="border-2 px-2 bg-stone-200  rounded w-full focus:outline-none border-b-stone-400"
                />
                <button
                  className="border  px-4 py-1 bg-stone-300 text-stone-700 rounded ml-8 w-36 hover:bg-stone-800 hover:text-stone-50 "
                  onClick={handleClick}
                >
                  Add Task
                </button>
              </div>                  
          </div>
          <div className=' bg-stone-200 p-4 rounded ' >
                {allTasks.length > 0 ? (
                  <DisplayTasksTask taskArr={allTasks} onclear={handleClear} />
                ) : (
                  <p className='text-stone-800 mb-4'>This project does not contain any tasks yet</p>
                )}
              </div>
      </>
    )
}
