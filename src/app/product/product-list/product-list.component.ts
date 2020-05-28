import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Product } from 'src/app/shared/model/product'
import { ProductService } from 'src/app/shared/model/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public searchTerm: string = ''
  public myBorderSize: number = 1
  public displayImage: boolean = true
  public products$: Observable<Product[]>

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts$()
  }

  ngOnInit(): void {
  }

  public toggleImage(): void {
    this.displayImage = !this.displayImage
  }

  public refreshProducts() {
    this.productService.fetch()
  }

}
