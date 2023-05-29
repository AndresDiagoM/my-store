import { Component, OnInit } from '@angular/core';
import { Product, createProductDTO, Category } from '../../models/product.model'; //importamos el modelo de datos

import { StoreService } from '../../services/store.service'; //importamos el servicio
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements  OnInit {

  // -- Propiedades --
  cart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 5, 1);
  detailState = false;
  productDetail: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    images: [],
    category: {
      id: '',
      name: ''
    },
    description: ''
  };
  createState = false;
  limit = 10;
  offset = 0;

  // -- Constructor --  //inyectamos el servicio (inyeccion de dependencias)
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.cart = this.storeService.getCart();
    this.total = this.storeService.getTotal();
  }

  ngOnInit(): void { // Asincrono
    /*this.productsService.getProductsByPage(0,10).subscribe((productsApi) => {
      //console.log(productsApi);
      // formatear los datos de la API
      for (const key in productsApi) {
        if (Object.prototype.hasOwnProperty.call(productsApi, key)) {
          const product = productsApi[key];
          product.id = key;
          this.products.push(product);
          //console.log('product', product)
        }
      }
      //this.products = productsApi;
    });*/
    // Con Firestore
    this.productsService.getPageFirestore(this.offset.toString(),this.limit).subscribe((products) => {
      //console.log('products', products[0]);
      this.products = products;
    });
  }

  // --------- METODOS ----------
  addToCart(product: Product) {
    //console.log('product', product);
    this.storeService.addToCart(product);
    this.total = this.storeService.getTotal();
  }

  closeDetail() {
    this.detailState = !this.detailState;
  }

  onShowDetail(id: string) {
    if(!this.detailState) {
      this.detailState = true; // mostrar panel de detalle
    }
    // CONSULTAR EL PRODUCTO EN LA API
    /*this.productsService.getProduct(id).subscribe((product) => {
      this.productDetail = product;
      //console.log('product', product);
    });*/
    // MOSTRAR EL PRODUCTO QUE ESTA EN EL ARRAY this.products
    this.productDetail = this.products.find((product) => product.id === id) as Product;
  }

  closeCreateProduct() {
    this.createState = !this.createState;
  }

  async onNewProduct(newProduct: Product | createProductDTO) {
    // Con API de firebase
    // this.productsService.create(newProduct).subscribe((response) => {
    //   console.log('response', response);
    //   //this.products.push(product);
    //   //the server response with a object, but is not an entire product object
    //   this.products.push(newProduct as Product);
    // });
    // Con Firestore
    const response= await this.productsService.createFirestore(newProduct);
    console.log('response', response);
  }

  deleteProduct(product: Product) {
    // Con API de firebase
    // this.productsService.delete(product).subscribe((response) => {
    //   console.log('response', response);
    //   const index = this.products.indexOf(product);
    //   this.products.splice(index, 1);
    //   this.detailState = false; // cerrar el panel de detalle
    // });
    // Con Firestore
    this.productsService.deleteFirestore(product).then(() => {
      console.log('Producto eliminado');
    });
  }

  updateProduct(product: Product) {
    // Con API de firebase
    const dto: createProductDTO = {
      title: product.title,
      price: product.price,
      image: product.image,
      images: product.images,
      categoryId: 1,
      description: product.description
    }
    //console.log('dto', product);
    /*this.productsService.update(product.id, product).subscribe((response) => {
      console.log('response', response);
      this.products = this.products.map((productMap) => { // actualizar la lista de productos
        if(productMap.id === product.id) {
          productMap = product;
        }
        return productMap;
      });
    });*/
    // Con Firestore
    this.productsService.updateFirestore(product.id, product).then(() => {
      //console.log('Producto actualizado');
      this.products = this.products.map((productMap) => { // actualizar la lista de productos
        if(productMap.id === product.id) {
          productMap = product;
        }
        return productMap;
      });
    });
  }

  // -- Metodos de paginacion --
  nextPage() {
    this.offset += this.limit;
    this.productsService.getPageFirestore(this.offset.toString(), this.limit).subscribe((products) => {
      this.products = products;
    });
  }
  prevPage() {
    this.offset -= this.limit;
    this.productsService.getPageFirestore(this.offset.toString(), this.limit).subscribe((products) => {
      this.products = products;
    });
  }
}

// se crea un componente con "ng g c components/products"