import React, { useState, useEffect } from "react";



const FriendsList = () => {
    const friends = []
    const [friendsList, setFriendsList] = useState(0);

  return (
    <div>
        <h1>Friends List</h1>
      <ul>
        {friendsList.map((friend, index) => (
          <li className="mu-li" key={index}>
           < onClick={this.handleClick}> {friend.firstName} {friend.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
