import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TecnomaxService } from '../../services/tecnomax'; // <--- Se quitó .service
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {
  private servicio = inject(TecnomaxService);

  categorias = this.servicio.getCategorias();
  ofertas: Producto[] = this.servicio.getOfertas();
}