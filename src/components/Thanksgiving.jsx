import React, { useContext, useEffect } from "react";

import { UserContext } from "../context/context";
import "../styles/Thanksgiving.css";
const Thanksgiving = () => {
    const [user, setUser] = useContext(UserContext);
	console.log(user, typeof user);
	return (
		<div className="mainDiv">
			<div className="maincontent">
				<span className="thanksgiving">
					{`Thanks a ton for taking out your precious time and for completing the
				survey Email ${user[0]} Address Contact Number ${user[1]}`}
				</span>
			</div>
		</div>
	);
};

export default Thanksgiving;
