export const UserList = () => {
  const users = [
    { id: 1, name: "Musharraf", email: "musharafmahad17@gmail.com" },
    { id: 2, name: "Hassan", email: "hassanyare@gmail.com" },
    { id: 3, name: "farah", email: "farah@gmail.com" },
  ];

  return (
    <>
      <ul>
        {users.map((user, id) => (
          <li key={id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
};
