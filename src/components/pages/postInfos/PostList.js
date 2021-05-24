import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getAllComments, getLikes } from "../../../actions/post";
import Spinner from "../../general/Spinner";
import PostCard from "./PostCard";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
}));

const PostList = ({ myPosts = false, likedPosts = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    post: { posts, comments, likes },
    user: { id },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllComments());
    dispatch(getLikes());
  }, [dispatch]);

  if (!posts || !posts.length) {
    return <Spinner />;
  }

  let allPosts = posts;
  if (myPosts) {
    allPosts = allPosts.filter(post => post.userId === id);
  } else if (likedPosts) {
    allPosts = allPosts.filter(post => {
      for (let i = 0; i < likes.length; i++) {
        if (likes[i].postId === post.id && id === likes[i].userId) {
          return true;
        }
      }
      return false;
    });
  }

  const renderPosts = allPosts.map(post => {
    //get comments for each post
    const postComments = comments.filter(comment => comment.postId === post.id);
    let liked = false;
    let likeCount = 0;
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].postId === post.id) likeCount++;
      if (likes[i].postId === post.id && id === likes[i].userId) liked = true;
    }

    const fullName = post.firstName + " " + post.lastName;

    return (
      <PostCard
        fullName={fullName}
        post={post}
        userId={id}
        postComments={postComments}
        liked={liked}
        key={post.id}
        likeCount={likeCount}
        myPosts={myPosts}
      />
    );
  });

  return <div className={classes.root}>{renderPosts}</div>;
};

export default PostList;
