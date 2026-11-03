function UserList({ users, loading }) {

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (

    <div>

      {users.map((user) => (

        <div className="user" key={user.id}>

          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <p>{user.phone}</p>

        </div>

      ))}

    </div>

  );
}

export default UserList;