import { FaStar } from "react-icons/fa";


function Stars() {
    return(
        <div className="FiveStars">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="OddStar"/> 
        </div>
    );
}

export default Stars;