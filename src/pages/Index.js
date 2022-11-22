import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/postSlice";
import PostList from "../components/PostList";

const Index = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);
  return <PostList />;
};

export default Index;
