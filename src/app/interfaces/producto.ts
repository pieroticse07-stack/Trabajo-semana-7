export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  categoria: 'Celulares' | 'Laptops' | 'Accesorios' | 'Dispositivos Inteligentes';
  oferta: boolean;
  descripcion: string;
}
