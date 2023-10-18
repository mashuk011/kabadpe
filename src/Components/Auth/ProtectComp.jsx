import { useSelector } from "react-redux";

const Protect = ({ children, protectType = "logout" }) => {
  const { userInfo } = useSelector((s) => s.user);
  const renderCondition =
    protectType == "logout"
      ? userInfo
      : protectType == "login"
      ? !userInfo
      : null;
  return <>{renderCondition ? children : null}</>;
};

export default Protect;
