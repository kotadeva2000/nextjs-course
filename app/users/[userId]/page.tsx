import { notFound } from "next/navigation";

 async function fetcUser(id:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return null;
    }
    const user = await res.json();
    return user;

}

export default async function UserPage({params,}:{params:Promise<{userId:string}>}) {
  const {userId} = await params;
  const user = await fetcUser(userId);
  if (!user) {
    notFound();
  }
  else{
return (
    <>
    <div>
        <h2>{user.name}</h2>
        <p>EMail : {user.email}</p>
        <p>Phone : {user.phone}</p> 
        <p>Website : 
            <a href= {`https://${user.website}`} target="_blank" rel="noopener noreferrer">
            </a>{user.website}
        </p>
        <p>Company : {user.company.name}</p>
        <p>Address : {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</p>
        </div></>
  );
  }
    
}