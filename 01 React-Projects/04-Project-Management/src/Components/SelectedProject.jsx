import Tasks from "./Task"
export default function SelectedProject({project , onDelete}){
  const formatedDate = new Date (project.dueDate).toLocaleDateString('en-US' ,{
    year : 'numeric',
    month :'short',
    day :'numeric'
  })
  return (
      <>
        <div className='w-[35rem] mt-16 mx-auto'>
          <header className=' text-stone-300 border-b-2 mb-4 pb-4'>
            <div className='flex justify-between text-center '>
              <h2 className='text-3xl font-bold text-stone-600 capitalize p-2 '> {project.title} </h2>
              <button onClick={onDelete}  className=' px-6    border border-stone-800 rounded  bg-stone-700 text-stone-300   hover:text-stone-100 hover:bg-stone-900 '> Delete </button>
            </div>
            <p className='mb-4 text-stone-400 px-2 text-sm'> { formatedDate}</p>
            <p className='text-stone-600   whitespace-pre-wrap'>  {project.description} </p>
          </header>
         
          <Tasks/>
        </div>
      </>
      )
} 