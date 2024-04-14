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
    console.log('Preparing to send email...');
    const body = {
          email: this.emailData.userEmail,
          subject: this.emailData.subject,
          message: this.emailData.message
        };
    console.log('Email body:', body);

    this.configService.sendEmail(body)
    .pipe(
      catchError(error => {
        console.log('Error sending email', error);
        alert('Error sending email, try again later.');
        return throwError(() => error);
      })
    )
    .subscribe({
      next: (response) => {
        console.log('Email sent', response);
        alert('Message sent successfully');
      },
      error: (error) => {
        console.log('Subscription error:', error);
      },
      complete: () => {
        console.log('Subscription completed.');
      }
    });
  }

}
