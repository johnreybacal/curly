import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface ColSpans {
  method: number;
  url: number;
  body: number;
}
interface Curl {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" ;
  url: string;
  body?: string;
}

@Component({
  selector: 'curl-builder',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatGridListModule, MatCardModule, MatButtonModule],
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
  isMobile: boolean = false;
  colspans: ColSpans = {
    method: 3,
    url: 9,
    body: 12
  }
  curl: Curl = {
    method: "GET",
    url: "",
  }

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
      this.colspans = {
        method: this.isMobile ? 12 : 3,
        url: this.isMobile ? 12 : 9,
        body: 12
      }
    });
  }

  onChange(prop: keyof Curl, data: any) {
    this.curl[prop] = data;
  }

  getCurl() {
    console.log(this.curl)
  }

}
