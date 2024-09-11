import { FaGithub } from "react-icons/fa6";

const UserAvatar = () => {
  return (
    <a href="https://github.com/Gammon64/Adashmin">
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          padding: "0.5rem",
          textDecoration: "none",
          color: "black",
        }}
      >
        <FaGithub />
      </span>
    </a>
  );
};

export default UserAvatar;
