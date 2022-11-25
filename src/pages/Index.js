import React from "react";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../state/postSlice";
import PostList from "../components/PostList";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecord = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );

  return (
    <PostList
      data={records}
      loading={loading}
      error={error}
      deleteRecord={deleteRecord}
    />
  );
};

export default Index;
