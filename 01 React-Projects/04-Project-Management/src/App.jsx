import { useState } from 'react';
import NoProjectSelected from './Components/NoProjectSelected';
import SideBar from './Components/SideBar';
import ProjectForm from './Components/ProjectForm';
import SelectedProject from './Components/SelectedProject';

function App() {
  const [currentMainPage , setCurrentMainPage] = useState({selectedProjectId:undefined , Project :[]});
  // const [newProject , setNewProject] = useState(projectArray)
  function handleCurrentPage(){
    setCurrentMainPage(prevState => {
      return {
        ...prevState ,
        selectedProjectId : null ,
      }
    })
  }

  function handleCancelCurrentPage(){
    setCurrentMainPage(prevState => {
      return {
        ...prevState ,
        selectedProjectId : undefined ,
      }
    })
  }

  function handleDeleteCurrentPage(){
    setCurrentMainPage(prevState => {
      return {
        ...prevState ,
        selectedProjectId : undefined ,
        Project : prevState.Project.filter(( project)=> project.id !== prevState.selectedProjectId )
      }
    })
  }

   function handleSelectedProject(id){
    setCurrentMainPage(prevState => {
      return {
        ...prevState ,
        selectedProjectId : id ,
        
      }
    })
  }

  function handleAddProjects(projectData){
  setCurrentMainPage(prevState => {
    const projectId = Math.random() ;
    const newProject = {
      ...projectData,
      id : projectId
    };
    return{
      ...prevState,
      selectedProjectId:undefined ,
      Project :[...prevState.Project , newProject]
    }
  })
  } 
  const selectedProject = currentMainPage.Project.find(project => project.id === currentMainPage.selectedProjectId)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteCurrentPage} /> ;
  if(currentMainPage.selectedProjectId === undefined){
    content=<NoProjectSelected onSelectPage={handleCurrentPage}/>
  }else if (currentMainPage.selectedProjectId === null){
    content = <ProjectForm  onAdd={handleAddProjects}  onCancel ={handleCancelCurrentPage} />
  }

// else if (currentMainPage.selectedProjectId == id){
//     content = <SelectedProject  project={currentMainPage.Project} />
//   }


  // console.log(currentMainPage);
  return (
    <>
    <main className='flex'>
      <SideBar onSelectPage={handleCurrentPage} projects={currentMainPage.Project} onProjectSelect={handleSelectedProject} />
      {content}
    </main>
    </>
  );
}

export default App;
