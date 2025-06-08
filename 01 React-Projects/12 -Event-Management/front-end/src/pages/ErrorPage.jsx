// import {useParams} from 'react-router' ;
import error_img from "../assets//404_page_cover.jpg";
import MainNavigation from "../components/MainNavigation";
// import { useRouteError } from "react-router";
// import PageContent from '../components/PageContent'
export default function ErrorPage() {

  // const error =  useRouteError();
  // let title = ' An Error Occurred ! ';
  // let message = ' something went Wrog !';
  // if(error.status === 404 ){
  //   message = JSON.parse(error.data).message ; 
  // }

  // if(error.status === 500){
  //   title = ' Not Found !' ;
  //   message = " could not find the resourse page .";
  // }

  // const path  = useParams() ;
  return (
    <>
      <div>
        <MainNavigation />
        {/* <PageContent title={title} > {message}</PageContent> */}
        <div className="text=center bg-blue-100 h-screen mx-auto pt-10"> 
          <img src={error_img} alt="error-img" className="mx-auto" />
        </div>
      </div>
    </>
  );
}
