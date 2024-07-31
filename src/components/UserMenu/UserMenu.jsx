const UserMenu = () => {
  const handleLogout = () => {};
  return (
    <div>
      <h2>Welcome, user</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
