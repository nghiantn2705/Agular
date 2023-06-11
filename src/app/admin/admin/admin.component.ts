import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'description', 'imgs', 'categoryId','type','sex', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private add: MatDialog, private api: ApiService) {

  }
  ngOnInit(): void {
    this.getAllProduct();
  }
  openDialog() {
    this.add.open(AddComponent, {
      width: '30%',

    }).afterClosed().subscribe((val: string) => {
      if (val === 'save') {
        this.getAllProduct();
      }
    });
  }
  getAllProduct() {
    this.api.getProduct()
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: () => {
          alert("Error while fetchung the Records!...")
        }
      })
  }
  updateProduct(row: any) {
    this.add.open(AddComponent, {
      width: "30%",
      data: row
    }).afterClosed().subscribe((val: string) => {
      if (val === 'update') {
        this.getAllProduct();
      }
    })
  }

  deleteProduct(id: number) {
    this.api.deleteProduct(id)
      .subscribe({
        next: (res:any) => {
          alert("Product Delete Succesfully");
          this.getAllProduct();
        }, error: () => {
          alert("Error while deleting the secord!...")
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}