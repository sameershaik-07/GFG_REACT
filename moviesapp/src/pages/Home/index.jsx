import { useEffect } from "react";
import Navbar from "../../components/Navnbar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movie";

const Home = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  console.log(movies);
  useEffect(() => {
    dispatch(getMovies());
  });

  return (
    <>
      <Navbar />
      {movies?.length > 0 && movies.map((moive) => <MovieCard  key = {movie.id} /> )}
    </>
  );
};

export default Home;
