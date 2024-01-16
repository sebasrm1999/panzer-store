import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

//This will return the redux actions
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
