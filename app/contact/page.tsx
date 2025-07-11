"use client"
export default function contact() {
  console.log("is this in server or client?");
 
  return (
    <>
    <h1> contact page</h1>
    <div>
      <button onClick={()=>alert("Hello")}>click me</button>
    </div></>
  );
}