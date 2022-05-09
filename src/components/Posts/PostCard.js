import React, { useState } from "react";
import PostDetail from "../PostDetail/PostDetail";
import "./Posts.scss";

const PostCard = ({ id, imageUrl, comment, created }) => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};
	return (
		<>
			<div className="posts-image" id={id}>
				<img
					className="post-img"
					src={imageUrl}
					alt="img upload"
					onClick={openModal}
				/>
			</div>
			<PostDetail
				id={id}
				showModal={showModal}
				setShowModal={setShowModal}
				imageUrl={imageUrl}
				comment={comment}
				created={created}
			/>
		</>
	);
};

export default PostCard;
