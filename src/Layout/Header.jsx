import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="shadow static">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center py-5">
                    <Link to='/'>
                        <h3 className="text-2xl font-bold font-Josefin-Sans">
                            <span className="text-slate-800">Phones</span>
                            <span className="text-blue-500">Dokan</span>
                            <span className="text-slate-800">.com</span>
                        </h3>
                    </Link>
                    <ul className="flex flex-col md:flex-row justify-center items-center gap-3">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
