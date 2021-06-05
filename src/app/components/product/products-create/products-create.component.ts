import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    id: null as any,
    name: '',
    price: null as any
  }


  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
   
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto criado')
      this.router.navigate(['/products'])

    })

  }

  cancel(): void{
    this.router.navigate(['/products'])
    
  }

}
