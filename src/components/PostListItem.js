import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const PostListItem = ({ data, loading, error }) => {
  return (
    <>
      {loading ? (
        <tr>
          <td colSpan={3}>Loading please wait ...</td>
        </tr>
      ) : error ? (
        <tr>
          <td colSpan={3}>{error}</td>
        </tr>
      ) : (
        data.map((element, idx) => {
          return (
            <tr key={element.id}>
              <td>{++idx}</td>
              <td>{element.description}</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="success">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        })
      )}
    </>
  );
};