const KAMUS = {
  1: {
    A: ["inoculation loop", "ose", "loop", "ose bulat", "ose jarum", "jarum inokulasi", "alat pemindah biakan", "loop steril"],
    B: ["wear gloves", "pakai sarung tangan", "apd", "alat pelindung diri", "ppe", "masker", "jas lab", "work near flame", "bekerja dekat api", "zona aseptis", "aseptic zone", "sterilize before and after", "sterilkan sebelum dan sesudah", "jangan sentuh bagian steril", "hindari kontaminasi", "tidak menyentuh ujung ose"]
  },
  2: {
    A: ["total magnification", "perbesaran total", "1000x", "seribu kali", "1000 kali", "microscope", "mikroskop", "mikroskop cahaya", "compound microscope", "mikroskop binokuler", "light microscope"],
    B: ["condenser", "kondensor", "lensa kondensor", "pengatur cahaya", "iris diaphragm", "diafragma", "diafragma iris", "pengatur intensitas cahaya", "pengatur bukaan"]
  },
  3: {
    A: ["syringe", "spuit", "needle", "jarum suntik", "alat suntik", "spuit steril", "needle and syringe"],
    B: ["to maintain sterility", "menjaga sterilitas", "creating an aseptic zone", "zona aseptis", "membunuh kontaminan di udara", "mencegah kontaminasi", "aseptic technique", "teknik aseptis", "sterilisasi udara sekitar"]
  },
  4: {
    A: ["graduated cylinder", "gelas ukur", "measuring cylinder", "silinder ukur", "gelas ukur 10 ml"],
    B: ["pipette", "pipet", "micropipette", "mikropipet", "beaker glass", "gelas kimia", "gelas beaker", "pipet ukur", "pipet volume", "pipet tetes"]
  },
  5: {
    A: ["freezer", "freezer -20°c", "cryovial", "tabung cryo", "tabung penyimpanan", "ultra-low temperature freezer", "freezer suhu rendah"],
    B: ["glycerol", "gliserol", "dmso", "dimethyl sulfoxide", "cryoprotectant", "zat krioprotektan", "media penyimpanan"]
  },
  6: {
    A: ["centrifuge", "sentrifugasi", "pemusing", "alat sentrifugasi", "centrifuge machine"],
    B: ["rpm", "kecepatan putaran", "rotations per minute", "time", "waktu", "durasi", "kecepatan", "waktu sentrifugasi"]
  },
  7: {
    A: ["autoclave", "autoklaf", "sterilizer", "alat sterilisasi", "autoclave horizontal", "autoclave vertikal"],
    B: ["121°c", "15 psi", "15 menit", "1 atm", "suhu 121 derajat celsius", "tekanan 15 psi", "waktu 15 menit", "121°c, 15 psi, 15 menit"]
  },
  8: {
    A: ["magnifying glass", "loupe", "kaca pembesar", "mikroskop stereo", "stereomicroscope", "lensa pembesar", "magnifier"],
    B: ["inoculation loop", "ose", "swab", "jarum inokulasi", "loop", "ose steril", "swab steril", "jarum ose"]
  },
  9: {
    A: ["ph meter", "ph meter digital", "alat pengukur ph", "ph tester", "ph probe"],
    B: ["phenol red", "phenol red indicator", "bromothymol blue", "bromocresol purple", "indikator ph", "indikator merah fenol", "btb", "bcg"]
  },
  10: {
    A: ["vacutainer", "butterfly needle", "syringe", "spuit", "jarum suntik", "vacutainer set", "blood collection set", "winged needle"],
    B: ["sps", "sodium polyanethol sulfonate", "antikoagulan", "anticoagulant", "sps anticoagulant", "natrium polianetol sulfonat"]
  },
  // Topik 2
  11: {
    A: ["gram-negative diplococci", "diplokokus gram negatif", "kidney bean shaped", "bakteri berbentuk kacang merah", "pink/red", "merah muda", "kokus berpasangan", "diplokokus", "bakteri gram negatif", "bakteri berwarna merah", "bakteri berbentuk biji kopi", "coffee bean shaped", "intracellular", "intraseluler", "di dalam leukosit"],
    B: ["gram stain", "pewarnaan gram", "pewarnaan gram negatif", "interpretasi: gram negatif", "pink", "merah", "merah muda", "negatif gram", "tidak menyerap kristal violet"]
  },
  12: {
    A: ["clue cells", "sel clue", "epithelial cells covered with bacteria", "sel epitel yang dikelilingi bakteri", "sel epitel bertabur bakteri", "clue cell", "sel epitel dengan bakteri menempel", "sel epitel yang dipenuhi bakteri", "bakteri menempel pada sel epitel", "sel epitel vagina", "squamous epithelial cells", "epitel skuamosa", "bakteri kecil menempel"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: bacterial vaginosis", "clue cell", "gram-variable coccobacilli", "kokobasil gram variabel", "bakteri gram variabel", "bv", "vaginosis bakteri", "bakteri batang pendek", "coccobacilli"]
  },
  13: {
    A: ["acid-fast bacilli", "basil tahan asam", "bta", "red rods", "batang merah", "bakteri batang merah", "basil tahan asam", "bakteri tahan asam", "afb", "acid-fast bacilli", "bakteri berwarna merah", "batang merah", "mycobacterium", "bakteri batang", "basil"],
    B: ["ziehl-neelsen stain", "pewarnaan zn", "pewarnaan ziehl-neelsen", "interpretasi: mycobacterium tuberculosis", "bta positif", "acid-fast", "tahan asam", "basil tahan asam", "bakteri tahan asam", "zn positif", "merah", "tahan asam"]
  },
  14: {
    A: ["gram-positive cocci in chains", "kokus gram positif berantai", "streptococcus", "purple", "ungu", "kokus berantai", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "streptococcus", "kokus", "bulat", "berantai", "rantai kokus"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: gram positif", "ungu", "positif gram", "menyerap kristal violet", "streptococcus", "kokus gram positif"]
  },
  15: {
    A: ["gram-positive cocci in clusters", "kokus gram positif bergerombol", "staphylococcus", "purple", "ungu", "kokus bergerombol", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "staphylococcus", "kokus", "bulat", "bergerombol", "cluster", "anggur", "seperti anggur"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: gram positif", "ungu", "positif gram", "menyerap kristal violet", "staphylococcus", "kokus gram positif"]
  },
  16: {
    A: ["curved gram-negative rods", "batang gram negatif melengkung", "vibrio", "pink", "merah muda", "batang bengkok", "bakteri batang melengkung", "koma", "comma shaped", "bakteri gram negatif", "bakteri berwarna merah", "vibrio", "batang", "melengkung", "bengkok"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: gram negatif", "pink", "merah", "merah muda", "negatif gram", "tidak menyerap kristal violet", "vibrio", "batang gram negatif"]
  },
  17: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang pendek", "coccobacilli (jika pendek)"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: gram negatif", "pink", "merah", "merah muda", "negatif gram", "tidak menyerap kristal violet"]
  },
  18: {
    A: ["gram-positive cocci in clusters", "kokus gram positif bergerombol", "staphylococcus", "purple", "ungu", "kokus bergerombol", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "staphylococcus", "kokus", "bulat", "bergerombol", "cluster", "anggur", "seperti anggur"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: gram positif", "ungu", "positif gram", "menyerap kristal violet", "staphylococcus", "kokus gram positif"]
  },
  19: {
    A: ["gram-positive cocci in pairs", "diplokokus gram positif", "streptococcus pneumoniae", "purple", "ungu", "kokus berpasangan", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "diplokokus", "kokus", "bulat", "berpasangan", "pairs", "lancip", "oval"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: gram positif", "ungu", "positif gram", "menyerap kristal violet", "streptococcus pneumoniae", "diplokokus gram positif"]
  },
  20: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang pendek", "coccobacilli (jika pendek)"],
    B: ["gram stain", "pewarnaan gram", "interpretasi: gram negatif", "pink", "merah", "merah muda", "negatif gram", "tidak menyerap kristal violet"]
  },
  // Topik 3
  21: {
    A: ["membrane filtration", "filtrasi membran", "filtrasi", "metode filtras", "sterilisasi filtras", "membrane filter", "millipore", "filter steril"],
    B: ["filter", "membran filter", "millipore", "syringe filter", "filter 0.22 µm", "filter 0.45 µm", "membran", "alat filtras", "filter bakteri"]
  },
  22: {
    A: ["flaming", "pemijaran", "sterilisasi dengan api", "sterilisasi api", "flame sterilization", "red-hot", "dibakar", "panas kering", "dry heat", "sterilisasi panas kering"],
    B: ["membakar sampai merah", "red-hot", "membunuh mikroorganisme dengan panas", "panas kering", "denaturasi protein", "oksidasi", "membakar seluruh permukaan", "memijarkan", "sterilisasi dengan pemijaran", "panas tinggi"]
  },
  23: {
    A: ["70% alcohol", "alkohol 70%", "etanol 70%", "isopropyl alcohol 70%", "alkohol", "ethanol", "isopropanol", "desinfektan"],
    B: ["chlorhexidine", "klorheksidin", "iodine", "povidone iodine", "betadine", "iodofor", "hydrogen peroxide", "h2o2", "glutaraldehyde", "desinfektan lain", "antiseptik"]
  },
  24: {
    A: ["thioglycollate broth", "thioglycolate", "media thioglikolat", "thioglycollate", "media anaerob", "broth anaerob", "media cair anaerob", "thioglikolat"],
    B: ["gas pack", "anaerobic jar", "anaerobic indicator", "methylene blue", "resazurin", "palladium catalyst", "katalis paladium", "kantung gas", "anaerobik jar", "jar anaerob", "sistem evacuation replacement"]
  },
  25: {
    A: ["macconkey agar", "macconkey", "ss agar", "salmonella-shigella agar", "media selektif", "media diferensial", "media selektif-diferensial"],
    B: ["lactose fermenter", "lf", "e. coli", "klebsiella", "non-lactose fermenter", "nlf", "salmonella", "shigella", "pseudomonas", "bakteri lf", "bakteri nlf"]
  },
  26: {
    A: ["macconkey agar", "macconkey", "media diferensial", "media selektif", "media laktosa"],
    B: ["lactose fermenter: e. coli", "klebsiella", "enterobacter", "non-lactose fermenter: salmonella", "shigella", "pseudomonas", "proteus", "bakteri lf", "bakteri nlf"]
  },
  27: {
    A: ["triple sugar iron (tsi) agar", "tsi", "tsi agar", "media tsi", "triple sugar iron"],
    B: ["glucose", "glukosa", "lactose", "laktosa", "sucrose", "sukrosa", "ferrous sulfate", "feso4", "phenol red", "indikator ph", "merah fenol", "pepton", "agar", "natrium tiosulfat", "h2s"]
  },
  28: {
    A: ["chocolate agar", "agar coklat", "media coklat", "chocolate agar plate", "cap", "hemoglobin agar"],
    B: ["haemophilus influenzae", "h. influenzae", "neisseria gonorrhoeae", "n. gonorrhoeae", "streptococcus pneumoniae", "s. pneumoniae", "bakteri fastidius", "bakteri rewel", "fastidious bacteria"]
  },
  29: {
    A: ["motility test medium", "sim", "motility indole ornithine", "media motilitas", "media sim", "semi-solid agar", "agar tusuk", "motility medium", "uji motilitas"],
    B: ["diffuse growth", "pertumbuhan menyebar = motile", "pertumbuhan hanya di garis tusukan = non-motile", "turbid", "keruh di seluruh media", "growth only along stab line", "tidak menyebar", "hanya di tusukan", "motil", "non-motil"]
  },
  30: {
    A: ["agar", "agar-agar", "bacto agar", "agar powder", "pemadat", "solidifying agent", "gelling agent", "agarosa"],
    B: ["blood agar", "macconkey agar", "nutrient agar", "tsa", "trypticase soy agar", "bap", "media padat", "solid media", "plate agar"]
  },
  // Topik 4
  31: {
    A: ["tcbs agar", "thiosulfate-citrate-bile salts-sucrose agar", "tcbs", "yellow colonies", "koloni kuning", "media selektif vibrio", "koloni berwarna kuning", "sucrose fermenter", "vibrio cholerae"],
    B: ["oxidase test", "uji oksidase", "string test", "tsi a/a", "fermentasi sukrosa", "sucrose positive", "uji string", "motil", "indole positive", "uji biokimia", "oksidase positif", "tsi a/a", "sukrosa positif"]
  },
  32: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["oxidase positive", "oksidase positif", "pyocyanin", "pyoverdine", "green pigment", "pigmen hijau", "pigmen biru-hijau", "non-fermenter", "macconkey colorless", "tsi alk/alk", "oksidase", "pigmen", "hijau", "biru"]
  },
  33: {
    A: ["gram-negative coccobacilli", "kokobasil gram negatif", "pink", "merah muda", "bakteri kokobasil", "bakteri gram negatif", "bakteri berwarna merah", "coccobacilli", "batang pendek", "bulat lonjong"],
    B: ["oxidase negative", "oksidase negatif", "non-fermenter", "macconkey colorless", "tsi alk/alk", "urease negative", "motility negative", "oksidase negatif", "non-fermenter", "urease negatif"]
  },
  34: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["oxidase positive", "oksidase positif", "non-fermenter", "macconkey colorless", "tsi alk/alk", "oksidase", "non-fermenter", "tidak memfermentasi laktosa", "oksidase positif"]
  },
  35: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["oxidase positive", "oksidase positif", "non-fermenter", "macconkey colorless", "tsi alk/alk", "oksidase", "non-fermenter", "tidak memfermentasi laktosa", "oksidase positif"]
  },
  36: {
    A: ["gram-negative coccobacilli", "kokobasil gram negatif", "pink", "merah muda", "bakteri kokobasil", "bakteri gram negatif", "bakteri berwarna merah", "coccobacilli", "batang pendek", "bulat lonjong"],
    B: ["oxidase negative", "oksidase negatif", "citrate positive", "non-fermenter", "sitrat positif", "oksidase negatif", "non-fermenter", "tsi alk/alk", "urease variable"]
  },
  37: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["oxidase positive", "oksidase positif", "urease positive", "non-fermenter", "urease positif", "oksidase positif", "non-fermenter", "tsi alk/alk", "urease"]
  },
  38: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["oxidase positive", "oksidase positif", "pyocyanin", "green pigment", "non-fermenter", "pigmen hijau", "oksidase positif", "non-fermenter", "tsi alk/alk"]
  },
  39: {
    A: ["gram-negative coccobacilli", "kokobasil gram negatif", "pink", "merah muda", "bakteri kokobasil", "bakteri gram negatif", "bakteri berwarna merah", "coccobacilli", "batang pendek", "bulat lonjong"],
    B: ["oxidase negative", "oksidase negatif", "non-fermenter", "tsi alk/alk", "oksidase negatif", "non-fermenter", "urease variable", "sitrat variable"]
  },
  40: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["oxidase positive", "oksidase positif", "non-fermenter", "tsi alk/alk", "oksidase positif", "non-fermenter", "tidak memfermentasi laktosa", "tsi alk/alk"]
  },
  // Topik 5
  41: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "uji kepekaan", "antibiotic susceptibility test", "ast", "interpretasi: resistant", "mrsa (zone ≤ 21 mm)", "resisten", "tidak sensitif", "zona hambat kecil", "mrsa", "methicillin-resistant"],
    B: ["oxacillin disk", "cefoxitin disk", "pbp2a test", "pcr meca", "uji konfirmasi mrsa", "cefoxitin", "oxacillin", "disk cefoxitin", "disk oxacillin"]
  },
  42: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "uji kepekaan", "ast", "interpretasi: sensitive", "intermediate", "resistant based on zone size", "sensitif", "intermediate", "resisten", "zona hambat", "diameter zona hambat"],
    B: ["inoculum size", "ukuran inokulum", "media thickness", "ketebalan media", "disk potency", "potensi disk", "incubation time", "waktu inkubasi", "temperature", "suhu", "ph media", "konsentrasi antibiotik", "faktor uji"]
  },
  43: {
    A: ["broth microdilution", "dilusi cair", "mic test", "uji mic", "minimum inhibitory concentration", "mikrodilusi", "dilusi", "interpretasi: mic value (clear well)", "nilai mic", "sumur jernih", "konsentrasi hambat minimum"],
    B: ["provides quantitative result", "hasil kuantitatif", "more precise", "lebih presisi", "can test multiple antibiotics in one plate", "dapat menguji banyak antibiotik", "menghemat waktu", "kuantitatif", "mic"]
  },
  44: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "interpretasi: resistant (zone ≤ 15 mm) for s. saprophyticus", "resisten", "zona hambat kecil", "s. saprophyticus", "novobiocin resistant"],
    B: ["s. saprophyticus", "coagulase-negative staphylococci", "cons", "staphylococcus saprophyticus", "bakteri resisten novobiocin", "bakteri gram positif", "kokus gram positif"]
  },
  45: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "interpretasi: sensitive (large zone)", "sensitif", "zona hambat besar", "ampicillin sensitive", "enterococcus faecalis"],
    B: ["ampicillin", "penicillin g", "vancomycin", "ampisilin", "penisilin", "vankomisin", "antibiotik lini pertama", "lini kedua"]
  },
  46: {
    A: ["double-disk synergy test (ddst)", "esbl test", "uji esbl", "uji sinergi", "interpretasi: esbl positive (keyhole/synergy)", "positif esbl", "efek keyhole", "sinergi", "zona hambat melebar"],
    B: ["cefotaxime", "ceftazidime", "ceftriaxone", "aztreonam", "sefotaksim", "seftazidim", "seftriakson", "aztreonam", "antibiotik beta-laktam", "sefalosporin generasi 3"]
  },
  47: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "interpretasi: multidrug resistant (mdr)", "resistant pattern", "pola resistensi", "mdr", "resisten terhadap banyak antibiotik", "tidak ada zona hambat"],
    B: ["beta-lactamase production", "produksi beta-laktamase", "efflux pump", "pompa efflux", "porin mutation", "mutasi porin", "target modification", "modifikasi target", "enzim", "mekanisme resistensi"]
  },
  48: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "interpretasi: sensitive (zone ≥ 20 mm) or resistant based on clsi", "sensitif", "resisten", "zona hambat", "diameter zona hambat", "imipenem"],
    B: ["meropenem", "colistin", "polymyxin b", "tigecycline", "meropenem", "kolistin", "polimiksin b", "tigesiklin", "antibiotik cadangan", "antibiotik lini terakhir"]
  },
  49: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "interpretasi: sensitive (zone ≥ 15 mm) for vancomycin", "sensitif", "zona hambat", "vancomycin sensitive", "vankomisin sensitif"],
    B: ["linezolid", "daptomycin", "teicoplanin", "tigecycline", "linezolid", "daptomisin", "teikoplanin", "tigesiklin", "antibiotik alternatif", "lini kedua"]
  },
  50: {
    A: ["disk diffusion", "kirby-bauer", "uji difusi disk", "interpretasi: sensitive (zone ≥ 35 mm) for ceftriaxone", "sensitif", "zona hambat", "seftriakson sensitif", "neisseria gonorrhoeae"],
    B: ["azithromycin", "doxycycline", "cefixime", "spectinomycin", "azitromisin", "doksisiklin", "sefiksim", "spektinomisin", "antibiotik alternatif", "lini kedua"]
  },
  // Topik 6
  51: {
    A: ["gram-positive cocci in clusters", "kokus gram positif bergerombol", "purple", "ungu", "kokus bergerombol", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "staphylococcus", "kokus", "bulat", "bergerombol", "cluster", "anggur", "seperti anggur"],
    B: ["catalase positive", "katalase positif", "coagulase positive", "koagulase positif", "mannitol fermentation", "fermentasi mannitol", "katalase", "koagulase", "msa", "mannitol salt agar", "kuning"]
  },
  52: {
    A: ["gram-positive cocci in chains", "kokus gram positif berantai", "purple", "ungu", "kokus berantai", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "streptococcus", "kokus", "bulat", "berantai", "rantai kokus"],
    B: ["bacitracin sensitive", "basitrasin sensitif", "beta-hemolysis", "hemolisis beta", "catalase negative", "katalase negatif", "basitrasin", "hemolisis", "katalase negatif", "s. pyogenes", "streptococcus pyogenes"]
  },
  53: {
    A: ["gram-positive cocci in clusters", "kokus gram positif bergerombol", "purple", "ungu", "kokus bergerombol", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "staphylococcus", "kokus", "bulat", "bergerombol", "cluster", "anggur", "seperti anggur"],
    B: ["coagulase positive", "koagulase positif", "mannitol salt agar yellow", "msa kuning", "catalase positive", "katalase positif", "koagulase", "msa", "katalase", "s. aureus", "staphylococcus aureus", "fermentasi mannitol", "kuning"]
  },
  54: {
    A: ["gram-positive cocci in clusters", "kokus gram positif bergerombol", "purple", "ungu", "kokus bergerombol", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "staphylococcus", "kokus", "bulat", "bergerombol", "cluster", "anggur", "seperti anggur"],
    B: ["novobiocin resistant", "novobiocin resistant", "coagulase negative", "koagulase negatif", "mannitol salt agar pink", "msa merah muda", "novobiocin", "koagulase negatif", "msa", "s. saprophyticus", "staphylococcus saprophyticus"]
  },
  55: {
    A: ["gram-positive cocci in chains", "kokus gram positif berantai", "purple", "ungu", "kokus berantai", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "streptococcus", "kokus", "bulat", "berantai", "rantai kokus"],
    B: ["camp test positive", "camp test positif", "hippurate hydrolysis", "hidrolisis hipurat", "beta-hemolysis", "hemolisis beta", "camp", "hipurat", "s. agalactiae", "streptococcus agalactiae", "group b strep"]
  },
  56: {
    A: ["gram-positive cocci in pairs", "diplokokus gram positif", "purple", "ungu", "kokus berpasangan", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "streptococcus pneumoniae", "diplokokus", "kokus", "bulat", "berpasangan", "pairs", "lancip", "oval"],
    B: ["optochin sensitive", "optochin sensitif", "alpha-hemolysis", "hemolisis alfa", "bile soluble", "larut empedu", "inulin fermentation", "fermentasi inulin", "optochin", "hemolisis alfa", "larut empedu", "inulin", "s. pneumoniae", "streptococcus pneumoniae"]
  },
  57: {
    A: ["gram-positive cocci in chains", "kokus gram positif berantai", "purple", "ungu", "kokus berantai", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "streptococcus", "kokus", "bulat", "berantai", "rantai kokus"],
    B: ["bile solubility positive", "larut empedu", "optochin sensitive", "optochin sensitif", "alpha-hemolysis", "hemolisis alfa", "larut empedu", "optochin", "hemolisis alfa", "s. pneumoniae", "streptococcus pneumoniae"]
  },
  58: {
    A: ["gram-positive cocci in clusters", "kokus gram positif bergerombol", "purple", "ungu", "kokus bergerombol", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "staphylococcus", "kokus", "bulat", "bergerombol", "cluster", "anggur", "seperti anggur"],
    B: ["cefoxitin resistant", "sefoksitin resisten (zone ≤ 21 mm)", "mrsa", "coagulase positive", "koagulase positif", "sefoksitin", "mrsa", "koagulase", "methicillin-resistant staphylococcus aureus"]
  },
  59: {
    A: ["acid-fast bacilli", "basil tahan asam", "bta", "red rods", "batang merah", "bakteri batang merah", "basil tahan asam", "bakteri tahan asam", "afb", "acid-fast bacilli", "bakteri berwarna merah", "batang merah", "mycobacterium", "bakteri batang", "basil", "globi", "globus"],
    B: ["ziehl-neelsen stain", "pewarnaan zn", "pewarnaan ziehl-neelsen", "interpretasi: mycobacterium leprae", "bta positif", "acid-fast", "tahan asam", "basil tahan asam", "bakteri tahan asam", "zn positif", "merah", "tahan asam", "m. leprae"]
  },
  60: {
    A: ["gram-positive cocci in chains", "kokus gram positif berantai", "purple", "ungu", "kokus berantai", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "streptococcus", "kokus", "bulat", "berantai", "rantai kokus"],
    B: ["inulin fermentation", "fermentasi inulin", "optochin sensitive", "optochin sensitif", "alpha-hemolysis", "hemolisis alfa", "inulin", "optochin", "hemolisis alfa", "s. pneumoniae", "streptococcus pneumoniae"]
  },
  // Topik 7
  61: {
    A: ["gram-negative diplococci", "diplokokus gram negatif", "pink", "merah muda", "intracellular", "intraseluler", "di dalam leukosit", "kokus berpasangan", "diplokokus", "bakteri gram negatif", "bakteri berwarna merah", "bakteri berbentuk biji kopi", "coffee bean shaped", "kidney bean shaped", "bakteri berbentuk kacang"],
    B: ["oxidase positive", "oksidase positif", "glucose fermentation", "fermentasi glukosa", "thayer-martin agar", "oksidase", "glukosa", "thayer-martin", "tm agar", "n. gonorrhoeae", "neisseria gonorrhoeae"]
  },
  62: {
    A: ["clue cells", "sel clue", "epithelial cells covered with bacteria", "sel epitel yang dikelilingi bakteri", "sel epitel bertabur bakteri", "clue cell", "sel epitel dengan bakteri menempel", "sel epitel yang dipenuhi bakteri", "bakteri menempel pada sel epitel", "sel epitel vagina", "squamous epithelial cells", "epitel skuamosa", "bakteri kecil menempel"],
    B: ["whiff test positive", "amine test", "koh test", "fishy odor", "nugent score", "uji whiff", "uji amin", "bau amis", "skor nugent", "bacterial vaginosis", "vaginosis bakteri", "bv", "gardnerella vaginalis"]
  },
  63: {
    A: ["gram-negative rods", "batang gram negatif", "pleomorphic", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang", "pleomorfik", "beragam bentuk"],
    B: ["bile esculin positive", "bile esculin positif", "kanamycin resistant", "kanamisin resisten", "anaerobic growth", "tumbuh anaerob", "bile esculin", "kanamisin", "anaerob", "bacteroides", "prevotella"]
  },
  64: {
    A: ["gram-negative diplococci", "diplokokus gram negatif", "pink", "merah muda", "intracellular", "intraseluler", "di dalam leukosit", "kokus berpasangan", "diplokokus", "bakteri gram negatif", "bakteri berwarna merah", "bakteri berbentuk biji kopi", "coffee bean shaped", "kidney bean shaped", "bakteri berbentuk kacang"],
    B: ["glucose fermentation", "fermentasi glukosa", "oxidase positive", "oksidase positif", "thayer-martin agar", "glukosa", "oksidase", "thayer-martin", "tm agar", "n. gonorrhoeae", "neisseria gonorrhoeae"]
  },
  65: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["non-fermenter", "macconkey colorless", "tsi alk/alk", "oxidase positive (if pseudomonas)", "non-fermenter", "tidak memfermentasi laktosa", "oksidase positif", "tsi alk/alk", "pseudomonas", "acinetobacter"]
  },
  66: {
    A: ["gram-positive cocci in clusters", "kokus gram positif bergerombol", "purple", "ungu", "kokus bergerombol", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "staphylococcus", "kokus", "bulat", "bergerombol", "cluster", "anggur", "seperti anggur"],
    B: ["catalase negative", "katalase negatif", "coagulase negative", "koagulase negatif", "novobiocin sensitive", "novobiocin sensitif", "katalase negatif", "koagulase negatif", "streptococcus", "enterococcus"]
  },
  67: {
    A: ["gram-negative rods", "batang gram negatif", "pleomorphic", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang", "pleomorfik", "beragam bentuk"],
    B: ["kanamycin sensitive", "kanamisin sensitif", "anaerobic growth", "tumbuh anaerob", "bile esculin positive", "bile esculin positif", "kanamisin", "anaerob", "bile esculin", "bacteroides", "prevotella"]
  },
  68: {
    A: ["clue cells", "sel clue", "epithelial cells covered with bacteria", "sel epitel yang dikelilingi bakteri", "sel epitel bertabur bakteri", "clue cell", "sel epitel dengan bakteri menempel", "sel epitel yang dipenuhi bakteri", "bakteri menempel pada sel epitel", "sel epitel vagina", "squamous epithelial cells", "epitel skuamosa", "bakteri kecil menempel"],
    B: ["amine test positive", "whiff test", "fishy odor", "nugent score", "uji amin", "uji whiff", "bau amis", "skor nugent", "bacterial vaginosis", "vaginosis bakteri", "bv", "gardnerella vaginalis"]
  },
  69: {
    A: ["gram-negative rods", "batang gram negatif", "pink", "merah muda", "bakteri batang", "bakteri gram negatif", "bakteri berwarna merah", "basil", "rods", "batang"],
    B: ["motility positive", "motilitas positif", "non-fermenter", "macconkey colorless", "oxidase positive", "motil", "non-fermenter", "oksidase positif", "pseudomonas", "acinetobacter"]
  },
  70: {
    A: ["gram-positive cocci in chains", "kokus gram positif berantai", "purple", "ungu", "kokus berantai", "bakteri kokus", "bakteri gram positif", "bakteri berwarna ungu", "streptococcus", "kokus", "bulat", "berantai", "rantai kokus"],
    B: ["bile esculin positive", "bile esculin positif", "growth in 6.5% nacl", "tumbuh di nacl 6.5%", "gamma-hemolysis", "hemolisis gamma", "bile esculin", "nacl 6.5%", "gamma", "enterococcus faecalis", "e. faecalis"]
  },
  // Topik 8
  71: {
    A: ["macconkey agar", "ss agar", "macconkey", "salmonella-shigella agar", "colorless colonies", "koloni tidak berwarna", "black center", "pusat hitam", "koloni transparan", "koloni pucat", "koloni bening"],
    B: ["h2s positive", "h2s positif", "tsi alk/a", "tsi alk/a", "non-lactose fermenter", "nlf", "h2s", "tsi", "nlf", "salmonella", "shigella", "bakteri nlf", "tidak memfermentasi laktosa"]
  },
  72: {
    A: ["macconkey agar", "macconkey", "pink colonies", "koloni merah muda", "koloni pink", "koloni merah", "lactose fermenter", "lf"],
    B: ["indole positive", "indole positif", "citrate positive", "sitrat positif", "tsi a/a", "tsi a/a", "indole", "sitrat", "tsi", "e. coli", "escherichia coli", "bakteri lf"]
  },
  73: {
    A: ["macconkey agar", "macconkey", "pink mucoid colonies", "koloni merah muda mukoid", "koloni pink", "koloni mukoid", "lactose fermenter", "lf", "klebsiella"],
    B: ["citrate positive", "sitrat positif", "tsi a/a", "tsi a/a", "non-motile", "non-motil", "sitrat", "tsi", "non-motil", "klebsiella pneumoniae", "k. pneumoniae"]
  },
  74: {
    A: ["macconkey agar", "macconkey", "pink colonies", "koloni merah muda", "koloni pink", "koloni merah", "lactose fermenter", "lf"],
    B: ["indole positive", "indole positif", "motile", "motil", "tsi a/a", "tsi a/a", "indole", "motil", "tsi", "e. coli", "escherichia coli", "bakteri lf"]
  },
  75: {
    A: ["macconkey agar", "macconkey", "colorless colonies", "koloni tidak berwarna", "koloni transparan", "koloni pucat", "non-lactose fermenter", "nlf"],
    B: ["urease positive", "urease positif", "motile", "motil", "tsi alk/a", "tsi alk/a", "urease", "motil", "tsi", "proteus", "proteus mirabilis", "bakteri nlf"]
  },
  76: {
    A: ["macconkey agar", "macconkey", "colorless colonies", "koloni tidak berwarna", "koloni transparan", "koloni pucat", "non-lactose fermenter", "nlf"],
    B: ["oxidase positive", "oksidase positif", "non-motile", "non-motil", "tsi alk/a", "tsi alk/a", "oksidase", "non-motil", "tsi", "shigella", "bakteri nlf"]
  },
  77: {
    A: ["macconkey agar", "macconkey", "colorless colonies", "koloni tidak berwarna", "koloni transparan", "koloni pucat", "non-lactose fermenter", "nlf"],
    B: ["urease positive", "urease positif", "non-motile", "non-motil", "tsi a/a", "tsi a/a", "urease", "non-motil", "tsi", "yersinia enterocolitica", "bakteri nlf"]
  },
  78: {
    A: ["macconkey agar", "macconkey", "pink colonies", "koloni merah muda", "koloni pink", "koloni merah", "lactose fermenter", "lf"],
    B: ["indole positive", "indole positif", "citrate positive", "sitrat positif", "tsi a/a", "tsi a/a", "indole", "sitrat", "tsi", "klebsiella oxytoca", "bakteri lf"]
  },
  79: {
    A: ["macconkey agar", "macconkey", "pink colonies", "koloni merah muda", "koloni pink", "koloni merah", "lactose fermenter", "lf"],
    B: ["indole positive", "indole positif", "non-motile", "non-motil", "tsi a/a", "tsi a/a", "indole", "non-motil", "tsi", "klebsiella pneumoniae", "bakteri lf"]
  },
  80: {
    A: ["macconkey agar", "macconkey", "pink colonies", "koloni merah muda", "koloni pink", "koloni merah", "lactose fermenter", "lf"],
    B: ["indole positive", "indole positif", "urease positive", "urease positif", "tsi a/a", "tsi a/a", "indole", "urease", "tsi", "klebsiella", "bakteri lf"]
  },
  // Topik 9
  81: {
    A: ["acid-fast bacilli", "basil tahan asam", "bta", "red rods", "batang merah", "bakteri batang merah", "basil tahan asam", "bakteri tahan asam", "afb", "acid-fast bacilli", "bakteri berwarna merah", "batang merah", "mycobacterium", "bakteri batang", "basil", "basil tahan asam"],
    B: ["löwenstein-jensen (lj) media", "lj slant", "lowenstein-jensen", "media lj", "lj agar", "media padat", "media kultur tb", "media untuk mycobacterium"]
  },
  82: {
    A: ["gram-positive rods", "batang gram positif", "purple", "chinese letter arrangement", "huruf cina", "bakteri batang", "bakteri gram positif", "bakteri berwarna ungu", "basil", "rods", "batang", "tersusun seperti huruf cina", "chinese letter", "v-shape", "l-shape", "club-shaped"],
    B: ["elek test", "uji toksin elek", "toxigenicity test", "uji toksigenisitas", "uji elek", "uji toksin", "difteri", "corynebacterium diphtheriae", "c. diphtheriae"]
  },
  83: {
    A: ["acid-fast bacilli", "basil tahan asam", "bta", "red rods", "batang merah", "bakteri batang merah", "basil tahan asam", "bakteri tahan asam", "afb", "acid-fast bacilli", "bakteri berwarna merah", "batang merah", "mycobacterium", "bakteri batang", "basil"],
    B: ["ziehl-neelsen stain", "pewarnaan zn", "pewarnaan ziehl-neelsen", "lj media", "media lj", "lowenstein-jensen", "bta", "tahan asam", "zn", "lj"]
  },
  84: {
    A: ["gram-positive rods", "batang gram positif", "purple", "chinese letter arrangement", "huruf cina", "bakteri batang", "bakteri gram positif", "bakteri berwarna ungu", "basil", "rods", "batang", "tersusun seperti huruf cina", "chinese letter", "v-shape", "l-shape", "club-shaped"],
    B: ["cystinase test", "uji sistinase", "tellurite reduction", "uji telurit", "sistinase", "telurit", "c. diphtheriae", "corynebacterium diphtheriae", "difteri"]
  },
  85: {
    A: ["acid-fast bacilli", "basil tahan asam", "bta", "red rods", "batang merah", "bakteri batang merah", "basil tahan asam", "bakteri tahan asam", "afb", "acid-fast bacilli", "bakteri berwarna merah", "batang merah", "mycobacterium", "bakteri batang", "basil"],
    B: ["ziehl-neelsen stain", "pewarnaan zn", "pewarnaan ziehl-neelsen", "lj media", "media lj", "lowenstein-jensen", "bta", "tahan asam", "zn", "lj"]
  },
  86: {
    A: ["gram-positive rods", "batang gram positif", "purple", "chinese letter arrangement", "huruf cina", "bakteri batang", "bakteri gram positif", "bakteri berwarna ungu", "basil", "rods", "batang", "tersusun seperti huruf cina", "chinese letter", "v-shape", "l-shape", "club-shaped"],
    B: ["tellurite reduction test", "uji telurit", "cystinase test", "uji sistinase", "telurit", "sistinase", "c. diphtheriae", "corynebacterium diphtheriae", "difteri"]
  },
  87: {
    A: ["acid-fast bacilli", "basil tahan asam", "bta", "red rods", "batang merah", "bakteri batang merah", "basil tahan asam", "bakteri tahan asam", "afb", "acid-fast bacilli", "bakteri berwarna merah", "batang merah", "mycobacterium", "bakteri batang", "basil"],
    B: ["ziehl-neelsen stain", "pewarnaan zn", "pewarnaan ziehl-neelsen", "lj media", "media lj", "lowenstein-jensen", "bta", "tahan asam", "zn", "lj"]
  },
  88: {
    A: ["gram-positive rods", "batang gram positif", "purple", "chinese letter arrangement", "huruf cina", "bakteri batang", "bakteri gram positif", "bakteri berwarna ungu", "basil", "rods", "batang", "tersusun seperti huruf cina", "chinese letter", "v-shape", "l-shape", "club-shaped"],
    B: ["neisser stain", "pewarnaan neisser", "metachromatic granules", "granula metakromatik", "neisser", "granula", "c. diphtheriae", "corynebacterium diphtheriae", "difteri"]
  },
  89: {
    A: ["acid-fast bacilli", "basil tahan asam", "bta", "red rods", "batang merah", "bakteri batang merah", "basil tahan asam", "bakteri tahan asam", "afb", "acid-fast bacilli", "bakteri berwarna merah", "batang merah", "mycobacterium", "bakteri batang", "basil"],
    B: ["ziehl-neelsen stain", "pewarnaan zn", "pewarnaan ziehl-neelsen", "lj media", "media lj", "lowenstein-jensen", "bta", "tahan asam", "zn", "lj"]
  },
  90: {
    A: ["gram-positive rods", "batang gram positif", "purple", "chinese letter arrangement", "huruf cina", "bakteri batang", "bakteri gram positif", "bakteri berwarna ungu", "basil", "rods", "batang", "tersusun seperti huruf cina", "chinese letter", "v-shape", "l-shape", "club-shaped"],
    B: ["urease test", "uji urease", "cystinase test", "uji sitinase", "urease", "sistinase", "c. diphtheriae", "corynebacterium diphtheriae", "difteri"]
  },
  // Topik 10
  91: {
    A: ["budding yeast cells", "sel ragi bertunas", "pseudohyphae", "pseudohifa", "ragi", "yeast", "sel ragi", "bertunas", "budding", "hifa palsu", "pseudohifa", "candida"],
    B: ["germ tube test", "uji germ tube", "carbohydrate assimilation", "asimilasi karbohidrat", "germ tube", "tabung germ", "asimilasi", "fermentasi karbohidrat", "candida albicans", "c. albicans"]
  },
  92: {
    A: ["septate hyphae", "hifa bersekat", "arthroconidia", "artrokonidia", "hifa", "bersekat", "artrokonidia", "fragmen hifa", "arthrospore", "coccidioides", "geotrichum"],
    B: ["urease test", "uji urease", "sabouraud dextrose agar", "sda", "urease", "sda", "sabouraud", "jamur", "fungi"]
  },
  93: {
    A: ["septate hyphae", "hifa bersekat", "microconidia", "macrocionidia", "konidia", "hifa", "bersekat", "mikrokonidia", "makrokonidia", "konidia", "spora", "dermatophytes", "microsporum", "trichophyton", "epidermophyton"],
    B: ["sabouraud dextrose agar", "sda", "lactophenol cotton blue stain", "lpcb", "sda", "sabouraud", "lpcb", "pewarnaan", "jamur", "fungi"]
  },
  94: {
    A: ["broad, non-septate hyphae", "hifa lebar tidak bersekat", "sporangiophores", "sporangium", "hifa", "tidak bersekat", "lebar", "sporangiofor", "sporangium", "rhizopus", "mucor", "zygomycetes"],
    B: ["sabouraud dextrose agar", "sda", "lactophenol cotton blue stain", "lpcb", "sda", "sabouraud", "lpcb", "pewarnaan", "jamur", "fungi"]
  },
  95: {
    A: ["septate hyphae", "hifa bersekat", "microconidia", "macrocionidia", "konidia", "hifa", "bersekat", "mikrokonidia", "makrokonidia", "konidia", "spora", "dermatophytes", "microsporum", "trichophyton", "epidermophyton"],
    B: ["sabouraud dextrose agar", "sda", "lactophenol cotton blue stain", "lpcb", "sda", "sabouraud", "lpcb", "pewarnaan", "jamur", "fungi"]
  },
  // Topik 11
  96: {
    A: ["elisa", "enzyme-linked immunosorbent assay", "eia", "uji elisa", "immunoassay", "interpretasi: positive (yellow color)", "positif (warna kuning)", "reaktif", "berwarna kuning", "terjadi reaksi warna", "absorbansi tinggi"],
    B: ["western blot", "pcr", "rapid test", "immunofluorescence assay (ifa)", "uji konfirmasi", "western blot", "pcr", "rapid test", "ifa", "tes cepat", "konfirmasi"]
  },
  97: {
    A: ["real-time pcr", "qpcr", "quantitative pcr", "pcr real-time", "pcr kuantitatif", "interpretasi: positive amplification (sigmoidal curve)", "amplifikasi positif", "kurva sigmoid", "kurva s", "terjadi amplifikasi", "positif", "cq", "ct value"],
    B: ["faster", "lebih cepat", "more sensitive", "lebih sensitif", "quantitative", "kuantitatif", "can detect low viral load", "dapat mendeteksi viral load rendah", "waktu lebih singkat", "tat cepat", "sensitivitas tinggi", "spesifisitas tinggi"]
  },
  98: {
    A: ["elisa", "enzyme-linked immunosorbent assay", "eia", "uji elisa", "immunoassay", "interpretasi: positive (yellow color)", "positif (warna kuning)", "reaktif", "berwarna kuning", "terjadi reaksi warna", "absorbansi tinggi"],
    B: ["hbsag", "anti-hbs", "hbeag", "anti-hbe", "anti-hbc", "penanda hepatitis b", "marker hbv", "hbsag", "anti-hbs", "hbeag", "anti-hbe", "anti-hbcc", "hepatitis b", "hbv"]
  },
  99: {
    A: ["real-time pcr", "qpcr", "quantitative pcr", "pcr real-time", "pcr kuantitatif", "interpretasi: positive amplification (sigmoidal curve)", "amplifikasi positif", "kurva sigmoid", "kurva s", "terjadi amplifikasi", "positif", "cq", "ct value"],
    B: ["faster", "lebih cepat", "more sensitive", "lebih sensitif", "quantitative", "kuantitatif", "can detect low viral load", "dapat mendeteksi viral load rendah", "waktu lebih singkat", "tat cepat", "sensitivitas tinggi", "spesifisitas tinggi"]
  },
  100: {
    A: ["elisa", "enzyme-linked immunosorbent assay", "eia", "uji elisa", "immunoassay", "interpretasi: positive (yellow color)", "positif (warna kuning)", "reaktif", "berwarna kuning", "terjadi reaksi warna", "absorbansi tinggi"],
    B: ["western blot", "pcr", "neutralization test", "hemagglutination inhibition", "uji netralisasi", "hi test", "western blot", "pcr", "konfirmasi", "uji konfirmasi"]
  },
  // Topik 12
  101: {
    A: ["elisa", "enzyme-linked immunosorbent assay", "eia", "uji elisa", "immunoassay", "interpretasi: positive (yellow color)", "positif (warna kuning)", "reaktif", "berwarna kuning", "terjadi reaksi warna", "absorbansi tinggi"],
    B: ["western blot", "pcr", "rapid test", "ifa", "uji konfirmasi", "western blot", "pcr", "rapid test", "tes cepat", "konfirmasi"]
  },
  102: {
    A: ["real-time pcr", "qpcr", "quantitative pcr", "pcr real-time", "pcr kuantitatif", "interpretasi: positive amplification (sigmoidal curve)", "amplifikasi positif", "kurva sigmoid", "kurva s", "terjadi amplifikasi", "positif", "cq", "ct value"],
    B: ["faster", "lebih cepat", "more sensitive", "lebih sensitif", "quantitative", "kuantitatif", "can detect low viral load", "dapat mendeteksi viral load rendah", "waktu lebih singkat", "tat cepat", "sensitivitas tinggi", "spesifisitas tinggi"]
  },
  103: {
    A: ["elisa", "enzyme-linked immunosorbent assay", "eia", "uji elisa", "immunoassay", "interpretasi: positive (yellow color)", "positif (warna kuning)", "reaktif", "berwarna kuning", "terjadi reaksi warna", "absorbansi tinggi"],
    B: ["hbsag", "anti-hbs", "hbeag", "anti-hbe", "anti-hbc", "penanda hepatitis b", "marker hbv", "hbsag", "anti-hbs", "hbeag", "anti-hbe", "anti-hbс", "hepatitis b", "hbv"]
  },
  104: {
    A: ["real-time pcr", "qpcr", "quantitative pcr", "pcr real-time", "pcr kuantitatif", "interpretasi: positive amplification (sigmoidal curve)", "amplifikasi positif", "kurva sigmoid", "kurva s", "terjadi amplifikasi", "positif", "cq", "ct value"],
    B: ["faster", "lebih cepat", "more sensitive", "lebih sensitif", "quantitative", "kuantitatif", "can detect low viral load", "dapat mendeteksi viral load rendah", "waktu lebih singkat", "tat cepat", "sensitivitas tinggi", "spesifisitas tinggi"]
  },
  105: {
    A: ["elisa", "enzyme-linked immunosorbent assay", "eia", "uji elisa", "immunoassay", "interpretasi: positive (yellow color)", "positif (warna kuning)", "reaktif", "berwarna kuning", "terjadi reaksi warna", "absorbansi tinggi"],
    B: ["western blot", "pcr", "neutralization test", "hemagglutination inhibition", "uji netralisasi", "hi test", "western blot", "pcr", "konfirmasi", "uji konfirmasi"]
  },
  // Topik 13
  106: {
    A: ["blood culture", "kultur darah", "procalcitonin test", "uji prokalsitonin", "prokalsitonin", "interpretasi: positive (two lines)", "positif (dua garis)", "reaktif", "dua garis", "terjadi reaksi", "sepsis", "bakteremia"],
    B: ["crp", "c-reactive protein", "lactate", "laktat", "wbc count", "hitung leukosit", "sirs criteria", "kriteria sirs", "penanda inflamasi", "marker inflamasi", "crp", "laktat", "leukosit"]
  },
  107: {
    A: ["blood culture", "kultur darah", "procalcitonin test", "uji prokalsitonin", "prokalsitonin", "interpretasi: positive (two lines)", "positif (dua garis)", "reaktif", "dua garis", "terjadi reaksi", "sepsis", "bakteremia"],
    B: ["antibiotic use", "penggunaan antibiotik", "sample timing", "waktu sampling", "contamination", "kontaminasi", "patient's immune status", "status imun pasien", "faktor yang mempengaruhi", "antibiotik", "waktu", "kontaminasi"]
  },
  108: {
    A: ["blood culture", "kultur darah", "procalcitonin test", "uji prokalsitonin", "prokalsitonin", "interpretasi: positive (two lines)", "positif (dua garis)", "reaktif", "dua garis", "terjadi reaksi", "sepsis", "bakteremia"],
    B: ["broad-spectrum antibiotics", "antibiotik spektrum luas", "meropenem", "piperacillin-tazobactam", "vancomycin", "meropenem", "piperacillin-tazobactam", "vankomisin", "antibiotik empiris", "terapi empiris"]
  },
  109: {
    A: ["blood culture", "kultur darah", "procalcitonin test", "uji prokalsitonin", "prokalsitonin", "interpretasi: positive (two lines)", "positif (dua garis)", "reaktif", "dua garis", "terjadi reaksi", "sepsis", "bakteremia"],
    B: ["septic shock", "syok septik", "multiple organ failure", "mods", "kegagalan multi organ", "ards", "dic", "disseminated intravascular coagulation", "komplikasi sepsis", "syok", "mods", "ards", "dic"]
  },
  110: {
    A: ["blood culture", "kultur darah", "procalcitonin test", "uji prokalsitonin", "prokalsitonin", "interpretasi: positive (two lines)", "positif (dua garis)", "reaktif", "dua garis", "terjadi reaksi", "sepsis", "bakteremia"],
    B: ["gram stain", "pewarnaan gram", "pcr", "maldi-tof", "biochemical tests", "uji biokimia", "serology", "serologi", "identifikasi agen", "kultur", "pcr", "maldi-tof", "gram stain"]
  }
};

console.log("Kamus Mikrobiologi loaded:", Object.keys(KAMUS).length, "entri");