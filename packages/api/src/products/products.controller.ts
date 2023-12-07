import { Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller({
  path: 'products',
})
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  createProduct() {
    return this.productsService.createProduct();
  }

  @Post('/pay')
  payProduct() {
    const res = this.productsService.payProducts(120);
    console.log(res);

    return res;
  }
}
