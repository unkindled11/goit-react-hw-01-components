import PropTypes from "prop-types";

import styles from "./friendListItem.module.css"

const FriendListItem = ({ avatar, isOnline, name }) => {
  
  const statusRender = isOnline ? `${styles.status}` : `${styles.statusOff}`;

  return (
       
    <li className={styles.item}>
      <span className={statusRender}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>

  );
}

export default FriendListItem

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }
