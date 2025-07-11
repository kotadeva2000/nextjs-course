
export default async function users() {
  const response= await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <>
    <div>
      
      <h1>Users list</h1>
      <ul>
        {users.map((user:any) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
          </li>
        ))}
      </ul>
    </div></>
  );
}