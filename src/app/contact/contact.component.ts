import { FormsModule } from '@angular/forms';
import { ConfigService } from './../_services/config.service';
import { Component, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  emailData = {
    userEmail: '',
    subject: '',
    message: ''
  };

  private configService = inject(ConfigService);

  sendEmail() {
    const body = {
          email: this.emailData.userEmail,
          subject: this.emailData.subject,
          message: this.emailData.message
        };

    this.configService.sendEmail(body)
    .pipe(
      catchError(error => {
        console.log('Error sending email', error);
        alert('Error sending email, try again later.');
        return throwError(error);
      })
    )
    .subscribe(response => {
      console.log('Email sent', response);
      alert('Message sent successfully');
    });
  }

}
