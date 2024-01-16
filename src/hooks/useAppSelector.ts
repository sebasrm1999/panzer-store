import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

//This will return the redux state from a specific reducer
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
