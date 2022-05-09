import React, { useContext, useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./PostDetail.scss";
import "../../App.scss";
import { LikeContext } from "../../context/LikeContext";
import { dataImage } from "../../data/dataImage";
import polygon from "./Polygon1.svg";

const PostDetail = ({ showModal, setShowModal, imageUrl, created }) => {
	const modalRef = useRef();
	const { setLikeCount, likeCount } = useContext(LikeContext);
	const [active, setActive] = useState(0);
	const [favorite, setFavorite] = useState(false);
	const [newComment, setNewComment] = useState("");

	const animation = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const likeClick = (index) => {
		setActive({
			active: index,
		});
		if (active >= 0) {
			setLikeCount(likeCount + 1);
			setFavorite(!favorite);
		}
	};

	return (
		<>
			{showModal ? (
				<div className="detail-container">
					<animated.div style={animation}>
						<div className="detail-section" onClick={closeModal} ref={modalRef}>
							<div className="detail-stats">
								<img
									src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
									alt="Profile User"
									onClick={() => setShowModal((prev) => !prev)}
								/>
								<h1>Nama User</h1>
								<button onClick={() => likeClick(1)}>
									<i
										className={
											active
												? "fa-solid fa-star fa-2x button-color"
												: "fa-regular fa-star fa-2x"
										}></i>
								</button>
							</div>
							<div className="detail-img">
								<img src={imageUrl} alt="Post" className="detail-image-post" />
							</div>
							<div className="detail-caption">
								<p>Description</p>
								<p>Description</p>
								<p>Description</p>
								<p>Description</p>
							</div>
							<div className="detail-comment">
								<h1>Comments</h1>
								<div className="comment-section">
									<p>Comment</p>
									<p>{newComment}</p>
								</div>
								<div className="detail-form">
									<form action="">
										<input
											type="text"
											required
											value={newComment}
											onChange={(e) => setNewComment(e.target.value)}
										/>
									</form>
									<button type="submit">
										<img src={polygon} alt="Send" />
									</button>
								</div>
							</div>
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default PostDetail;
