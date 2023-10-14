import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = () => {
    const product = useLoaderData();
    const { _id, productName, productImage, productDetails, productPrice } =
        product;
    const navigate = useNavigate();
    const deleteProduct = () => {
        fetch(`http://localhost:8080/products/${_id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.deletedCount === 1) {
                toast.error('Product Deleted Success!')
                navigate('/products')
            }
        })
        .catch(err=>console.log(err))
    };
    return (
        <div className="container mx-auto my-5">
            <div className="border shadow-md rounded-md p-5 w-1/2 mx-auto">
                <h3 className="text-xl text-center font-bold pb-3">
                    Product Details:
                </h3>
                <div className="flex gap-3">
                    <button className="bg-blue-500 text-white text-center rounded py-1 px-2">
                        <Link to={`/products-edit/${_id}`}>Edit</Link>
                    </button>
                    <button
                        className="bg-red-500 text-white text-center rounded py-1 px-2"
                        onClick={deleteProduct}
                    >
                        Delete
                    </button>
                </div>
                <img
                    className="rounded w-80 mx-auto"
                    src={productImage}
                    alt={productName}
                />
                <h3 className="text-xl font-bold">{productName}</h3>
                <h4 className="text-lg py-2">
                    <span className="font-medium">Price:</span> {productPrice} ৳
                </h4>
                <p>{productDetails}</p>
            </div>
        </div>
    );
};

export default Product;
