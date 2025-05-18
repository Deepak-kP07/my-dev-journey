import Button from "./Button";
export default function SideBar({onSelectPage , projects , onProjectSelect , selectedProjectId}) {

    return <>
        <div className=" w-1/4 bg-stone-800 text-white h-screen p-4 pt-24 ">
            <h1 className= "font-bold uppercase text-stone-100  text-center "> Your projects</h1>
            <Button onClick={onSelectPage}  > + Add New Project </Button>

          <ul className='text-left p-4 ml-6 flex flex-col gap-2'>
          {
            projects.map((project)=>{
              let cssClasses = 'font-medium text-left px-2 py-1 my-1 w-full capitalize rounded hover:text-stone-200   hover:bg-stone-900' ;
              if(project.id === selectedProjectId){
                cssClasses += 'bg-stone-800 text-stone-200'
              }else{
                cssClasses +=' text-stone-400 '
              }
              return (
                <li key={project.id} > 
                  <button onClick={ () => onProjectSelect(project.id) } className={ cssClasses }>  {project.title}  </button>
                </li>
              )
            })
          }
          </ul>
        </div>
        
    </>
}