import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/model/product.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
    let currentId$: Observable<number> = route.paramMap.pipe(
      map(params => params.get('id')),
      filter(id => id !== null),
      map(id => Number(id))
    )
  }

  ngOnInit(): void {
  }

  public goToProducts() {
    this.router.navigate(['/products'])
  }

}
