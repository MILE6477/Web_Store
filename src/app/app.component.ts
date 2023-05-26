import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web_Store';

  Daniel: any= {
        nombre: "Daniel Febres ",
        edad: "26",
        titulo: "Ingeniero",
        Ciudad: "Loja",
        celular:"0987654321"


  }

  Juan: any= {
    nombre: "Juan Naranjo",
    edad: "34",
    titulo: "Diseñador",
    Ciudad: "Riobamba",
    celular:"0984989953"


}

Milenny: any= {
  nombre: "Milenny Suquilanda",
  edad: "29",
  titulo: "Comunicador Social",
  Ciudad: "Loja",
  celular:"0992197088"


}

Paula: any= {
  nombre: "Paula Carrion",
  edad: "24",
  titulo: "Diseñadora Industrial",
  Ciudad: "Quito",
  celular:"0987296960"

}


  Pie: any= {
    materia: "Diseño y Tecnologia Web",
    maestria: "Máster Universitario en Diseño y Producción Multimedia",
    universidad: "UNIR",



}
}

