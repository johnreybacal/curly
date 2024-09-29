import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { Payload, PayloadBuilderComponent } from "../payload-builder/payload-builder.component";

interface Curl {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  payload?: Payload;
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
    PayloadBuilderComponent,
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
    let curl: string = `curl --request ${this.curl.method} --url ${this.curl.url}`

    if (this.curl.payload?.type && this.curl.payload?.type !== "none") {
      curl += ` --header "Content-type: ${this.curl.payload.type}"`

      if (this.curl.payload?.type === "application/json") {
        curl += ` --data '${this.curl.payload.text}'`
      } else {
        for (let data of this.curl.payload?.form ?? []) {
          curl += ` --form ${data.field}=${data.value}`
        }
      }
    }
    return curl;
  }

  payloadChanged(body: Payload) {
    this.curl.payload = body
  }

}
