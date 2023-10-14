import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, productName, productImage, productPrice } = product;
    return (
        <div className="shadow-lg rounded-lg p-5">
            <img
                className="rounded w-80 mx-auto"
                src={productImage}
                alt={productName}
            />
            <div className="flex flex-col justify-center items-center py-2">
                <h3 className="text-xl font-bold">{productName}</h3>
                <h4 className="text-lg py-2">
                    <span className="font-medium">Price:</span> {productPrice} ৳
                </h4>
                <Link
                    to={`/products/${_id}`}
                    className="bg-blue-500 text-white text-center rounded py-1 px-2"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};
export default ProductCard;
