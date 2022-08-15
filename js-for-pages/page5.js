//Add id to this URL to get a single user
const URL = "https://jsonplaceholder.typicode.com/users/"

export function setupP5Handler() {
  document.getElementById("btn-fetch-user").onclick = fetchUserData
}

async function fetchUserData() {
  const id = document.getElementById("user-id-input").value
  if (!id) {
    alert("Please provide an ID (An NEVER use alerts for real)")
    return
  }
  //TODO: fetch and present data for the user requested
  alert("Please complete me")
}