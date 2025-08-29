import axios from "axios";
import { setMovies } from "../slice/movieSlice";
export const getMovies = () => async (dispatch) => {
  const url = "";

  try {
    const data = await axios.get(url);
    dispatch(setMovies(data));
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
