// import { Input } from "./Input";
import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function ProjectForm ({onAdd , onCancel}){
    const modal = useRef();
    let title = useRef();
    let description = useRef();
    let dueDate = useRef();

    function handleSave(){
      let enteredTitle = title.current.value;
      let entredDescription = description.current.value;
      let entredDueDate = dueDate.current.value;

      // validation here goes 
      if(enteredTitle.trim() === '' || entredDescription.trim() ==='' || entredDueDate.trim() ===''){
        // we have to show a modal that says error 
        // modal.current.open();
        alert(" Please Enter a valid Input for every Input feild !  ")
        return;
      }
      onAdd(
        {title :enteredTitle,
        description : entredDescription,
        dueDate : entredDueDate,
        }
      )
    } 
    
    return (
      <>

      <Modal ref={modal} btnCaption="Okay" >
      <h2>invalid Input </h2> 
      <p>Oops , Looks like you not entred the valid input or not entred </p>
      <p>entre a valid input to furthur continue  </p>
      </Modal>
      
      <div className="border w-[35rem] h-[300px] p-4 m-24 bg-stone-100 rounded">
          <div className=" flex justify-end gap-3 mt-4 ">
              <button className=" rounded px-4 py-1 " onClick={onCancel}> Cancel</button>
              <button className=" bg-stone-800 rounded px-4 py-1 text-stone-100 " onClick={handleSave}> Save </button>
          </div>
          <form>
              <Input ref={title} label="Title" input="text" placeholder="Enter title"  />
              <Input ref={description} label="Description" input="text" placeholder="Enter Description" textarea  />
              <Input ref={dueDate} label="DueTime" input="date"   /> 
          </form>
      </div>
      </>
    );
}
