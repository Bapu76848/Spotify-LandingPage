import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <aside id="navigation">
      <div>
        <img src="/spotify-logo.png" title="spotify-logo" />
      </div>
      <div>
        <ul>
          <li>
           <Link to={'/favourites'}> <a className="active" href={`/favourites`}>
              For You
            </a></Link>
          </li>
          <li>
            <a href="">Top Tracks</a>
          </li>
          <li>
            <a href="">Favorites</a>
          </li>
          <li>
            <a href="">Recently Played</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="profile-btn">
          <img
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1683376488~exp=1683377088~hmac=2cdcc852261f9d2c1a9ea604b0f2b9afcecd3fb93213cd3f1b4749aacf94da2c"
            alt="profile-image"
          />
        </button>
      </div>
    </aside>
  );
};

export default Navigation;
