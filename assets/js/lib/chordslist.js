var chords = [
            // A
            {key:'A',suffix:'7#9',positions:[{frets:'xx7688',fingers:'431200'}]},
            {key:'A',suffix:'7',positions:[{frets:'x02020',fingers:'030200'},{frets:'x02223',fingers:'211100',barres:2},{frets:'575685',fingers:'142131',barres:5},{frets:'xx7989',fingers:'423100'},{frets:'xxbcac',fingers:'413200'}]},
            {key:'A',suffix:'6',positions:[{frets:'x02222',fingers:'111100',barres:2},{frets:'x04655',fingers:'223100',barres:5},{frets:'xx7979',fingers:'413100',barres:7},{frets:'xcbbax',fingers:'013240'},{frets:'xcebex',fingers:'041320'}]},
            {key:'A',suffix:' Major',positions:[{frets:'x02220',fingers:'032100'},{frets:'x02225',fingers:'411100',barres:2},{frets:'577655',fingers:'112431',barres:5},{frets:'xx79a9',fingers:'342100'},{frets:'xceeex',fingers:'033310',barres:14}]},
            {key:'A',suffix:'min7',positions:[{frets:'x02213',fingers:'413200'},{frets:'575555',fingers:'111131',barres:5},{frets:'xx7988',fingers:'223100',barres:8}]},
            {key:'A',suffix:'min6',positions:[{frets:'x02212',fingers:'413200'},{frets:'xx7978',fingers:'213100',barres:7}]},
            {key:'A',suffix:' minor',positions:[{frets:'x02210',fingers:'013200'},{frets:'5322xx',fingers:'001124',barres:2},{frets:'577555',fingers:'111431',barres:5},{frets:'xx79a8',fingers:'243100'},{frets:'xxa9ac',fingers:'431200'}]},
            {key:'A',suffix:'7sus',positions:[{frets:'x02030',fingers:'040200'},{frets:'575755',fingers:'114131',barres:5},{frets:'xx798a',fingers:'423100'}]},
            {key:'A',suffix:'sus2',positions:[{frets:'x02200',fingers:'002100'},{frets:'x0745x',fingers:'021400'}]},
            {key:'A',suffix:'13',positions:[{frets:'x05422',fingers:'113400',barres:2},{frets:'xcbcce',fingers:'433120',barres:12}]},
            {key:'A',suffix:'9',positions:[{frets:'xx7687',fingers:'341200'}]},
            {key:'A',suffix:'sus4',positions:[{frets:'x02230',fingers:'042100'},{frets:'x0775x',fingers:'014300'},{frets:'xx79aa',fingers:'443100',barres:10}]},
            {key:'A',suffix:'7aug',positions:[{frets:'5x566x',fingers:'043201'},{frets:'xabaax',fingers:'011210',barres:10}]},
            {key:'A',suffix:'7b9',positions:[{frets:'xx7686',fingers:'131200',barres:6}]},
            {key:'A',suffix:'maj7',positions:[{frets:'x02120',fingers:'031200'},{frets:'x02224',fingers:'311100',barres:2},{frets:'xx7654',fingers:'123400'},{frets:'xx7999',fingers:'333100',barres:9},{frets:'xcb999',fingers:'111340',barres:9}]},
            // Bb
            {key:'Bb',suffix:'7#9',positions:[{frets:'x10121',fingers:'342010'}]},
            {key:'Bb',suffix:'7',positions:[{frets:'x13131',fingers:'141310',barres:1},{frets:'xx3334',fingers:'211100',barres:3},{frets:'686766',fingers:'112131',barres:6},{frets:'xx8a9a',fingers:'423100'},{frets:'xxcdbd',fingers:'413200'}]},
            {key:'Bb',suffix:'6',positions:[{frets:'x1303x',fingers:'040310'},{frets:'6553xx',fingers:'001324'},{frets:'xx8786',fingers:'142300'},{frets:'xx8a8a',fingers:'413100',barres:8},{frets:'xdccbx',fingers:'013240'}]},
            {key:'Bb',suffix:' Major',positions:[{frets:'x1333x',fingers:'033310',barres:3},{frets:'x5333x',fingers:'011130',barres:3},{frets:'688766',fingers:'112431',barres:6},{frets:'xx8aba',fingers:'342100'},{frets:'xxcaba',fingers:'121300',barres:10}]},
            {key:'Bb',suffix:'min7',positions:[{frets:'x13121',fingers:'121310',barres:1},{frets:'686666',fingers:'111131',barres:6},{frets:'xx8a99',fingers:'223100',barres:9}]},
            {key:'Bb',suffix:'min6',positions:[{frets:'x1302x',fingers:'020310'},{frets:'xx8a89',fingers:'213100',barres:8}]},
            {key:'Bb',suffix:' minor',positions:[{frets:'x13321',fingers:'124310',barres:1},{frets:'x4336x',fingers:'041120',barres:3},{frets:'688666',fingers:'111431'},{frets:'xx8ab9',fingers:'243100'},{frets:'xxbabd',fingers:'431200'}]},
            {key:'Bb',suffix:'7sus',positions:[{frets:'x13141',fingers:'141310',barres:1},{frets:'686866',fingers:'114131',barres:6},{frets:'xx8a9b',fingers:'423100'}]},
            {key:'Bb',suffix:'sus2',positions:[{frets:'x13311',fingers:'114310',barres:1},{frets:'xx8ab8',fingers:'143100',barres:8}]},
            {key:'Bb',suffix:'13',positions:[{frets:'6x678x',fingers:'043201'},{frets:'xbccbx',fingers:'024310'}]},
            {key:'Bb',suffix:'9',positions:[{frets:'x20111',fingers:'333020',barres:1}]},
            {key:'Bb',suffix:'sus4',positions:[{frets:'x1334x',fingers:'043210'},{frets:'688866',fingers:'114321',barres:6},{frets:'xx8abb',fingers:'443100',barres:11}]},
            {key:'Bb',suffix:'7aug',positions:[{frets:'6x677x',fingers:'043201'},{frets:'xbcbbx',fingers:'011210',barres:11}]},
            {key:'Bb',suffix:'7b9',positions:[{frets:'x10101',fingers:'302010'}]},
            {key:'Bb',suffix:'maj7',positions:[{frets:'x13231',fingers:'142310',barres:1},{frets:'xx3335',fingers:'311100',barres:3},{frets:'xx8765',fingers:'123400'},{frets:'xx8aaa',fingers:'333100',barres:10},{frets:'xdcaaa',fingers:'111340',barres:10}]},
            // B
            {key:'B',suffix:'7#9',positions:[{frets:'x2123x',fingers:'043120'}]},
            {key:'B',suffix:'7',positions:[{frets:'x21202',fingers:'403120'},{frets:'x24242',fingers:'141310',barres:2},{frets:'xx4445',fingers:'211100',barres:4},{frets:'797877',fingers:'112131',barres:7},{frets:'xx9bab',fingers:'423100'}]},
            {key:'B',suffix:'6',positions:[{frets:'x21102',fingers:'402130'},{frets:'x24444',fingers:'333310',barres:4},{frets:'7664xx',fingers:'001324'},{frets:'xx9897',fingers:'142300'},{frets:'xx9b9b',fingers:'413100',barres:9}]},
            {key:'B',suffix:' Major',positions:[{frets:'x2444x',fingers:'033310'},{frets:'x6444x',fingers:'011130',barres:4},{frets:'799877',fingers:'112431',barres:7},{frets:'xx9bcb',fingers:'342100'},{frets:'xxdbcb',fingers:'121300',barres:11}]},
            {key:'B',suffix:'min7',positions:[{frets:'x20202',fingers:'302010'},{frets:'797777',fingers:'111131',barres:7},{frets:'xx9baa',fingers:'223100',barres:10}]},
            {key:'B',suffix:'min6',positions:[{frets:'x20102',fingers:'301020'},{frets:'xx9b9a',fingers:'213100',barres:9}]},
            {key:'B',suffix:' minor',positions:[{frets:'x24432',fingers:'124310',barres:2},{frets:'x5447x',fingers:'041120',barres:4},{frets:'799777',fingers:'111431',barres:7},{frets:'xx9bca',fingers:'243100'},{frets:'xxcbce',fingers:'431200'}]},
            {key:'B',suffix:'7sus',positions:[{frets:'x24252',fingers:'141310',barres:2},{frets:'797977',fingers:'114131',barres:7},{frets:'xx9bac',fingers:'423100'}]},
            {key:'B',suffix:'sus2',positions:[{frets:'x24422',fingers:'114310',barres:2},{frets:'xx9bc9',fingers:'143100',barres:9}]},
            {key:'B',suffix:'13',positions:[{frets:'x21224',fingers:'433120',barres:2},{frets:'1x123x',fingers:'043201'}]},
            {key:'B',suffix:'9',positions:[{frets:'x21222',fingers:'333120',barres:2}]},
            {key:'B',suffix:'sus4',positions:[{frets:'x2445x',fingers:'043310',barres:4},{frets:'799977',fingers:'114321',barres:7},{frets:'xx9bcc',fingers:'443100',barres:12}]},
            {key:'B',suffix:'7aug',positions:[{frets:'x21203',fingers:'403120'},{frets:'xx7887',fingers:'243100'}]},
            {key:'B',suffix:'7b9',positions:[{frets:'x2121x',fingers:'013120',barres:1}]},
            {key:'B',suffix:'maj7',positions:[{frets:'x21302',fingers:'304120'},{frets:'x24342',fingers:'142310',barres:2},{frets:'xx4446',fingers:'311100',barres:4},{frets:'xx9876',fingers:'123400'},{frets:'xx9bbb',fingers:'333100',barres:11}]},
            // C
            {key:'C',suffix:'7#9',positions:[{frets:'x3234x',fingers:'043120'}]},
            {key:'C',suffix:'7',positions:[{frets:'x32310',fingers:'014230'},{frets:'x35353',fingers:'141310',barres:3},{frets:'xx5556',fingers:'211100',barres:5},{frets:'8a8988',fingers:'112131',barres:8},{frets:'xxacbc',fingers:'423100'}]},
            {key:'C',suffix:'6',positions:[{frets:'x3221x',fingers:'013240'},{frets:'x35555',fingers:'333310',barres:5},{frets:'xx7558',fingers:'411300',barres:5},{frets:'xxa9a8',fingers:'142300'},{frets:'xxacac',fingers:'413100',barres:10}]},
            {key:'C',suffix:' Major',positions:[{frets:'x32010',fingers:'010230'},{frets:'x3555x',fingers:'033310',barres:5},{frets:'x7555x',fingers:'011130',barres:5},{frets:'8aa988',fingers:'112431',barres:8},{frets:'xxacdc',fingers:'342100'}]},
            {key:'C',suffix:'min7',positions:[{frets:'x35343',fingers:'121310',barres:3},{frets:'8x888x',fingers:'033302',barres:8},{frets:'xxacbb',fingers:'223100'}]},
            {key:'C',suffix:'min6',positions:[{frets:'8x788x',fingers:'043102'},{frets:'xxacab',fingers:'213100',barres:10}]},
            {key:'C',suffix:' minor',positions:[{frets:'x3101x',fingers:'010240'},{frets:'x35543',fingers:'124310',barres:3},{frets:'x6558x',fingers:'041120',barres:5},{frets:'8aa888',fingers:'111431',barres:8},{frets:'xxacdb',fingers:'243100'}]},
            {key:'C',suffix:'7sus',positions:[{frets:'x35363',fingers:'141310',barres:3},{frets:'8a8a88',fingers:'114131',barres:8},{frets:'xxacbd',fingers:'423100'}]},
            {key:'C',suffix:'sus2',positions:[{frets:'x3001x',fingers:'010030'},{frets:'x35533',fingers:'114310',barres:3},{frets:'xxacda',fingers:'143100',barres:10}]},
            {key:'C',suffix:'13',positions:[{frets:'x122xx',fingers:'024310'},{frets:'8x89ax',fingers:'043201'}]},
            {key:'C',suffix:'9',positions:[{frets:'x32333',fingers:'021333',barres:3}]},
            {key:'C',suffix:'sus4',positions:[{frets:'x3301x',fingers:'010430'},{frets:'x3556x',fingers:'043310'}]},
            {key:'C',suffix:'7aug',positions:[{frets:'x1211x',fingers:'011210',barres:1},{frets:'8x899x',fingers:'043201'}]},
            {key:'C',suffix:'7b9',positions:[{frets:'x3232x',fingers:'013120',barres:2}]},
            {key:'C',suffix:'maj7',positions:[{frets:'x32000',fingers:'000230'},{frets:'x35453',fingers:'142310',barres:3},{frets:'xx5557',fingers:'311100',barres:5},{frets:'8x998x',fingers:'024301'},{frets:'xxaccc',fingers:'333100',barres:12}]},
            // C#
            {key:'C#',suffix:'7#9',positions:[{frets:'x4345x',fingers:'043120'}]},
            {key:'C#',suffix:'7',positions:[{frets:'x4342x',fingers:'014230'},{frets:'x46464',fingers:'141310',barres:4},{frets:'xx6667',fingers:'211100',barres:6},{frets:'9b9a99',fingers:'112131',barres:9},{frets:'xxbdcd',fingers:'423100'}]},
            {key:'C#',suffix:'6',positions:[{frets:'x4332x',fingers:'013240'},{frets:'x46666',fingers:'333310',barres:6},{frets:'xx8669',fingers:'411300',barres:6},{frets:'xxbab9',fingers:'142300'},{frets:'xxbdbd',fingers:'413100',barres:11}]},
            {key:'C#',suffix:' Major',positions:[{frets:'xx3121',fingers:'121300',barres:1},{frets:'x4666x',fingers:'033310',barres:6},{frets:'x8666x',fingers:'011130',barres:6},{frets:'9bba99',fingers:'112431',barres:9},{frets:'xxbded',fingers:'342100'}]},
            {key:'C#',suffix:'min7',positions:[{frets:'x46454',fingers:'121310',barres:4},{frets:'9x999x',fingers:'033302',barres:9},{frets:'xxadcc',fingers:'223100',barres:12}]},
            {key:'C#',suffix:'min6',positions:[{frets:'9x899x',fingers:'043102'},{frets:'xxbdbc',fingers:'213100',barres:11}]},
            {key:'C#',suffix:' minor',positions:[{frets:'xx2124',fingers:'431200'},{frets:'x46654',fingers:'124310',barres:4},{frets:'x7669x',fingers:'041120',barres:6},{frets:'9bb999',fingers:'111431',barres:9},{frets:'xxbdec',fingers:'243100'}]},
            {key:'C#',suffix:'7sus',positions:[{frets:'x46474',fingers:'141310',barres:4},{frets:'9b9b99',fingers:'114131',barres:9},{frets:'xxbdce',fingers:'423100'}]},
            {key:'C#',suffix:'sus2',positions:[{frets:'x46644',fingers:'114310'},{frets:'xxbdeb',fingers:'143100',barres:11}]},
            {key:'C#',suffix:'13',positions:[{frets:'x2332x',fingers:'024310'},{frets:'9x9abx',fingers:'043201'}]},
            {key:'C#',suffix:'9',positions:[{frets:'x43444',fingers:'333120',barres:4}]},
            {key:'C#',suffix:'sus4',positions:[{frets:'x4667x',fingers:'043310',barres:6},{frets:'9bbb99',fingers:'114321',barres:9},{frets:'xxbdee',fingers:'443100',barres:14}]},
            {key:'C#',suffix:'7aug',positions:[{frets:'x2322x',fingers:'011210',barres:2},{frets:'9x9aax',fingers:'043201'}]},
            {key:'C#',suffix:'7b9',positions:[{frets:'x4343x',fingers:'013120',barres:3}]},
            {key:'C#',suffix:'maj7',positions:[{frets:'x43111',fingers:'111340',barres:1},{frets:'x46564',fingers:'142310',barres:4},{frets:'xx6668',fingers:'311100',barres:6},{frets:'9xaa9x',fingers:'024301'},{frets:'xxbddd',fingers:'333100',barres:13}]},
            // D
            {key:'D',suffix:'7#9',positions:[{frets:'x5456x',fingers:'043120'}]},
            {key:'D',suffix:'7',positions:[{frets:'xx0212',fingers:'312000'},{frets:'x5453x',fingers:'014230'},{frets:'x57575',fingers:'141310',barres:5},{frets:'xx7778',fingers:'211100',barres:7},{frets:'acabaa',fingers:'112131',barres:10}]},
            {key:'D',suffix:'6',positions:[{frets:'xx0202',fingers:'201000'},{frets:'x5443x',fingers:'013240'},{frets:'x57777',fingers:'333310',barres:7},{frets:'xx977a',fingers:'411300',barres:7},{frets:'xxcbca',fingers:'142300'}]},
            {key:'D',suffix:' Major',positions:[{frets:'xx0232',fingers:'231000'},{frets:'xx4232',fingers:'121300',barres:2},{frets:'x5777x',fingers:'033310',barres:7},{frets:'x9777x',fingers:'011130',barres:7},{frets:'accbaa',fingers:'112431',barres:10}]},
            {key:'D',suffix:'min7',positions:[{frets:'xx0211',fingers:'112000'},{frets:'x57565',fingers:'121310',barres:5},{frets:'axaaax',fingers:'033302',barres:10}]},
            {key:'D',suffix:'min6',positions:[{frets:'xx0201',fingers:'102000'},{frets:'ax9aax',fingers:'043102'}]},
            {key:'D',suffix:' minor',positions:[{frets:'xx0231',fingers:'132000'},{frets:'xx3235',fingers:'431200'},{frets:'x57765',fingers:'124310',barres:5},{frets:'x877ax',fingers:'041120',barres:7},{frets:'accaaa',fingers:'111431',barres:10}]},
            {key:'D',suffix:'7sus',positions:[{frets:'xx0213',fingers:'312000'},{frets:'x57585',fingers:'141310',barres:5},{frets:'acacaa',fingers:'114131',barres:10}]},
            {key:'D',suffix:'sus2',positions:[{frets:'xx0230',fingers:'031000'},{frets:'x57755',fingers:'114310',barres:5}]},
            {key:'D',suffix:'13',positions:[{frets:'x3443x',fingers:'024310'},{frets:'axabcx',fingers:'043201'}]},
            {key:'D',suffix:'9',positions:[{frets:'x54555',fingers:'333120'}]},
            {key:'D',suffix:'sus4',positions:[{frets:'xx0233',fingers:'431000'},{frets:'x5778x',fingers:'043310',barres:7},{frets:'acccaa',fingers:'114321',barres:10}]},
            {key:'D',suffix:'7aug',positions:[{frets:'x3433x',fingers:'011210',barres:3},{frets:'axabbx',fingers:'043201'}]},
            {key:'D',suffix:'7b9',positions:[{frets:'x5454x',fingers:'013120'}]},
            {key:'D',suffix:'maj7',positions:[{frets:'xx0222',fingers:'111000',barres:2},{frets:'x54222',fingers:'111340',barres:2},{frets:'x57675',fingers:'142310',barres:5},{frets:'xx7779',fingers:'311100',barres:7},{frets:'axbbax',fingers:'024301'}]},
            // Eb
            {key:'Eb',suffix:'7#9',positions:[{frets:'x6567x',fingers:'043120'}]},
            {key:'Eb',suffix:'7',positions:[{frets:'xx1323',fingers:'423100'},{frets:'x6564x',fingers:'014230'},{frets:'x68686',fingers:'141310',barres:6},{frets:'xx8889',fingers:'211100',barres:8},{frets:'bdbcbb',fingers:'112131',barres:11}]},
            {key:'Eb',suffix:'6',positions:[{frets:'xx1313',fingers:'413100',barres:1},{frets:'x6554x',fingers:'013240'},{frets:'x68888',fingers:'333310',barres:8},{frets:'xxa88b',fingers:'411300',barres:8},{frets:'xxdcdb',fingers:'142300'}]},
            {key:'Eb',suffix:' Major',positions:[{frets:'xx1343',fingers:'342100'},{frets:'xx5343',fingers:'121300',barres:3},{frets:'x6888x',fingers:'033310',barres:8},{frets:'xa888x',fingers:'011130',barres:8},{frets:'bddbcb',fingers:'121431',barres:11}]},
            {key:'Eb',suffix:'min7',positions:[{frets:'xx1322',fingers:'221300',barres:2},{frets:'x68676',fingers:'121310',barres:6},{frets:'bxbbbx',fingers:'033302',barres:11}]},
            {key:'Eb',suffix:'min6',positions:[{frets:'xx1312',fingers:'213100',barres:1},{frets:'bxabbx',fingers:'043102'}]},
            {key:'Eb',suffix:' minor',positions:[{frets:'xx1342',fingers:'243100'},{frets:'xx4346',fingers:'431200'},{frets:'x68876',fingers:'124310',barres:6},{frets:'x988bx',fingers:'041120',barres:8},{frets:'bddbbb',fingers:'111431',barres:11}]},
            {key:'Eb',suffix:'7sus',positions:[{frets:'xx1324',fingers:'423100'},{frets:'x68696',fingers:'141310',barres:6},{frets:'bdbdbb',fingers:'114131',barres:11}]},
            {key:'Eb',suffix:'sus2',positions:[{frets:'xx1341',fingers:'143100',barres:1},{frets:'x68866',fingers:'114310',barres:6}]},
            {key:'Eb',suffix:'13',positions:[{frets:'x4554x',fingers:'024310'},{frets:'bxbcdx',fingers:'043201'}]},
            {key:'Eb',suffix:'9',positions:[{frets:'x65666',fingers:'333230',barres:6}]},
            {key:'Eb',suffix:'sus4',positions:[{frets:'xx1344',fingers:'443100',barres:4},{frets:'x6889x',fingers:'043310',barres:8},{frets:'xxddbb',fingers:'114300',barres:11}]},
            {key:'Eb',suffix:'7aug',positions:[{frets:'x4544x',fingers:'011210',barres:4},{frets:'bxbccx',fingers:'043201'}]},
            {key:'Eb',suffix:'7b9',positions:[{frets:'x6565x',fingers:'013120',barres:5}]},
            {key:'Eb',suffix:'maj7',positions:[{frets:'xx1333',fingers:'333100',barres:3},{frets:'x65333',fingers:'111340',barres:3},{frets:'x68786',fingers:'142310',barres:6},{frets:'xx888a',fingers:'311100',barres:8},{frets:'bxccbx',fingers:'024301'}]},
            // E
            {key:'E',suffix:'7#9',positions:[{frets:'x7678x',fingers:'043120'}]},
            {key:'E',suffix:'7',positions:[{frets:'020130',fingers:'041020'},{frets:'xx2434',fingers:'423100'},{frets:'x7675x',fingers:'014230'},{frets:'x79797',fingers:'141310',barres:7},{frets:'xx999a',fingers:'211100',barres:9}]},
            {key:'E',suffix:'6',positions:[{frets:'022120',fingers:'041320'},{frets:'xx2424',fingers:'413100',barres:2},{frets:'x7665x',fingers:'013240'},{frets:'x79999',fingers:'333310',barres:9},{frets:'xxb99c',fingers:'411300',barres:9}]},
            {key:'E',suffix:' Major',positions:[{frets:'022100',fingers:'001320'},{frets:'xx2454',fingers:'342100'},{frets:'xx6454',fingers:'121300',barres:4},{frets:'x7999x',fingers:'033310',barres:9},{frets:'xb999x',fingers:'011130',barres:9}]},
            {key:'E',suffix:'min7',positions:[{frets:'022033',fingers:'430210'},{frets:'x79787',fingers:'120310',barres:7},{frets:'xx998a',fingers:'413200'}]},
            {key:'E',suffix:'min6',positions:[{frets:'022020',fingers:'040320'},{frets:'xx9989',fingers:'413200'}]},
            {key:'E',suffix:' minor',positions:[{frets:'022000',fingers:'000320'},{frets:'xx2453',fingers:'243100'},{frets:'xx5457',fingers:'431200'},{frets:'x79987',fingers:'124310',barres:7},{frets:'xa99cx',fingers:'041120',barres:9}]},
            {key:'E',suffix:'7sus',positions:[{frets:'020200',fingers:'003020'},{frets:'xx2435',fingers:'423100'},{frets:'x797a7',fingers:'141310',barres:7}]},
            {key:'E',suffix:'sus2',positions:[{frets:'xx2452',fingers:'143100'},{frets:'x79977',fingers:'114310',barres:7}]},
            {key:'E',suffix:'13',positions:[{frets:'x5665x',fingers:'024310'},{frets:'x76779',fingers:'433120',barres:7}]},
            {key:'E',suffix:'9',positions:[{frets:'x76777',fingers:'333120',barres:7}]},
            {key:'E',suffix:'sus4',positions:[{frets:'022200',fingers:'004320'},{frets:'xx2455',fingers:'443100',barres:5},{frets:'x799ax',fingers:'043310',barres:9}]},
            {key:'E',suffix:'7aug',positions:[{frets:'x3433x',fingers:'011210',barres:3},{frets:'axabbx',fingers:'043201'}]},
            {key:'E',suffix:'7b9',positions:[{frets:'x7676x',fingers:'013120',barres:6}]},
            {key:'E',suffix:'maj7',positions:[{frets:'022444',fingers:'333110',barres:[1,4]},{frets:'x76444',fingers:'111340',barres:4},{frets:'x79897',fingers:'142310',barres:7},{frets:'xx999b',fingers:'311100',barres:9},{frets:'cxddcx',fingers:'024301'}]},
            // F
            {key:'F',suffix:'7#9',positions:[{frets:'x8789x',fingers:'043230'}]},
            {key:'F',suffix:'7',positions:[{frets:'131211',fingers:'131211',barres:1},{frets:'xx3545',fingers:'423100'},{frets:'x8786x',fingers:'014230'},{frets:'x8a8a8',fingers:'141310',barres:8},{frets:'xxaaab',fingers:'211100',barres:10}]},
            {key:'F',suffix:'6',positions:[{frets:'xx3231',fingers:'142300'},{frets:'xx3535',fingers:'413100',barres:3},{frets:'x8776x',fingers:'013240'},{frets:'x8aaaa',fingers:'333310',barres:10},{frets:'xxcaad',fingers:'411300',barres:10}]},
            {key:'F',suffix:' Major',positions:[{frets:'133211',fingers:'112431',barres:1},{frets:'xx3565',fingers:'342100'},{frets:'xx7565',fingers:'121300',barres:5},{frets:'x8aaax',fingers:'033310',barres:10},{frets:'xcaaax',fingers:'011130',barres:10}]},
            {key:'F',suffix:'min7',positions:[{frets:'131141',fingers:'131141',barres:1},{frets:'xx3544',fingers:'223100',barres:4},{frets:'x8a898',fingers:'121310',barres:8}]},
            {key:'F',suffix:'min6',positions:[{frets:'x3313x',fingers:'041320'},{frets:'xx1534',fingers:'213100'}]},
            {key:'F',suffix:' minor',positions:[{frets:'133111',fingers:'111431',barres:1},{frets:'xx3564',fingers:'243100'},{frets:'xx6568',fingers:'431200'},{frets:'x8aa98',fingers:'124310',barres:8},{frets:'xbaadx',fingers:'041120',barres:10}]},
            {key:'F',suffix:'7sus',positions:[{frets:'131311',fingers:'114131',barres:1},{frets:'xx3546',fingers:'423100'},{frets:'x8a8b8',fingers:'141310',barres:8}]},
            {key:'F',suffix:'sus2',positions:[{frets:'x3301x',fingers:'010430'},{frets:'x8aa88',fingers:'114310',barres:8}]},
            {key:'F',suffix:'13',positions:[{frets:'1x123x',fingers:'043201'},{frets:'x6776x',fingers:'024310'}]},
            {key:'F',suffix:'9',positions:[{frets:'x87888',fingers:'333120',barres:8}]},
            {key:'F',suffix:'sus4',positions:[{frets:'133311',fingers:'114321',barres:1},{frets:'xx3566',fingers:'443100',barres:6},{frets:'x8aabx',fingers:'043310',barres:10}]},
            {key:'F',suffix:'7aug',positions:[{frets:'1x122x',fingers:'043201'},{frets:'x6766x',fingers:'011210',barres:6}]},
            {key:'F',suffix:'7b9',positions:[{frets:'x8787x',fingers:'013120',barres:7}]},
            {key:'F',suffix:'maj7',positions:[{frets:'xx3210',fingers:'012300'},{frets:'xx3555',fingers:'333100',barres:5},{frets:'x87555',fingers:'111340',barres:5},{frets:'x8a9a8',fingers:'142310',barres:8},{frets:'xxaaac',fingers:'311100',barres:10}]},
            // F#
            {key:'F#',suffix:'7#9',positions:[{frets:'x989ax',fingers:'043120'}]},
            {key:'F#',suffix:'7',positions:[{frets:'xx4320',fingers:'012300'},{frets:'xx4656',fingers:'423100'},{frets:'x9897x',fingers:'014230'},{frets:'x9b9b9',fingers:'141310',barres:9},{frets:'xxbbbc',fingers:'211100',barres:11}]},
            {key:'F#',suffix:'6',positions:[{frets:'xx4342',fingers:'142300'},{frets:'xx4646',fingers:'413100'},{frets:'x9887x',fingers:'013240'},{frets:'x9bbbb',fingers:'333310',barres:11},{frets:'xxdbbe',fingers:'411300',barres:11}]},
            {key:'F#',suffix:' Major',positions:[{frets:'244322',fingers:'112431',barres:2},{frets:'xx4676',fingers:'342100'},{frets:'xx8676',fingers:'121300',barres:6},{frets:'x9bbbx',fingers:'033310',barres:11},{frets:'xdbbbx',fingers:'011130',barres:11}]},
            {key:'F#',suffix:'min7',positions:[{frets:'242252',fingers:'141131',barres:2},{frets:'xx4655',fingers:'223100',barres:5},{frets:'x9b9a9',fingers:'121310',barres:9}]},
            {key:'F#',suffix:'min6',positions:[{frets:'04424x',fingers:'041320'},{frets:'xx4645',fingers:'213100',barres:4}]},
            {key:'F#',suffix:' minor',positions:[{frets:'244222',fingers:'111431',barres:2},{frets:'xx4675',fingers:'343100'},{frets:'xx7679',fingers:'431200'},{frets:'x9bba9',fingers:'124310',barres:9},{frets:'xcbbex',fingers:'041120',barres:11}]},
            {key:'F#',suffix:'7sus',positions:[{frets:'242422',fingers:'114131',barres:2},{frets:'xx4657',fingers:'423100'},{frets:'x9b9c9',fingers:'141310',barres:9}]},
            {key:'F#',suffix:'sus2',positions:[{frets:'xx4674',fingers:'143100',barres:4},{frets:'x9bb99',fingers:'114310',barres:9}]},
            {key:'F#',suffix:'13',positions:[{frets:'2x234x',fingers:'043201'},{frets:'x7887x',fingers:'024310'}]},
            {key:'F#',suffix:'9',positions:[{frets:'x98999',fingers:'333120',barres:9}]},
            {key:'F#',suffix:'sus4',positions:[{frets:'244422',fingers:'114321',barres:2},{frets:'xx4677',fingers:'443100',barres:7},{frets:'x9bbcx',fingers:'043310',barres:11}]},
            {key:'F#',suffix:'7aug',positions:[{frets:'2x233x',fingers:'043201'},{frets:'x7877x',fingers:'011210',barres:7}]},
            {key:'F#',suffix:'7b9',positions:[{frets:'x9898x',fingers:'013120',barres:8}]},
            {key:'F#',suffix:'maj7',positions:[{frets:'xx4321',fingers:'123400'},{frets:'xx4666',fingers:'333100',barres:6},{frets:'x98666',fingers:'111340',barres:6},{frets:'x9bab9',fingers:'142310',barres:9},{frets:'xxbbbd',fingers:'311100',barres:11}]},
            // G
            {key:'G',suffix:'7#9',positions:[{frets:'xx5466',fingers:'431200'}]},
            {key:'G',suffix:'7',positions:[{frets:'320001',fingers:'100023'},{frets:'353463',fingers:'142131',barres:3},{frets:'xx5767',fingers:'423100'},{frets:'xa9a8x',fingers:'014230'},{frets:'xacaca',fingers:'141310',barres:10}]},
            {key:'G',suffix:'6',positions:[{frets:'320000',fingers:'000012'},{frets:'xx5453',fingers:'142300'},{frets:'xx5757',fingers:'413100',barres:5},{frets:'xa998x',fingers:'013240'},{frets:'xac9cx',fingers:'041320'}]},
            {key:'G',suffix:' Major',positions:[{frets:'320003',fingers:'300012'},{frets:'355433',fingers:'112431',barres:3},{frets:'xx5787',fingers:'342100'},{frets:'xx9787',fingers:'121300',barres:7},{frets:'xACCCx',fingers:'033310',barres:12}]},
            {key:'G',suffix:'min7',positions:[{frets:'353333',fingers:'111131',barres:3},{frets:'xa8a8x',fingers:'014130',barres:8},{frets:'xacaba',fingers:'121310',barres:10}]},
            {key:'G',suffix:'min6',positions:[{frets:'3x233x',fingers:'043102'},{frets:'xx5756',fingers:'213100',barres:5}]},
            {key:'G',suffix:' minor',positions:[{frets:'3x033x',fingers:'043002'},{frets:'355333',fingers:'111431',barres:3},{frets:'xx5786',fingers:'243100'},{frets:'xx878a',fingers:'431200'},{frets:'xaccba',fingers:'124310',barres:10}]},
            {key:'G',suffix:'7sus',positions:[{frets:'xx3013',fingers:'410400'},{frets:'353533',fingers:'114131',barres:3},{frets:'xacada',fingers:'141310',barres:10}]},
            {key:'G',suffix:'sus2',positions:[{frets:'3x0233',fingers:'431002'},{frets:'xaccaa',fingers:'114310',barres:10}]},
            {key:'G',suffix:'13',positions:[{frets:'3x3200',fingers:'002403'},{frets:'xa9aac',fingers:'433120',barres:10}]},
            {key:'G',suffix:'9',positions:[{frets:'xx5465',fingers:'341200'}]},
            {key:'G',suffix:'sus4',positions:[{frets:'3x0013',fingers:'410003'},{frets:'355533',fingers:'114321',barres:3},{frets:'xaccdx',fingers:'043310',barres:12}]},
            {key:'G',suffix:'7aug',positions:[{frets:'xx1001',fingers:'200100'},{frets:'3x344x',fingers:'043201'}]},
            {key:'G',suffix:'7b9',positions:[{frets:'xx5464',fingers:'131200',barres:4}]},
            {key:'G',suffix:'maj7',positions:[{frets:'3x0002',fingers:'100002'},{frets:'xx5432',fingers:'123400'},{frets:'xx5777',fingers:'333100',barres:7},{frets:'xa9777',fingers:'111340',barres:7},{frets:'xacbca',fingers:'142310',barres:10}]},
            // Ab
            {key:'Ab',suffix:'7#9',positions:[{frets:'xx6577',fingers:'431200'}]},
            {key:'Ab',suffix:'7',positions:[{frets:'xx1112',fingers:'211100',barres:1},{frets:'454674',fingers:'142131',barres:4},{frets:'xx6878',fingers:'423100'},{frets:'xbab9x',fingers:'014230'},{frets:'xbdbdb',fingers:'141310',barres:11}]},
            {key:'Ab',suffix:'6',positions:[{frets:'4x354x',fingers:'034102'},{frets:'xx6564',fingers:'142300'},{frets:'xx6868',fingers:'413100',barres:6},{frets:'xbaa9x',fingers:'013240'},{frets:'xbdadx',fingers:'041320'}]},
            {key:'Ab',suffix:' Major',positions:[{frets:'4311xx',fingers:'001134',barres:1},{frets:'466544',fingers:'112441',barres:4},{frets:'xx6898',fingers:'342100'},{frets:'xxa898',fingers:'121300',barres:8},{frets:'xbdddx',fingers:'033310',barres:13}]},
            {key:'Ab',suffix:'min7',positions:[{frets:'464444',fingers:'111131',barres:4},{frets:'xb9b9x',fingers:'014130',barres:9},{frets:'xbdbcb',fingers:'121310',barres:11}]},
            {key:'Ab',suffix:'min6',positions:[{frets:'5x455x',fingers:'043102'},{frets:'xx6867',fingers:'213100',barres:6}]},
            {key:'Ab',suffix:' minor',positions:[{frets:'4211xx',fingers:'001124',barres:1},{frets:'466444',fingers:'111431',barres:4},{frets:'xx6897',fingers:'243100'},{frets:'xx989b',fingers:'431200'},{frets:'xbddcb',fingers:'124310',barres:11}]},
            {key:'Ab',suffix:'7sus',positions:[{frets:'464644',fingers:'114131',barres:4},{frets:'xx6879',fingers:'423100'},{frets:'xbdbeb',fingers:'141310',barres:11}]},
            {key:'Ab',suffix:'sus2',positions:[{frets:'xx6896',fingers:'143100',barres:6},{frets:'xbddbb',fingers:'114310',barres:11}]},
            {key:'Ab',suffix:'13',positions:[{frets:'4x4311',fingers:'112403',barres:1},{frets:'xbabbd',fingers:'433120',barres:11}]},
            {key:'Ab',suffix:'9',positions:[{frets:'xx6576',fingers:'341200'}]},
            {key:'Ab',suffix:'sus4',positions:[{frets:'xx1134',fingers:'421100',barres:1},{frets:'466644',fingers:'114321',barres:4},{frets:'xbddex',fingers:'043310',barres:13}]},
            {key:'Ab',suffix:'7aug',positions:[{frets:'4x455x',fingers:'043201'},{frets:'x9a99x',fingers:'011210',barres:9}]},
            {key:'Ab',suffix:'7b9',positions:[{frets:'xx6575',fingers:'131200',barres:5}]},
            {key:'Ab',suffix:'maj7',positions:[{frets:'xx1113',fingers:'311100',barres:1},{frets:'4x554x',fingers:'024301'},{frets:'xx6888',fingers:'333100',barres:8},{frets:'xba888',fingers:'111340',barres:8},{frets:'xbdcdb',fingers:'142310',barres:11}]}
]
