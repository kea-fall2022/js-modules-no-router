const URL = "https://jsonplaceholder.typicode.com/users"
import { encode } from "../utils.js"

let users = []


export function setupP4Handler() {
  console.log("Please complete me")
  document.getElementById("btn-get-all").onclick = getAllUsers
  showData(users)
}

//Remove before video
export async function getAllUsers() {
  alert("Please complete me")
  

}

function showData(data) {
   // TODO: Make the table-rows
  //document.getElementById("tbl-body").innerHTML = tableRows
}