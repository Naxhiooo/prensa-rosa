import { Component, signal } from '@angular/core';
import { Book } from '../shared/book/book';
import { Modal } from '../shared/modal/modal';

@Component({
  selector: 'app-nodo-1',
  imports: [Book, Modal],
  templateUrl: './nodo-1.html',
})
export class Nodo1 {
  modalOpen = signal(false);
  openModal() { this.modalOpen.set(true); }
  closeModal() { this.modalOpen.set(false); }

  modal12Open = signal(false);
  readonly modal12Content = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. <a href="https://example.com" target="_blank">Ver fuente de referencia</a>.</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. <strong>Curabitur pretium tincidunt lacus.</strong> Nulla gravida orci a odio, et tempus feugiat. Nullam varius, turpis molestie dictum ultricies.</p>
  `;
  openModal12() { this.modal12Open.set(true); }
  closeModal12() { this.modal12Open.set(false); }

  readonly carouselCases = [
    {
      year: '1995-1998',
      title: 'Bolocco y Morandé',
      desc: 'La cercanía entre ambos fue seguida como una novela. La farándula funcionó como ficción basada en personas reales, sin guión formal.',
    },
    {
      year: '1998',
      title: 'Mundial de Francia',
      desc: 'El vínculo entre futbolistas y modelos ocupó la conversación mediática: camarines, fiestas y secretos íntimos como acceso privilegiado.',
    },
    {
      year: 'fin de los 90',
      title: 'Pamela Díaz y Manuel Neira',
      desc: 'Su matrimonio fue transmitido en vivo y los preparativos organizados como un docu-reality: la vida privada producida como espectáculo.',
    },
    {
      year: '2004',
      title: 'Zamorano y Kenita Larraín',
      desc: 'La cancelación de su matrimonio se transformó en acontecimiento farandulero, rodeado de especulación, versiones y prensa.',
    },
  ];
  carouselIndex = signal(0);
  rotateCarousel() {
    this.carouselIndex.update(i => (i + 1) % this.carouselCases.length);
  }

  readonly realitySlides = [
    {
      img: 'reality_1.png',
      title: 'An American Family',
      desc: 'El primer antecedente de la telerrealidad: una familia real trasladada al centro del relato televisivo.',
    },
    {
      img: 'reality_2.png',
      title: 'The Real World',
      desc: 'MTV instala a desconocidos en un espacio compartido y convierte la convivencia en espectáculo.',
    },
    {
      img: 'reality_3.png',
      title: 'Big Brother',
      desc: 'El encierro, la observación permanente y la competencia como núcleo del formato.',
    },
    {
      img: 'reality_4.png',
      title: 'Survivor',
      desc: 'La telerrealidad adquiere franquicia internacional: estrategia, eliminación y drama en tiempo real.',
    },
  ];
  realityIndex = signal(0);
  nextReality() { this.realityIndex.update(i => (i + 1) % this.realitySlides.length); }
  prevReality() { this.realityIndex.update(i => (i + this.realitySlides.length - 1) % this.realitySlides.length); }
  goToReality(i: number) { this.realityIndex.set(i); }

  readonly rostroCount = 7;
  rostroIndex = signal(0);
  nextRostro() { this.rostroIndex.update(i => (i + 1) % this.rostroCount); }

  readonly programaCount = 6;
  programaIndex = signal(0);
  nextPrograma() { this.programaIndex.update(i => (i + 1) % this.programaCount); }
}
