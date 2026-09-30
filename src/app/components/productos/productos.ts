import { Component, inject } from '@angular/core';
import { TecnomaxService } from '../../services/tecnomax'; // <--- Se quitó .service
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  private servicio = inject(TecnomaxService);

  listaProductos: Producto[] = this.servicio.getProductos();
  categoriaSeleccionada: string = 'Todos';
  categorias: string[] = ['Todos', ...this.servicio.getCategorias()];

  filtrarCategoria(cat: string): void {
    this.categoriaSeleccionada = cat;
    if (cat === 'Todos') {
      this.listaProductos = this.servicio.getProductos();
    } else {
      this.listaProductos = this.servicio.getProductos().filter(p => p.categoria === cat);
    }
  }
}