import React from "react";

const Navigation = () => {
  return (
    <aside id="navigation">
      <div>
        <img width={200} src="/spotify-logo.png" />
      </div>
      <div>
        <ul>
          <li>For You</li>
          <li>Top Tracks</li>
          <li>Favorites</li>
          <li>Recently Played</li>
        </ul>
      </div>
      <div>
        Space for image
      </div>
    </aside>
  );
};

export default Navigation;
