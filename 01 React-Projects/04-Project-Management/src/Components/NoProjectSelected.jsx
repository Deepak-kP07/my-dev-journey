import logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onSelectPage }) {
  return (
    <>
      <div className="text-center mt-24 mx-auto">
        <img src={logo} alt="logo" className="w-[100px] mx-auto " />
        <h2 className="font-semibold"> No Project Selected </h2>
        <p> Select a Project or get Started With New One </p>
        <Button onClick={onSelectPage}>Create New Project </Button>
      </div>
    </>
  );
}
