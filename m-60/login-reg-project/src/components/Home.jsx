import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Home = () => {
   
const user = useContext(AuthContext)
  
    return (
        <div>
          {user &&  <span>{user}</span> }
        </div>
    );
};

export default Home;