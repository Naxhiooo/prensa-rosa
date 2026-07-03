import { Component, signal } from '@angular/core';
import { Book } from '../shared/book/book';
import { Modal } from '../shared/modal/modal';

@Component({
  selector: 'app-nodo-2',
  imports: [Book, Modal],
  templateUrl: './nodo-2.html',
})
export class Nodo2 {
  readonly vvTotal = 5;
  vvIndex = signal(0);
  nextVv() { this.vvIndex.update(i => (i + 1) % this.vvTotal); }
  prevVv() { this.vvIndex.update(i => (i + this.vvTotal - 1) % this.vvTotal); }
  goToVv(i: number) { this.vvIndex.set(i); }

  // ── ID 15 — Byung-Chul Han / Stevens (2.1 círculo) ──────────────────────
  modalId15Open = signal(false);
  readonly modalId15Content = `
    <h3 style="color:#e91e8c;margin-top:0">La sociedad de la exposición</h3>
    <p style="line-height:1.6">Lo inquietante de la frase anterior es que hoy ya no es una realidad tan lejana. El filósofo surcoreano <strong>Byung-Chul Han</strong> en su texto <em>«La sociedad de la exposición»</em> plantea que las cosas dejan de importar por la discreción que tienen y empiezan a importar por su visibilidad. No basta con existir, es necesario mostrarse. Han plantea que para la sociedad actual, la simple existencia es algo insuficiente, ya que las cosas empiezan a tener valor cuando son vistas.</p>
    <p style="line-height:1.6">En este contexto, el sujeto deja de ser solamente observado desde afuera, sino que también pasa a convertirse en su propio objeto de exposición. Por eso la visibilidad no funciona como algo neutro: organiza una forma de relación con uno mismo donde el cuerpo se vuelve objeto y la experiencia, contenido.</p>
    <p style="line-height:1.6">Siguiendo esa misma lógica, la psicóloga <strong>Dominique Stevens</strong> señala que en los reality shows «hay una transformación de la intimidad en espectáculo», ya que «la vida privada se está convirtiendo en contenido para captar la atención de la audiencia». Aquello que antes pertenecía al ámbito privado (los vínculos, las emociones, el cuerpo o la vida amorosa) pasa a adquirir valor en la medida en que puede ser mostrado, consumido y comentado públicamente.</p>
    <p style="line-height:1.6">Stevens agrega que «Mostrar las emociones genera que la persona se sienta más validada y más popular también». La psicóloga profundiza esta idea al señalar que los participantes pueden comenzar a actuar desde una «motivación extrínseca»: no desde lo que desean íntimamente, sino desde «lo que el resto quiere ver». Por ejemplo, alguien podría besar a otro participante no solo por deseo personal, sino porque sabe que esa acción atraerá atención sobre ella. Los vínculos amorosos o sexuales dejan de pertenecer únicamente al plano afectivo y comienzan a funcionar como estrategias de visibilidad dentro del espectáculo.</p>
  `;
  openModalId15() { this.modalId15Open.set(true); }
  closeModalId15() { this.modalId15Open.set(false); }

  // ── ID 19 — Stevens condicionamiento / Debord (2.3 banner) ──────────────
  modalId19Open = signal(false);
  readonly modalId19Content = `
    <h3 style="color:#e91e8c;margin-top:0">El reality no solo muestra — también enseña</h3>
    <p style="line-height:1.6"><strong>Dominique Stevens</strong> también explica este proceso desde el condicionamiento operante: si una participante descubre que gritar, exponerse, sexualizarse o entrar en conflicto le trae más audiencia, seguidores o validación, es probable que repita esa conducta porque la asocia con una ganancia. De este modo, el reality no solo muestra comportamientos, sino que también los refuerza. La intimidad femenina se transforma entonces en un objeto de consumo, pero también en un campo de aprendizaje mediático donde ciertas conductas son premiadas porque producen espectáculo.</p>
    <p style="line-height:1.6">Este refuerzo de ciertas conductas muestra que la exposición no opera solo como una decisión individual, sino como parte de un sistema de intercambio entre participantes, medios y audiencia. La transacción es, entonces, doble: no solo existe un mercado de exposición, sino también un mercado del consumo de esa exposición. Ambos se alimentan mutuamente.</p>
    <p style="line-height:1.6">Esta lógica fue anticipada por el filósofo <strong>Guy Debord</strong> en <em>La sociedad del espectáculo</em> (1967), cuando escribió que el espectáculo es el momento en que la mercancía ha logrado la colonización total de la vida social. Lo que Debord describía como una tendencia cultural se ha convertido, en el siglo XXI, en un género televisivo con franquicia internacional.</p>
  `;
  openModalId19() { this.modalId19Open.set(true); }
  closeModalId19() { this.modalId19Open.set(false); }

  // ── ID 22 — Bourdieu capital simbólico (2.4 círculo) ────────────────────
  modalId22Open = signal(false);
  readonly modalId22Content = `
    <h3 style="color:#e91e8c;margin-top:0">La intimidad como capital simbólico</h3>
    <p style="line-height:1.6">Esta transformación no solo afecta a la televisión como industria, sino también al modo en que el sujeto comprende su propia vida privada. Si la intimidad adquiere valor en la medida en que puede ser expuesta, entonces el individuo comienza a aparecer como administrador de sí mismo: selecciona qué mostrar, qué callar, qué exagerar y qué convertir en relato personal.</p>
    <p style="line-height:1.6">En este punto, la privacidad deja de ser únicamente una dimensión personal y se aproxima a una forma de <strong>capital simbólico</strong>. Esto se puede leer en <em>Razones prácticas. Sobre la teoría de la acción</em> del sociólogo <strong>Pierre Bourdieu</strong>, la cual entiende al capital simbólico como una forma de valor basada en el reconocimiento social.</p>
    <p style="line-height:1.6">En el contexto televisivo, la intimidad expuesta puede transformarse en visibilidad, prestigio o legitimidad mediática. No se trata solo de revelar algo privado, sino de convertir esa revelación en una posición dentro del espacio público.</p>
  `;
  openModalId22() { this.modalId22Open.set(true); }
  closeModalId22() { this.modalId22Open.set(false); }

  // ── ID 25 — Varas / audiencia valida (2.5) ──────────────────────────────
  modalId25Open = signal(false);
  readonly modalId25Content = `
    <h3 style="color:#e91e8c;margin-top:0">La audiencia valida la exposición</h3>
    <p style="line-height:1.6">La participación de la audiencia demuestra que el espectáculo de la intimidad no se sostiene únicamente en la exposición del participante, sino en cómo esa exposición se vuelve aceptable. El formato no solo muestra intimidad, crea las condiciones para que esa intimidad pueda ser mirada y juzgada sin culpa. Así, la vulnerabilidad ajena deja de incomodar y pasa a funcionar como entretenimiento legítimo.</p>
    <p style="line-height:1.6"><strong>Claudio Varas</strong>, director de la Escuela de Psicología de la Universidad Mayor, plantea que el rumor cumple una función social, ya que «tener un tema que sea convergente, un tema en común, genera también grupos o comunidades». El consumo de prensa rosa y reality shows no se explica únicamente por el morbo o la curiosidad individual, sino también por su capacidad de producir conversación, pertenencia y contacto cotidiano.</p>
    <p style="line-height:1.6">Sin embargo, esta función social no elimina la dimensión crítica. Para Varas, este tipo de contenido «también refleja la sociedad; la sociedad competitiva, la sociedad individualista», una sociedad que «se fija en cosas que son poco relevantes, poco profundas». La prensa rosa y los reality show son expresiones de una cultura donde la imagen, la exposición, el conflicto y la vida privada adquieren valor social y mediático.</p>
    <p style="line-height:1.6">El psicólogo además señala que «cuando tú tienes poca vida propia o personal, generalmente uno sale hacia afuera». El interés por la vida ajena puede funcionar como una forma de evasión, comparación o desplazamiento hacia experiencias que no pertenecen al espectador, pero la televisión las vuelve disponibles para mirar, comentar y juzgar.</p>
  `;
  openModalId25() { this.modalId25Open.set(true); }
  closeModalId25() { this.modalId25Open.set(false); }
}
