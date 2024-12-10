import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type User = {
  userName: string;
};
const Header = () => {
  const [user, setUser] = useState<User | null>({
    userName: "Ibrahim",
  });
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div className="flex items-center justify-center py-2 align-element sm:justify-end">
      {user ? (
        <div className="flex items-center gap-x-3 sm:gap-x-8">
          <p className="text-xs sm:text-sm">Hello, {user.userName}</p>
          <Button variant="link" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center -mr-4 gap-x-3 sm:gap-x-6">
          <Button asChild variant="link" size="sm">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="link" size="sm">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
export default Header;
