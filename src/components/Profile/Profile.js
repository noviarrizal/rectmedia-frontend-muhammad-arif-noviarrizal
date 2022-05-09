import React, { useContext, useState, createContext } from "react";
import { LikeContext } from "../../context/LikeContext";
import PostDetail from "../PostDetail/PostDetail";
import "./Profile.scss";

const Profile = ({ updateValue }) => {
	const { likeCount, setLikeCount } = useContext(LikeContext);
	return (
		<div className="profile-container">
			<div className="img-profile">
				<img
					src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					alt="Profile User"
				/>
				<div className="profile-section">
					<h1>Nama User</h1>
					<div className="stats-section">
						<div className="followers">
							<p>75</p>
							<p>Followers</p>
						</div>
						<div className="likes">
							<p>{likeCount}</p>
							<p>Likes</p>
						</div>
						<div className="posts">
							<p>30</p>
							<p>Posts</p>
						</div>
					</div>
				</div>
			</div>
			<div className="line"></div>
		</div>
	);
};

export default Profile;
