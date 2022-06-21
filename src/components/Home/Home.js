import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Posts from "./Posts/Posts";
import { getPosts } from "../../Redux/Actions/actions";

const Home = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container className="home">
      <Posts />
    </Container>
  );
};

export default Home;
