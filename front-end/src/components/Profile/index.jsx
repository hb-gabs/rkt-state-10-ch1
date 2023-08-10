import { StyledLogoutButton, StyledProfileContainer, StyledProfileText, StyledUserImage, StyledUserName } from "./styles";
import profileImg from '../../assets/user-img.svg';
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth/auth";
import placeholderImg from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    const { logout, userData } = useAuth();
    const navigate = useNavigate();

    const profileImage = userData.user.avatar
    ? `${api.defaults.baseURL}/files/${userData.user.avatar}`
    : placeholderImg;

    const handeClickLogOut = () => {
        logout();
        navigate('/');
    }

    return (
        <StyledProfileContainer>
            <StyledProfileText>
                <StyledUserName>
                    <Button
                        text={userData.user.name}
                        noBackground
                        noPadding
                        isLink
                        style={{color: 'white'}}
                        to="/profile"
                    />
                </StyledUserName>
                <StyledLogoutButton>
                    <Button
                        text="sair"
                        noPadding
                        noBackground
                        style={{color: 'grey'}}
                        onClick={handeClickLogOut}                                            
                    />
                </StyledLogoutButton>
            </StyledProfileText>
            <StyledUserImage
                src={profileImage}
                alt="Foto de perfil"
                onClick={() => navigate('/profile')}
            />
        </StyledProfileContainer>
    );
}