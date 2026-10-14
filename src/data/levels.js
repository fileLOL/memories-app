export const chapters = [
  {
    id: 'roma',
    name: 'El soldat de Roma',
    era: '117 dC · Imperi Romà',
    place: 'Limes de Germània',
    color: '#b77c48',
    symbol: '⚔',
    intro: 'Any 117 dC. L\'Imperi Romà s\'estén des de Britània fins a Mesopotàmia. A les fronteres del nord, els soldats vigilen la línia del Limes, on el món romà es troba amb les terres bàrbares. En aquest ambient de tensió i disciplina, la teva memòria posará a prova.',
    levels: [
      {
        id: 1,
        name: 'El recluta',
        grid: [4, 3],
        pairs: 6,
        timeLimit: 60,
        cards: [
          { icon: 'Sword', label: 'Gladius', fact: 'El gladius romà mesurava 60-68 cm i era ideal per estocar en formació tancada.' },
          { icon: 'Shield', label: 'Scutum', fact: 'El scutum era un escut rectangular de fusta laminada que pesava uns 10 kg.' },
          { icon: 'Castle', label: 'Castra', fact: 'Els campaments romans (castra) es construïen amb un traçat rectangular i carrers en creu.' },
          { icon: 'Crown', label: 'Llorer', fact: 'La corona de llorer simbolitzava la victòria i es donava als generals triomfadors.' },
          { icon: 'ScrollText', label: 'Lleis', fact: 'La Llei de les Dotze Taules (450 aC) va ser la base del dret romà.' },
          { icon: 'Anchor', label: 'Marina', fact: 'La marina romana dominava el Mediterrani, anomenat "Mare Nostrum".' },
        ]
      },
      {
        id: 2,
        name: 'El legionari',
        grid: [4, 4],
        pairs: 8,
        timeLimit: 90,
        cards: [
          { icon: 'Sword', label: 'Gladius', fact: 'Cada legionari portava el seu propi gladius i pugio (daga).' },
          { icon: 'Shield', label: 'Scutum', fact: 'La testudo (formació de tortuga) era gairebé invulnerable a les fletxes.' },
          { icon: 'Castle', label: 'Fortalesa', fact: 'Les fortaleses del Limes tenien torres de vigilància cada 1,5 km.' },
          { icon: 'Crown', label: 'Àguila', fact: 'L\'àguila legionària era el símbol sagrat; perdre-la era la pitjor desgràcia.' },
          { icon: 'ScrollText', label: 'Diploma', fact: 'Els veterans rebien un diploma de bronze que els donava la ciutadania.' },
          { icon: 'Anchor', label: 'Trirrem', fact: 'Els trirrems romans tenien tres files de rems i ariet de bronze.' },
          { icon: 'Flame', label: 'Vesta', fact: 'Les vestals mantenien el foc sagrat de Roma; si s\'apagava, eren enterrades vives.' },
          { icon: 'Columns', label: 'Temple', fact: 'El Panteó de Roma té la cúpula de formigó més gran de l\'antiguitat.' },
        ]
      },
      {
        id: 3,
        name: 'El centurió',
        grid: [5, 4],
        pairs: 10,
        timeLimit: 120,
        cards: [
          { icon: 'Sword', label: 'Gladius', fact: 'El centurió lluitava a la primera línia, al costat dels seus homes.' },
          { icon: 'Shield', label: 'Scutum', fact: 'Els escuts portaven el número de la centúria per identificar-se.' },
          { icon: 'Castle', label: 'Turris', fact: 'Les turres eren torres de fusta amb catapultes i ballestes.' },
          { icon: 'Crown', label: 'Corona', fact: 'La corona civica es donava a qui salvava la vida d\'un ciutadà romà.' },
          { icon: 'ScrollText', label: 'Acta', fact: 'Les acta diurna eren el primer "diari oficial" del món, creat per Juli Cèsar.' },
          { icon: 'Anchor', label: 'Portus', fact: 'El port d\'Òstia subministrava Roma amb vaixells d\'Egipte i Àfrica.' },
          { icon: 'Flame', label: 'Ignis', fact: 'Els bombers romans (vigiles) usaven siphos (bombes d\'aigua) manuals.' },
          { icon: 'Columns', label: 'Fòrum', fact: 'El Fòrum Romà era el centre polític, religiós i comercial de l\'Imperi.' },
          { icon: 'Gem', label: 'Aurum', fact: 'L\'aureus d\'or valia 25 denaris de plata i era la moneda de més valor.' },
          { icon: 'Flag', label: 'Signum', fact: 'El signum era l\'estendard de la centúria; perdre\'l era deshonra total.' },
        ]
      },
      {
        id: 4,
        name: 'El general',
        grid: [6, 4],
        pairs: 12,
        timeLimit: 150,
        cards: [
          { icon: 'Sword', label: 'Gladius', fact: 'Els generals portaven una espasa especial decorada amb or i pedres.' },
          { icon: 'Shield', label: 'Clipeus', fact: 'El clipeus era un escut rodó de cerimonial que representava l\'univers.' },
          { icon: 'Castle', label: 'Limes', fact: 'El Limes Germanicus tenia 550 km de llargada amb fossats i murs.' },
          { icon: 'Crown', label: 'Triomf', fact: 'El triomf era la desfilada més gran; el general pintava la cara de vermell.' },
          { icon: 'ScrollText', label: 'Senatus', fact: 'Només el Senat podia declarar la guerra i aprovar els tractats.' },
          { icon: 'Anchor', label: 'Classis', fact: 'La classis era la flota permanent amb bases a Ravenna i Misenum.' },
          { icon: 'Flame', label: 'Vulcanus', fact: 'Les fàbriques d\'armes (fabricae) produïen milers de gladius cada any.' },
          { icon: 'Columns', label: 'Basilica', fact: 'Les basíliques romanes eren els tribunals de justícia de l\'Imperi.' },
          { icon: 'Gem', label: 'Diamant', fact: 'Els diamants arribaven a Roma des de l\'Índia per la Ruta de la Seda.' },
          { icon: 'Flag', label: 'Vexillum', fact: 'El vexillum era la bandera de batalla; el seu color indicava l\'hora d\'atacar.' },
          { icon: 'Trophy', label: 'Victoria', fact: 'Victoria era la deessa alada que representava el triomf sobre la mort.' },
          { icon: 'Eye', label: 'Speculator', fact: 'Els speculatores eren els exploradors d\'elit que s\'infiltraven en territori enemic.' },
        ]
      }
    ]
  },
  {
    id: 'al-andalus',
    name: 'La cartògrafa d\'Al-Àndalus',
    era: 'Segle XI · Còrdova',
    place: 'Còrdova, Al-Àndalus',
    color: '#c5a66b',
    symbol: '✧',
    intro: 'Còrdova, segle XI. La ciutat més gran d\'Europa brilla amb les seves biblioteques, mesquites i jardins. En aquest centre de saber, una cartògrafa traça rutes que ningú s\'ha atrevit a dibuixar. La teva memòria et guiarà per aquest laberint de coneixement.',
    levels: [
      {
        id: 1,
        name: 'L\'aprenent',
        grid: [4, 3],
        pairs: 6,
        timeLimit: 60,
        cards: [
          { icon: 'Compass', label: 'Brúixola', fact: 'La brúixola va arribar a Europa a través d\'Al-Àndalus al segle XII.' },
          { icon: 'Star', label: 'Aldebaran', fact: 'Aldebaran, l\'estrella més brillant de Taure, ve de l\'àrab "al-dabarān".' },
          { icon: 'BookOpen', label: 'Manuscrit', fact: 'La biblioteca de Còrdova tenia més de 400.000 volums al segle X.' },
          { icon: 'Feather', label: 'Calam', fact: 'El calam era la ploma de canya usada pels escribes àrabs.' },
          { icon: 'Sun', label: 'Zenit', fact: 'El zenit és un terme àrab que indica el punt més alt del cel.' },
          { icon: 'Map', label: 'Mapamundi', fact: 'Al-Idrisi va crear el mapa més precís del món medieval el 1154.' },
        ]
      },
      {
        id: 2,
        name: 'La viatgera',
        grid: [4, 4],
        pairs: 8,
        timeLimit: 90,
        cards: [
          { icon: 'Compass', label: 'Astrolabi', fact: 'L\'astrolabi permetia calcular la posició dels astres i l\'hora exacta.' },
          { icon: 'Star', label: 'Polaris', fact: 'Els navegants àrabs usaven Polaris per orientar-se en el desert.' },
          { icon: 'BookOpen', label: 'Algebra', fact: 'L\'àlgebra ve de "al-jabr", títol d\'un llibre d\'Al-Khwarizmi.' },
          { icon: 'Feather', label: 'Cal·ligrafia', fact: 'La cal·ligrafia àrab era considerada l\'art més noble.' },
          { icon: 'Sun', label: 'Solstici', fact: 'Els astrònoms de Còrdova van calcular l\'any solar amb error de només 2 minuts.' },
          { icon: 'Map', label: 'Ruta', fact: 'Les rutes comercials d\'Al-Àndalus arribaven fins a la Xina.' },
          { icon: 'Tree', label: 'Jardí', fact: 'Els jardins andalusos representaven el paradís amb aigua, aromes i ombra.' },
          { icon: 'Waves', label: 'Estret', fact: 'L\'estret de Gibraltar (Jabal Tariq) deu el nom al conqueridor Tariq ibn Ziyad.' },
        ]
      },
      {
        id: 3,
        name: 'La mestra',
        grid: [5, 4],
        pairs: 10,
        timeLimit: 120,
        cards: [
          { icon: 'Compass', label: 'Quadrant', fact: 'El quadrant era un instrument per mesurar l\'altura dels astres.' },
          { icon: 'Star', label: 'Sirius', fact: 'Sirius, l\'estrella més brillant, ve de l\'àrab "al-shi\'ra".' },
          { icon: 'BookOpen', label: 'Medicina', fact: 'Ibn al-Nafis va descriure la circulació pulmonar segles abans que Harvey.' },
          { icon: 'Feather', label: 'Poesia', fact: 'Ibn Zaydun va escriure els versos més famosos de la literatura àrab hispana.' },
          { icon: 'Sun', label: 'Equinocci', fact: 'Els calendaris àrabs marcaven les estacions amb precisió per a l\'agricultura.' },
          { icon: 'Map', label: 'Qibla', fact: 'La qibla és la direcció cap a la Meca; els matemàtics àrabs la calculaven.' },
          { icon: 'Tree', label: 'Safra', fact: 'El safra era cultivat a Al-Àndalus i valia més que l\'or.' },
          { icon: 'Waves', label: 'Font', fact: 'Les fonts de l\'Alhambra representen els rius del paradís.' },
          { icon: 'Mountain', label: 'Sierra', fact: 'Sierra ve de l\'àrab "silsila" que significa cadena de muntanyes.' },
          { icon: 'Moon', label: 'Ramadà', fact: 'El calendari lunar àrab determina el Ramadà i les festes religioses.' },
        ]
      },
      {
        id: 4,
        name: 'La sàvia',
        grid: [6, 4],
        pairs: 12,
        timeLimit: 150,
        cards: [
          { icon: 'Compass', label: 'Esfere', fact: 'L\'esfera armil·lar representava el moviment dels planetes.' },
          { icon: 'Star', label: 'Betelgeuse', fact: 'Betelgeuse ve de l\'àrab "yad al-jawzā" (la mà del gegant).' },
          { icon: 'BookOpen', label: 'Filosofia', fact: 'Averrois va comentar Aristòtil i va influir en tot el pensament europeu.' },
          { icon: 'Feather', label: 'Algoritme', fact: 'L\'algoritme ve d\'Al-Khwarizmi, pare de l\'àlgebra i la computació.' },
          { icon: 'Sun', label: 'Meridià', fact: 'El meridià de Còrdova era el punt de referència per als geògrafs àrabs.' },
          { icon: 'Map', label: 'Portolà', fact: 'Els portolans eren cartes nàutiques amb línies de rumb creuades.' },
          { icon: 'Tree', label: 'Taronger', fact: 'Els àrabs van introduir els tarongers a la península al segle IX.' },
          { icon: 'Waves', label: 'Nil', fact: 'ElsNilòmetres mesuraven el nivell del Nil per predir les collites.' },
          { icon: 'Mountain', label: 'Mulhacén', fact: 'El Mulhacén (3.479m) deu el nom al rei moro Muley Hacén.' },
          { icon: 'Moon', label: 'Hilal', fact: 'El hilal (lluna nova) marca l\'inici dels mesos en el calendari islàmic.' },
          { icon: 'Gem', label: 'Maragda', fact: 'Les maragdes d\'Al-Àndalus eren famoses per la seva puresa.' },
          { icon: 'Flame', label: 'Foc Grec', fact: 'El foc grec era una arma incendiària que cremava fins i tot sobre l\'aigua.' },
        ]
      }
    ]
  },
  {
    id: 'japo',
    name: 'El guardià del temple',
    era: 'Segle XIII · Japó',
    place: 'Camins de muntanya',
    color: '#9e4e40',
    symbol: '◈',
    intro: 'Japó, segle XIII. L\'era Kamakura marca l\'ascens dels samurais i el zen. Entre temples de bambú i camins de muntanya, un guardià medita sobre el significat del deure i l\'honor. La teva memòria et portarà per aquest camí de disciplina.',
    levels: [
      {
        id: 1,
        name: 'El monjo',
        grid: [4, 3],
        pairs: 6,
        timeLimit: 60,
        cards: [
          { icon: 'Mountain', label: 'Mont Fuji', fact: 'El Fuji (3.776m) és considerat sagrat i ha estat pujat per milions de peregrins.' },
          { icon: 'Cherry', label: 'Sakura', fact: 'El sakura simbolitza la brevetat de la vida; la floració dura només dues setmanes.' },
          { icon: 'Sword', label: 'Katana', fact: 'La katana es forjava plegant l\'acer més de 10.000 vegades.' },
          { icon: 'Shield', label: 'Yoroi', fact: 'L\'armadura yoroi pesava 25-30 kg i permetia llibertat de moviment.' },
          { icon: 'ScrollText', label: 'Sutra', fact: 'Els sutres són textos budistes que contenen els ensenyaments de Buda.' },
          { icon: 'Wind', label: 'Kami', fact: 'Els kami són esperits del xintoisme que habiten en tota la natura.' },
        ]
      },
      {
        id: 2,
        name: 'El samurai',
        grid: [4, 4],
        pairs: 8,
        timeLimit: 90,
        cards: [
          { icon: 'Mountain', label: 'Koya', fact: 'El mont Koya és el centre del budisme Shingon amb 117 temples.' },
          { icon: 'Cherry', label: 'Hanami', fact: 'El hanami és la tradició de contemplar els cirerers en flor.' },
          { icon: 'Sword', label: 'Wakizashi', fact: 'El wakizashi era l\'espasa curta que els samurais mai no deixaven.' },
          { icon: 'Shield', label: 'Kabuto', fact: 'El kabuto (casc) tenia màscares demoníaques per intimidar l\'enemic.' },
          { icon: 'ScrollText', label: 'Bushido', fact: 'El Bushido és el codi del guerrer: justícia, coratge, benevolència.' },
          { icon: 'Wind', label: 'Shogun', fact: 'El shogun era el comandant militar suprem; l\'emperador només tenia poder simbòlic.' },
          { icon: 'Castle', label: 'Dojo', fact: 'El dojo és el "lloc del camí"; allà es forjava el cos i l\'esperit.' },
          { icon: 'Flame', label: 'Incens', fact: 'L\'encens marca el temps en la meditació zen i les cerimònies.' },
        ]
      },
      {
        id: 3,
        name: 'El senyor',
        grid: [5, 4],
        pairs: 10,
        timeLimit: 120,
        cards: [
          { icon: 'Mountain', label: 'Kumano', fact: 'Les rutes de Kumano connecten tres santuaris sagrats des del segle XI.' },
          { icon: 'Cherry', label: 'Haiku', fact: 'El haiku (5-7-5 síl·labes) captura un instant etern de la natura.' },
          { icon: 'Sword', label: 'Tanto', fact: 'El tanto era el punyal que els samurais feien servir per al seppuku.' },
          { icon: 'Shield', label: 'Tate', fact: 'Els grans escuts tate protegien els arquers durant els setges.' },
          { icon: 'ScrollText', label: 'Zen', fact: 'La meditació zazen busca el "no-pensament" per il·luminar-se.' },
          { icon: 'Wind', label: 'Daimyo', fact: 'Els daimyos eren els senyors feudals que governaven les províncies.' },
          { icon: 'Castle', label: 'Shiro', fact: 'Els castells japonesos tenien murs corbs per dificultar l\'escalada.' },
          { icon: 'Flame', label: 'Tea', fact: 'La cerimònia del te (chanoyu) eleva un acte quotidià a art espiritual.' },
          { icon: 'Star', label: 'Estrelles', fact: 'Els samurais es guiaven per les estrelles per a la navegació i el temps.' },
          { icon: 'Gem', label: 'Jade', fact: 'El jade es considerava una pedra sagrada que protegia l\'ànima.' },
        ]
      },
      {
        id: 4,
        name: 'El mestre',
        grid: [6, 4],
        pairs: 12,
        timeLimit: 150,
        cards: [
          { icon: 'Mountain', label: 'Fuji', fact: 'Els monjos yamabushi feien ascensions ascètiques al Fuji per purificar-se.' },
          { icon: 'Cherry', label: 'Mono no aware', fact: 'Mono no aware: la consciència de la impermanència de totes les coses.' },
          { icon: 'Sword', label: 'Nodachi', fact: 'El nodachi era una espasa gegant de més d\'1,5m per a batalla a camp obert.' },
          { icon: 'Shield', label: 'O-yoroi', fact: 'L\'o-yoroi era l\'armadura de gala dels samurais, decorada amb seda i or.' },
          { icon: 'ScrollText', label: 'Kōan', fact: 'Els kōan són enigmes zen sense resposta lògica per trencar el pensament.' },
          { icon: 'Wind', label: 'Tenjin', fact: 'Tenjin és el kami de l\'aprenentatge i la cal·ligrafia.' },
          { icon: 'Castle', label: 'Pagoda', fact: 'Les pagodes de 5 pisos representen els 5 elements: terra, aigua, foc, vent, buit.' },
          { icon: 'Flame', label: 'Matsuri', fact: 'Els matsuri són festivals xintoistes per honrar els kami amb danses i ofrenes.' },
          { icon: 'Star', label: 'Orion', fact: 'Orion era conegut com a "Mitsuboshi" (tres estrelles) i marcava les estacions.' },
          { icon: 'Gem', label: 'Perla', fact: 'Les perles eren tresors sagrats; el Japó és famós per les perles Akoya.' },
          { icon: 'Eye', label: 'Mushin', fact: 'Mushin és l\'estat de "no-ment" on l\'samurai actua sense pensar.' },
          { icon: 'Trophy', label: 'Tokkotai', fact: 'El tokkotai era l\'espasa cerimonial donada als joves samurais al venir d\'edat.' },
        ]
      }
    ]
  },
  {
    id: 'mediterrani',
    name: 'La metgessa de la pesta',
    era: 'Segle XIV · Mediterrani',
    place: 'Una ciutat portuària',
    color: '#6e8d7b',
    symbol: '✚',
    intro: 'Mediterrani, segle XIV. La Pesta Negra devasta Europa. En un port bulliciós, una metgessa lluita contra la malaltia amb herbes, coneixement i coratge. En temps d\'incertesa, la cura es converteix en un acte de coratge. La teva memòria et posará a prova.',
    levels: [
      {
        id: 1,
        name: 'L\'aprenent d\'herbes',
        grid: [4, 3],
        pairs: 6,
        timeLimit: 60,
        cards: [
          { icon: 'Flower', label: 'Rosa', fact: 'L\'aigua de roses era usada com a antisèptic a l\'Edat Mitjana.' },
          { icon: 'LeafyGreen', label: 'Sàlvia', fact: 'El nom "sàlvia" ve del llatí "salvare" (salvar) per les seves propietats medicinals.' },
          { icon: 'Apple', label: 'Poma', fact: 'Les pomes es consideraven medicinals; es donaven als malalts per recuperar forces.' },
          { icon: 'Mortar', label: 'Morter', fact: 'El morter de marbre servia per triturar herbes i fer ungüents.' },
          { icon: 'BookOpen', label: 'Herbolari', fact: 'Els herbaris mediecontenien dibuixos de plantes amb les seves propietats.' },
          { icon: 'Cross', label: 'Hospital', fact: 'Els hospitals medievals eren gestionats per monestirs i ordes religiosos.' },
        ]
      },
      {
        id: 2,
        name: 'La curandera',
        grid: [4, 4],
        pairs: 8,
        timeLimit: 90,
        cards: [
          { icon: 'Flower', label: 'Lavanda', fact: 'La lavanda es penjava a les portes per espantar la pesta i purificar l\'aire.' },
          { icon: 'LeafyGreen', label: 'Menta', fact: 'La menta es feia servir per calmar l\'estómac i alleujar el dolor de cap.' },
          { icon: 'Apple', label: 'Vinagre', fact: 'Els metges de la pesta bevien vinagre amb herbes com a protecció.' },
          { icon: 'Mortar', label: 'Cataplasma', fact: 'Els cataplasmes d\'herbes calentes s\'aplicaven sobre les inflamacions.' },
          { icon: 'BookOpen', label: 'Avicenna', fact: 'Avicenna va escriure el "Cànon de Medicina", text bàsic fins al segle XVII.' },
          { icon: 'Cross', label: 'Quarantena', fact: 'Venècia va inventar la quarantena (40 dies) per als vaixells sospitosos.' },
          { icon: 'Anchor', label: 'Port', fact: 'Els ports eren la porta d\'entrada de la pesta; es tancaven en casos greus.' },
          { icon: 'Waves', label: 'Mar', fact: 'L\'aire marí es considerava més net; molts malalts anaven a la costa.' },
        ]
      },
      {
        id: 3,
        name: 'La metgessa',
        grid: [5, 4],
        pairs: 10,
        timeLimit: 120,
        cards: [
          { icon: 'Flower', label: 'Camamilla', fact: 'La camamilla calmava la febre i els espasmes; es bevia en infusió.' },
          { icon: 'LeafyGreen', label: 'Farigola', fact: 'La farigola (timó) és un potent antisèptic natural.' },
          { icon: 'Apple', label: 'Mel', fact: 'La mel era l\'únic edulcorant i també servia per curar ferides.' },
          { icon: 'Mortar', label: 'Destil·lació', fact: 'La destil·lació d\'alcohol per a usos mèdics va arribar d\'Al-Àndalus.' },
          { icon: 'BookOpen', label: 'Galè', fact: 'Galè (s.II dC) va sistematitzar la medicina; les seves idees van dominar 1.300 anys.' },
          { icon: 'Cross', label: 'Pesta Negra', fact: 'La Pesta Negra (1347-1351) va matar 1/3 de la població europea.' },
          { icon: 'Anchor', label: 'Galera', fact: 'Les galeres portaven espècies i medicaments d\'Orient a Europa.' },
          { icon: 'Waves', label: 'Aigua', fact: 'L\'aigua neta era escassa; es bevia cervesa o vi per evitar malalties.' },
          { icon: 'Sun', label: 'Llum', fact: 'Els metges creien que l\'aire corrupte causava la pesta; encenien fogueres.' },
          { icon: 'Flame', label: 'Cauteri', fact: 'El cauteri era un ferro roent per aturar hemorràgies i infeccions.' },
        ]
      },
      {
        id: 4,
        name: 'La savia',
        grid: [6, 4],
        pairs: 12,
        timeLimit: 150,
        cards: [
          { icon: 'Flower', label: 'Saüc', fact: 'El saüc es feia servir contra la febre i les infeccions respiratòries.' },
          { icon: 'LeafyGreen', label: 'Rosmarí', fact: 'El romer es cremava per desinfectar les habitacions dels malalts.' },
          { icon: 'Apple', label: 'All', fact: 'L\'all té propietats antibiòtiques; es donava cru contra les infeccions.' },
          { icon: 'Mortar', label: 'Tisana', fact: 'Les tisanes combinaven diverses herbes per potenciar els efectes.' },
          { icon: 'BookOpen', label: 'Hipòcrates', fact: 'Hipòcrates va dir: "Que el menjar sigui el teu medicament".' },
          { icon: 'Cross', label: 'Sangoneres', fact: 'Les sangoneres es feien servir per "treure la sang corrupta".' },
          { icon: 'Anchor', label: 'Comerç', fact: 'Les rutes comercials van propagar la pesta d\'Àsia a Europa.' },
          { icon: 'Waves', label: 'Riu', fact: 'Els rius es consideraven fonts de malalties si estaven estancats.' },
          { icon: 'Sun', label: 'Astrologia', fact: 'Els metges consultaven els astres per determinar el moment de tractar.' },
          { icon: 'Flame', label: 'Moxibustió', fact: 'La moxibustió (cremar herbes sobre la pell) venia de la medicina xinesa.' },
          { icon: 'Gem', label: 'Ambre', fact: 'L\'ambre es portava com a amulet contra la pesta.' },
          { icon: 'Eye', label: 'Diagnosi', fact: 'L\'exàmen de l\'orina (uroscòpia) era el mètode diagnòstic principal.' },
        ]
      }
    ]
  }
];

export const getStarRating = (moves, pairs, timeSpent, timeLimit) => {
  const optimalMoves = pairs;
  const moveRatio = moves / optimalMoves;
  const timeRatio = timeSpent / timeLimit;
  
  let score = 100;
  
  if (moveRatio <= 1.2) score += 0;
  else if (moveRatio <= 1.5) score -= 10;
  else if (moveRatio <= 2.0) score -= 25;
  else score -= 40;
  
  if (timeRatio <= 0.5) score += 0;
  else if (timeRatio <= 0.7) score -= 10;
  else if (timeRatio <= 0.9) score -= 20;
  else score -= 30;
  
  if (score >= 85) return 3;
  if (score >= 65) return 2;
  return 1;
};
