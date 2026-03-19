// Preguntas
const preguntas = [
    // Animales y Naturaleza
    { pregunta: "¿Por qué los flamencos son rosas?", categoria: "Animales y Naturaleza", enlace: "por-que-los-flamencos-son-rosas.html" },
    { pregunta: "¿Cómo se comunican los delfines?", categoria: "Animales y Naturaleza", enlace: "como-se-comunican-los-delfines.html" },
    { pregunta: "¿Por qué algunos animales hibernan?", categoria: "Animales y Naturaleza", enlace: "por-que-algunos-animales-hibernan.html" },
    { pregunta: "¿Qué animales pueden regenerar partes del cuerpo?", categoria: "Animales y Naturaleza", enlace: "animales-que-pueden-regenerar-partes-del-cuerpo.html" },
    { pregunta: "¿Qué es el mimetismo en los animales?", categoria: "Animales y Naturaleza", enlace: "que-es-el-mimetismo-en-los-animales.html" },
    { pregunta: "¿Cómo migran las aves?", categoria: "Animales y Naturaleza", enlace: "como-migran-las-aves.html" },
    { pregunta: "¿Por qué los gatos amasan con las patas?", categoria: "Animales y Naturaleza", enlace: "por-que-los-gatos-amasan-con-las-patas.html" },
    { pregunta: "¿Qué animales son venenosos y cómo lo usan?", categoria: "Animales y Naturaleza", enlace: "animales-venenosos-y-como-lo-usan.html" },
    { pregunta: "¿Por qué los perros mueven la cola?", categoria: "Animales y Naturaleza", enlace: "por-que-los-perros-mueven-la-cola.html" },
    { pregunta: "¿Cómo perciben el mundo los insectos?", categoria: "Animales y Naturaleza", enlace: "como-perciben-el-mundo-los-insectos.html" },

    // Astronomía y Universo
    { pregunta: "¿A qué distancia está la Luna?", categoria: "Astronomía y Universo", enlace: "a-que-distancia-esta-la-luna.html" },
    { pregunta: "¿Cómo se forman las galaxias?", categoria: "Astronomía y Universo", enlace: "como-se-forman-las-galaxias.html" },
    { pregunta: "¿Cuántos planetas hay en el sistema solar?", categoria: "Astronomía y Universo", enlace: "cuantos-planetas-hay-en-el-sistema-solar.html" },
    { pregunta: "¿Existen agujeros negros?", categoria: "Astronomía y Universo", enlace: "existen-agujeros-negros.html" },
    { pregunta: "¿Existen universos paralelos?", categoria: "Astronomía y Universo", enlace: "existen-universos-paralelos.html" },
    { pregunta: "¿Qué provoca los eclipses?", categoria: "Astronomía y Universo", enlace: "que-provoca-los-eclipses.html" },
    { pregunta: "¿Qué es la materia oscura?", categoria: "Astronomía y Universo", enlace: "que-es-la-materia-oscura.html" },
    { pregunta: "¿Qué son los exoplanetas?", categoria: "Astronomía y Universo", enlace: "que-son-los-exoplanetas.html" },
    { pregunta: "¿Qué es la Vía Láctea?", categoria: "Astronomía y Universo", enlace: "que-es-la-via-lactea.html" },
    { pregunta: "¿Qué son los alienígenas?", categoria: "Astronomía y Universo", enlace: "que-son-los-alienigenas.html" },

    // Biología y Humanos
    { pregunta: "¿Cómo funciona el olfato?", categoria: "Biología y Humanos", enlace: "como-funciona-el-olfato.html" },
    { pregunta: "¿Por qué bostezamos?", categoria: "Biología y Humanos", enlace: "por-que-bostezamos.html" },
    { pregunta: "¿Por qué cambiamos de color al enrojecer?", categoria: "Biología y Humanos", enlace: "por-que-cambiamos-de-color-al-enrojecer.html" },
    { pregunta: "¿Por qué tenemos lunares?", categoria: "Biología y Humanos", enlace: "por-que-tenemos-lunares.html" },
    { pregunta: "¿Por qué necesitamos dormir?", categoria: "Biología y Humanos", enlace: "por-que-necesitamos-dormir.html" },
    { pregunta: "¿Por qué se nos arrugan los dedos en el agua?", categoria: "Biología y Humanos", enlace: "por-que-se-nos-arrugan-los-dedos-en-el-agua.html" },
    { pregunta: "¿Por qué sudamos?", categoria: "Biología y Humanos", enlace: "por-que-sudamos.html" },
    { pregunta: "¿Por qué sentimos cosquillas?", categoria: "Biología y Humanos", enlace: "por-que-sentimos-cosquillas.html" },
    { pregunta: "¿Qué causa el eco?", categoria: "Biología y Humanos", enlace: "que-causa-el-eco.html" },
    { pregunta: "¿Por qué tenemos reflejos?", categoria: "Biología y Humanos", enlace: "por-que-tenemos-reflejos.html" },

    // Ciencia Cotidiana
    { pregunta: "¿Por qué el cielo es azul?", categoria: "Ciencia Cotidiana", enlace: "por-que-el-cielo-es-azul.html" },
    { pregunta: "¿Por qué el pan sube al hornearse?", categoria: "Ciencia Cotidiana", enlace: "por-que-el-pan-sube-al-hornearse.html" },
    { pregunta: "¿Por qué sentimos hambre?", categoria: "Ciencia Cotidiana", enlace: "por-que-sentimos-hambre.html" },
    { pregunta: "¿Por qué lloramos?", categoria: "Ciencia Cotidiana", enlace: "por-que-lloramos.html" },
    { pregunta: "¿Por qué los imanes atraen algunos objetos?", categoria: "Ciencia Cotidiana", enlace: "por-que-los-imanes-atraen-algunos-objetos.html" },
    { pregunta: "¿Qué causa la niebla?", categoria: "Ciencia Cotidiana", enlace: "que-causa-la-niebla.html" },
    { pregunta: "¿Qué es el arcoíris?", categoria: "Ciencia Cotidiana", enlace: "que-es-el-arcoiris.html" },
    { pregunta: "¿Qué provoca el rayo?", categoria: "Ciencia Cotidiana", enlace: "que-provoca-el-rayo.html" },
    { pregunta: "¿Por qué sentimos frío o calor?", categoria: "Ciencia Cotidiana", enlace: "por-que-sentimos-frio-o-calor.html" },
    { pregunta: "¿Por qué sentimos fatiga?", categoria: "Ciencia Cotidiana", enlace: "por-que-sentimos-fatiga.html" },

    // Nueva categoría: Cultura y Entretenimiento
    { pregunta: "¿Cuál es la película más taquillera de la historia?", categoria: "Cultura y Entretenimiento", enlace: "pelicula-mas-taquillera.html" },
    { pregunta: "¿Qué es el cine independiente?", categoria: "Cultura y Entretenimiento", enlace: "cine-independiente.html" },
    { pregunta: "¿Quién es el compositor más famoso de música clásica?", categoria: "Cultura y Entretenimiento", enlace: "compositor-musica-clasica.html" },
    { pregunta: "¿Qué significa un álbum conceptual en música?", categoria: "Cultura y Entretenimiento", enlace: "album-conceptual.html" },
    { pregunta: "¿Cuál fue el primer videojuego de la historia?", categoria: "Cultura y Entretenimiento", enlace: "primer-videojuego.html" },
    { pregunta: "¿Qué es el cine de autor?", categoria: "Cultura y Entretenimiento", enlace: "cine-de-autor.html" },
    { pregunta: "¿Qué géneros musicales existen y cómo se diferencian?", categoria: "Cultura y Entretenimiento", enlace: "generos-musicales.html" },
    { pregunta: "¿Cuál es la diferencia entre teatro y cine?", categoria: "Cultura y Entretenimiento", enlace: "teatro-vs-cine.html" },
    { pregunta: "¿Qué es la animación digital y cómo se hace?", categoria: "Cultura y Entretenimiento", enlace: "animacion-digital.html" },
    { pregunta: "¿Qué impacto tiene la cultura pop en la sociedad?", categoria: "Cultura y Entretenimiento", enlace: "cultura-pop-sociedad.html" },

    // Deportes y Récords
    { pregunta: "¿Qué es el fútbol americano?", categoria: "Deportes y Récords", enlace: "que-es-el-futbol-americano.html" },
    { pregunta: "¿Cuál es el récord más rápido en natación?", categoria: "Deportes y Récords", enlace: "cual-es-el-record-mas-rapido-en-natacion.html" },
    { pregunta: "¿Cuál es el récord más alto en salto con pértiga?", categoria: "Deportes y Récords", enlace: "cual-es-el-record-mas-alto-en-salto-con-pertiga.html" },
    { pregunta: "¿Quién tiene más medallas olímpicas?", categoria: "Deportes y Récords", enlace: "quien-tiene-mas-medallas-olimpicas.html" },
    { pregunta: "¿Qué deportes son olímpicos?", categoria: "Deportes y Récords", enlace: "que-deportes-son-olimpicos.html" },
    { pregunta: "¿Cuál es el récord más largo en maratón?", categoria: "Deportes y Récords", enlace: "cual-es-el-record-mas-largo-en-maraton.html" },
    { pregunta: "¿Quién inventó el baloncesto?", categoria: "Deportes y Récords", enlace: "quien-invento-el-baloncesto.html" },
    { pregunta: "¿Cuáles son los deportes más peligrosos?", categoria: "Deportes y Récords", enlace: "cuales-son-los-deportes-mas-peligrosos.html" },
    { pregunta: "¿Qué es el récord Guinness?", categoria: "Deportes y Récords", enlace: "que-es-el-record-guinness.html" },
    { pregunta: "¿Cuál es la historia del fútbol?", categoria: "Deportes y Récords", enlace: "cual-es-la-historia-del-futbol.html" },

    // Física Cuántica
    { pregunta: "¿Cómo funciona la computación cuántica?", categoria: "Física Cuántica", enlace: "como-funciona-la-computacion-cuantica.html" },
    { pregunta: "¿Qué es el entrelazamiento cuántico?", categoria: "Física Cuántica", enlace: "que-es-el-entrelazamiento-cuantico.html" },
    { pregunta: "¿Qué es un quark?", categoria: "Física Cuántica", enlace: "que-es-un-quark.html" },
    { pregunta: "¿Qué es la física de partículas?", categoria: "Física Cuántica", enlace: "que-es-la-fisica-de-particulas.html" },
    { pregunta: "¿Qué es la superposición cuántica?", categoria: "Física Cuántica", enlace: "que-es-la-superposicion-cuantica.html" },
    { pregunta: "¿Qué es el bosón de Higgs?", categoria: "Física Cuántica", enlace: "que-es-el-boson-de-higgs.html" },
    { pregunta: "¿Cómo se mide la energía en partículas?", categoria: "Física Cuántica", enlace: "como-se-mide-la-energia-en-particulas.html" },
    { pregunta: "¿Qué es el principio de incertidumbre?", categoria: "Física Cuántica", enlace: "que-es-el-principio-de-incertidumbre.html" },
    { pregunta: "¿Qué es la dualidad onda-partícula?", categoria: "Física Cuántica", enlace: "que-es-la-dualidad-onda-particula.html" },
    { pregunta: "¿Cómo funcionan los qubits?", categoria: "Física Cuántica", enlace: "como-funcionan-los-qubits.html" },

    // Historia y Civilizaciones
    { pregunta: "¿Quién construyó las pirámides?", categoria: "Historia y Civilizaciones", enlace: "quien-construyo-las-piramides.html" },
    { pregunta: "¿Cuál fue la primera civilización conocida?", categoria: "Historia y Civilizaciones", enlace: "cual-fue-la-primera-civilizacion-conocida.html" },
    { pregunta: "¿Qué inventos cambiaron la historia?", categoria: "Historia y Civilizaciones", enlace: "que-inventos-cambiaron-la-historia.html" },
    { pregunta: "¿Cómo surgió la escritura?", categoria: "Historia y Civilizaciones", enlace: "como-surgio-la-escritura.html" },
    { pregunta: "¿Quién fue Alejandro Magno?", categoria: "Historia y Civilizaciones", enlace: "quien-fue-alejandro-magno.html" },
    { pregunta: "¿Qué civilizaciones desaparecieron misteriosamente?", categoria: "Historia y Civilizaciones", enlace: "que-civilizaciones-desaparecieron-misteriosamente.html" },
    { pregunta: "¿Qué fue la Revolución Industrial?", categoria: "Historia y Civilizaciones", enlace: "que-fue-la-revolucion-industrial.html" },
    { pregunta: "¿Cuál fue la importancia del Imperio Romano?", categoria: "Historia y Civilizaciones", enlace: "cual-fue-la-importancia-del-imperio-romano.html" },
    { pregunta: "¿Quién descubrió América?", categoria: "Historia y Civilizaciones", enlace: "quien-descubrio-america.html" },
    { pregunta: "¿Qué eventos históricos cambiaron el mundo?", categoria: "Historia y Civilizaciones", enlace: "que-eventos-historicos-cambiaron-el-mundo.html" },

    // Mente y Psicología
    { pregunta: "¿Por qué soñamos?", categoria: "Mente y Psicología", enlace: "por-que-sonamos.html" },
    { pregunta: "¿Cómo funciona la memoria humana?", categoria: "Mente y Psicología", enlace: "como-funciona-la-memoria-humana.html" },
    { pregunta: "¿Qué es el déjà vu?", categoria: "Mente y Psicología", enlace: "que-es-el-deja-vu.html" },
    { pregunta: "¿Qué es la telepatía?", categoria: "Mente y Psicología", enlace: "que-es-la-telepatia.html" },
    { pregunta: "¿Qué nos dice la personalidad?", categoria: "Mente y Psicología", enlace: "que-nos-dice-la-personalidad.html" },
    { pregunta: "¿Por qué tenemos emociones?", categoria: "Mente y Psicología", enlace: "por-que-tenemos-emociones.html" },
    { pregunta: "¿Cómo funciona el subconsciente?", categoria: "Mente y Psicología", enlace: "como-funciona-el-subconsciente.html" },
    { pregunta: "¿Qué es la inteligencia emocional?", categoria: "Mente y Psicología", enlace: "que-es-la-inteligencia-emocional.html" },
    { pregunta: "¿Qué son los sueños lúcidos?", categoria: "Mente y Psicología", enlace: "que-son-los-suenos-lucidos.html" },
    { pregunta: "¿Podemos viajar en el tiempo?", categoria: "Mente y Psicología", enlace: "podemos-viajar-en-el-tiempo.html" },

    // Misterios y Curiosidades
    { pregunta: "¿Qué provoca la desaparición de objetos en el Triángulo de las Bermudas?", categoria: "Misterios y Curiosidades", enlace: "triangulo-de-las-bermudas.html" },
    { pregunta: "¿Existen fantasmas?", categoria: "Misterios y Curiosidades", enlace: "existen-fantasmas.html" },
    { pregunta: "¿Qué son los fenómenos paranormales?", categoria: "Misterios y Curiosidades", enlace: "fenomenos-paranormales.html" },
    { pregunta: "¿Qué son los ovnis?", categoria: "Misterios y Curiosidades", enlace: "que-son-los-ovnis.html" },
    { pregunta: "¿Qué misterios rodean a la Atlántida?", categoria: "Misterios y Curiosidades", enlace: "misterios-de-la-atlantida.html" },
    { pregunta: "¿Qué es el misterio del Triángulo de las Bermudas?", categoria: "Misterios y Curiosidades", enlace: "misterio-del-triangulo-de-las-bermudas.html" },
    { pregunta: "¿Qué provoca déjà vu?", categoria: "Misterios y Curiosidades", enlace: "que-provoca-deja-vu.html" },
    { pregunta: "¿Qué son los alienígenas?", categoria: "Misterios y Curiosidades", enlace: "que-son-los-alienigenas.html" },
    { pregunta: "¿Existen ciudades subterráneas?", categoria: "Misterios y Curiosidades", enlace: "existen-ciudades-subterraneas.html" },
    { pregunta: "¿Qué misterios hay en la Antártida?", categoria: "Misterios y Curiosidades", enlace: "misterios-en-la-antartida.html" },

    // Tecnología y Futuro
    { pregunta: "¿Cómo funcionan los robots?", categoria: "Tecnología y Futuro", enlace: "como-funcionan-los-robots.html" },
    { pregunta: "¿Cómo se fabrican los microchips?", categoria: "Tecnología y Futuro", enlace: "como-se-fabrican-los-microchips.html" },
    { pregunta: "¿Qué es el blockchain?", categoria: "Tecnología y Futuro", enlace: "que-es-el-blockchain.html" },
    { pregunta: "¿Qué es la realidad aumentada?", categoria: "Tecnología y Futuro", enlace: "que-es-la-realidad-aumentada.html" },
    { pregunta: "¿Qué es el internet de las cosas?", categoria: "Tecnología y Futuro", enlace: "que-es-el-internet-de-las-cosas.html" },
    { pregunta: "¿Qué avances tecnológicos cambian el mundo?", categoria: "Tecnología y Futuro", enlace: "avances-tecnologicos-que-cambian-el-mundo.html" },
    { pregunta: "¿Cómo será la inteligencia artificial en el futuro?", categoria: "Tecnología y Futuro", enlace: "inteligencia-artificial-en-el-futuro.html" },
    { pregunta: "¿Qué tecnologías espaciales existen?", categoria: "Tecnología y Futuro", enlace: "tecnologias-espaciales.html" },
    { pregunta: "¿Qué es la nanotecnología?", categoria: "Tecnología y Futuro", enlace: "que-es-la-nanotecnologia.html" },
    { pregunta: "¿Qué es la robótica avanzada?", categoria: "Tecnología y Futuro", enlace: "que-es-la-robotica-avanzada.html" }
];

// Podría Interesarte
document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelector('.list-unstyled');
    if (!lista) return;
    const categoriaActual = document.body.dataset.categoria;
    const paginaActual = window.location.href.split("/").pop();
    const preguntasCategoria = preguntas.filter(p => p.categoria === categoriaActual && p.enlace !== paginaActual);
    const preguntasOtras = preguntas.filter(p => p.categoria !== categoriaActual && p.enlace !== paginaActual);
    function mezclarYSeleccionar(array, n) {
        const copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia.slice(0, n);
    }
    const seleccionCategoria = mezclarYSeleccionar(preguntasCategoria, 3);
    const seleccionOtras = mezclarYSeleccionar(preguntasOtras, 4);
    const sugerenciasFinal = [...seleccionCategoria, ...seleccionOtras];
    lista.innerHTML = '';
    sugerenciasFinal.forEach(preg => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = preg.enlace;
        a.textContent = preg.pregunta;
        a.classList.add('preg-recomendadas');
        li.appendChild(a);
        lista.appendChild(li);
    });
});

// Banner de Cookies
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    if (!banner || !acceptBtn) return;
    if (!localStorage.getItem('cookiesAccepted')) {
        banner.classList.add('show');
    }
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.classList.remove('show');
        banner.classList.add('hide');
        setTimeout(() => {
            banner.style.display = 'none';
        }, 500);
    });
});