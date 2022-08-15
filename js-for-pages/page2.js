
let text = ""

export function setupP2Handler() {
  document.getElementById("p2-content").innerText = text

  document.getElementById("p2-btn").onclick = () => {
    const newText = document.getElementById("text-input").value
    text = newText
    document.getElementById("p2-content").innerText = text
  }
}

//TODO: write and export af function getText() that will return the value of 'text'




