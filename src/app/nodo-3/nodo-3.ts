import { Component, signal } from '@angular/core';
import { Book } from '../shared/book/book';
import { Modal } from '../shared/modal/modal';

@Component({
  selector: 'app-nodo-3',
  imports: [Book, Modal],
  templateUrl: './nodo-3.html',
})
export class Nodo3 {

  // ── Kant ────────────────────────────────────────────────────────────────
  modalKantOpen = signal(false);
  readonly modalKantContent = `
    <h3 style="color:#e91e8c;margin-top:0">Immanuel Kant y la Dignidad</h3>
    <p style="line-height:1.6">De acuerdo a Kant, utilizar la vida íntima de una persona únicamente como un "medio" para generar rating o ingresos publicitarios, vulnera su condición fundamental humana. La persona deja de ser el "fin" en sí mismo para convertirse en un objeto comercial dentro de la televisión.</p>
  `;
  openModalKant()  { this.modalKantOpen.set(true); }
  closeModalKant() { this.modalKantOpen.set(false); }

  // ── Stingo ──────────────────────────────────────────────────────────────
  modalStingoOpen = signal(false);
  readonly modalStingoContent = `
    <h3 style="color:#e91e8c;margin-top:0">Daniel Stingo: Censura y Daño</h3>
    <p style="line-height:1.6">El Artículo 19 N° 4 de la Constitución protege la vida privada y la honra. Sin embargo, como en Chile no existe censura previa, la acción protectora debe ocurrir cuando la persona <em>sabe con anticipación</em> que se emitirá contenido privado. De lo contrario, las acciones (penales o civiles) solo reparan el daño una vez que ya fue emitido y propagado.</p>
  `;
  openModalStingo()  { this.modalStingoOpen.set(true); }
  closeModalStingo() { this.modalStingoOpen.set(false); }

  // ── Ricoeur ─────────────────────────────────────────────────────────────
  modalRicoeurOpen = signal(false);
  readonly modalRicoeurContent = `
    <h3 style="color:#e91e8c;margin-top:0">Paul Ricoeur: Sí mismo como otro</h3>
    <p style="line-height:1.6">La perspectiva de Ricoeur nos obliga a evaluar nuestras acciones considerando siempre la vulnerabilidad del otro. En la televisión chismosa, esto exige que el panelista empatice con el afectado y su entorno antes de emitir un juicio que tendrá alcance nacional.</p>
  `;
  openModalRicoeur()  { this.modalRicoeurOpen.set(true); }
  closeModalRicoeur() { this.modalRicoeurOpen.set(false); }

  // ── Rojas ───────────────────────────────────────────────────────────────
  modalRojasOpen = signal(false);
  readonly modalRojasContent = `
    <h3 style="color:#e91e8c;margin-top:0">Análisis: Caso Sergio Rojas</h3>
    <p style="line-height:1.6">Involucrar a un menor de edad en el debate de la prensa rosa vulnera los derechos superiores del niño de manera grave. Este caso concluyó con acciones legales y demostró que la responsabilidad del comunicador es ineludible cuando afecta la intimidad, honra e identidad de un niño, independiente de la exposición previa que hagan sus padres.</p>
  `;
  openModalRojas()  { this.modalRojasOpen.set(true); }
  closeModalRojas() { this.modalRojasOpen.set(false); }

  // ── Valor monetario ─────────────────────────────────────────────────────
  modalValorOpen = signal(false);
  readonly modalValorContent = `
    <h3 style="color:#e91e8c;margin-top:0">Valor Monetario vs. Valor Periodístico</h3>
    <p style="line-height:1.6">Como plantea Carolina Martínez, el área comercial y la búsqueda de rating a menudo compiten directamente con el valor ético y periodístico de la información, priorizando la rentabilidad (el morbo) por encima de la responsabilidad hacia los sujetos expuestos.</p>
  `;
  openModalValor()  { this.modalValorOpen.set(true); }
  closeModalValor() { this.modalValorOpen.set(false); }

  // ── Protección jurídica ─────────────────────────────────────────────────
  modalJuridicaOpen = signal(false);
  readonly modalJuridicaContent = `
    <h3 style="color:#e91e8c;margin-top:0">Protección Jurídica Fragmentada</h3>
    <p style="line-height:1.6">En nuestro marco legal, la protección de la intimidad se encuentra dispersa, lo que deja múltiples vacíos que la televisión de entretenimiento aprovecha sistemáticamente para bordear el límite legal sin cruzar al delito evidente.</p>
  `;
  openModalJuridica()  { this.modalJuridicaOpen.set(true); }
  closeModalJuridica() { this.modalJuridicaOpen.set(false); }

  // ── Ley 21.719 ──────────────────────────────────────────────────────────
  modalLeyOpen = signal(false);
  readonly modalLeyContent = `
    <h3 style="color:#e91e8c;margin-top:0">Nueva Ley N° 21.719</h3>
    <p style="line-height:1.6">Publicada en 2024, es la nueva ley de protección de datos personales. Su entrada en vigencia total será en diciembre de 2026, lo que obligará a los medios de comunicación a aplicar criterios mucho más estrictos sobre cómo manipulan y exponen datos o información de carácter privado.</p>
  `;
  openModalLey()  { this.modalLeyOpen.set(true); }
  closeModalLey() { this.modalLeyOpen.set(false); }

  // ── Límite ético ────────────────────────────────────────────────────────
  modalLimiteOpen = signal(false);
  readonly modalLimiteContent = `
    <h3 style="color:#e91e8c;margin-top:0">El Límite Ético en la Decisión Editorial</h3>
    <p style="line-height:1.6">Alcanzado el "punto de no retorno" (la emisión en pantalla), ninguna disculpa borra el registro digital ni el daño provocado. Por eso, el límite ético principal debe recaer en la decisión editorial previa a la emisión, evaluando las consecuencias humanas antes de encender la cámara.</p>
  `;
  openModalLimite()  { this.modalLimiteOpen.set(true); }
  closeModalLimite() { this.modalLimiteOpen.set(false); }

  // ── CNTV Historia (párrafos 1-2) ────────────────────────────────────────
  modalCntvOpen = signal(false);
  readonly modalCntvContent = `
    <h3 style="color:#e91e8c;margin-top:0">El CNTV y las denuncias ciudadanas</h3>
    <p style="line-height:1.6">El Consejo Nacional de Televisión (CNTV) fue creado en 1989 mediante la Ley N° 18.838, con el mandato de velar por el correcto funcionamiento de la televisión en Chile y garantizar el respeto de principios fundamentales como la dignidad humana, la familia y la democracia.</p>
    <p style="line-height:1.6">Entre 2017 y 2020, el CNTV registró un aumento sostenido de denuncias ciudadanas, siendo la vulneración a la <strong>dignidad humana</strong> la categoría más recurrente. Esto evidencia que la audiencia percibía que ciertos contenidos televisivos —especialmente los de farándula— sobrepasaban los límites éticos aceptables, aunque la televisora podía seguir emitiéndolos mientras no existiera una sanción formal.</p>
  `;
  openModalCntv()  { this.modalCntvOpen.set(true); }
  closeModalCntv() { this.modalCntvOpen.set(false); }

  // ── Código de Ética (párrafo 4) ─────────────────────────────────────────
  modalCodigoOpen = signal(false);
  readonly modalCodigoContent = `
    <h3 style="color:#e91e8c;margin-top:0">Código de Ética del Colegio de Periodistas</h3>
    <p style="line-height:1.6">El Código de Ética del Colegio de Periodistas de Chile establece que el ejercicio periodístico debe regirse por principios de veracidad, independencia y respeto a la dignidad de las personas. Específicamente, prohíbe la invasión de la vida privada sin justificación de interés público y exige que toda información que pueda dañar la honra de una persona sea sometida a un juicio de proporcionalidad antes de ser difundida.</p>
    <p style="line-height:1.6">Este código, sin embargo, no tiene carácter vinculante para comunicadores o opinólogos que no son periodistas colegiados, lo que genera un vacío ético relevante en la televisión de farándula, donde muchos rostros no tienen formación periodística formal.</p>
  `;
  openModalCodigo()  { this.modalCodigoOpen.set(true); }
  closeModalCodigo() { this.modalCodigoOpen.set(false); }

  // ── Marco legal (párrafo 5) ──────────────────────────────────────────────
  modalMarcoOpen = signal(false);
  readonly modalMarcoContent = `
    <h3 style="color:#e91e8c;margin-top:0">Marco Legal de la Televisión en Chile</h3>
    <p style="line-height:1.6">La Ley N° 18.838 de 1989 crea el CNTV y define los principios que debe respetar la televisión chilena. La Ley N° 20.750 de 2015 actualiza este marco, incorporando la televisión digital y ampliando las facultades fiscalizadoras del Consejo.</p>
    <p style="line-height:1.6">El CNTV puede fiscalizar, investigar y sancionar a los canales que vulneren los principios establecidos en la ley. Sus sanciones incluyen amonestaciones, multas y, en casos extremos, la revocación de la concesión. No obstante, la ley <strong>no regula de manera específica</strong> los conflictos éticos que surgen cuando la prensa rosa convierte experiencias privadas en contenido televisivo.</p>
  `;
  openModalMarco()  { this.modalMarcoOpen.set(true); }
  closeModalMarco() { this.modalMarcoOpen.set(false); }

  // ── Stingo: excepción recurso de protección (párrafo 7) ─────────────────
  modalStingoExcOpen = signal(false);
  readonly modalStingoExcContent = `
    <h3 style="color:#e91e8c;margin-top:0">La excepción: recurso de protección</h3>
    <p style="line-height:1.6">Daniel Stingo explica que existe una excepción a la regla de no censura previa: el <strong>recurso de protección</strong> ante la Corte de Apelaciones. Si una persona tiene conocimiento previo de que se emitirá contenido que considera privado o dañino, puede presentar esta acción constitucional fundamentándose en la amenaza a su honra, intimidad o vida privada.</p>
    <p style="line-height:1.6">Para que este recurso prospere, la amenaza debe ser <em>actual y conocida</em> antes de la emisión. Una vez que el contenido ya fue difundido, el recurso de protección pierde su efecto preventivo y solo queda la vía del daño reparatorio mediante acciones civiles o penales.</p>
  `;
  openModalStingoExc()  { this.modalStingoExcOpen.set(true); }
  closeModalStingoExc() { this.modalStingoExcOpen.set(false); }

  // ── Menor de edad (párrafo 9) ────────────────────────────────────────────
  modalMenorOpen = signal(false);
  readonly modalMenorContent = `
    <h3 style="color:#e91e8c;margin-top:0">Responsabilidad agravada: el menor de edad</h3>
    <p style="line-height:1.6">La libertad de expresión permite que el contenido se difunda sin censura previa, pero no elimina la responsabilidad posterior cuando afecta los derechos de terceros. En el caso del hijo de Rafael Araneda y Marcela Vacarezza, la exposición adquirió una gravedad especial por tratarse de un menor de edad.</p>
    <p style="line-height:1.6">El ordenamiento jurídico chileno otorga una protección reforzada a los niños, niñas y adolescentes, <strong>independientemente de la exposición mediática de sus padres</strong>. Esto significa que aunque los progenitores sean figuras públicas, sus hijos mantienen un derecho a la privacidad, honra e identidad que no puede ser desplazado por el interés televisivo ni por el consentimiento parental implícito.</p>
  `;
  openModalMenor()  { this.modalMenorOpen.set(true); }
  closeModalMenor() { this.modalMenorOpen.set(false); }

  // ── Interés público vs. prensa rosa (párrafos 10-11) ────────────────────
  modalInteresOpen = signal(false);
  readonly modalInteresContent = `
    <h3 style="color:#e91e8c;margin-top:0">Interés Público vs. Interés del Público</h3>
    <p style="line-height:1.6">El constitucionalista Humberto Nogueira distingue entre <strong>información de relevancia pública</strong> —aquella que afecta el desarrollo de los asuntos democráticos y cuya difusión está justificada por la libertad de información— y el <strong>contenido de entretenimiento</strong>, cuya finalidad es atraer audiencia sin necesariamente reportar hechos de impacto colectivo.</p>
    <p style="line-height:1.6">La prensa rosa opera en el segundo campo: el "interés del público" (lo que la audiencia quiere ver) no equivale al "interés público" (lo que la sociedad necesita saber). Esta distinción es clave para evaluar si la exposición de la intimidad de una persona tiene o no justificación ética y legal suficiente.</p>
  `;
  openModalInteres()  { this.modalInteresOpen.set(true); }
  closeModalInteres() { this.modalInteresOpen.set(false); }

  // ── Opinólogo (párrafos 13-14) ───────────────────────────────────────────
  modalOpinologoOpen = signal(false);
  readonly modalOpinologoContent = `
    <h3 style="color:#e91e8c;margin-top:0">La figura del opinólogo</h3>
    <p style="line-height:1.6">En ese escenario comenzó a consolidarse la figura del <strong>«opinólogo»</strong>, término propio del lenguaje televisivo chileno que se popularizó en los años 2000. De acuerdo con el sitio web de Canal 13, este concepto comenzó a usarse a partir de la sección «Los Opinólogos» del programa <em>Vértigo</em> en 2004. Más que una categoría profesional formal, el opinólogo puede entenderse como una figura mediática autorizada por el formato televisivo para comentar, interpretar y juzgar hechos de farándula, muchas veces sin ser necesariamente periodista ni especialista.</p>
    <p style="line-height:1.6">Es importante hacer esa distinción, ya que el opinólogo no se define por investigar o informar un hecho, sino por emitir una lectura personal sobre romances, quiebres, conflictos o escándalos. Su autoridad viene del lugar que ocupa dentro del panel televisivo y de su capacidad de producir comentarios. Por eso, hacia mediados de los años 2000, más que afirmar que la farándula chilena simplemente «comenzó», resulta más preciso sostener que se consolidó una de sus figuras centrales: el opinólogo.</p>
    <p style="line-height:1.6">De acuerdo con el artículo <em>«La irrupción de los opinólogos»</em>, publicado en el sitio web de El Mostrador, esta figura corresponde a personajes que adquieren legitimidad principalmente por su presencia en los medios de comunicación, especialmente en la televisión. No se trata necesariamente de expertos ni de comentaristas profesionales, sino de figuras autorizadas por el propio espacio mediático para emitir opiniones sobre temas diversos. El opinólogo habla desde un sentido común cercano al de la audiencia y puede referirse a asuntos muy distintos, desde la vida cotidiana hasta «algún desliz de una estrella de la farándula».</p>
    <p style="line-height:1.6">En ese sentido, el opinólogo transformó el rumor en contenido permanente. Una separación, una fiesta, un romance o una sospecha podían extenderse durante días a través del comentario televisivo. Esta figura vive «de y en los medios» y amplifica el universo mediático. Por eso, en la prensa rosa, cada conflicto no terminaba en el hecho original, sino que se expandía en paneles, titulares, repeticiones y nuevas interpretaciones.</p>
    <p style="line-height:1.6">De esta manera, la prensa rosa chilena no solo exhibió intimidades, sino que creó una industria del comentario sobre la vida ajena, donde información, opinión, entretenimiento y juicio moral comenzaron a mezclarse dentro del mismo formato televisivo.</p>
  `;
  openModalOpinolgo()  { this.modalOpinologoOpen.set(true); }
  closeModalOpinolgo() { this.modalOpinologoOpen.set(false); }

  // ── Infraestructura editorial (párrafo 15) ───────────────────────────────
  modalInfraOpen = signal(false);
  readonly modalInfraContent = `
    <h3 style="color:#e91e8c;margin-top:0">Infraestructura Editorial</h3>
    <p style="line-height:1.6">Detrás de cada opinólogo existe una <strong>infraestructura editorial</strong> compuesta por editores, productores y líneas editoriales institucionales. El problema ético no recae solo en el comunicador que habla, sino en el conjunto de decisiones que determinaron qué se emite, cómo se encuadra y en qué contexto se presenta.</p>
    <p style="line-height:1.6">Esto implica que la responsabilidad es <em>televisiva amplia</em>: el canal, el productor ejecutivo, el editor y el comunicador comparten la carga ética de cada contenido emitido. La figura del opinólogo como único responsable diluye una cadena de decisiones institucionales que preceden a la emisión.</p>
  `;
  openModalInfra()  { this.modalInfraOpen.set(true); }
  closeModalInfra() { this.modalInfraOpen.set(false); }

  // ── Principios éticos (párrafos 16-17) ──────────────────────────────────
  modalPrincipiosOpen = signal(false);
  readonly modalPrincipiosContent = `
    <h3 style="color:#e91e8c;margin-top:0">Consentimiento, Privacidad y Ética Previa</h3>
    <p style="line-height:1.6">El consentimiento informado protege la autonomía de la persona, pero es un mecanismo imperfecto: firmar una autorización no implica comprender el alcance real de la exposición ni prever sus consecuencias emocionales y sociales a largo plazo. Ser recordado por un hecho íntimo no equivale automáticamente a perder la honra o la dignidad.</p>
    <p style="line-height:1.6">Por eso, antes de difundir cualquier contenido sobre la vida privada de una persona, el comunicador debe evaluar si existe un genuino <strong>interés público</strong> que justifique la exposición. La responsabilidad ética <em>comienza antes de la emisión</em>, no después del daño.</p>
  `;
  openModalPrincipios()  { this.modalPrincipiosOpen.set(true); }
  closeModalPrincipios() { this.modalPrincipiosOpen.set(false); }
}
