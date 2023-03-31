const questions = [
  {
    letter: "a",
    answer: ["nappa", "arale", "bora"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CONTIENE LA A</span><span class = 'letter-question'>Personaje que acompaña a Vegeta la primera vez que llega a la Tierra en el Arco de los Saiyans.</span>",
      "<span class = 'letter'>CON LA A</span><span class = 'letter-question'>Androide construida por Senbei Norimaki y que aparece en Dragon Ball y Dragon Ball Super.</span>",
      "<span class = 'letter'>CONTIENE LA A</span><span class = 'letter-question'>Personaje indígena y protector de la Torre de Karin.</span>",
    ],
  },
  {
    letter: "b",
    answer: ["bulma", "bubbles", "baba"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA B</span><span class = 'letter-question'>Personaje femenina que creó el Radar del dragón.</span>",
      "<span class = 'letter'>CON LA B</span><span class = 'letter-question'>Chimpancé que vive con Kaíto.</span>",
      "<span class = 'letter'>CON LA B</span><span class = 'letter-question'>Nombre de la bruja hermana de Mutenroshi.</span>",
    ],
  },
  {
    letter: "c",
    answer: ["chaoz", "chichi", "champa"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA C</span><span class = 'letter-question'>Personaje de piel blanca y alumno de la Escuela Grulla.</span>",
      "<span class = 'letter'>CON LA C</span><span class = 'letter-question'>La princesa del Monte Fly-pan.</span>",
      "<span class = 'letter'>CON LA C</span><span class = 'letter-question'>El Dios de la Destrucción del Universo 6 y hermano gemelo de Beerus.</span>",
    ],
  },
  {
    letter: "d",
    answer: ["dabra", "duolin", "dende"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA D</span><span class = 'letter-question'>Personaje que es el Rey de las tinieblas y mano derecha de Babidi.</span>",
      "<span class = 'letter'>CON LA D</span><span class = 'letter-question'>Nombre del monasterio donde Krilin originalmente entrenó antes de salir en busca de Mutenroshi.</span>",
      "<span class = 'letter'>CON LA D</span><span class = 'letter-question'>Namekiano que Freezer elimina tras darse cuanta que pasee poderes curativos. </span>",
    ],
  },
  {
    letter: "e",
    answer: ["estrella", "vegeta", "magenta"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA E</span><span class = 'letter-question'>Imagen que aparece en el interior de las Esferas de Dragón.</span>",
      "<span class = 'letter'>CONTIENE LA E</span><span class = 'letter-question'>Personaje que derrota a Nappa en el Arco de los Saiyans.</span>",
      "<span class = 'letter'>CONTIENE LA E</span><span class = 'letter-question'>Presidente ejecutivo de la Farmacéutica Roja, la cara pública actual del Ejército del Listón Rojo el la película Dragon Ball Super: Super Hero.</span>",
    ],
  },
  {
    letter: "f",
    answer: ["frost", "pilaf", "brief"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA F</span><span class = 'letter-question'>Pirata mafioso del Universo 6 y contraparte de Freezer en dicho universo.</span>",
      "<span class = 'letter'>CONTIENE LA F</span><span class = 'letter-question'>Nombre del primer villano de Dragon Ball.</span>",
      "<span class = 'letter'>CONTIENE LA F</span><span class = 'letter-question'>Uno de los hombres más ricos e inteligentes en el planeta Tierra y dueño de la Corporación Capsula.</span>",
    ],
  },
  {
    letter: "g",
    answer: ["garlic", "gamma", "gohan"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA G</span><span class = 'letter-question'>Antagonista de la primera película de Dragon Ball Z y que ansiaba vengar la muerte de su padre ante Piccolo Original.</span>",
      "<span class = 'letter'>CON LA G</span><span class = 'letter-question'>Nombre de los androides nº1 y nº2 creados por el Dr.Hedo en la película Dragon Ball Super: Super Hero</span>",
      "<span class = 'letter'>CON LA G</span><span class = 'letter-question'>Nombre del primer nieto de Bardock.</span>",
    ],
  },
  {
    letter: "h",
    answer: ["shu", "shenron", "hit"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CONTIENE LA H</span><span class = 'letter-question'>Perro humanoide que forma parte del grupo de Pilaf.</span>",
      "<span class = 'letter'>CONTIENE LA H</span><span class = 'letter-question'>Nombre del dragon creado por Kami a partir de una estatua.</span>",
      "<span class = 'letter'>CON LA H</span><span class = 'letter-question'>Personaje apodado el Infalible y que es uno de los guerreros de Champa.</span>",
    ],
  },
  {
    letter: "i",
    answer: ["krilin", "kami", "kaito"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CONTIENE LA I</span><span class = 'letter-question'>Personaje que más veces ha muerto a lo largo de la serie.</span>",
      "<span class = 'letter'>CONTIENE LA I</span><span class = 'letter-question'>Personaje que salió de la parte bondadosa de Piccolo original y que durante mucho años fue el Guardián de la Tierra.</span>",
      "<span class = 'letter'>CONTIENE LA I</span><span class = 'letter-question'>Kaio del Norte</span>",
    ],
  },
  {
    letter: "j",
    answer: ["yajirobei", "jeice", "jiren"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CONTIENE LA J</span><span class = 'letter-question'>Personaje al que Shon Goku se le come el pescado que tenia cocinando en el Arco del Rey Demonio Piccolo.</span>",
      "<span class = 'letter'>CON LA J</span><span class = 'letter-question'>Personaje de piel roja y pelo largo que era miembro de las Fuerzas Especiales de Freezer.</span>",
      "<span class = 'letter'>CON LA J</span><span class = 'letter-question'>Personaje apodado el Gris y que es el primero en poder contrarrestar completamente una Genki-dama de Son Goku.</span>",
    ],
  },
  {
    letter: "k",
    answer: ["kale", "bardock", "kinton"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA K</span><span class = 'letter-question'>Conocida también como la Saiyana Demonio y habitante del Planteta Sadala del Universo 6.</span>",
      "<span class = 'letter'>CONTIENE LA K</span><span class = 'letter-question'>Saiano esposo de Gine y que era lider de un escuadrón al mando del Rey Vegeta.</span>",
      "<span class = 'letter'>CON LA K</span><span class = 'letter-question'>Nombre del objeto mágico que Mutenroshi regala a Son Goku.</span>",
    ],
  },
  {
    letter: "l",
    answer: ["lemo", "lunch", "cell"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA L</span><span class = 'letter-question'>Personaje que abandona el Imperio de Freezer y que junto a Chelye se une a Broly en la película Dragon Ball Super: Broly.</span>",
      "<span class = 'letter'>CON LA L</span><span class = 'letter-question'>Personaje femenino con doble personalidad, una bondadosa y otra malvada.</span>",
      "<span class = 'letter'>CONTIENE LA L</span><span class = 'letter-question'>Androide creado por el robot del Dr.Gero para matar a Son Goku y que absorve a los androides 17 y 18.</span>",
    ],
  },
  {
    letter: "m",
    answer: ["marron", "mutaito", "mai"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA M</span><span class = 'letter-question'>Nombre de la hija de Krilin y Androide 18.</span>",
      "<span class = 'letter'>CON LA M</span><span class = 'letter-question'>Gran Maestro que enciarra al Rey Demonio Piccolo con la técnica Mafuaba en un contenedor electónico</span>",
      "<span class = 'letter'>CON LA M</span><span class = 'letter-question'>Personaje que acompaña a Shu en las misiones ordenadas por Pilaf.</span>",
    ],
  },
  {
    letter: "n",
    answer: ["nail", "gine", "konkichi"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA N</span><span class = 'letter-question'>Protector principal de el Gran patriarca de Namek y que acaba fusionado con Piccolo.</span>",
      "<span class = 'letter'>CONTIENE LA N</span><span class = 'letter-question'>Mujer Saiyana de classe baja y esposa de Bardock.</span>",
      "<span class = 'letter'>CONTIENE LA N</span><span class = 'letter-question'>Zorro humanoide y ladronzuelo que se hizo amigo de Son Goku cuando este iba de camino a la Isla Papaya</span>",
    ],
  },
  {
    letter: "ñ",
    answer: ["muñeca", "montaña", "baño"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CONTIENE LA Ñ</span><span class = 'letter-question'>Juguete en el que tranforman a Pan en Dragon Ball GT.</span>",
      "<span class = 'letter'>CONTIENE LA Ñ</span><span class = 'letter-question'>Lugar natural donde Son Goku vivia con su abuelo Son Gohan.</span>",
      "<span class = 'letter'>CONTIENE LA Ñ</span><span class = 'letter-question'>Lugar donde Mutenroshi convertido en diminuto se esconde para espiar a Bulma en Dragon Ball.</span>",
    ],
  },
  {
    letter: "o",
    answer: ["piccolo", "gero", "goku"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CONTIENE LA O</span><span class = 'letter-question'>Personaje que mata por primera vez a Son Goku.</span>",
      "<span class = 'letter'>CONTIENE LA O</span><span class = 'letter-question'>Doctor maligno y miembro del Ejército del Listón Rojo que se autoconvierte en el Androide 20</span>",
      "<span class = 'letter'>CONTIENE LA O</span><span class = 'letter-question'>Personaje que a pesar de ser unos de los mas fuertes del Universo, sufre de Tripanofobia (temor o miedo a las inyecciones).</span>",
    ],
  },
  {
    letter: "p",
    answer: ["pan", "popo", "polunga"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA P</span><span class = 'letter-question'>Personaje más joven en dominar el arte de volar.</span>",
      "<span class = 'letter'>CON LA P</span><span class = 'letter-question'>Personaje que se encarga de ayudar a Kami y atender a los visitantes que llegan al Templo Sagrado.</span>",
      "<span class = 'letter'>CON LA P</span><span class = 'letter-question'>Dragon que resuciata y envia a los namekianos a la tierra en el Arco de Freezer.</span>",
    ],
  },
  {
    letter: "q",
    answer: ["pequeño", "quitela", "qi"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CONTIENE LA Q</span><span class = 'letter-question'>Tamaño de Son Goku cuando sale de la tierra junto Pan y Trunks en Dragon Ball GT.</span>",
      "<span class = 'letter'>CON LA Q</span><span class = 'letter-question'>Personaje que ostenta el cargo de Dios de la Destrucción en el Universo 4.</span>",
      "<span class = 'letter'>CON LA Q</span><span class = 'letter-question'>Dragón Maligno de la esfera del dragón de siete estrellas y tiene el poder para habitar los cuerpos y tomar sus habilidades en Dragon Ball GT.</span>",
    ],
  },
  {
    letter: "r",
    answer: ["raditz", "mutenroshi", "broly"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA R</span><span class = 'letter-question'>Segundo saiyajin en llegar a la tierra.</span>",
      "<span class = 'letter'>CONTIENE LA R</span><span class = 'letter-question'>Alumno aventajado del Maestro Mutaito y que en la actualidad es calvo.</span>",
      "<span class = 'letter'>CONTIENE LA R</span><span class = 'letter-question'>Supersaiyano Legendario que sobrevivió a la destrucción del Planeta Vegeta junto a su padre Paragus.</span>",
    ],
  },
  {
    letter: "s",
    answer: ["shin", "shen", "saibaimen"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA S</span><span class = 'letter-question'>Nombre del Dios Neptuno del Universo 7</span>",
      "<span class = 'letter'>CON LA S</span><span class = 'letter-question'>Ser humano cuyo cuerpo fue utilizado por Kami para participar en el 23º Torneo Mundial de las Artes Marciales</span>",
      "<span class = 'letter'>CON LA S</span><span class = 'letter-question'>Criaturas humanoides verdes que crecen de una semilla plantada en el suelo.</span>",
    ],
  },
  {
    letter: "t",
    answer: ["trunks", "tambourine", "burter"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA T</span><span class = 'letter-question'>Presidente de la Corporación Capsula en Dragon Ball GT.</span>",
      "<span class = 'letter'>CON LA T</span><span class = 'letter-question'>Personaje que enviado por el Gran Rey Demonio Piccolo asesina a Krilin al acabar el Torneo Mundial de las Artes Marciales.</span>",
      "<span class = 'letter'>CONTIENE LA T</span><span class = 'letter-question'>Miembro de las Fuerzas Especiales de Freezer, que afirma ser el más rápido del Universo.</span>",
    ],
  },
  {
    letter: "u",
    answer: ["upa", "murasaki", "uub"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA U</span><span class = 'letter-question'>Hijo de Bora, el guerrero que protege la Torre de Karin.</span>",
      "<span class = 'letter'>CONTIENE LA U</span><span class = 'letter-question'>Personaje encargado de defender el cuarto piso de la sede del Ejército del Listón Rojo y que tiene 4 hermanos idínticos a él.</span>",
      "<span class = 'letter'>CON LA U</span><span class = 'letter-question'>Personaje que tras pelear en la 28° Torneo Mundial de las Artes Marciales, se convirtió en el discípulo de Son Goku.</span>",
    ],
  },
  {
    letter: "v",
    answer: ["videl", "spopovich", "vegeta"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA V</span><span class = 'letter-question'>Hija del ganador del 24º Torneo Mundial de las Artes Marciales.</span>",
      "<span class = 'letter'>CONTIENE LA V</span><span class = 'letter-question'>Humano poseido por Babidi que derrotó a Videl en el 25º Torneo Mundial de las Artes Marciales.</span>",
      "<span class = 'letter'>CON LA V</span><span class = 'letter-question'>Nombre que tomó el Planeta Plant después de que una raza guerrera procedente del planeta Sadala lo conquistara.</span>",
    ],
  },
  {
    letter: "w",
    answer: ["whis", "woolong", "kewi"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA W</span><span class = 'letter-question'>Ángel guía encargado de asistir y servir como maestro al Dios de la Destrucción del Universo 7, Beerus.</span>",
      "<span class = 'letter'>CON LA W</span><span class = 'letter-question'>Cerdo humanoide que acompaña a Son Goku y Bulma en la primera búsqueda de las Esferas del Dragón.</span>",
      "<span class = 'letter'>CONTIENE LA W</span><span class = 'letter-question'>Soldado de alto rango de Freezer y de piel morada que se rie de Vegeta cuando este regresa herido después de la batalla en la Tierra.</span>",
    ],
  },
  {
    letter: "x",
    answer: ["xenoverse", "xeno", "xiao"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA X</span><span class = 'letter-question'>Título del vidiejuejo secuala de Dragon Ball Online y que aterrizó en Europa en febrero de 2015.</span>",
      "<span class = 'letter'>CON LA X</span><span class = 'letter-question'>Término usado en Dragon Ball Heroes y Online para Trunks y varios de sus amigos para denominar y diferenciar a varios personajes de otras contrapartes temporales.</span>",
      "<span class = 'letter'>CON LA X</span><span class = 'letter-question'>Sirviente femenina de la Banda Paella en el videojuego Dragon Ball Online.</span>",
    ],
  },
  {
    letter: "y",
    answer: ["yamcha", "ginyu", "gregory"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA Y</span><span class = 'letter-question'>Personaje que dejo de practicar las Artes Marciales y se hizo profesional en béisbol.</span>",
      "<span class = 'letter'>CONTIENE LA Y</span><span class = 'letter-question'>Líder de la élite de mercenarios de mayor prestigio del Ejército de Freeza.</span>",
      "<span class = 'letter'>CONTIENE LA Y</span><span class = 'letter-question'>Personaje con apariencia de grillo que vive con Kaíto.</span>",
    ],
  },
  {
    letter: "z",
    answer: ["zarbon", "freezer", "zamas"],
    answered: false,
    questionIndex: false,
    question: [
      "<span class = 'letter'>CON LA Z</span><span class = 'letter-question'>Personaje de piel verde y con una trenza que junto a Dodoria es la mano derecha de Freezer.</span>",
      "<span class = 'letter'>CONTIENE LA Z</span><span class = 'letter-question'>Brutal dictador y líder del Imperio Galáctico del Universo 7 con el apoyo estratégico en secreto de su padre Cold.</span>",
      "<span class = 'letter'>CONTIENE LA Z</span><span class = 'letter-question'>Personaje que fue el Kaio del Norte del Universo 10 y antagonista principar del Arco de Trunks del «Futuro».</span>",
    ],
  },
];

const restartQuestions = () =>
  questions.forEach((question) => (question.answered = false));

export { questions, restartQuestions };
