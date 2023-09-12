import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';


@Component({
  selector: 'app-puroduct-detail',
  templateUrl: './puroduct-detail.component.html',
  styleUrls: ['./puroduct-detail.component.scss']
})
export class PuroductDetailComponent implements OnInit {
  product

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
  }

}
