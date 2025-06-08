import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
// import { authActions } from './components/Store';

// https://plantout-22181-default-rtdb.firebaseio.com/
import  useIsOnline  from "./components/hooks/useIsOnline";

function App() {
  console.log("from App.jsx ");
  let loginStatus = useSelector((state) => state.auth.authIntialState);
  const isOnline = useIsOnline();
  return (
    <>
      
      <Header />
      {isOnline.isOnline ? (
        <div>
          {loginStatus ? (
            <Counter />
          ) : (
            <h3>Please log in to see the counter</h3>
          )}
          <Auth />
        </div>
      ) : (
        <h1>Offline</h1>
      )}
    </>
  );
}

export default App;
