import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BodyBuilderComponent, Payload } from "../body-builder/body-builder.component";

interface Curl {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  body?: Payload;
}

@Component({
  selector: 'curl-builder',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BodyBuilderComponent,
    MatTabsModule
  ],
  templateUrl: './curl-builder.component.html',
  styleUrl: './curl-builder.component.scss'
})
export class CurlBuilderComponent {
  methods: string[] = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
  ]
  curl: Curl = {
    method: "GET",
    url: "",
  }

  getCurl() {
    console.log(this.curl)
  }

  bodyChanged(body: Payload) {
    this.curl.body = body
  }

}
