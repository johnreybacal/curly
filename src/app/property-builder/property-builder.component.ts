import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

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
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatIcon
  ],
  templateUrl: './property-builder.component.html',
  styleUrl: './property-builder.component.scss'
})
export class PropertyBuilderComponent {
  displayedColumns: string[] = ['field', 'value', 'select', 'remove'];
  dataSource = new MatTableDataSource<Data>(ELEMENT_DATA);
  selection = new SelectionModel<Data>(true, []);

  @ViewChild(MatTable) table?: MatTable<Data>;

  @Output() formChange = new EventEmitter<Data[]>();

  addData() {
    this.dataSource.data.push({
      field: "",
      value: ""
    });
    this.table?.renderRows();
  }

  removeData(index: number) {
    const data = this.dataSource.data.splice(index, 1)[0]
    this.selection.deselect(data)
    this.table?.renderRows();
    this.formChanged()
  }

  getData() {
    console.log(this.selection.selected)
  }

  checkboxLabel(row: Data): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  onCheckbox(row: Data) {
    this.selection.toggle(row)
    this.formChanged()
  }

  formChanged() {
    this.formChange.emit(this.selection.selected)
  }

}
