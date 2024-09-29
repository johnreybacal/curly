import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';

export interface Data {
  field: string;
  value: string;
}

const ELEMENT_DATA: Data[] = [
  { field: '', value: '' },
];


@Component({
  selector: 'property-builder',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './property-builder.component.html',
  styleUrl: './property-builder.component.scss'
})
export class PropertyBuilderComponent {
  displayedColumns: string[] = ['field', 'value'];
  dataSource = ELEMENT_DATA;


  @ViewChild(MatTable) table?: MatTable<Data>;

  addData() {
    this.dataSource.push({
      field: "",
      value: ""
    });
    this.table?.renderRows();
  }

  getData() {
    console.log(this.dataSource)
  }

}
