const form=document.querySelector('form');
const nombreCompleto=document.getElementById("name");
const email=document.getElementById("email");
const telefono=document.getElementById("telefono");
const asunto=document.getElementById("asunto");
const mensaje=document.getElementById("mensaje");
function sendEmail(){
    const bodyMessage = `Nombre Completo: ${nombreCompleto.value} <br> Email: ${email.value} <br> Teléfono: ${telefono.value} <br> Mensaje: ${mensaje.value}`;
    Email.send({
       SecureToken : "",
        To : 'rociocuello399@gmail.com',
        From : "rociocuello399@gmail.com",
        Subject : asunto.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Éxito!",
                text: "Mensaje enviado con éxito",
                icon: "success"
              });
        }  
      }
    );
}
function checkInputs(){
  const items=document.querySelectorAll(".item");
  for (const item of items){
    if(item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    if(items[1].value != ""){
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    })
    item.addEventListener("keyup", ()=>{
      if(item.value != ""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else{
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}
function checkEmail(){
  const emailRegex= /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  const errorTxtEmail=document.querySelector(".error-txt.email")
    if(!email.value.match(emailRegex)){
      email.classList.add("error");
      email.parentElement.classList.add("error");
      if (email.value != ""){
        errorTxtEmail.innerText="Introduzca una dirección de correo electrónico válida"
      }
      else{
        errorTxtEmail.innerText="El correo electrónico no puede estar en blanco"
      }
    }
    else{
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
}
  

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();
    if (!nombreCompleto.classList.contains("error") && !email.classList.contains("error") && !telefono.classList.contains("error") && !asunto.classList.contains("error") && !mensaje.classList.contains("error")){
         sendEmail();
         form.reset();
         return false;
    }
});