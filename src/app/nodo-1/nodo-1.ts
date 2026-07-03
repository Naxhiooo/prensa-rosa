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

  // ── ID 0 — Voyeurismo / Antezana (1.2 izquierda) ────────────────────────
  modalId0Open = signal(false);
  readonly modalId0Content = `
    <p style="line-height:1.6">Esta transformación no solo expone intimidades, sino que los convierte en materia televisiva simplificando experiencias complejas, dramatizándolas y las circula como contenido. En ese mismo movimiento, como advierte Juan David Parra en <em>Voyeurismo: de la cerradura a la pantalla de la era digital</em>, la exposición de la vida privada deja de responder únicamente a una función informativa y pasa también a organizar una forma de consumo basada en el acto de mirar.</p>
    <p style="line-height:1.6">La prensa rosa, entonces, no solo exhibe intimidades: también acostumbra al espectador a relacionarse con ellas desde la curiosidad, el comentario y el juicio, convirtiendo experiencias complejas en escenas observables y funcionales al entretenimiento. La doctora en Información y Comunicación <strong>Lorena Antezana Barrios</strong> refuerza esta relación entre la televisión, emoción y mirada. Para la académica, la televisión es un dispositivo altamente emocional, ya que combina imagen, movimiento, música, montaje y primeros planos que son capaces de intensificar la experiencia del espectador.</p>
    <p style="line-height:1.6">En el caso de la telerrealidad, esa capacidad emocional se cruza con un interés humano continuo: saber qué ocurre con los demás. Desde esta perspectiva, la prensa rosa y los reality shows no crean este deseo de mirar la vida ajena, sino que la organizan mediáticamente, lo intensifican y lo convierten en una forma de consumo público. En este punto, el voyeurismo no opera únicamente como morbo individual, sino también como una forma de regulación social. Antezana plantea que el interés por saber qué ocurre con los demás forma parte de una curiosidad humana persistente, pero también de una práctica colectiva de comentario: mirar la vida ajena permite hablar sobre las normas, sobre quienes las cumplen y quienes se salen de sus límites.</p>
  `;
  openModalId0() { this.modalId0Open.set(true); }
  closeModalId0() { this.modalId0Open.set(false); }

  // ── ID 1 — Casa de Cristal (1.2) ────────────────────────────────────────
  modalId1Open = signal(false);
  readonly modalId1Content = `
    <h3 style="color:#e91e8c;margin-top:0">La Casa de Cristal — Santiago, 2000</h3>
    <p style="line-height:1.6">Esa misma lógica de exposición voyeurista de la intimidad puede verse en Chile en la <strong>Casa de Cristal</strong>, una intervención artística realizada en enero de 2000 en el centro de Santiago en donde <strong>Daniella Tobar</strong> habitó temporalmente. Una estructura transparente expuesta constantemente a la mirada de los transeúntes y medios de comunicación.</p>
    <p style="line-height:1.6">El profesor <strong>Álvaro Cuadra</strong> en su texto <em>De la Ciudad letrada a la ciudad virtual</em>, muestra cómo esta obra, que tenía una propuesta artística, se transformó rápidamente en noticia, objeto de observación y mercancía visual. En vez de consolidarse como un fenómeno visual, la intervención fue opacada porque la atención pública se enfocó en el cuerpo de la actriz y en la expectativa de verla desnuda.</p>
    <p style="line-height:1.6">De acuerdo con el sitio web de The Clinic, la misma actriz contó cómo el proyecto «se salió de control» y que sufrió agarrones. La Casa de Cristal no solo expuso la intimidad femenina, sino que también mostró cómo esa exposición desató el morbo y la apropiación de la mirada ajena puede convertirse en una experiencia vulnerable.</p>
  `;
  openModalId1() { this.modalId1Open.set(true); }
  closeModalId1() { this.modalId1Open.set(false); }

  // ── ID 4 — SQP / conflicto-formato (1.6) ────────────────────────────────
  modalId4Open = signal(false);
  readonly modalId4Content = `
    <p style="line-height:1.6">Esta forma de hacer televisión fue visible en programas como <strong>SQP</strong>, los cuales no se limitaron solamente a tratar temas de romances o quiebres amorosos, también incluyó el conflicto, la intromisión a la vida privada y humor sexualizado. En 2006, la separación de Francisca García-Huidobro y Julio César Rodríguez fue tratada en el mismo set del programa, no solo comentando la vida ajena, sino trasladando el conflicto a la televisión.</p>
    <p style="line-height:1.6">En 2008, el caso entre Ítalo Passalacqua y la familia de Felipe Camiroaga —cuando comentarios emitidos en SQP acerca de la supuesta orientación sexual del hermano del animador terminaron exponiendo públicamente la vida de un tercero— derivó en una demanda por difamación. De acuerdo al CNTV, en 2014 SQP obtuvo un total de 276 denuncias por el trato discriminatorio de Francisca Merino hacia Ana Tijoux, además de lograr una sanción en contra de Chilevisión.</p>
    <p style="line-height:1.6">En 2011, Felipe Camiroaga marcó distancia con esta lógica televisiva al señalar: <em>«Pero pensar que a punta de conflicto queremos sintonía, es pensar a corto plazo»</em>. La televisión estaba consolidando el formato de conflicto, exposición y vulneración de ciertos límites éticos como una forma de producir interés.</p>
    <p style="line-height:1.6"><strong>Lorena Antezana</strong> plantea que siempre se ha generado una dualidad en el espectador: que una persona diga que algo no le parece formativo no significa que no lo vea. Muchas veces existe una distancia entre lo que el espectador considera correcto decir públicamente y aquello que efectivamente consume.</p>
  `;
  openModalId4() { this.modalId4Open.set(true); }
  closeModalId4() { this.modalId4Open.set(false); }

  // ── ID 5 — TV pierde monopolio / Zulueta (1.7) ──────────────────────────
  modalId5Open = signal(false);
  readonly modalId5Content = `
    <p style="line-height:1.6">Esta transformación no solo afectó la programación televisiva, sino también el lugar que ocupaba la televisión en la producción de imágenes y en la exposición de la vida privada. En ese sentido, los psicólogos <strong>Patricio Zulueta</strong> y <strong>Claudia Manhey</strong> plantean que tanto el estallido social como la pandemia fueron momentos que interpelaron «muy desde lo humano» y que, además, propiciaron una «descentralización» de la imagen. Según los entrevistados, en ese proceso <em>«la televisión pierde el monopolio de la imagen y de mostrar, y de la definición de lo que son las personas»</em>.</p>
    <p style="line-height:1.6">Desde esta perspectiva, la crisis no consistió únicamente en la salida de programas o rostros vinculados a la farándula, sino también en el debilitamiento de la televisión como espacio hegemónico de representación. La televisión abierta dejó de ser el único lugar desde donde se construían las figuras públicas, los conflictos visibles y las formas legítimas de aparecer ante los demás.</p>
    <p style="line-height:1.6">La exposición de la vida privada no desapareció, pero comenzó a circular con más fuerza en otros espacios, especialmente en redes sociales, donde las personas también empezaron a producir y administrar sus propias imágenes. La pandemia profundizó este desplazamiento: muchas personas comenzaron a mostrar aspectos de su vida cotidiana (rutinas, trabajo, vínculos familiares, encierro) como una manera de conectar con otros.</p>
    <p style="line-height:1.6"><strong>Lorena Antezana</strong> señala que estos procesos han hecho que se vuelva cada vez más difícil distinguir entre lo privado y lo público. Cuando las personas publican constantemente aspectos de su vida «se pierde esa distancia» y también se debilita la garantía de protección que antes ofrecía el espacio privado.</p>
  `;
  openModalId5() { this.modalId5Open.set(true); }
  closeModalId5() { this.modalId5Open.set(false); }

  // ── ID 7 — Camacho Vila / Sálvame (1.8) ─────────────────────────────────
  modalId7Open = signal(false);
  readonly modalId7Content = `
    <p style="line-height:1.6">Los académicos <strong>Josep Camacho Vila</strong> y <strong>María Teresa Mercado</strong> en su análisis <em>Sálvame, un formato paradigmático de la hibridación de géneros en la historia de la televisión española</em>, muestran que estos formatos ya no se enfocan en un solo género, sino que mezclan conflicto, conversación, espectáculo y vida privada.</p>
    <p style="line-height:1.6">Bajo este mismo enfoque, se entiende que lo que ocurrió después de 2019 no significó un final, sino más bien un reajuste. Aunque estos programas siguen utilizando la vida privada de las celebridades, se hace de una forma más crítica. Esta transformación también puede verse en figuras como <strong>Sergio Rojas</strong>, donde ya no solo se presenta como un comentario ligero, sino como un espacio de opinión y confrontación.</p>
    <p style="line-height:1.6">Un caso puntual es cuando cuestionó públicamente la exposición del hijo menor de Rafael Araneda y Marcela Vacarezza; esto ya no solo fue tratado como espectáculo, sino bajo la forma de una postura definida del conductor. Esta nueva forma abre un momento de reflexión generando un escenario de debate entre los espectadores y los panelistas.</p>
  `;
  openModalId7() { this.modalId7Open.set(true); }
  closeModalId7() { this.modalId7Open.set(false); }

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
