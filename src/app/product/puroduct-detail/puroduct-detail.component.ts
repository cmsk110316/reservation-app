import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-puroduct-detail',
  templateUrl: './puroduct-detail.component.html',
  styleUrls: ['./puroduct-detail.component.scss']
})
export class PuroductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductById(params.get('productId')!)
      const pruductObservable = this.productService.getProductById(params.get('productId')!)
      pruductObservable.subscribe(
        (data) => {
          this.product = data
        },
        (err) => {

        }
      )
      
    })
  }

}
