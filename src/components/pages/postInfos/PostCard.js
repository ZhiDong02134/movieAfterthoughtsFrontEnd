import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { format, parseISO } from "date-fns";
import clsx from "clsx";
import {
  TextField,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
  Card,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FaceIcon from "@material-ui/icons/Face";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "../styles/postCard";

import {
  likePost,
  unlikePost,
  addComment,
  deletePost,
} from "../../../actions/post";
import Comment from "./Comment";
import PostDetails from "./PostDetails";
import EditPost from "./EditPost";

const PostCard = ({
  post,
  fullName,
  userId,
  postComments,
  liked,
  likeCount,
  myPosts = false,
  setShowHeading,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [expandComments, setExpandComments] = useState(false);
  const [openChatbox, setOpenChatbox] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [commentDetails, setCommentDetails] = useState("");

  const postDate = format(parseISO(post.updatedAt), "L/d/y h:mm:ssa");

  const handleExpandComments = () => {
    setExpandComments(!expandComments);
  };

  const handleOpenChatbox = () => {
    setOpenChatbox(!openChatbox);
  };

  const handlePostClick = () => {
    const values = {
      postId: post.id,
      userId,
      commentDetails,
    };
    dispatch(addComment(values));
    setCommentDetails("");
  };

  const handleLikeClick = () => {
    //when like button is clicked when like is true, it means that the user is trying to unlike
    liked ? dispatch(unlikePost(post.id)) : dispatch(likePost(post.id));
  };

  const handleDeletePost = postId => {
    dispatch(deletePost(postId));
  };

  const renderComments = postComments.map(comment => {
    const commentor = comment.firstName + " " + comment.lastName;
    const commentDate = format(parseISO(comment.updatedAt), "L/d/y h:mm:ssa");

    let myComment = false;
    if (comment.userId === userId) myComment = true;

    return (
      //
      <div className={classes.comment} key={comment.id}>
        <Comment
          commentId={comment.id}
          myComment={myComment}
          commentor={commentor}
          commentDate={commentDate}
          commentDetails={comment.commentDetails}
        />
      </div>
    );
  });

  return editPost ? (
    <EditPost post={post} setShowHeading={setShowHeading} />
  ) : (
    <Card className={classes.root}>
      <div className={classes.head}>
        <CardHeader
          avatar={<FaceIcon />}
          title={
            <Typography className={classes.title}>{post.title}</Typography>
          }
          subheader={
            <>
              <Typography
                className={classes.subtitle}
                variant="subtitle1"
                component="p">
                {fullName}
              </Typography>
              <Typography
                className={classes.postDate}
                variant="subtitle2"
                component="p">
                {postDate}
              </Typography>
            </>
          }
          disableTypography={true}
        />
        {myPosts ? (
          <div className={classes.editDeleteIcons}>
            <IconButton
              className={classes.editBtn}
              onClick={() => setEditPost(true)}>
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDeletePost(post.id)}
              className={classes.deleteBtn}>
              <DeleteIcon />
            </IconButton>
          </div>
        ) : null}
      </div>
      <CardMedia
        className={classes.media}
        image={post.posterSrc}
        title={post.title}
        component="img"
      />
      <CardContent className={classes.postDetails}>
        <PostDetails postDetails={post.postDetails} />
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" component="p" className={classes.rating}>
          OP Rating: {post.rating}
        </Typography>
      </CardActions>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton aria-label="like post" onClick={handleLikeClick}>
          <FavoriteIcon color={liked ? "secondary" : "inherit"} />
        </IconButton>
        <Typography
          variant="subtitle2"
          component="p"
          className={classes.likeCount}>
          {likeCount} likes
        </Typography>
        <IconButton
          className={clsx(classes.expandAllComments, {
            [classes.expandOpen]: expandComments,
          })}
          onClick={handleExpandComments}
          aria-expanded={expandComments}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expandCommentBox)}
          onClick={handleOpenChatbox}
          aria-expanded={openChatbox}
          aria-label="add comment">
          <InsertCommentIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expandComments} timeout="auto" unmountOnExit>
        <CardContent className={classes.commentList}>
          {renderComments}
        </CardContent>
      </Collapse>
      <Collapse in={openChatbox} timeout="auto" unmountOnExit>
        <CardContent className={classes.card}>
          <div className={classes.chatbox}>
            <TextField
              className={classes.input}
              placeholder="Add a comment..."
              multiline
              rows={1}
              size="small"
              rowsMax={Infinity}
              variant="outlined"
              value={commentDetails}
              onChange={e => setCommentDetails(e.target.value)}
            />
          </div>
          <div className={classes.postBtn}>
            <Button size="medium" onClick={() => handlePostClick()}>
              <p className={classes.postBtnText}>Post</p>
            </Button>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PostCard;
