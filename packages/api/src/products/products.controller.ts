import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./create-product.dto";

@Controller({
  path: "products",
})
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post("/create")
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Post("/pay")
  payProduct() {
    const res = this.productsService.payProducts(120);
    console.log(res);

    return res;
  }
}
