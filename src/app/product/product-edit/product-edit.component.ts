import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/model/product.service';

const HTTP_URL_PATTERN: string = '^((http[s]?):\\/)\\/?([^:\\/\\s]+)((\\/\\w+)*)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?$'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public productForm: FormGroup

  constructor(fb: FormBuilder, public productService: ProductService) {
    // We create our Form for product
    this.productForm = fb.group({
      id: [null], // It is the same as `id: new FormControl(null)`
      productName: [
        '', // default value
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(80)
        ] // All the validators to run against this field
      ],
      productCode: [''],
      releaseDate: [new Date()],
      description: [''],
      price: [0, Validators.min(0)],
      starRating: [3, [Validators.min(0), Validators.max(5)]],
      imageUrl: ['', Validators.pattern(HTTP_URL_PATTERN)]
    })
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    debugger
    if (this.productForm.valid) {
      let data: IProduct = this.productForm.value
      this.productService.save(data).subscribe(
        product => console.log(`My product was saved ${product.id}`)
      )
    }

  }

}
