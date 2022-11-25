import { Table } from "react-bootstrap";
import { memo } from "react";
import { PostListItem } from "./PostListItem";

const PostList = ({ data, loading, error, deleteRecord }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostListItem
          data={data}
          loading={loading}
          error={error}
          deleteRecord={deleteRecord}
        />
      </tbody>
    </Table>
  );
};

export default memo(PostList);
