import { Link } from "react-router-dom";
function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
      <Link to={`/profile/${user.id}`}>see Profile</Link>
    </article>
  );
}

export default UserCard;
