import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      className={classes.container}
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
