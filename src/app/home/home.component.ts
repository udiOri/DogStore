import { Component, OnInit } from '@angular/core';
import { ProductPageService } from "../product-page.service";
import { ActivatedRoute } from "@angular/router";
import { productModel } from "../productModel";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProducts : any;
  constructor(private productPageService: ProductPageService , private activatedRouter : ActivatedRoute) { }

  ngOnInit() {

    // this.activatedRouter.params.subscribe(params =>{
    //   console.log(params);
    //   const id = params['id'];
    //   this.productPageService.getProductById(id).subscribe(res => this.products =res, err => console.log(err));
    // });
    return this.productPageService.getProducts().subscribe((data : productModel[]) => {
      this.allProducts = data;
      console.log(data)
    });
  }

}
