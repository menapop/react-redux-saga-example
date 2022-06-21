import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { getPostDetails } from "../../../Redux/Actions/actions";
import PostDetails from "../../Home/Posts/PostDetails";

const SinglePost = () => {
  const { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [id]);

  return (
    <Container className="single-post">
      <PostDetails />
    </Container>
  );
};

export default SinglePost;
