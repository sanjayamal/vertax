import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Change Password",
    key: 1,
  },
  {
    label: "Log out",
    key: 2,
  },
];

const UserInfo = () => {
  const user = null;
  return (
    <>
      {!user ? (
        <Dropdown menu={{ items }} trigger={["hover"]}>
          <div>Rajitha</div>
        </Dropdown>
      ) : (
        "Sign In"
      )}
    </>
  );
};

export default UserInfo;
