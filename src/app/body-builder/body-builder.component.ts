import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Data, PropertyBuilderComponent } from '../property-builder/property-builder.component';

interface Type {
  value: string
  label: string
}
interface TypeGroup {
  label: string;
  types: Type[]
}

export interface Payload {
  type: "none" | "multipart/form-data" | "application/x-www-form-urlencoded" | "application/json"
  text?: string
  form?: Data[]
}

@Component({
  selector: 'body-builder',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PropertyBuilderComponent
  ],
  templateUrl: './body-builder.component.html',
  styleUrl: './body-builder.component.scss'
})
export class BodyBuilderComponent {
  typeGroups: TypeGroup[] = [
    {
      label: "Form",
      types: [
        {
          label: "Form Data",
          value: "multipart/form-data"
        },
        {
          label: "Form URL encoded",
          value: "application/x-www-form-urlencoded"
        }
      ]
    },
    {
      label: "Text",
      types: [
        {
          label: "JSON",
          value: "application/json"
        }
      ]
    }
  ]

  payload: Payload = {
    type: "none"
  }

  @Output() bodyChange = new EventEmitter<Payload>();

  typeChanged() {
    if (this.payload.type === "none") {
      this.payload.text = ""
      this.payload.form = []
    } else if (this.payload.type === "application/json") {
      this.payload.form = []
    } else {
      this.payload.text = ""
    }
  }

  bodyChanged() {
    this.bodyChange.emit(this.payload)
  }

  formChanged(data: Data[]) {
    this.payload.form = data;
    this.bodyChanged()
  }

}
