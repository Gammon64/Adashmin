import HomeButton from "./HomeButton";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <HomeButton />
      <UserAvatar />
    </header>
  );
};

export default Header;
