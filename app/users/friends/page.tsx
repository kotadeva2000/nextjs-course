async function makePostRequest() {
  const res = await fetch("http://localhost:3000/api/hello", {
    method: "POST",
  headers: {
    "Content-Type": "application/json", 
  },
  body: JSON.stringify({ name: "Deva Harsha" }),
  });
  const data = await res.json();
  return {data};
}

export default async function friends() {
  const data = await makePostRequest();

  return (
    <div> 
      <h1>
        friends page
      </h1>
      <p>
        {data.data.message}
      </p>
    </div>
  );
}