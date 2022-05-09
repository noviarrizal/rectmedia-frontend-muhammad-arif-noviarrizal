import React, { useState, useEffect } from "react";
import "./Posts.scss";
// import { dataImage } from "../../data/dataImage";
import PostCard from "./PostCard";
import { dataImage as dataApi } from "../../data/dataImage";

const Posts = ({ handleClick }) => {
	const [perPage, setPerPage] = useState(9);
	const [limit, setLimit] = useState(3);
	const [favorite, setFavorite] = useState(true);
	const [postImg, setPostImg] = useState([]);
	const slice = postImg.slice(0, perPage);
	useEffect(() => {
		dataApi().then((data) => {
			setPostImg(data);
		});
	}, []);

	const favoritePost = () => {
		setFavorite(!favorite);
	};

	const loadMore = () => {
		setPerPage(perPage + limit);
	};

	return (
		<>
			<div className="posts-container">
				<h1>POSTS</h1>
				<div className="posts-favorite">
					<button onClick={favoritePost}>Favorite</button>
					<input type="text" placeholder="Search here" />
				</div>
				<div className="posts-group">
					{!favorite ? (
						<div className="posts-grid">
							{slice.map((img) => (
								<>
									<PostCard
										key={img.id}
										imageUrl={img.image}
										comment={img.body}
										created={img.createdAt}
									/>
								</>
							))}
						</div>
					) : (
						<div className="posts-grid">
							{slice.map((img) => (
								<>
									<PostCard
										key={img.id}
										imageUrl={img.image}
										comment={img.body}
										created={img.createdAt}
									/>
								</>
							))}
						</div>
					)}
				</div>
				<button className="load-more" onClick={() => loadMore()}>
					MORE
				</button>
			</div>
		</>
	);
};

export default Posts;
