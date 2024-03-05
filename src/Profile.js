import { useContext } from "react";
import { userContext } from "../userContext";
import { setName } from "../reducer";

const Profile = () => {
    const { userName, dispatch } = useContext(userContext);
    return (
        <>  
            <div>
                <input type="text" value={userName} onChange={(e) => dispatch(setName(e.target.value))}/>
            </div>
            <div>
            {userName}
            </div>
            Profile
        </>
    )
}

export default Profile;