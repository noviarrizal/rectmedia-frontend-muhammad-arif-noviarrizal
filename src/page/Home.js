import React, { useState, createContext } from "react";
import Posts from "../components/Posts/Posts";
import Profile from "../components/Profile/Profile";
import { LikeContext } from "../context/LikeContext";
const Home = () => {
	const [likeCount, setLikeCount] = useState(75);
	const [like, setLike] = useState(false);

	return (
		<>
			<LikeContext.Provider value={{ likeCount, setLikeCount, like, setLike }}>
				<Profile />
				<Posts />
			</LikeContext.Provider>
		</>
	);
};

export default Home;
