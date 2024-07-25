import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vs1-ex';
}
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  telephone: string = '';
  subject: string = '';
  message: string = '';
  numbers: string = '';

  // Флаг для отключения кнопки
  submitButtonDisabled = true;

  onSubmit() {
    // Логика отправки формы
  }

  // Функция, которая проверяет, заполнены ли поля
  checkFormFields() {
    this.submitButtonDisabled = !(this.name && this.email && this.telephone && this.subject && this.message && this.numbers);
  }
}
