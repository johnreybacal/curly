import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Body {
  type: "none" | "form-data" | "x-www-form-urlencoded" | "json"
  payload?: string
}

@Component({
  selector: 'body-builder',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './body-builder.component.html',
  styleUrl: './body-builder.component.scss'
})
export class BodyBuilderComponent {
  types: string[] = [
    "none",
    "form-data",
    "x-www-form-urlencoded",
    "json"
  ]
  payload: string = ""

  body: Body = {
    type: "none"
  }

}
