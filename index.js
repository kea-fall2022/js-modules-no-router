import { setupP2Handler } from "./js-for-pages/page2.js"
import { setupP3Handler } from "./js-for-pages/page3.js"
import { setupP4Handler } from "./js-for-pages/page4.js"
import { setupP5Handler } from "./js-for-pages/page5.js"

/*
  This load and renders a template
  You DONT need to focus on what happens here
*/
function renderTemplate(id) {
  const temp = document.getElementById(id)
  if (!temp) {
    return console.error(`No Template found for '${id}' `)
  }
  const clon = temp.content.cloneNode(true);
  const newContent = document.getElementById("content")
  newContent.innerHTML = ""
  newContent.appendChild(clon)
}

function renderBtnsContent(evt) {
  const element = evt.target
  if (!element.tagName === "BUTTON") {
    return
  }
  const id = element.id + "-template";
  renderTemplate(id)
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "btn1-template": break
    case "btn2-template": setupP2Handler(); break;
    case "btn3-template": setupP3Handler(); break;
    case "btn4-template": setupP4Handler(); break;
    case "btn5-template": setupP5Handler(); break;
  }
}

document.getElementById("btns").onclick = renderBtnsContent;


