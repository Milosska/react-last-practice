import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from './UpdateUserForm.styled';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/usersOperations';

const UpdateUserPage = () => {
  const location = useLocation();
  const [name, setName] = useState(location.state.name);
  const [avatar, setAvatar] = useState(location.state.avatar);
  const [email, setEmail] = useState(location.state.email);
  const [tel, setTel] = useState(location.state.tel);
  const [address, setAddress] = useState(location.state.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'avatar':
        setAvatar(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'tel':
        setTel(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      avatar,
      email,
      tel,
      address,
      id: location.state.id,
    };
    dispatch(updateUser(data));
    navigate(`/users/${location.state.id}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Avatar
        <StyledInput
          value={avatar}
          type="url"
          name="avatar"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Telephone
        <StyledInput
          value={tel}
          type="tel"
          name="tel"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Address
        <StyledInput
          value={address}
          type="address"
          name="address"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledBtn>Submit</StyledBtn>
    </StyledForm>
  );
};

export default UpdateUserPage;
