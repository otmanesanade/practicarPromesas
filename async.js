const boton = document.querySelector("#solict")
const textContent = document.querySelector("#textContent")



boton.addEventListener('click', () => {
  newSolicitar();
})
  const isOk = false;
  const arraysolicitar = [
    {
      nombre: "otmane",
      correo: "otmank514@gmail.com"
    }
  ];
const solicitar = async ()) => {
    setTimeout(() => {
      if (isOk) return
        );
      } else {
        reject('Error al obtener el usuarios')
        
      }
    }, 2000);


};


const newSolicitar = async () => {
  try {
    const usuario = await solicitar();
    const { nombre, correo } = usuario
    console.log(`mi nombre es ${nombre} y mi correo es ${correo}`);
    textContent.innerHTML = `mi nombre es ${nombre} y mi correo es ${correo}`

  }
  catch (error) {
    console.log(error);
    textContent.innerHTML = 'Error al obtener el usuarios'

  }
};
