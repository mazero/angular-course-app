import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public searchTerm: string = ''
  public myBorderSize: number = 1
  public displayImage: boolean = true
  public products: IProduct[] = []

  constructor() { }

  ngOnInit(): void {
  }

  public toggleImage(): void {
    this.displayImage = !this.displayImage
  }

  public getFilteredProducts(): IProduct[] {
    const term = this.searchTerm.toLowerCase()
    return this.products.filter(product => {
      const name = product.productName.toLowerCase()
      return name.indexOf(term) > -1
    })
  }

}
