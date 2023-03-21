import { useContext } from "react";

import {
  LogoutOutlined,
} from "@ant-design/icons";

import { Avatar } from "react-chat-engine-advanced";

import { Context } from "../functions/context";

const Sidebar = () => {
  const { user, setUser } = useContext(Context);

  return (
    
      <div>

      <Avatar
        className="sidebar-avatar"
        avatarUrl={typeof user?.avatar === "string" ? user.avatar : undefined}
        username={user?.username}
        isOnline={true}
      />

      <LogoutOutlined
        onClick={() => setUser(undefined)}
        className="signout-icon"
      />
    </div>
  );
};

export default Sidebar;
