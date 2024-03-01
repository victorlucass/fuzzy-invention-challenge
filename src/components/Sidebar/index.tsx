import {
  Cover,
  Profile,
  ProfileFooter,
  ProfileNameVerified,
  SidebarContainer,
} from "./styled";
import { UserLoginContext } from "../../context/UserContext";
import { useContext } from "react";
import { PencilLine, SealCheck } from "@phosphor-icons/react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  const { userData } = useContext(UserLoginContext);
  return (
    <SidebarContainer>
      <Cover src="https://images.unsplash.com/photo-1659535836241-9901856696b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <Profile>
        <Avatar src={userData.picture} />
        <ProfileNameVerified>
          <strong>{userData.name}</strong>
          {userData.email_verified ? <SealCheck size={14} /> : null}
        </ProfileNameVerified>
        <span>{userData.email}</span>
      </Profile>
      <ProfileFooter>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </ProfileFooter>
    </SidebarContainer>
  );
}
