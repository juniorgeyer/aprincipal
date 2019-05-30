import { Component, OnInit } from '@angular/core';
import { ConvertSuggestionsList, Product, ProductService } from '../../services/firebase.service';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.page.html',
  styleUrls: ['./tabs1.page.scss'],
})
export class Tabs1Page implements OnInit {

  suggestedProducts: Product[];
  constructor(private convertList: ConvertSuggestionsList) { }

  ngOnInit() {
    this.convertList.getList().then(res=>{
      res.subscribe(data=>{
        this.suggestedProducts = JSON.parse(data[0].listaSugerida);
        this.verifica();
      });
    });
  }

  verifica(){
    console.log(this.suggestedProducts);
  }
}

