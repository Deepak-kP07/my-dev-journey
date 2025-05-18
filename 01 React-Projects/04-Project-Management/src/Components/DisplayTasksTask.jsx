export default function DisplayTasksTask({taskArr , onclear}){
  // so basically tasks stored in a array will be printed as simple as that 

  return(
    <>
    <h2 className='font-bold text-stone-700  text-lg mb-4'> Track your tasks </h2>
    <ul>
      { 
      taskArr.map((task,index) => {
        return (
          <li key={index} className='flex items-center justify-between mb-2 px-4'>
            <p> {task}</p>
            <button className=' text-stone-700 hover:text-red-500' onClick={()=> onclear(index)}> Clear</button>
          </li>
        )
      })
    }
    </ul>
    </>
    )}
    
