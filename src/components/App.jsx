import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";

import user from "../data/user.json"
import stats from "../data/stats.json"
import friends from "../data/friends.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection:'column'
      }}
    >
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
  
      <Statistics data={stats} title="Upload stats" />
      
      <FriendList friends={friends} />
      

    </div>
  );
};
