function toggleMode() {
  const html = document.documentElement
  //Function Native
  html.classList.toggle("light")

  //Get Image
  const img = document.querySelector("#profile img")

  //Replacement Image

  if (html.classList.contains("light")) {
    //Conditional light true
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de Carlos Augusto sorrindo, com camisa branca, blusa azul, óculos escuro e fundo de paisagem"
    )
  } else {
    //Condictional dark true
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Imagem de Carlos Augusto sorrindo, com camisa branca e fundo de paisagem"
    )
  }

  //Function Custom
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
}
