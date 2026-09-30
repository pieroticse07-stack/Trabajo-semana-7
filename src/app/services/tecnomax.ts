import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class TecnomaxService {
  private categorias: string[] = ['Celulares', 'Laptops', 'Accesorios', 'Dispositivos Inteligentes'];

  private productos: Producto[] = [
    { id: 1, nombre: 'Smartphone Galaxy S23', imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', precio: 2800, categoria: 'Celulares', oferta: true, descripcion: 'Pantalla AMOLED de 120Hz y cámara de alta resolución.' },
    { id: 2, nombre: 'iPhone 15 Pro', imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', precio: 4500, categoria: 'Celulares', oferta: false, descripcion: 'Chasis de titanio y chip A17 Pro.' },
    { id: 3, nombre: 'Laptop ProBook 15', imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400', precio: 3200, categoria: 'Laptops', oferta: true, descripcion: 'Procesador Intel i7 con 16GB RAM y SSD de 512GB.' },
    { id: 4, nombre: 'MacBook Air M2', imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', precio: 4200, categoria: 'Laptops', oferta: false, descripcion: 'Ultra delgada con batería de hasta 18 horas.' },
    { id: 5, nombre: 'Audífonos Noise Cancelling', imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', precio: 350, categoria: 'Accesorios', oferta: true, descripcion: 'Cancelación de ruido activa y Bluetooth 5.2.' },
    { id: 6, nombre: 'Smartwatch Fit Pro', imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', precio: 450, categoria: 'Dispositivos Inteligentes', oferta: true, descripcion: 'Monitoreo de ritmo cardíaco, GPS y resistencia al agua.' }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getOfertas(): Producto[] {
    return this.productos.filter(p => p.oferta);
  }

  getCategorias(): string[] {
    return this.categorias;
  }
}