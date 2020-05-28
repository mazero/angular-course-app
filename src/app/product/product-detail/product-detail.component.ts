import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/model/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
  }

  public goToProducts() {
    this.router.navigate(['/products'])
  }

}
