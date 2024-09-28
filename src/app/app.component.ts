import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurlBuilderComponent } from './curl-builder/curl-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurlBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curly';
}
