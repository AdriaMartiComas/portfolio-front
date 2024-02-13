import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // REVISAR ESTE MÉTODO VIENE DE CHAT GPT-3

  sendEmail() {
    // Obtener los valores del formulario
    var userEmail = (document.getElementById("email") as HTMLInputElement)?.value;
    var subject = (document.getElementById("subject") as HTMLInputElement)?.value;
    var message = (document.getElementById("message") as HTMLInputElement)?.value;

    // Validar que se hayan proporcionado todos los campos
    if (userEmail === "" || subject === "" || message === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crear el enlace de correo electrónico
    var mailtoLink = "mailto:adriamarticomas@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("De: " + userEmail + "\n\n" + message);

    // Abrir el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;
  }
}
