import { StyledForm, StyledHeader, StyledImage, StyledImageWrapper, StyledInputWrapper, StyledProfile } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button, Input } from '../../components/index';
import profileImg from '../../assets/user-img.svg';
import { MdPhotoCamera } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useAuth, useFields } from "../../hooks";
import { useState } from "react";
import placeholderImg from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const { userData, updateUser } = useAuth();
    const { fields, setNewFieldsFunction, checkFields, setFields } = useFields({
        name: userData.user.name,
        email: userData.user.email,
    });
    const navigate = useNavigate();

    const [avatarFile, setAvatarFile] = useState(null);
    const [avatar, setAvatar] = useState(userData.user.avatar
        ? `${api.defaults.baseURL}/files/${userData.user.avatar}`
        : placeholderImg);

    const handleUpdateUserInfo = async e => {
        e.preventDefault();

        if (!checkFields()) {
            alert('Todos os campos devem ser preenchidos!');
            return;
        }

        await updateUser({
            data: fields,
            avatarFile,
        });
    }

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        setAvatarFile(file);
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <StyledProfile>
            <StyledHeader>
                <Button
                    text='Voltar'
                    icon={AiOutlineArrowLeft}
                    noBackground
                    onClick={() => navigate(-1)}
                />
            </StyledHeader>
            <StyledImageWrapper>
                <StyledImage
                    src={avatar}
                    alt="Foto do usuário"
                />
                <StyledInputWrapper>
                    <Input
                        icon={MdPhotoCamera}
                        placeholder=""
                        type="file"
                        className="photo-input"
                        onChange={handleChangeAvatar}
                    />
                </StyledInputWrapper>
            </StyledImageWrapper>
            <StyledForm>
                <Input
                    icon={CgProfile}
                    placeholder="Nome"
                    type="text"
                    value={fields.name}
                    onChange={setNewFieldsFunction('name')}
                />
                <Input
                    icon={AiOutlineMail}
                    placeholder="Email"
                    type="text"
                    value={fields.email}
                    onChange={setNewFieldsFunction('email')}
                />
                <Input
                    icon={AiFillLock}
                    placeholder="Senha atual"
                    type="password"
                    value={fields.oldPassword}
                    onChange={setNewFieldsFunction('oldPassword')}
                />
                <Input
                    icon={AiFillLock}
                    placeholder="Nova senha"
                    type="password"
                    value={fields.newPassword}
                    onChange={setNewFieldsFunction('newPassword')}
                />
                <Button
                    text="Salvar"
                    onClick={handleUpdateUserInfo}
                />
            </StyledForm>
        </StyledProfile>
    );
}