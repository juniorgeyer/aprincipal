import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>;

  private products: Observable<Product[]>;

  constructor(db: AngularFirestore) {
    this.productsCollection = db.collection<Product>('products');

    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getproducts() {
    return this.products;
  }

  getProduct(id) {
    return this.productsCollection.doc<Product>(id).valueChanges();
  }

  updateProduct(product: Product, id: string) {
    return this.productsCollection.doc(id).update(product);
  }

  addTodo(product: Product) {
    return this.productsCollection.add(product);
  }

  removeProduct(id) {
    return this.productsCollection.doc(id).delete();
  }
}

/*
* Classe para converter a lista inicial, cadastrada pelo Administrador, em um vetor de produtos
* para que possa se formar a lista de de cada cliente
*/
@Injectable()
export class ConvertSuggestionsList {

  private listCollection: AngularFirestoreCollection<any>;
  private suggestionsList;

  constructor (private db: AngularFirestore) {
  }

  async getList() {
    this.listCollection = this.db.collection<any>('ListaSugestoes');
    return this.suggestionsList = this.listCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
}