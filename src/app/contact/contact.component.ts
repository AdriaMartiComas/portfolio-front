import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userEmail = '';
  subject = '';
  message = '';

  async sendEmail() {
    //TO DO arreglar funcio, no va bé

    // Validar que se hayan proporcionado todos los campos
    if (this.userEmail === "" || this.subject === "" || this.message === "") {
      alert("Please complete all fields.");
      return;
    }

    // Crear el objeto de datos del correo electrónico
    const emailData = {
      email: this.userEmail,
      subject: this.subject,
      message: this.message
    };

    // Enviar una solicitud POST a tu servidor
    const response = await fetch('http://localhost:8080/apiAdri/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      alert("Email sent to Adrià Martí Comas");
    } else {
      alert("Error sending email");
    }
  }

}
