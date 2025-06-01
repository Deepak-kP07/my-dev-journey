import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import Products from "./components/Pages/Products.jsx";
import RootComponent from "./components/root";
import ErrorPage from "./components/Pages/Error.jsx";
import ProductItem from "./components/ProductItem.jsx";

// const routeDef = createRoutesFromElements (
//   <Route >
//     <Route path='/' element={<Home />} />
//     <Route  path='/products' element={<Products/>} />
//   </Route>
// )

// const route = createBrowserRouter(routeDef);

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    errorElement : <ErrorPage/> ,
    children: [
       // This makes it the default child route for "/"
      { path : '/', element: <Home />   },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductItem /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
