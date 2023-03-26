const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");
//vai selecionar a imagem dentro da li= green silver golden grafite blue
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //console.log(e);//uso pra testar

    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");
    //adiciona pela cor selecionada
    image.classList.toggle("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);
    //imagem vai mudar pela imagem selecionada
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200); //tempo da imagem mudar
  });
});
