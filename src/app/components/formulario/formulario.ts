import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Resena } from '../../interfaces/resena';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {
  // Signal para almacenar y gestionar las reseñas
  resenas = signal<Resena[]>([
    { cliente: 'Carlos Mendoza', comentario: 'Excelente atención en TecnoMax, mi laptop llegó el mismo día.', valoracion: 5 },
    { cliente: 'María Fernández', comentario: 'Buenos precios en la sección de ofertas.', valoracion: 4 }
  ]);

  // Signal para la alerta funcional de Bootstrap
  alertaExito = signal<boolean>(false);

  // Campos del formulario
  cliente: string = '';
  comentario: string = '';
  valoracion: number = 5;

  guardarResena(): void {
    if (this.cliente.trim() && this.comentario.trim()) {
      const nuevaResena: Resena = {
        cliente: this.cliente,
        comentario: this.comentario,
        valoracion: Number(this.valoracion)
      };

      this.resenas.update(lista => [...lista, nuevaResena]);
      this.alertaExito.set(true);

      // Limpiar formulario
      this.cliente = '';
      this.comentario = '';
      this.valoracion = 5;

      setTimeout(() => {
        this.alertaExito.set(false);
      }, 3000);
    }
  }
}