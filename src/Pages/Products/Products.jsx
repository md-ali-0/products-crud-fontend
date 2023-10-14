import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./ProductCard";

const Products = () => {
    const products = useLoaderData();
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-5 py-10">
                {
                    products.map(product=><Product key={product._id} product={product}></Product>)
                }
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    );
};

export default Products;