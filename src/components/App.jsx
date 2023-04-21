import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from '../pages/Homepage/Homepage';
import UsersPage from '../pages/UsersPage/UsersPage';
import UsersDetailsPage from '../pages/UsersDetailsPage/UsersDetailsPage';
import AddUserPage from 'pages/AddUserPage/AddUserPage';
import UpdateUserPage from 'pages/UpdateUserPage/UpdateUserPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UsersDetailsPage />} />
        <Route path="users/:id/update" element={<UpdateUserPage />} />
        <Route path="users/add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};
