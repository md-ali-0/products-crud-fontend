import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Products/Product";
import ProductEdit from "../Pages/Products/ProductEdit";
import Products from "../Pages/Products/Products";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                loader: ()=>fetch('http://localhost:8080/products'),
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                loader: ({params})=>fetch(`http://localhost:8080/products/${params.id}`),
                element: <Product></Product>
            },
            {
                path: '/products-edit/:id',
                loader: ({params})=>fetch(`http://localhost:8080/products/${params.id}`),
                element: <ProductEdit></ProductEdit>
            }
        ]
    }
])

export default Router;