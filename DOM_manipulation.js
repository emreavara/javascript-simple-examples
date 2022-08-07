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

// Modify elements in DOM
const div2 = document.createElement("div")
div.innerText  = "<strong> Hello World </strong>"  // ignores html tags and appends as is
div2.innerHTML = "<strong> Hello World </strong>"  // recognize html tags and apply them ** Not secure when the text is given by the user
const strong = document.createElement('strong')
strong.innerText = "Some text"
body.append(strong)
body.append(div2)

// Remove element from DOM
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove()
const div3 = document.querySelector(".parent3")
div3.removeChild(spanHi)