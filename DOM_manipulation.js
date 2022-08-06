// Append Simple Text
const body = document.body
body.append("Hello World") 

// Create Element and Append Text
const div = document.createElement("div")
// Initializing Elements
div.className = "newDiv"
div.id = "newDidId"
div.style = "background-color:red"
div.innerText = "Hello World" 
div.textContent = "Hello World 2"
body.append(div)


const div2 = document.createElement("div")
div.innerText  = "<strong> Hellow World </strong>"  // ignores html tags and appends as is
div2.innerHTML = "<strong> Hellow World </strong>"  // recognize html tags and apply them
body.append(div2)

