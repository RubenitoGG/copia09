import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  // *.6 Creemos el método para ir a la página3:
  irPagina3() {

    // Para moverse con el nombre generado automaticamente.
    //this.navCtrl.push("Pagina3Page");

    // *.7 Cambiamos el nombre a la página para movernos con nuestro nombre, ir a pagina3.ts.
    // Y creamos el nuevo push:
    this.navCtrl.push("mi-pagina3");
  }

  // *.9 Creamos un método que devuelve si podemos entrar o no en la página:
  ionViewCanEnter() {
    let numero = Math.round(Math.random() * 10);
    console.log(numero);
    if (numero > 3)
      return true;
    else
      return false;
  }

  // *.10 Creamos un método para salir después de 2 segundos 'PROMESA':
  ionViewCanLeave(){
    let promesa = new Promise((resuelto, reject) => {
      setTimeout(() => {
        resuelto(true);
      }, 2000);
    });

    return promesa
  }

}
