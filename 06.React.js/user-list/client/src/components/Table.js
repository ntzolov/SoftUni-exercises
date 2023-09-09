import { useState } from 'react';
import TableUser from './TableUser';
import UserCreate from './UserCreate';
import Loading from './Loading';
import UserDelete from './UserDelete';
import UserInfo from './UserInfo';
import UserEdit from './UserEdit';

export default function Table({ users, onUserCreateAdd, loading, onUserDelete, getUserInfo, onUserEdit }) {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showInfoUser, setShowInfoUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [user, setUser] = useState(null);

  function onAddUserCLick() {
    setShowAddUser(true);
  }

  function onDeleteUserClick(id) {
    setShowDeleteUser((oldState) => id);
  }

  async function onInfoUserClick(id) {
    const user = await getUserInfo(id);
    setUser(user.user);
    setShowInfoUser(true);
  }

  async function onEditUserClick(id) {
    const user = await getUserInfo(id);
    setUser(user.user);
    setShowEditUser(true);
  }

  async function onAddUserHandler(e) {
    await onUserCreateAdd(e);
    setShowAddUser(false);
  }

  async function onEditUserHandler(e, id) {
    await onUserEdit(e, id);
    setShowEditUser(false);
  }

  async function onDeleteUserHandler(id) {
    await onUserDelete(id);
    setShowDeleteUser(false);
  }

  function onClose() {
    setShowAddUser(false);
    setShowDeleteUser(false);
    setShowInfoUser(false);
    setShowEditUser(false);
  }

  return (
    <>
      {showAddUser && <UserCreate onClose={onClose} onAddUserHandler={onAddUserHandler} />}
      {showDeleteUser && <UserDelete onClose={onClose} onDeleteUserHandler={onDeleteUserHandler} id={showDeleteUser} />}
      {showInfoUser && <UserInfo onClose={onClose} user={user} />}
      {showEditUser && <UserEdit onClose={onClose} user={user} onEditUserHandler={onEditUserHandler} />}

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              First name
              <svg
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
              </svg>
            </th>
            <th>
              Last name
              <svg
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
              </svg>
            </th>
            <th>
              Email
              <svg
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
              </svg>
            </th>
            <th>
              Phone
              <svg
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
              </svg>
            </th>
            <th>
              Created
              <svg
                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
              </svg>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            users.map((user) => {
              return (
                <TableUser
                  key={user._id}
                  user={user}
                  onDeleteUserClick={onDeleteUserClick}
                  onInfoUserClick={onInfoUserClick}
                  onEditUserClick={onEditUserClick}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
      <button className="btn-add btn" onClick={onAddUserCLick}>
        Add new user
      </button>
    </>
  );
}
