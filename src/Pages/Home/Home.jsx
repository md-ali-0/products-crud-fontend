import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    const createProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const productDetails = form.productDetails.value;
        const productCategory = form.productCategory.value;
        const productPrice = form.productPrice.value;

        const product = {
            productName,
            productImage,
            productDetails,
            productCategory,
            productPrice,
        };
        fetch("http://localhost:8080/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    toast.success('Product Added Success!')
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div>
                <div className="flex justify-center items-center p-5">
                    <div className="border rounded p-5 w-3/4">
                        <h3 className="text-center font-bold py-2">
                            Add Product
                        </h3>
                        <form onSubmit={createProduct}>
                            <div className="flex justify-between gap-5">
                                <div className="w-1/2">
                                    <div className="py-1">
                                        <label
                                            htmlFor="productName"
                                            className="block text-md font-bold py-1"
                                        >
                                            Enter Product Name:
                                        </label>
                                        <input
                                            className="bg-indigo-100 bg-opacity-40 border border-indigo-100 rounded focus:outline-none focus:right-0 py-1 px-2 w-full"
                                            type="text"
                                            name="productName"
                                            id="productName"
                                            placeholder="Enter Product Name"
                                        />
                                    </div>
                                    <div className="py-1">
                                        <label
                                            htmlFor="productImage"
                                            className="block text-md font-bold py-1"
                                        >
                                            Enter Product Image URL:
                                        </label>
                                        <input
                                            className="bg-indigo-100 bg-opacity-40 border border-indigo-100 rounded focus:outline-none focus:right-0 py-1 px-2 w-full"
                                            type="text"
                                            name="productImage"
                                            id="productImage"
                                            placeholder="Enter Product Image URL"
                                        />
                                    </div>
                                    <div className="py-1">
                                        <label
                                            htmlFor="productDetails"
                                            className="block text-md font-bold py-1"
                                        >
                                            Enter Product Details:
                                        </label>
                                        <textarea
                                            className="bg-indigo-100 bg-opacity-40 border border-indigo-100 rounded focus:outline-none focus:right-0 py-1 px-2 w-full"
                                            name="productDetails"
                                            id="productDetails"
                                            cols="20"
                                            rows="5"
                                            placeholder="Enter Product Details"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="py-1">
                                        <label
                                            htmlFor="productCategory"
                                            className="block text-md font-bold py-1"
                                        >
                                            Select Product Categories:
                                        </label>
                                        <select
                                            name="productCategory"
                                            id="productCategory"
                                            className="bg-indigo-100 bg-opacity-40 border border-indigo-100 rounded focus:outline-none focus:right-0 py-1 px-2 w-full"
                                            defaultValue
                                        >
                                            <option value="">
                                                Select Category
                                            </option>
                                            <option value="smartphones">
                                                Smart Phones
                                            </option>
                                            <option value="tablets">
                                                Tablets
                                            </option>
                                            <option value="featurephones">
                                                Feature Phones
                                            </option>
                                        </select>
                                    </div>
                                    <div className="py-1">
                                        <label
                                            htmlFor="productPrice"
                                            className="block text-md font-bold py-1"
                                        >
                                            Enter Product Price:
                                        </label>
                                        <input
                                            className="bg-indigo-100 bg-opacity-40 border border-indigo-100 rounded focus:outline-none focus:right-0 py-1 px-2 w-full"
                                            type="text"
                                            name="productPrice"
                                            id="productPrice"
                                            placeholder="Enter Product Price"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded text-lg py-1 px-2"
                            >
                                Create Product
                            </button>
                        </form>
                    </div>
                </div>
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
        </>
    );
};

export default Home;
