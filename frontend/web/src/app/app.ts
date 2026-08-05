import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthState } from './core/auth/auth';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web');
  protected readonly auth = inject(AuthState)
}
