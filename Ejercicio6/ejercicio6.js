// const archivo = await fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json));

  // const usuarios= await fetch('')

  // function fetchUsers() {
  //   return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

// const users = async () => {
  
// }
async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}