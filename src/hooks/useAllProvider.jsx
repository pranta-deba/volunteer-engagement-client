import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const useAllProvider = () => {
    const all = useContext(AuthContext);
    return all
};
export default useAllProvider;