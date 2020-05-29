import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const HTTP_URL_PATTERN: string = '^((http[s]?):\\/)\\/?([^:\\/\\s]+)((\\/\\w+)*)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?$'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public productForm: FormGroup

  constructor(fb: FormBuilder) {
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

}
