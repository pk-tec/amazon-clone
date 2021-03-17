import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
const Header = () => {
	return (
		<div className="header">
			<img
				className="header_logo"
				src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
				alt="amazon-logo"
			/>

			<div className="header_search">
				<input className="header_searchInput" />
				<SearchIcon className="header_searchIcon" />
			</div>
			<div className="header_nav">
				<div className="header_option">
					<span className="header__LineOne">Hello, PK TEC</span>
					<span className="header__LineTwo">Sign In</span>
				</div>
				<div className="header_option">
					<span className="header__LineOne">Returns</span>
					<span className="header__LineTwo">& Orders</span>
				</div>
				<div className="header_option">
					<span className="header__LineOne">Your</span>
					<span className="header__LineTwo">Prime</span>
                </div>
                <div>
                    <ShoppingBasket />
                    <span className='header_optionLineTwo header_basketCount'>0</span>
                </div>
			</div>
		</div>
	);
};

export default Header;
