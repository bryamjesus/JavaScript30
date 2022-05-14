const drums = document.querySelectorAll(".button__drum");

const reproducir = (id) => {
  const letters = /^[A-Za-z]+$/;
  if (!letters.test(id)) {
    return;
  } else {
    //console.log(id);
    let boton =
      id?.length > 1
        ? document.querySelector(`div #${id}`)
        : document?.querySelector(`div .${id.toUpperCase()}`);

    if (!boton) return; //true -> por presiona una tecla que no
    let musica = document.querySelector(`audio[id="${boton.id}"]`);
    //if (!musica) return;
    boton.classList.add("playing");
    musica.play();
    musica.currentTime = 0;
    musica.addEventListener("ended", () => {
      boton.classList.remove("playing");
    });
  }
};

drums.forEach((drum) => {
  //Añadimos una funcion click a los botones
  drum.addEventListener("click", () => {
    //console.log(drum.id);
    reproducir(drum.id); 
  });
});

window.addEventListener("keydown", (event) => {
  //console.log(event.key);
  reproducir(event.key);
});
