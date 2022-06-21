import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CradleLoader } from "react-loader-spinner";

const PostDetails = () => {
  const { loadingPostDetails, post } = useSelector(
    (state) => state.PostReducer
  );

  return (
    <Container>
      {loadingPostDetails ? (
        <div className="loader">
          <CradleLoader
            type="Bars"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <Row className="posts">
          <Col lg={8} md={10} sm={12}>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PostDetails;
