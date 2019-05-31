import { Component, OnInit } from '@angular/core';
import { ConvertSuggestionsList, Product, ProductService } from '../../services/firebase.service';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.page.html',
  styleUrls: ['./tabs1.page.scss'],
})
export class Tabs1Page implements OnInit {

  suggestedProducts: Product[] = [];
  bath: Product[] = [];
  hygiene: Product[] = [];
  tour: Product[] = [];
  mom: Product[] = [];
  several: Product[] = [];

  constructor(private convertList: ConvertSuggestionsList) { }

  ngOnInit() {
    this.convertList.getList().then(res=>{
      res.subscribe(data=>{
        this.suggestedProducts = JSON.parse(data[0].listaSugerida);
        this.splitLists();
      });
    });
  }

  splitLists(){
    console.log(this.suggestedProducts);
    this.suggestedProducts.map(product=>{
      if(product.category == "banho"){
        this.bath.push(product);
      }else if(product.category == "higiene"){
        this.hygiene.push(product);
      }else if(product.category == "passeio"){
        this.tour.push(product);
      }else if(product.category == "mamae"){
        this.mom.push(product);
      }else if(product.category == "diversos"){
        this.several.push(product);
      }
    });
  }

  increaseQuantity(product, category){

    if(product.category == "banho"){
      this.bath = category;
      let currentIndex: number = this.bath.indexOf(product);
      this.bath[currentIndex].quantity = +this.bath[currentIndex].quantity + 1;
    }else if(product.category == "higiene"){
      this.hygiene = category;
      let currentIndex: number = this.hygiene.indexOf(product);
      this.hygiene[currentIndex].quantity = +this.hygiene[currentIndex].quantity + 1;
    }else if(product.category == "passeio"){
      this.tour = category;
      let currentIndex: number = this.tour.indexOf(product);
      this.tour[currentIndex].quantity = +this.tour[currentIndex].quantity + 1;
    }else if(product.category == "mamae"){
      this.mom = category;
      let currentIndex: number = this.mom.indexOf(product);
      this.mom[currentIndex].quantity = +this.mom[currentIndex].quantity + 1;
    }else if(product.category == "diversos"){
      this.several = category;
      let currentIndex: number = this.several.indexOf(product);
      this.several[currentIndex].quantity = +this.several[currentIndex].quantity + 1;
    }
  }

  decreaseQuantity(product, category){

    if(product.category == "banho" && product.quantity > 0){
      this.bath = category;
      let currentIndex: number = this.bath.indexOf(product);
      this.bath[currentIndex].quantity = +this.bath[currentIndex].quantity - 1;
    }else if(product.category == "higiene" && product.quantity > 0){
      this.hygiene = category;
      let currentIndex: number = this.hygiene.indexOf(product);
      this.hygiene[currentIndex].quantity = +this.hygiene[currentIndex].quantity - 1;
    }else if(product.category == "passeio" && product.quantity > 0){
      this.tour = category;
      let currentIndex: number = this.tour.indexOf(product);
      this.tour[currentIndex].quantity = +this.tour[currentIndex].quantity - 1;
    }else if(product.category == "mamae" && product.quantity > 0){
      this.mom = category;
      let currentIndex: number = this.mom.indexOf(product);
      this.mom[currentIndex].quantity = +this.mom[currentIndex].quantity - 1;
    }else if(product.category == "diversos" && product.quantity > 0){
      this.several = category;
      let currentIndex: number = this.several.indexOf(product);
      this.several[currentIndex].quantity = +this.several[currentIndex].quantity - 1;
    }
  }
}

