import React from "react";

const Navigation = () => {
  return (
    <aside id="navigation">
      <div>
        <img src="/spotify-logo.png" title="spotify-logo"/>
      </div>
      <div>
        <ul>
          <li><a href="">For You</a></li>
          <li><a href="">Top Tracks</a></li>
          <li><a href="">Favorites</a></li>
          <li><a href="">Recently Played</a></li>
        </ul>
      </div>
      <div>
        Space for image
      </div>
    </aside>
  );
};

export default Navigation;
