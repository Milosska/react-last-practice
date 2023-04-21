import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from './AddUserPage.styled';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/usersOperations';

const initialState = {
  name: '',
  avatar: '',
  email: '',
  tel: '',
  address: '',
};

const AddUserPage = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = await dispatch(addUser(data)).unwrap();
    setData(initialState);
    navigate(`/users/${newUser.id}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          value={data.name}
          type="text"
          name="name"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Avatar
        <StyledInput
          value={data.avatar}
          type="url"
          name="avatar"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput
          value={data.email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Telephone
        <StyledInput
          value={data.tel}
          type="tel"
          name="tel"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Address
        <StyledInput
          value={data.address}
          type="address"
          name="address"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledBtn>Submit</StyledBtn>
    </StyledForm>
  );
};

export default AddUserPage;
