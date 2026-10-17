const KAMUS = {
  1: {
    A: ["Masker N95", "Respirator N95", "Masker bedah", "Surgical mask", "Sarung tangan", "Gloves", "Handscoon", "Jas laboratorium", "Lab coat", "Gown", "Kacamata pelindung", "Goggles", "Safety glasses", "Face shield", "Pelindung wajah", "Apron", "Celemek"],
    B: ["Airborne", "Udara", "Droplet nuclei", "Aerosol", "Percikan dahak", "Droplet", "Kontak langsung", "Direct contact", "Inhalasi"],
    penjelasan: "Mycobacterium tuberculosis ditularkan melalui airborne (droplet nuclei yang sangat kecil dan dapat melayang di udara). Di laboratorium, risiko utama adalah inhalasi aerosol saat membuka tutup tabung, menuang spesimen, atau sentrifugasi. Oleh karena itu, APD yang melindungi saluran napas (masker N95) dan kontak (sarung tangan, jas lab) sangat penting.",
    penjelasan_en: "Mycobacterium tuberculosis is transmitted via airborne route (very small droplet nuclei that can float in the air). In the laboratory, the main risk is inhalation of aerosols when opening tube caps, pouring specimens, or centrifuging. Therefore, PPE protecting the respiratory tract (N95 mask) and contact (gloves, lab coat) is crucial."
  },
  2: {
    A: ["Autoklaf", "Autoclave", "Sterilizer", "Pressure cooker", "Alat sterilisasi uap panas bertekanan", "Autoclave horizontal", "Autoclave vertikal"],
    B: ["121°C", "121 derajat Celsius", "15 psi", "15 pon per inci persegi", "15 menit", "1 atm", "1 atmosfer", "121°C selama 15 menit pada 15 psi"],
    penjelasan: "Autoklaf menggunakan uap air jenuh bertekanan untuk membunuh mikroorganisme, termasuk spora, melalui denaturasi protein. Kombinasi 121°C, 15 psi, dan 15 menit adalah standar untuk sterilisasi alat gelas dan media yang tahan panas.",
    penjelasan_en: "An autoclave uses pressurized saturated steam to kill microorganisms, including spores, through protein denaturation. The combination of 121°C, 15 psi, and 15 minutes is the standard for sterilizing heat-resistant glassware and media."
  },
  3: {
    A: ["100x", "Lensa objektif 100x", "Oil immersion", "Lensa imersi minyak", "Perbesaran 1000x", "Lensa pembesaran tinggi", "High power field"],
    B: ["Kondensor", "Condenser", "Diafragma", "Iris diaphragm", "Pengatur cahaya", "Pengatur intensitas", "Mirror", "Cermin", "Sumber cahaya", "Light source"],
    penjelasan: "Lensa objektif 100x dengan minyak imersi memberikan perbesaran optimal (1000x) untuk mengamati morfologi bakteri secara detail. Kondensor mengumpulkan dan mengarahkan cahaya ke spesimen, sedangkan diafragma mengatur jumlah cahaya yang masuk.",
    penjelasan_en: "The 100x objective lens with immersion oil provides optimal magnification (1000x) to observe bacterial morphology in detail. The condenser collects and directs light onto the specimen, while the diaphragm regulates the amount of light entering."
  },
  4: {
    A: ["Gelas ukur", "Graduated cylinder", "Measuring cylinder", "Silinder ukur", "Gelas ukur 10 mL", "Gelas ukur volume"],
    B: ["Pipet", "Pipet ukur", "Pipet volume", "Mikropipet", "Beaker glass", "Gelas kimia", "Gelas beaker", "Labu ukur", "Erlenmeyer"],
    penjelasan: "Gelas ukur memiliki akurasi yang lebih tinggi dibandingkan gelas beaker atau Erlenmeyer untuk volume 10 mL. Pipet atau mikropipet juga bisa digunakan, namun jika soal meminta akurasi tinggi untuk volume tersebut, gelas ukur (atau pipet volume) adalah pilihan yang tepat.",
    penjelasan_en: "A graduated cylinder has higher accuracy compared to a beaker or Erlenmeyer flask for a 10 mL volume. A pipette or micropipette can also be used, but if the question asks for high accuracy for that volume, a graduated cylinder (or volumetric pipette) is the appropriate choice."
  },
  5: {
    A: ["Freezer", "Freezer -20°C", "Cryovial", "Tabung cryo", "Tabung penyimpanan", "Ultra-low temperature freezer", "Freezer suhu rendah", "Deep freezer"],
    B: ["Gliserol", "Glycerol", "DMSO", "Dimethyl sulfoxide", "Cryoprotectant", "Zat krioprotektan", "Media penyimpanan", "Stok gliserol"],
    penjelasan: "Gliserol atau DMSO mencegah pembentukan kristal es yang dapat merusak sel bakteri selama pembekuan. Cryovial adalah wadah yang tahan suhu rendah untuk penyimpanan jangka panjang.",
    penjelasan_en: "Glycerol or DMSO prevents the formation of ice crystals that can damage bacterial cells during freezing. A cryovial is a low-temperature resistant container for long-term storage."
  },
  6: {
    A: ["Sentrifugasi", "Centrifuge", "Pemusing", "Alat sentrifugasi", "Centrifuge machine", "Microcentrifuge", "Sentrifugasi dingin"],
    B: ["RPM", "Kecepatan putaran", "Rotations per minute", "G-force", "RCF", "Relative centrifugal force", "Time", "Waktu", "Durasi", "Kecepatan", "Waktu sentrifugasi", "Suhu"],
    penjelasan: "Sentrifugasi memisahkan komponen berdasarkan densitas. RPM dan waktu harus diatur sesuai protokol. G-force (RCF) lebih akurat karena memperhitungkan jari-jari rotor.",
    penjelasan_en: "Centrifugation separates components based on density. RPM and time must be set according to the protocol. G-force (RCF) is more accurate because it takes into account the rotor radius."
  },
  7: {
    A: ["Kaca pembesar", "Magnifying glass", "Loupe", "Mikroskop stereo", "Stereomicroscope", "Lensa pembesar", "Magnifier", "Hand lens"],
    B: ["Ose", "Inoculation loop", "Jarum inokulasi", "Loop", "Swab steril", "Jarum ose", "Ose bulat", "Ose jarum", "Pinset", "Forceps"],
    penjelasan: "Kaca pembesar atau mikroskop stereo digunakan untuk mengamati morfologi koloni makroskopis (bentuk, warna, tepi, elevasi). Ose digunakan untuk mengambil koloni tunggal secara aseptis.",
    penjelasan_en: "A magnifying glass or stereomicroscope is used to observe macroscopic colony morphology (shape, color, edge, elevation). An inoculation loop is used to pick a single colony aseptically."
  },
  8: {
    A: ["pH meter", "pH meter digital", "Alat pengukur pH", "pH tester", "pH probe", "pH indikator", "Kertas pH", "pH stick"],
    B: ["Phenol red", "Merah fenol", "Bromothymol blue", "BTB", "Bromocresol purple", "BCG", "Indikator pH", "Phenolphthalein", "Metil merah", "Methyl red"],
    penjelasan: "pH meter mengukur pH secara digital dengan elektroda. Indikator pH seperti phenol red berubah warna pada rentang pH tertentu (misalnya, merah pada pH basa, kuning pada pH asam), berguna untuk mendeteksi fermentasi pada media.",
    penjelasan_en: "A pH meter measures pH digitally with an electrode. pH indicators like phenol red change color within a specific pH range (e.g., red at basic pH, yellow at acidic pH), useful for detecting fermentation in media."
  },
  9: {
    A: ["Vacutainer", "Butterfly needle", "Syringe", "Spuit", "Jarum suntik", "Vacutainer set", "Blood collection set", "Winged needle", "Needle holder", "Tourniquet"],
    B: ["SPS", "Sodium polyanethol sulfonate", "Natrium polianetol sulfonat", "Antikoagulan", "Anticoagulant", "Heparin", "EDTA", "Sitrat"],
    penjelasan: "SPS adalah antikoagulan pilihan untuk kultur darah karena juga menghambat aktivitas bakterisidal serum (komplemen, lisozim) dan mencegah pembekuan. Vacutainer atau spuit digunakan untuk mengambil darah.",
    penjelasan_en: "SPS is the anticoagulant of choice for blood cultures because it also inhibits the bactericidal activity of serum (complement, lysozyme) and prevents clotting. A vacutainer or syringe is used to draw blood."
  },
  10: {
    A: ["Kristal violet", "Crystal violet", "Gram A", "Iodine", "Lugol", "Gram B", "Safranin", "Gram C", "Alkohol aseton", "Decolorizer", "Alkohol 95%", "Aseton"],
    B: ["Mordan", "Membentuk kompleks kristal violet-iodine", "Memperkuat ikatan pewarna", "Fiksasi warna", "Membentuk ikatan kompleks yang besar", "Memperbesar molekul pewarna"],
    penjelasan: "Iodine bertindak sebagai mordan yang membentuk kompleks dengan kristal violet, sehingga warna terperangkap di dinding sel bakteri Gram positif yang memiliki peptidoglikan tebal. Pada Gram negatif, kompleks ini larut oleh alkohol.",
    penjelasan_en: "Iodine acts as a mordant that forms a complex with crystal violet, trapping the color in the cell wall of Gram-positive bacteria which have thick peptidoglycan. In Gram-negative bacteria, this complex is dissolved by alcohol."
  },
  // Topik 2
  11: {
    A: ["Diplokokus Gram negatif", "Kokus berpasangan", "Bakteri berbentuk biji kopi", "Coffee bean shaped", "Kidney bean shaped", "Bakteri berbentuk kacang", "Intraseluler", "Di dalam leukosit", "Pink", "Merah muda", "Merah", "Gram negatif", "Diplococci", "Gonococci"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram negatif", "Pink", "Merah", "Negatif Gram", "Tidak menyerap kristal violet", "Tidak berwarna ungu"],
    penjelasan: "Neisseria gonorrhoeae adalah diplokokus Gram negatif yang khas ditemukan intraseluler dalam leukosit PMN (polimorfonuklear). Dinding selnya tipis dengan peptidoglikan sedikit, sehingga kehilangan kristal violet saat dekolorisasi dan menyerap safranin (merah).",
    penjelasan_en: "Neisseria gonorrhoeae is a Gram-negative diplococcus characteristically found intracellularly within PMN leukocytes (polymorphonuclear). Its cell wall is thin with little peptidoglycan, so it loses crystal violet during decolorization and absorbs safranin (red)."
  },
  12: {
    A: ["Clue cells", "Sel clue", "Sel epitel bertabur bakteri", "Epithelial cells covered with bacteria", "Sel epitel yang dikelilingi bakteri", "Sel epitel dengan bakteri menempel", "Sel epitel yang dipenuhi bakteri", "Squamous epithelial cells", "Epitel skuamosa"],
    B: ["Clue cell", "Sel epitel dengan bakteri menempel", "Bacterial vaginosis", "Vaginosis bakteri", "BV", "Gardnerella vaginalis", "Bakteri Gram-variabel", "Kokobasil"],
    penjelasan: "Clue cells adalah sel epitel skuamosa yang permukaannya dipenuhi bakteri Gram-variabel (Gardnerella vaginalis), sehingga batas sel tampak kabur. Ini adalah penanda kunci bacterial vaginosis.",
    penjelasan_en: "Clue cells are squamous epithelial cells whose surface is covered with Gram-variable bacteria (Gardnerella vaginalis), making the cell borders appear blurred. This is a key marker of bacterial vaginosis."
  },
  13: {
    A: ["BTA", "Basil tahan asam", "Acid-fast bacilli", "Batang merah", "Red rods", "Bakteri batang merah", "Basil tahan asam", "Bakteri tahan asam", "AFB", "Mycobacterium", "Bakteri batang", "Basil"],
    B: ["Ziehl-Neelsen", "ZN", "Pewarnaan Ziehl-Neelsen", "Dinding sel mengandung mikolat", "Mycolic acid", "Lipid tinggi", "Lilin", "Waxy", "Tidak menyerap kristal violet", "Tahan asam", "Acid-fast", "Tidak dapat diwarnai dengan Gram"],
    penjelasan: "Mycobacterium tuberculosis memiliki dinding sel kaya lipid (mikolat) yang menolak pewarna Gram biasa, tetapi menyerap karbol fuchsin dan tahan terhadap dekolorisasi asam-alkohol, sehingga tetap merah.",
    penjelasan_en: "Mycobacterium tuberculosis has a lipid-rich cell wall (mycolic acid) that repels regular Gram stains but absorbs carbol fuchsin and resists acid-alcohol decolorization, thus remaining red."
  },
  14: {
    A: ["Kokus Gram positif berantai", "Gram-positive cocci in chains", "Streptococcus", "Purple", "Ungu", "Kokus berantai", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Bulat", "Berantai", "Rantai kokus"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram positif", "Ungu", "Positif Gram", "Menyerap kristal violet", "Streptococcus", "Kokus Gram positif"],
    penjelasan: "Streptococcus pyogenes adalah kokus Gram positif yang tersusun dalam rantai. Dinding selnya memiliki peptidoglikan tebal yang menahan kristal violet-iodine.",
    penjelasan_en: "Streptococcus pyogenes is a Gram-positive coccus arranged in chains. Its cell wall has thick peptidoglycan that retains the crystal violet-iodine complex."
  },
  15: {
    A: ["Kokus Gram positif bergerombol", "Gram-positive cocci in clusters", "Staphylococcus", "Purple", "Ungu", "Kokus bergerombol", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Bulat", "Bergerombol", "Cluster", "Anggur", "Seperti anggur"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram positif", "Ungu", "Positif Gram", "Menyerap kristal violet", "Staphylococcus", "Kokus Gram positif"],
    penjelasan: "Staphylococcus aureus adalah kokus Gram positif yang tersusun dalam kelompok seperti anggur.",
    penjelasan_en: "Staphylococcus aureus is a Gram-positive coccus arranged in grape-like clusters."
  },
  16: {
    A: ["Batang Gram negatif melengkung", "Curved Gram-negative rods", "Vibrio", "Pink", "Merah muda", "Batang bengkok", "Bakteri batang melengkung", "Koma", "Comma shaped", "Bakteri Gram negatif", "Bakteri berwarna merah", "Vibrio", "Batang", "Melengkung", "Bengkok"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram negatif", "Pink", "Merah", "Merah muda", "Negatif Gram", "Tidak menyerap kristal violet", "Vibrio", "Batang Gram negatif"],
    penjelasan: "Vibrio cholerae adalah batang Gram negatif melengkung (koma). Dinding selnya tipis sehingga kehilangan kristal violet dan menyerap safranin.",
    penjelasan_en: "Vibrio cholerae is a curved (comma-shaped) Gram-negative rod. Its cell wall is thin, causing it to lose crystal violet and absorb safranin."
  },
  17: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang pendek", "Coccobacilli"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram negatif", "Pink", "Merah", "Merah muda", "Negatif Gram", "Tidak menyerap kristal violet"],
    penjelasan: "Escherichia coli adalah batang Gram negatif.",
    penjelasan_en: "Escherichia coli is a Gram-negative rod."
  },
  18: {
    A: ["Kokus Gram positif bergerombol", "Gram-positive cocci in clusters", "Staphylococcus", "Purple", "Ungu", "Kokus bergerombol", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Bulat", "Bergerombol", "Cluster", "Anggur", "Seperti anggur"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram positif", "Ungu", "Positif Gram", "Menyerap kristal violet", "Staphylococcus", "Kokus Gram positif"],
    penjelasan: "Staphylococcus aureus adalah kokus Gram positif bergerombol.",
    penjelasan_en: "Staphylococcus aureus is a clustered Gram-positive coccus."
  },
  19: {
    A: ["Diplokokus Gram positif", "Gram-positive cocci in pairs", "Streptococcus pneumoniae", "Purple", "Ungu", "Kokus berpasangan", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Diplokokus", "Kokus", "Bulat", "Berpasangan", "Pairs", "Lancip", "Oval"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram positif", "Ungu", "Positif Gram", "Menyerap kristal violet", "Streptococcus pneumoniae", "Diplokokus Gram positif"],
    penjelasan: "Streptococcus pneumoniae adalah diplokokus Gram positif yang sering berbentuk lancip (flame-shaped).",
    penjelasan_en: "Streptococcus pneumoniae is a Gram-positive diplococcus often described as flame-shaped."
  },
  20: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang pendek", "Coccobacilli"],
    B: ["Gram stain", "Pewarnaan Gram", "Gram negatif", "Pink", "Merah", "Merah muda", "Negatif Gram", "Tidak menyerap kristal violet"],
    penjelasan: "Bakteri batang Gram negatif.",
    penjelasan_en: "Gram-negative rod bacterium."
  },
  // Topik 3
  21: {
    A: ["Filtrasi membran", "Membrane filtration", "Filtrasi", "Sterilisasi filtrasi", "Filtrasi vakum", "Filtrasi tekanan"],
    B: ["Filter membran", "Membrane filter", "Millipore", "Syringe filter", "Filter 0.22 µm", "Filter 0.45 µm", "Filter bakteri", "Membran", "Alat filtrasi"],
    penjelasan: "Filtrasi digunakan untuk media heat-labile (tidak tahan panas) seperti serum, vitamin, atau antibiotik karena tidak menggunakan panas. Filter 0.22 µm menahan bakteri.",
    penjelasan_en: "Filtration is used for heat-labile media (not heat-resistant) such as serum, vitamins, or antibiotics because it does not use heat. A 0.22 µm filter retains bacteria."
  },
  22: {
    A: ["Flaming", "Pemijaran", "Sterilisasi api", "Flame sterilization", "Panas kering", "Dry heat", "Red-hot", "Dibakar"],
    B: ["Membakar sampai merah", "Red-hot", "Panas tinggi", "Denaturasi protein", "Oksidasi", "Membunuh mikroorganisme", "Memijarkan", "Sterilisasi dengan pemijaran", "Panas kering"],
    penjelasan: "Pemijaran membunuh mikroorganisme melalui panas kering yang sangat tinggi (sampai merah). Prinsipnya adalah denaturasi protein dan oksidasi komponen sel.",
    penjelasan_en: "Flaming kills microorganisms through very high dry heat (until red-hot). The principle is protein denaturation and oxidation of cell components."
  },
  23: {
    A: ["Alkohol 70%", "70% alcohol", "Etanol 70%", "Isopropyl alcohol 70%", "Alkohol", "Ethanol", "Isopropanol", "Desinfektan"],
    B: ["Klorheksidin", "Chlorhexidine", "Iodine", "Povidone iodine", "Betadine", "Iodofor", "Hidrogen peroksida", "H2O2", "Glutaraldehid", "Desinfektan lain", "Antiseptik", "Sodium hipoklorit", "Bayclin", "Pemutih"],
    penjelasan: "Alkohol 70% efektif mendesinfeksi permukaan karena denaturasi protein dan melarutkan lipid. Air dalam alkohol 70% membantu penetrasi ke dinding sel.",
    penjelasan_en: "70% alcohol is effective for surface disinfection due to protein denaturation and lipid dissolution. The water in 70% alcohol helps penetrate the cell wall."
  },
  24: {
    A: ["Thioglycollate broth", "Thioglycolate", "Media thioglikolat", "Thioglycollate", "Media anaerob", "Broth anaerob", "Media cair anaerob", "Thioglikolat"],
    B: ["Gas pack", "Anaerobic jar", "Anaerobic indicator", "Methylene blue", "Resazurin", "Palladium catalyst", "Katalis paladium", "Kantung gas", "Anaerobik jar", "Jar anaerob", "Sistem evacuation replacement", "Campuran gas H2/CO2"],
    penjelasan: "Thioglycollate broth mengandung agen pereduksi yang menurunkan potensial redoks. Gas pack atau jar anaerob menciptakan atmosfer tanpa oksigen dengan mengonsumsi O2.",
    penjelasan_en: "Thioglycollate broth contains reducing agents that lower redox potential. A gas pack or anaerobic jar creates an oxygen-free atmosphere by consuming O2."
  },
  25: {
    A: ["Media selektif", "Selective media", "Media selektif-diferensial", "Media selektif dan diferensial"],
    B: ["MacConkey agar", "SS agar", "TCBS", "MSA", "Chocolate agar", "LJ"],
    penjelasan: "Media selektif mengandung zat yang menghambat pertumbuhan mikroorganisme tertentu, sehingga hanya mikroorganisme target yang tumbuh.",
    penjelasan_en: "Selective media contain substances that inhibit the growth of certain microorganisms, so only the target microorganisms grow."
  },
  26: {
    A: ["MacConkey agar", "MacConkey", "Media diferensial", "Media selektif", "Media laktosa"],
    B: ["E. coli", "Klebsiella", "Enterobacter", "Salmonella", "Shigella", "Pseudomonas", "Proteus", "Bakteri LF", "Bakteri NLF"],
    penjelasan: "MacConkey mengandung laktosa dan phenol red; LF menghasilkan asam (pink), NLF tidak (colorless).",
    penjelasan_en: "MacConkey contains lactose and phenol red; LF produces acid (pink), NLF does not (colorless)."
  },
  27: {
    A: ["Triple Sugar Iron (TSI) agar", "TSI", "TSI agar", "Media TSI", "Triple sugar iron"],
    B: ["Glukosa", "Glucose", "Laktosa", "Lactose", "Sukrosa", "Sucrose", "FeSO4", "Ferrous sulfate", "Phenol red", "Indikator pH", "Merah fenol", "Pepton", "Agar", "Natrium tiosulfat", "H2S"],
    penjelasan: "TSI menguji fermentasi tiga gula (glukosa, laktosa, sukrosa) dan produksi H2S (dari natrium tiosulfat + FeSO4).",
    penjelasan_en: "TSI tests the fermentation of three sugars (glucose, lactose, sucrose) and H2S production (from sodium thiosulfate + FeSO4)."
  },
  28: {
    A: ["Chocolate agar", "Agar coklat", "Media coklat", "Chocolate agar plate", "CAP", "Hemoglobin agar"],
    B: ["Haemophilus influenzae", "H. influenzae", "Neisseria gonorrhoeae", "N. gonorrhoeae", "Streptococcus pneumoniae", "S. pneumoniae", "Bakteri fastidius", "Bakteri rewel", "Fastidious bacteria"],
    penjelasan: "Chocolate agar mengandung faktor X (hemin) dan V (NAD) yang dibutuhkan bakteri fastidius.",
    penjelasan_en: "Chocolate agar contains factor X (hemin) and V (NAD) required by fastidious bacteria."
  },
  29: {
    A: ["SIM", "Motility test medium", "Media motilitas", "Media SIM", "Semi-solid agar", "Agar tusuk", "Motility medium", "Uji motilitas"],
    B: ["Menyebar", "Diffuse growth = motil", "Hanya di garis tusukan", "Growth only along stab line = non-motil", "Turbid", "Keruh di seluruh media", "Tidak menyebar", "Hanya di tusukan", "Motil", "Non-motil"],
    penjelasan: "Bakteri motil menyebar dari garis tusukan karena memiliki flagela; non-motil hanya tumbuh di garis tusukan.",
    penjelasan_en: "Motile bacteria spread from the stab line due to flagella; non-motile bacteria grow only along the stab line."
  },
  30: {
    A: ["Agar", "Agar-agar", "Bacto agar", "Agar powder", "Pemadat", "Solidifying agent", "Gelling agent", "Agarosa"],
    B: ["Blood agar", "MacConkey agar", "Nutrient agar", "TSA", "Trypticase soy agar", "BAP", "Media padat", "Solid media", "Plate agar"],
    penjelasan: "Agar adalah polisakarida dari alga yang memadatkan media pada suhu kamar tetapi mencair pada suhu >90°C.",
    penjelasan_en: "Agar is a polysaccharide from algae that solidifies media at room temperature but melts at >90°C."
  },
  // Topik 4
  31: {
    A: ["TCBS agar", "Thiosulfate-citrate-bile salts-sucrose agar", "TCBS", "Kuning", "Yellow", "Koloni kuning", "Sucrose fermenter", "Vibrio cholera"],
    B: ["Oksidase", "Oxidase test", "String test", "TSI A/A", "Fermentasi sukrosa", "Sucrose positive", "Uji string", "Motil", "Indole positive", "Uji biokimia", "Oksidase positif", "TSI A/A", "Sukrosa positif"],
    penjelasan: "Vibrio cholera memfermentasi sukrosa sehingga koloni berwarna kuning pada TCBS (indikator bromothymol blue dan thymol blue berubah kuning karena asam).",
    penjelasan_en: "Vibrio cholera ferments sucrose, causing colonies to appear yellow on TCBS (bromothymol blue and thymol blue indicators turn yellow due to acid)."
  },
  32: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Oksidase positif", "Oxidase positive", "Pyocyanin", "Pyoverdine", "Pigmen hijau", "Green pigment", "Pigmen biru-hijau", "Non-fermenter", "MacConkey colorless", "TSI Alk/Alk", "Oksidase", "Pigmen", "Hijau", "Biru"],
    penjelasan: "Pseudomonas aeruginosa menghasilkan pigmen pyocyanin (biru-hijau) dan pyoverdine (kuning-hijau) yang khas. Oksidase positif dan non-fermenter.",
    penjelasan_en: "Pseudomonas aeruginosa produces characteristic pigments pyocyanin (blue-green) and pyoverdine (yellow-green). It is oxidase-positive and non-fermenter."
  },
  33: {
    A: ["Kokobasil Gram negatif", "Gram-negative coccobacilli", "Pink", "Merah muda", "Bakteri kokobasil", "Bakteri Gram negatif", "Bakteri berwarna merah", "Coccobacilli", "Batang pendek", "Bulat lonjong"],
    B: ["Oksidase negatif", "Oxidase negative", "Non-fermenter", "MacConkey colorless", "TSI Alk/Alk", "Urease variable", "Sitrat variable", "Oksidase negatif", "Non-fermenter", "Urease variable"],
    penjelasan: "Acinetobacter baumannii adalah kokobasil Gram negatif, oksidase negatif, non-fermenter, dan dapat memanfaatkan sitrat.",
    penjelasan_en: "Acinetobacter baumannii is a Gram-negative coccobacillus, oxidase-negative, non-fermenter, and can utilize citrate."
  },
  34: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Oksidase positif", "Oxidase positive", "Non-fermenter", "MacConkey colorless", "TSI Alk/Alk", "Oksidase", "Non-fermenter", "Tidak memfermentasi laktosa", "Oksidase positif"],
    penjelasan: "Pseudomonas aeruginosa adalah batang Gram negatif, oksidase positif, non-fermenter.",
    penjelasan_en: "Pseudomonas aeruginosa is a Gram-negative rod, oxidase-positive, non-fermenter."
  },
  35: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Oksidase positif", "Oxidase positive", "Non-fermenter", "TSI Alk/Alk", "Oksidase", "Non-fermenter", "Tidak memfermentasi laktosa", "Oksidase positif"],
    penjelasan: "Pseudomonas aeruginosa.",
    penjelasan_en: "Pseudomonas aeruginosa."
  },
  36: {
    A: ["Kokobasil Gram negatif", "Gram-negative coccobacilli", "Pink", "Merah muda", "Bakteri kokobasil", "Bakteri Gram negatif", "Bakteri berwarna merah", "Coccobacilli", "Batang pendek", "Bulat lonjong"],
    B: ["Oksidase negatif", "Oxidase negative", "Sitrat positif", "Citrate positive", "Non-fermenter", "Sitrat positif", "Oksidase negatif", "Non-fermenter", "TSI Alk/Alk", "Urease variable"],
    penjelasan: "Acinetobacter baumannii dapat memanfaatkan sitrat sebagai sumber karbon.",
    penjelasan_en: "Acinetobacter baumannii can utilize citrate as a carbon source."
  },
  37: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Oksidase positif", "Oxidase positive", "Urease positif", "Urease positive", "Non-fermenter", "Urease positif", "Oksidase positif", "Non-fermenter", "TSI Alk/Alk"],
    penjelasan: "Pseudomonas aeruginosa dapat menghasilkan urease.",
    penjelasan_en: "Pseudomonas aeruginosa can produce urease."
  },
  38: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Oksidase positif", "Oxidase positive", "Pyocyanin", "Green pigment", "Pigmen hijau", "Non-fermenter", "Oksidase positif", "Non-fermenter", "TSI Alk/Alk"],
    penjelasan: "Pseudomonas aeruginosa menghasilkan pigmen hijau.",
    penjelasan_en: "Pseudomonas aeruginosa produces green pigment."
  },
  39: {
    A: ["Kokobasil Gram negatif", "Gram-negative coccobacilli", "Pink", "Merah muda", "Bakteri kokobasil", "Bakteri Gram negatif", "Bakteri berwarna merah", "Coccobacilli", "Batang pendek", "Bulat lonjong"],
    B: ["Oksidase negatif", "Oxidase negative", "Non-fermenter", "TSI Alk/Alk", "Oksidase negatif", "Non-fermenter", "Urease variable", "Sitrat variable"],
    penjelasan: "Acinetobacter baumannii.",
    penjelasan_en: "Acinetobacter baumannii."
  },
  40: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Oksidase positif", "Oxidase positive", "Non-fermenter", "TSI Alk/Alk", "Oksidase positif", "Non-fermenter", "Tidak memfermentasi laktosa", "TSI Alk/Alk"],
    penjelasan: "Pseudomonas aeruginosa.",
    penjelasan_en: "Pseudomonas aeruginosa."
  },
  // Topik 5
  41: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Uji kepekaan", "Antibiotic susceptibility test", "AST", "Resisten", "Resistant", "MRSA (zone ≤ 21 mm)", "Tidak sensitif", "Zona hambat kecil", "MRSA", "Methicillin-resistant"],
    B: ["Oxacillin disk", "Cefoxitin disk", "PBP2a test", "PCR mecA", "Uji konfirmasi MRSA", "Cefoxitin", "Oxacillin", "Disk cefoxitin", "Disk oxacillin"],
    penjelasan: "MRSA resisten terhadap cefoxitin (zona ≤ 21 mm) karena memiliki gen mecA yang mengkode PBP2a. Cefoxitin adalah disk pengganti oxacillin yang lebih stabil.",
    penjelasan_en: "MRSA is resistant to cefoxitin (zone ≤ 21 mm) because it possesses the mecA gene encoding PBP2a. Cefoxitin is a more stable substitute disk for oxacillin."
  },
  42: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Uji kepekaan", "AST", "Sensitif", "Intermediate", "Resisten berdasarkan diameter zona", "Zona hambat", "Diameter zona hambat"],
    B: ["Ukuran inokulum", "Inoculum size", "Ketebalan media", "Media thickness", "Potensi disk", "Disk potency", "Waktu inkubasi", "Incubation time", "Suhu", "Temperature", "pH media", "Konsentrasi antibiotik"],
    penjelasan: "Faktor-faktor ini mempengaruhi difusi antibiotik dan pertumbuhan bakteri, sehingga dapat mengubah diameter zona hambat.",
    penjelasan_en: "These factors affect antibiotic diffusion and bacterial growth, thereby potentially altering the inhibition zone diameter."
  },
  43: {
    A: ["Broth microdilution", "Mikrodilusi", "MIC test", "Uji MIC", "Minimum inhibitory concentration", "Dilusi", "Nilai MIC", "MIC value", "Sumur jernih", "Clear well", "Konsentrasi hambat minimum"],
    B: ["Kuantitatif", "Quantitative", "Lebih presisi", "More precise", "Dapat menguji banyak antibiotik", "Menghemat waktu", "Hasil MIC", "Lebih akurat"],
    penjelasan: "Mikrodilusi memberikan nilai MIC kuantitatif (konsentrasi terendah yang menghambat pertumbuhan), lebih presisi daripada difusi disk yang hanya kualitatif.",
    penjelasan_en: "Microdilution provides a quantitative MIC value (the lowest concentration that inhibits growth), which is more precise than disk diffusion, which is only qualitative."
  },
  44: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Resisten", "Resistant (zone ≤ 15 mm) untuk S. saprophyticus", "Zona hambat kecil", "Novobiocin resistant"],
    B: ["Coagulase-negative staphylococci", "CONS", "Staphylococcus saprophyticus", "Bakteri resisten novobiocin", "Bakteri Gram positif", "Kokus Gram positif"],
    penjelasan: "S. saprophyticus resisten terhadap novobiocin, berbeda dengan S. epidermidis yang sensitif. Ini adalah uji kunci untuk membedakan keduanya.",
    penjelasan_en: "S. saprophyticus is resistant to novobiocin, unlike S. epidermidis, which is sensitive. This is a key test to differentiate the two."
  },
  45: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Sensitif", "Sensitive (large zone)", "Zona hambat besar", "Ampicillin sensitive", "Enterococcus faecalis"],
    B: ["Ampicillin", "Penicillin G", "Vancomycin", "Ampisilin", "Penisilin", "Vankomisin", "Antibiotik lini pertama", "Lini kedua"],
    penjelasan: "Ampicillin atau penisilin G adalah pilihan untuk Enterococcus faecalis yang sensitif; vankomisin untuk strain resisten.",
    penjelasan_en: "Ampicillin or penicillin G are choices for susceptible Enterococcus faecalis; vancomycin is for resistant strains."
  },
  46: {
    A: ["Double-Disk Synergy Test (DDST)", "ESBL test", "Uji ESBL", "Uji sinergi", "ESBL positif", "ESBL positive", "Keyhole", "Sinergi", "Zona hambat melebar"],
    B: ["Cefotaxime", "Ceftazidime", "Ceftriaxone", "Aztreonam", "Sefotaksim", "Seftazidim", "Seftriakson", "Aztreonam", "Antibiotik beta-laktam", "Sefalosporin generasi 3"],
    penjelasan: "DDST mendeteksi ESBL dengan melihat efek sinergi (keyhole) antara disk sefalosporin dan clavulanate. Clavulanate menghambat ESBL, sehingga zona hambat sefalosporin melebar.",
    penjelasan_en: "DDST detects ESBL by observing the synergy effect (keyhole) between cephalosporin and clavulanate disks. Clavulanate inhibits ESBL, causing the cephalosporin inhibition zone to expand."
  },
  47: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Multidrug resistant (MDR)", "Pola resistensi", "Resistant pattern", "MDR", "Resisten terhadap banyak antibiotik", "Tidak ada zona hambat"],
    B: ["Beta-laktamase", "Produksi beta-laktamase", "Efflux pump", "Pompa efflux", "Porin mutation", "Mutasi porin", "Target modification", "Modifikasi target", "Enzim", "Mekanisme resistensi"],
    penjelasan: "MDR menunjukkan resistensi terhadap ≥3 kelas antibiotik. Mekanisme resistensi dapat berupa enzim (beta-laktamase), efflux pump, mutasi porin, atau modifikasi target.",
    penjelasan_en: "MDR indicates resistance to ≥3 classes of antibiotics. Resistance mechanisms can include enzymes (beta-lactamase), efflux pumps, porin mutations, or target modifications."
  },
  48: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Sensitif", "Resisten berdasarkan zona (CLSI)", "Zona hambat", "Diameter zona hambat", "Imipenem"],
    B: ["Meropenem", "Colistin", "Polymyxin B", "Tigecycline", "Meropenem", "Kolistin", "Polimiksin B", "Tigesiklin", "Antibiotik cadangan", "Antibiotik lini terakhir"],
    penjelasan: "Imipenem adalah carbapenem untuk Acinetobacter; alternatif termasuk meropenem dan kolistin (untuk MDR).",
    penjelasan_en: "Imipenem is a carbapenem for Acinetobacter; alternatives include meropenem and colistin (for MDR)."
  },
  49: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Sensitif", "Sensitive (zone ≥ 15 mm) untuk vancomycin", "Zona hambat", "Vancomycin sensitive", "Vankomisin sensitif"],
    B: ["Linezolid", "Daptomycin", "Teicoplanin", "Tigecycline", "Linezolid", "Daptomisin", "Teikoplanin", "Tigesiklin", "Antibiotik alternatif", "Lini kedua"],
    penjelasan: "Vancomycin adalah pilihan untuk MRSA; alternatif termasuk linezolid dan daptomycin.",
    penjelasan_en: "Vancomycin is the choice for MRSA; alternatives include linezolid and daptomycin."
  },
  50: {
    A: ["Disk diffusion", "Kirby-Bauer", "Uji difusi disk", "Sensitif", "Sensitive (zone ≥ 35 mm) untuk ceftriaxone", "Zona hambat", "Seftriakson sensitif", "Neisseria gonorrhoeae"],
    B: ["Azithromycin", "Doxycycline", "Cefixime", "Spectinomycin", "Azitromisin", "Doksisiklin", "Sefiksim", "Spektinomisin", "Antibiotik alternatif", "Lini kedua"],
    penjelasan: "Ceftriaxone adalah lini pertama untuk gonorrhoeae; alternatif termasuk azithromycin dan doxycycline.",
    penjelasan_en: "Ceftriaxone is the first-line for gonorrhoeae; alternatives include azithromycin and doxycycline."
  },
  // Topik 6
  51: {
    A: ["Kokus Gram positif bergerombol", "Gram-positive cocci in clusters", "Purple", "Ungu", "Kokus bergerombol", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Staphylococcus", "Kokus", "Bulat", "Bergerombol", "Cluster", "Anggur", "Seperti anggur"],
    B: ["Katalase positif", "Catalase positive", "Koagulase positif", "Coagulase positive", "Fermentasi mannitol", "Mannitol fermentation", "Katalase", "Koagulase", "MSA", "Mannitol salt agar", "Kuning"],
    penjelasan: "Staphylococcus aureus adalah katalase dan koagulase positif, memfermentasi mannitol (MSA kuning).",
    penjelasan_en: "Staphylococcus aureus is catalase and coagulase positive, fermenting mannitol (yellow MSA)."
  },
  52: {
    A: ["Kokus Gram positif berantai", "Gram-positive cocci in chains", "Purple", "Ungu", "Kokus berantai", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Streptococcus", "Kokus", "Bulat", "Berantai", "Rantai kokus"],
    B: ["Basitrasin sensitif", "Bacitracin sensitive", "Hemolisis beta", "Beta-hemolysis", "Katalase negatif", "Catalase negative", "Basitrasin", "Hemolisis", "Katalase negatif", "S. pyogenes", "Streptococcus pyogenes"],
    penjelasan: "Streptococcus pyogenes (GAS) adalah basitrasin sensitif, beta-hemolitik, katalase negatif.",
    penjelasan_en: "Streptococcus pyogenes (GAS) is bacitracin-sensitive, beta-hemolytic, and catalase-negative."
  },
  53: {
    A: ["Kokus Gram positif bergerombol", "Gram-positive cocci in clusters", "Purple", "Ungu", "Kokus bergerombol", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Staphylococcus", "Kokus", "Bulat", "Bergerombol", "Cluster", "Anggur", "Seperti anggur"],
    B: ["Koagulase positif", "Coagulase positive", "MSA kuning", "Mannitol salt agar yellow", "Katalase positif", "Catalase positive", "Koagulase", "MSA", "Katalase", "S. aureus", "Staphylococcus aureus", "Fermentasi mannitol", "Kuning"],
    penjelasan: "Staphylococcus aureus.",
    penjelasan_en: "Staphylococcus aureus."
  },
  54: {
    A: ["Kokus Gram positif bergerombol", "Gram-positive cocci in clusters", "Purple", "Ungu", "Kokus bergerombol", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Staphylococcus", "Kokus", "Bulat", "Bergerombol", "Cluster", "Anggur", "Seperti anggur"],
    B: ["Novobiocin resisten", "Novobiocin resistant", "Koagulase negatif", "Coagulase negative", "MSA merah muda", "MSA pink", "Novobiocin", "Koagulase negatif", "MSA", "S. saprophyticus", "Staphylococcus saprophyticus"],
    penjelasan: "Staphylococcus saprophyticus resisten novobiocin, koagulase negatif.",
    penjelasan_en: "Staphylococcus saprophyticus is novobiocin-resistant, coagulase-negative."
  },
  55: {
    A: ["Kokus Gram positif berantai", "Gram-positive cocci in chains", "Purple", "Ungu", "Kokus berantai", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Streptococcus", "Kokus", "Bulat", "Berantai", "Rantai kokus"],
    B: ["CAMP test positif", "CAMP test positive", "Hidrolisis hipurat", "Hippurate hydrolysis", "Hemolisis beta", "Beta-hemolysis", "CAMP", "Hipurat", "S. agalactiae", "Streptococcus agalactiae", "Group B strep"],
    penjelasan: "Streptococcus agalactiae (GBS) adalah CAMP positif, hipurat positif.",
    penjelasan_en: "Streptococcus agalactiae (GBS) is CAMP-positive, hippurate-positive."
  },
  56: {
    A: ["Diplokokus Gram positif", "Gram-positive cocci in pairs", "Purple", "Ungu", "Kokus berpasangan", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Streptococcus pneumoniae", "Diplokokus", "Kokus", "Bulat", "Berpasangan", "Pairs", "Lancip", "Oval"],
    B: ["Optochin sensitif", "Optochin sensitive", "Hemolisis alfa", "Alpha-hemolysis", "Larut empedu", "Bile soluble", "Fermentasi inulin", "Inulin fermentation", "Optochin", "Hemolisis alfa", "Larut empedu", "Inulin", "S. pneumoniae", "Streptococcus pneumoniae"],
    penjelasan: "Streptococcus pneumoniae adalah optochin sensitif, alpha-hemolitik, larut empedu, dan memfermentasi inulin.",
    penjelasan_en: "Streptococcus pneumoniae is optochin-sensitive, alpha-hemolytic, bile-soluble, and ferments inulin."
  },
  57: {
    A: ["Kokus Gram positif berantai", "Gram-positive cocci in chains", "Purple", "Ungu", "Kokus berantai", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Streptococcus", "Kokus", "Bulat", "Berantai", "Rantai kokus"],
    B: ["Larut empedu", "Bile solubility positive", "Optochin sensitif", "Optochin sensitive", "Hemolisis alfa", "Alpha-hemolysis", "Larut empedu", "Optochin", "Hemolisis alfa", "S. pneumoniae", "Streptococcus pneumoniae"],
    penjelasan: "Streptococcus pneumoniae.",
    penjelasan_en: "Streptococcus pneumoniae."
  },
  58: {
    A: ["Kokus Gram positif bergerombol", "Gram-positive cocci in clusters", "Purple", "Ungu", "Kokus bergerombol", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Staphylococcus", "Kokus", "Bulat", "Bergerombol", "Cluster", "Anggur", "Seperti anggur"],
    B: ["Sefoksitin resisten", "Cefoxitin resistant", "MRSA", "Koagulase positif", "Coagulase positive", "Sefoksitin", "MRSA", "Koagulase", "Methicillin-resistant Staphylococcus aureus"],
    penjelasan: "MRSA resisten terhadap cefoxitin karena gen mecA.",
    penjelasan_en: "MRSA is resistant to cefoxitin due to the mecA gene."
  },
  59: {
    A: ["BTA", "Basil tahan asam", "Acid-fast bacilli", "Batang merah", "Red rods", "Bakteri batang merah", "Basil tahan asam", "Bakteri tahan asam", "AFB", "Mycobacterium", "Bakteri batang", "Basil", "Globi", "Globus"],
    B: ["Ziehl-Neelsen", "ZN", "Pewarnaan Ziehl-Neelsen", "Mycobacterium leprae", "BTA positif", "Acid-fast", "Tahan asam", "Basil tahan asam", "Bakteri tahan asam", "ZN positif", "Merah", "Tahan asam", "M. leprae"],
    penjelasan: "Mycobacterium leprae adalah basil tahan asam yang dapat membentuk globi (kumpulan basil di dalam makrofag).",
    penjelasan_en: "Mycobacterium leprae is an acid-fast bacillus that can form globi (clusters of bacilli within macrophages)."
  },
  60: {
    A: ["Kokus Gram positif berantai", "Gram-positive cocci in chains", "Purple", "Ungu", "Kokus berantai", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Streptococcus", "Kokus", "Bulat", "Berantai", "Rantai kokus"],
    B: ["Fermentasi inulin", "Inulin fermentation", "Optochin sensitif", "Optochin sensitive", "Hemolisis alfa", "Alpha-hemolysis", "Inulin", "Optochin", "Hemolisis alfa", "S. pneumoniae", "Streptococcus pneumoniae"],
    penjelasan: "Streptococcus pneumoniae.",
    penjelasan_en: "Streptococcus pneumoniae."
  },
  // Topik 7
  61: {
    A: ["Diplokokus Gram negatif", "Gram-negative diplococci", "Pink", "Merah muda", "Intracellular", "Intraseluler", "Di dalam leukosit", "Kokus berpasangan", "Diplokokus", "Bakteri Gram negatif", "Bakteri berwarna merah", "Bakteri berbentuk biji kopi", "Coffee bean shaped", "Kidney bean shaped", "Bakteri berbentuk kacang"],
    B: ["Oksidase positif", "Oxidase positive", "Fermentasi glukosa", "Glucose fermentation", "Thayer-Martin agar", "Oksidase", "Glukosa", "Thayer-Martin", "TM agar", "N. gonorrhoeae", "Neisseria gonorrhoeae"],
    penjelasan: "Neisseria gonorrhoeae adalah diplokokus Gram negatif intraseluler, oksidase positif, memfermentasi glukosa, tumbuh di Thayer-Martin.",
    penjelasan_en: "Neisseria gonorrhoeae is an intracellular Gram-negative diplococcus, oxidase-positive, ferments glucose, grows on Thayer-Martin."
  },
  62: {
    A: ["Clue cells", "Sel clue", "Sel epitel bertabur bakteri", "Epithelial cells covered with bacteria", "Sel epitel yang dikelilingi bakteri", "Sel epitel dengan bakteri menempel", "Sel epitel yang dipenuhi bakteri", "Bakteri menempel pada sel epitel", "Sel epitel vagina", "Squamous epithelial cells", "Epitel skuamosa", "Bakteri kecil menempel"],
    B: ["Whiff test positif", "Amine test", "KOH test", "Bau amis", "Fishy odor", "Nugent score", "Skor Nugent", "Uji whiff", "Uji amin", "Bacterial vaginosis", "Vaginosis bakteri", "BV", "Gardnerella vaginalis"],
    penjelasan: "Clue cells adalah sel epitel yang dipenuhi Gardnerella vaginalis. Diagnosis BV ditegakkan dengan kriteria Amsel (termasuk whiff test) atau Nugent score.",
    penjelasan_en: "Clue cells are epithelial cells covered with Gardnerella vaginalis. BV diagnosis is established using Amsel criteria (including whiff test) or Nugent score."
  },
  63: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pleomorphic", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang", "Pleomorfik", "Beragam bentuk"],
    B: ["Bile esculin positif", "Bile esculin positive", "Kanamycin resistant", "Kanamisin resisten", "Anaerobic growth", "Tumbuh anaerob", "Bile esculin", "Kanamisin", "Anaerob", "Bacteroides", "Prevotella"],
    penjelasan: "Bacteroides fragilis adalah batang Gram negatif anaerob, resisten kanamisin, bile esculin positif.",
    penjelasan_en: "Bacteroides fragilis is an anaerobic Gram-negative rod, kanamycin-resistant, bile esculin-positive."
  },
  64: {
    A: ["Diplokokus Gram negatif", "Gram-negative diplococci", "Pink", "Merah muda", "Intracellular", "Intraseluler", "Di dalam leukosit", "Kokus berpasangan", "Diplokokus", "Bakteri Gram negatif", "Bakteri berwarna merah", "Bakteri berbentuk biji kopi", "Coffee bean shaped", "Kidney bean shaped", "Bakteri berbentuk kacang"],
    B: ["Fermentasi glukosa", "Glucose fermentation", "Oksidase positif", "Oxidase positive", "Thayer-Martin agar", "Glukosa", "Oksidase", "Thayer-Martin", "TM agar", "N. gonorrhoeae", "Neisseria gonorrhoeae"],
    penjelasan: "Neisseria gonorrhoeae.",
    penjelasan_en: "Neisseria gonorrhoeae."
  },
  65: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Non-fermenter", "MacConkey colorless", "TSI Alk/Alk", "Oxidase positive (if Pseudomonas)", "Non-fermenter", "Tidak memfermentasi laktosa", "Oksidase positif", "TSI Alk/Alk", "Pseudomonas", "Acinetobacter"],
    penjelasan: "Bakteri non-fermenter Gram negatif (misalnya Pseudomonas atau Acinetobacter).",
    penjelasan_en: "Gram-negative non-fermenter bacteria (e.g., Pseudomonas or Acinetobacter)."
  },
  66: {
    A: ["Kokus Gram positif bergerombol", "Gram-positive cocci in clusters", "Purple", "Ungu", "Kokus bergerombol", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Staphylococcus", "Kokus", "Bulat", "Bergerombol", "Cluster", "Anggur", "Seperti anggur"],
    B: ["Katalase negatif", "Catalase negative", "Koagulase negatif", "Coagulase negative", "Novobiocin sensitive", "Novobiocin sensitif", "Katalase negatif", "Koagulase negatif", "Novobiocin", "Streptococcus", "Enterococcus"],
    penjelasan: "Kokus Gram positif katalase negatif adalah Streptococcus atau Enterococcus.",
    penjelasan_en: "Catalase-negative Gram-positive cocci are Streptococcus or Enterococcus."
  },
  67: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pleomorphic", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang", "Pleomorfik", "Beragam bentuk"],
    B: ["Kanamycin sensitive", "Kanamisin sensitif", "Anaerobic growth", "Tumbuh anaerob", "Bile esculin positive", "Bile esculin positif", "Kanamisin", "Anaerob", "Bile esculin", "Bacteroides", "Prevotella"],
    penjelasan: "Prevotella species adalah batang Gram negatif anaerob, sensitif kanamisin.",
    penjelasan_en: "Prevotella species are anaerobic Gram-negative rods, kanamycin-sensitive."
  },
  68: {
    A: ["Clue cells", "Sel clue", "Sel epitel bertabur bakteri", "Epithelial cells covered with bacteria", "Sel epitel yang dikelilingi bakteri", "Sel epitel dengan bakteri menempel", "Sel epitel yang dipenuhi bakteri", "Bakteri menempel pada sel epitel", "Sel epitel vagina", "Squamous epithelial cells", "Epitel skuamosa", "Bakteri kecil menempel"],
    B: ["Amine test positive", "Whiff test", "Fishy odor", "Nugent score", "Uji amin", "Uji whiff", "Bau amis", "Skor Nugent", "Bacterial vaginosis", "Vaginosis bakteri", "BV", "Gardnerella vaginalis"],
    penjelasan: "Bacterial vaginosis.",
    penjelasan_en: "Bacterial vaginosis."
  },
  69: {
    A: ["Batang Gram negatif", "Gram-negative rods", "Pink", "Merah muda", "Bakteri batang", "Bakteri Gram negatif", "Bakteri berwarna merah", "Basil", "Rods", "Batang"],
    B: ["Motility positive", "Motilitas positif", "Non-fermenter", "MacConkey colorless", "Oxidase positive", "Motil", "Non-fermenter", "Oksidase positif", "Pseudomonas", "Acinetobacter"],
    penjelasan: "Pseudomonas aeruginosa (motil, non-fermenter, oksidase positif).",
    penjelasan_en: "Pseudomonas aeruginosa (motile, non-fermenter, oxidase-positive)."
  },
  70: {
    A: ["Kokus Gram positif berantai", "Gram-positive cocci in chains", "Purple", "Ungu", "Kokus berantai", "Bakteri kokus", "Bakteri Gram positif", "Bakteri berwarna ungu", "Streptococcus", "Kokus", "Bulat", "Berantai", "Rantai kokus"],
    B: ["Bile esculin positive", "Bile esculin positif", "Growth in 6.5% NaCl", "Tumbuh di NaCl 6.5%", "Gamma-hemolysis", "Hemolisis gamma", "Bile esculin", "NaCl 6.5%", "Gamma", "Enterococcus faecalis", "E. faecalis"],
    penjelasan: "Enterococcus faecalis adalah kokus Gram positif yang tumbuh di NaCl 6.5%, bile esculin positif, gamma-hemolitik.",
    penjelasan_en: "Enterococcus faecalis is a Gram-positive coccus that grows in 6.5% NaCl, is bile esculin-positive, and gamma-hemolytic."
  },
  // Topik 8
  71: {
    A: ["MacConkey agar", "SS agar", "MacConkey", "Salmonella-Shigella agar", "Colorless", "Tidak berwarna", "Black center", "Pusat hitam", "Koloni transparan", "Koloni pucat", "Koloni bening"],
    B: ["H2S positive", "H2S positif", "TSI Alk/A", "TSI Alk/A", "Non-lactose fermenter", "NLF", "H2S", "TSI", "NLF", "Salmonella", "Shigella", "Bakteri NLF", "Tidak memfermentasi laktosa"],
    penjelasan: "Salmonella species adalah NLF, H2S positif (black center pada SS agar), TSI Alk/A.",
    penjelasan_en: "Salmonella species are NLF, H2S-positive (black center on SS agar), TSI Alk/A."
  },
  72: {
    A: ["MacConkey agar", "MacConkey", "Pink", "Merah muda", "Koloni pink", "Koloni merah", "Lactose fermenter", "LF"],
    B: ["Indole positive", "Indole positif", "Citrate positive", "Sitrat positif", "TSI A/A", "TSI A/A", "Indole", "Sitrat", "TSI", "E. coli", "Escherichia coli", "Bakteri LF"],
    penjelasan: "Escherichia coli adalah LF, indole positif, sitrat negatif (umumnya), TSI A/A.",
    penjelasan_en: "Escherichia coli is LF, indole-positive, citrate-negative (generally), TSI A/A."
  },
  73: {
    A: ["MacConkey agar", "MacConkey", "Pink", "Merah muda", "Mukoid", "Mucoid", "Koloni pink", "Koloni mukoid", "Lactose fermenter", "LF", "Klebsiella"],
    B: ["Citrate positive", "Sitrat positif", "TSI A/A", "TSI A/A", "Non-motile", "Non-motil", "Sitrat", "TSI", "Non-motil", "Klebsiella pneumoniae", "K. pneumoniae"],
    penjelasan: "Klebsiella pneumoniae adalah LF mukoid, sitrat positif, non-motil.",
    penjelasan_en: "Klebsiella pneumoniae is mucoid LF, citrate-positive, non-motile."
  },
  74: {
    A: ["MacConkey agar", "MacConkey", "Pink", "Merah muda", "Koloni pink", "Koloni merah", "Lactose fermenter", "LF"],
    B: ["Indole positive", "Indole positif", "Motile", "Motil", "TSI A/A", "TSI A/A", "Indole", "Motil", "TSI", "E. coli", "Escherichia coli", "Bakteri LF"],
    penjelasan: "Escherichia coli (indole positif, motil).",
    penjelasan_en: "Escherichia coli (indole-positive, motile)."
  },
  75: {
    A: ["MacConkey agar", "MacConkey", "Colorless", "Tidak berwarna", "Koloni transparan", "Koloni pucat", "Non-lactose fermenter", "NLF"],
    B: ["Urease positive", "Urease positif", "Motile", "Motil", "TSI Alk/A", "TSI Alk/A", "Urease", "Motil", "TSI", "Proteus", "Proteus mirabilis", "Bakteri NLF"],
    penjelasan: "Proteus mirabilis adalah NLF, urease positif, motil (swarming).",
    penjelasan_en: "Proteus mirabilis is NLF, urease-positive, motile (swarming)."
  },
  76: {
    A: ["MacConkey agar", "MacConkey", "Colorless", "Tidak berwarna", "Koloni transparan", "Koloni pucat", "Non-lactose fermenter", "NLF"],
    B: ["Non-motile", "Non-motil", "TSI Alk/A", "TSI Alk/A", "H2S negative", "H2S negatif", "Non-motil", "TSI", "H2S negatif", "Shigella", "Bakteri NLF"],
    penjelasan: "Shigella species adalah NLF, non-motil, H2S negatif.",
    penjelasan_en: "Shigella species are NLF, non-motile, H2S-negative."
  },
  77: {
    A: ["MacConkey agar", "MacConkey", "Colorless", "Tidak berwarna", "Koloni transparan", "Koloni pucat", "Non-lactose fermenter", "NLF"],
    B: ["Urease positive", "Urease positif", "Non-motile", "Non-motil", "TSI A/A", "TSI A/A", "Urease", "Non-motil", "TSI", "Yersinia enterocolitica", "Bakteri NLF"],
    penjelasan: "Yersinia enterocolitica adalah NLF, urease positif, non-motil pada 37°C.",
    penjelasan_en: "Yersinia enterocolitica is NLF, urease-positive, non-motile at 37°C."
  },
  78: {
    A: ["MacConkey agar", "MacConkey", "Pink", "Merah muda", "Koloni pink", "Koloni merah", "Lactose fermenter", "LF"],
    B: ["Indole positive", "Indole positif", "Citrate positive", "Sitrat positif", "TSI A/A", "TSI A/A", "Indole", "Sitrat", "TSI", "Klebsiella oxytoca", "Bakteri LF"],
    penjelasan: "Klebsiella oxytoca adalah LF, indole positif, sitrat positif.",
    penjelasan_en: "Klebsiella oxytoca is LF, indole-positive, citrate-positive."
  },
  79: {
    A: ["MacConkey agar", "MacConkey", "Pink", "Merah muda", "Koloni pink", "Koloni merah", "Lactose fermenter", "LF"],
    B: ["Indole positive", "Indole positif", "Non-motile", "Non-motil", "TSI A/A", "TSI A/A", "Indole", "Non-motil", "TSI", "Klebsiella pneumoniae", "Bakteri LF"],
    penjelasan: "Klebsiella pneumoniae umumnya indole negatif, tetapi beberapa strain dapat positif.",
    penjelasan_en: "Klebsiella pneumoniae is generally indole-negative, but some strains can be positive."
  },
  80: {
    A: ["MacConkey agar", "MacConkey", "Pink", "Merah muda", "Koloni pink", "Koloni merah", "Lactose fermenter", "LF"],
    B: ["Indole positive", "Indole positif", "Urease positive", "Urease positif", "TSI A/A", "TSI A/A", "Indole", "Urease", "TSI", "Klebsiella", "Bakteri LF"],
    penjelasan: "Klebsiella species (urease positif).",
    penjelasan_en: "Klebsiella species (urease-positive)."
  },
  // Topik 9
  81: {
    A: ["BTA", "Basil tahan asam", "Acid-fast bacilli", "Batang merah", "Red rods", "Bakteri batang merah", "Basil tahan asam", "Bakteri tahan asam", "AFB", "Mycobacterium", "Bakteri batang", "Basil"],
    B: ["Löwenstein-Jensen (LJ)", "LJ slant", "Lowenstein-Jensen", "Media LJ", "LJ agar", "Media padat", "Media kultur TB", "Media untuk Mycobacterium"],
    penjelasan: "Mycobacterium tuberculosis adalah BTA, tumbuh pada media LJ dengan koloni kering, kasar, krem.",
    penjelasan_en: "Mycobacterium tuberculosis is AFB, grows on LJ media with dry, rough, cream-colored colonies."
  },
  82: {
    A: ["Batang Gram positif", "Gram-positive rods", "Purple", "Chinese letter arrangement", "Huruf cina", "Bakteri batang", "Bakteri Gram positif", "Bakteri berwarna ungu", "Basil", "Rods", "Batang", "Tersusun seperti huruf cina", "Chinese letter", "V-shape", "L-shape", "Club-shaped"],
    B: ["Elek test", "Uji toksin Elek", "Toxigenicity test", "Uji toksigenisitas", "Uji Elek", "Uji toksin", "Difteri", "Corynebacterium diphtheriae", "C. diphtheriae"],
    penjelasan: "Corynebacterium diphtheriae adalah batang Gram positif dengan susunan huruf cina. Toksigenisitas diuji dengan Elek test (presipitasi garis toksin-antitoksin).",
    penjelasan_en: "Corynebacterium diphtheriae is a Gram-positive rod with Chinese letter arrangement. Toxigenicity is tested with the Elek test (toxin-antitoxin line precipitation)."
  },
  83: {
    A: ["BTA", "Basil tahan asam", "Batang merah", "Bakteri batang merah", "Basil tahan asam", "Bakteri tahan asam", "AFB", "Mycobacterium", "Bakteri batang", "Basil"],
    B: ["Ziehl-Neelsen", "ZN", "Pewarnaan Ziehl-Neelsen", "LJ media", "Media LJ", "Lowenstein-Jensen", "BTA", "Tahan asam", "ZN", "LJ"],
    penjelasan: "Mycobacterium tuberculosis.",
    penjelasan_en: "Mycobacterium tuberculosis."
  },
  84: {
    A: ["Batang Gram positif", "Gram-positive rods", "Purple", "Chinese letter arrangement", "Huruf cina", "Bakteri batang", "Bakteri Gram positif", "Bakteri berwarna ungu", "Basil", "Rods", "Batang", "Tersusun seperti huruf cina", "Chinese letter", "V-shape", "L-shape", "Club-shaped"],
    B: ["Cystinase test", "Uji sistinase", "Tellurite reduction", "Uji telurit", "Sistinase", "Telurit", "C. diphtheriae", "Corynebacterium diphtheriae", "Difteri"],
    penjelasan: "Corynebacterium diphtheriae dapat mereduksi telurit (koloni hitam) dan menghasilkan sistinase.",
    penjelasan_en: "Corynebacterium diphtheriae can reduce tellurite (black colonies) and produce cystinase."
  },
  85: {
    A: ["BTA", "Basil tahan asam", "Batang merah", "Bakteri batang merah", "Basil tahan asam", "Bakteri tahan asam", "AFB", "Mycobacterium", "Bakteri batang", "Basil"],
    B: ["Ziehl-Neelsen", "ZN", "Pewarnaan Ziehl-Neelsen", "LJ media", "Media LJ", "Lowenstein-Jensen", "BTA", "Tahan asam", "ZN", "LJ"],
    penjelasan: "Mycobacterium tuberculosis.",
    penjelasan_en: "Mycobacterium tuberculosis."
  },
  86: {
    A: ["Batang Gram positif", "Gram-positive rods", "Purple", "Chinese letter arrangement", "Huruf cina", "Bakteri batang", "Bakteri Gram positif", "Bakteri berwarna ungu", "Basil", "Rods", "Batang", "Tersusun seperti huruf cina", "Chinese letter", "V-shape", "L-shape", "Club-shaped"],
    B: ["Tellurite reduction test", "Uji telurit", "Cystinase test", "Uji sistinase", "Telurit", "Sistinase", "C. diphtheriae", "Corynebacterium diphtheriae", "Difteri"],
    penjelasan: "Corynebacterium diphtheriae.",
    penjelasan_en: "Corynebacterium diphtheriae."
  },
  87: {
    A: ["BTA", "Basil tahan asam", "Batang merah", "Bakteri batang merah", "Basil tahan asam", "Bakteri tahan asam", "AFB", "Mycobacterium", "Bakteri batang", "Basil"],
    B: ["Ziehl-Neelsen", "ZN", "Pewarnaan Ziehl-Neelsen", "LJ media", "Media LJ", "Lowenstein-Jensen", "BTA", "Tahan asam", "ZN", "LJ"],
    penjelasan: "Mycobacterium tuberculosis.",
    penjelasan_en: "Mycobacterium tuberculosis."
  },
  88: {
    A: ["Batang Gram positif", "Gram-positive rods", "Purple", "Chinese letter arrangement", "Huruf cina", "Bakteri batang", "Bakteri Gram positif", "Bakteri berwarna ungu", "Basil", "Rods", "Batang", "Tersusun seperti huruf cina", "Chinese letter", "V-shape", "L-shape", "Club-shaped"],
    B: ["Neisser stain", "Pewarnaan Neisser", "Metachromatic granules", "Granula metakromatik", "Neisser", "Granula", "C. diphtheriae", "Corynebacterium diphtheriae", "Difteri"],
    penjelasan: "Corynebacterium diphtheriae memiliki granula metakromatik yang terlihat dengan pewarnaan Neisser.",
    penjelasan_en: "Corynebacterium diphtheriae has metachromatic granules visible with Neisser stain."
  },
  89: {
    A: ["BTA", "Basil tahan asam", "Batang merah", "Bakteri batang merah", "Basil tahan asam", "Bakteri tahan asam", "AFB", "Mycobacterium", "Bakteri batang", "Basil"],
    B: ["Ziehl-Neelsen", "ZN", "Pewarnaan Ziehl-Neelsen", "LJ media", "Media LJ", "Lowenstein-Jensen", "BTA", "Tahan asam", "ZN", "LJ"],
    penjelasan: "Mycobacterium tuberculosis.",
    penjelasan_en: "Mycobacterium tuberculosis."
  },
  90: {
    A: ["Batang Gram positif", "Gram-positive rods", "Purple", "Chinese letter arrangement", "Huruf cina", "Bakteri batang", "Bakteri Gram positif", "Bakteri berwarna ungu", "Basil", "Rods", "Batang", "Tersusun seperti huruf cina", "Chinese letter", "V-shape", "L-shape", "Club-shaped"],
    B: ["Urease test", "Uji urease", "Cystinase test", "Uji sistinase", "Urease", "Sistinase", "C. diphtheriae", "Corynebacterium diphtheriae", "Difteri"],
    penjelasan: "Corynebacterium diphtheriae.",
    penjelasan_en: "Corynebacterium diphtheriae."
  },
  // Topik 10
  91: {
    A: ["Budding yeast cells", "Sel ragi bertunas", "Pseudohyphae", "Pseudohifa", "Ragi", "Yeast", "Sel ragi", "Bertunas", "Budding", "Hifa palsu", "Pseudohifa", "Candida"],
    B: ["Germ tube test", "Uji germ tube", "Carbohydrate assimilation", "Asimilasi karbohidrat", "Germ tube", "Tabung germ", "Asimilasi", "Fermentasi karbohidrat", "Candida albicans", "C. albicans"],
    penjelasan: "Candida albicans membentuk germ tube (tabung germ) dan memfermentasi karbohidrat.",
    penjelasan_en: "Candida albicans forms germ tubes and ferments carbohydrates."
  },
  92: {
    A: ["Septate hyphae", "Hifa bersekat", "Arthroconidia", "Artrokonidia", "Hifa", "Bersekat", "Artrokonidia", "Fragmen hifa", "Arthrospore", "Coccidioides", "Geotrichum"],
    B: ["Urease test", "Uji urease", "Sabouraud dextrose agar", "SDA", "Urease", "SDA", "Sabouraud", "Jamur", "Fungi"],
    penjelasan: "Dermatophytes (misalnya Trichophyton) memiliki hifa bersekat dan artrokonidia.",
    penjelasan_en: "Dermatophytes (e.g., Trichophyton) have septate hyphae and arthroconidia."
  },
  93: {
    A: ["Septate hyphae", "Hifa bersekat", "Microconidia", "Macroconidia", "Konidia", "Hifa", "Bersekat", "Mikrokonidia", "Makrokonidia", "Konidia", "Spora", "Dermatophytes", "Microsporum", "Trichophyton", "Epidermophyton"],
    B: ["Sabouraud dextrose agar", "SDA", "Lactophenol cotton blue stain", "LPCB", "SDA", "Sabouraud", "LPCB", "Pewarnaan", "Jamur", "Fungi"],
    penjelasan: "Dermatophytes.",
    penjelasan_en: "Dermatophytes."
  },
  94: {
    A: ["Broad, non-septate hyphae", "Hifa lebar tidak bersekat", "Sporangiophores", "Sporangium", "Hifa", "Tidak bersekat", "Lebar", "Sporangiofor", "Sporangium", "Rhizopus", "Mucor", "Zygomycetes"],
    B: ["Sabouraud dextrose agar", "SDA", "Lactophenol cotton blue stain", "LPCB", "SDA", "Sabouraud", "LPCB", "Pewarnaan", "Jamur", "Fungi"],
    penjelasan: "Mucor atau Rhizopus (Zygomycetes) memiliki hifa lebar tidak bersekat dan sporangium.",
    penjelasan_en: "Mucor or Rhizopus (Zygomycetes) have broad, non-septate hyphae and sporangia."
  },
  95: {
    A: ["Septate hyphae", "Hifa bersekat", "Microconidia", "Macroconidia", "Konidia", "Hifa", "Bersekat", "Mikrokonidia", "Makrokonidia", "Konidia", "Spora", "Dermatophytes", "Microsporum", "Trichophyton", "Epidermophyton"],
    B: ["Sabouraud dextrose agar", "SDA", "Lactophenol cotton blue stain", "LPCB", "SDA", "Sabouraud", "LPCB", "Pewarnaan", "Jamur", "Fungi"],
    penjelasan: "Dermatophytes.",
    penjelasan_en: "Dermatophytes."
  },
  // Topik 11
  96: {
    A: ["ELISA", "Enzyme-linked immunosorbent assay", "EIA", "Uji ELISA", "Immunoassay", "Positif", "Positive (yellow color)", "Warna kuning", "Reaktif", "Berwarna kuning", "Terjadi reaksi warna", "Absorbansi tinggi"],
    B: ["Western blot", "PCR", "Rapid test", "Immunofluorescence assay (IFA)", "Uji konfirmasi", "Western blot", "PCR", "Rapid test", "IFA", "Tes cepat", "Konfirmasi"],
    penjelasan: "ELISA mendeteksi antigen atau antibodi dengan reaksi warna (enzim-substrat). Western blot atau PCR digunakan untuk konfirmasi.",
    penjelasan_en: "ELISA detects antigens or antibodies with a color reaction (enzyme-substrate). Western blot or PCR is used for confirmation."
  },
  97: {
    A: ["Real-time PCR", "qPCR", "Quantitative PCR", "PCR real-time", "PCR kuantitatif", "Positif", "Positive amplification", "Amplifikasi positif", "Kurva sigmoid", "Kurva S", "Terjadi amplifikasi", "Cq", "Ct value"],
    B: ["Cepat", "Faster", "Sensitif", "More sensitive", "Kuantitatif", "Quantitative", "Dapat mendeteksi viral load rendah", "Waktu lebih singkat", "TAT cepat", "Sensitivitas tinggi", "Spesifisitas tinggi"],
    penjelasan: "qPCR mengkuantifikasi DNA/RNA virus secara real-time, lebih cepat dan sensitif daripada kultur virus.",
    penjelasan_en: "qPCR quantifies viral DNA/RNA in real-time, faster and more sensitive than viral culture."
  },
  98: {
    A: ["ELISA", "Enzyme-linked immunosorbent assay", "EIA", "Uji ELISA", "Immunoassay", "Positif", "Positive (yellow color)", "Warna kuning", "Reaktif", "Berwarna kuning", "Terjadi reaksi warna", "Absorbansi tinggi"],
    B: ["HBsAg", "Anti-HBs", "HBeAg", "Anti-HBe", "Anti-HBc", "Penanda hepatitis B", "Marker HBV", "Hepatitis B", "HBV"],
    penjelasan: "HBsAg adalah penanda infeksi hepatitis B aktif.",
    penjelasan_en: "HBsAg is a marker of active hepatitis B infection."
  },
  99: {
    A: ["Real-time PCR", "qPCR", "Quantitative PCR", "PCR real-time", "PCR kuantitatif", "Positif", "Positive amplification", "Amplifikasi positif", "Kurva sigmoid", "Kurva S", "Terjadi amplifikasi", "Cq", "Ct value"],
    B: ["Cepat", "Faster", "Sensitif", "More sensitive", "Kuantitatif", "Quantitative", "Dapat mendeteksi viral load rendah", "Waktu lebih singkat", "TAT cepat", "Sensitivitas tinggi", "Spesifisitas tinggi"],
    penjelasan: "qPCR.",
    penjelasan_en: "qPCR."
  },
  100: {
    A: ["ELISA", "Enzyme-linked immunosorbent assay", "EIA", "Uji ELISA", "Immunoassay", "Positif", "Positive (yellow color)", "Warna kuning", "Reaktif", "Berwarna kuning", "Terjadi reaksi warna", "Absorbansi tinggi"],
    B: ["Western blot", "PCR", "Neutralization test", "Hemagglutination inhibition", "Uji netralisasi", "HI test", "Western blot", "PCR", "Konfirmasi", "Uji konfirmasi"],
    penjelasan: "Western blot atau PCR digunakan untuk konfirmasi.",
    penjelasan_en: "Western blot or PCR is used for confirmation."
  },
  // Topik 12
  101: {
    A: ["ELISA", "Enzyme-linked immunosorbent assay", "EIA", "Uji ELISA", "Immunoassay", "Positif", "Positive (yellow color)", "Warna kuning", "Reaktif", "Berwarna kuning", "Terjadi reaksi warna", "Absorbansi tinggi"],
    B: ["Western blot", "PCR", "Rapid test", "IFA", "Uji konfirmasi", "Western blot", "PCR", "Rapid test", "Tes cepat", "Konfirmasi"],
    penjelasan: "ELISA.",
    penjelasan_en: "ELISA."
  },
  102: {
    A: ["Real-time PCR", "qPCR", "Quantitative PCR", "PCR real-time", "PCR kuantitatif", "Positif", "Positive amplification", "Amplifikasi positif", "Kurva sigmoid", "Kurva S", "Terjadi amplifikasi", "Cq", "Ct value"],
    B: ["Cepat", "Faster", "Sensitif", "More sensitive", "Kuantitatif", "Quantitative", "Dapat mendeteksi viral load rendah", "Waktu lebih singkat", "TAT cepat", "Sensitivitas tinggi", "Spesifisitas tinggi"],
    penjelasan: "qPCR.",
    penjelasan_en: "qPCR."
  },
  103: {
    A: ["ELISA", "Enzyme-linked immunosorbent assay", "EIA", "Uji ELISA", "Immunoassay", "Positif", "Positive (yellow color)", "Warna kuning", "Reaktif", "Berwarna kuning", "Terjadi reaksi warna", "Absorbansi tinggi"],
    B: ["HBsAg", "Anti-HBs", "HBeAg", "Anti-HBe", "Anti-HBc", "Penanda hepatitis B", "Marker HBV", "Hepatitis B", "HBV"],
    penjelasan: "HBsAg.",
    penjelasan_en: "HBsAg."
  },
  104: {
    A: ["Real-time PCR", "qPCR", "Quantitative PCR", "PCR real-time", "PCR kuantitatif", "Positif", "Positive amplification", "Amplifikasi positif", "Kurva sigmoid", "Kurva S", "Terjadi amplifikasi", "Cq", "Ct value"],
    B: ["Cepat", "Faster", "Sensitif", "More sensitive", "Kuantitatif", "Quantitative", "Dapat mendeteksi viral load rendah", "Waktu lebih singkat", "TAT cepat", "Sensitivitas tinggi", "Spesifisitas tinggi"],
    penjelasan: "qPCR.",
    penjelasan_en: "qPCR."
  },
  105: {
    A: ["ELISA", "Enzyme-linked immunosorbent assay", "EIA", "Uji ELISA", "Immunoassay", "Positif", "Positive (yellow color)", "Warna kuning", "Reaktif", "Berwarna kuning", "Terjadi reaksi warna", "Absorbansi tinggi"],
    B: ["Western blot", "PCR", "Neutralization test", "Hemagglutination inhibition", "Uji netralisasi", "HI test", "Western blot", "PCR", "Konfirmasi", "Uji konfirmasi"],
    penjelasan: "Western blot atau PCR.",
    penjelasan_en: "Western blot or PCR."
  },
  // Topik 13
  106: {
    A: ["Kultur darah", "Blood culture", "Prokalsitonin", "Procalcitonin test", "Uji prokalsitonin", "Positif", "Positive (two lines)", "Dua garis", "Reaktif", "Terjadi reaksi", "Sepsis", "Bakteremia"],
    B: ["CRP", "C-reactive protein", "Laktat", "Lactate", "Hitung leukosit", "WBC count", "SIRS criteria", "Kriteria SIRS", "Penanda inflamasi", "Marker inflamasi", "CRP", "Laktat", "Leukosit"],
    penjelasan: "Prokalsitonin meningkat pada sepsis bakteri. CRP, laktat, dan hitung leukosit juga digunakan sebagai penanda inflamasi.",
    penjelasan_en: "Procalcitonin is elevated in bacterial sepsis. CRP, lactate, and WBC count are also used as inflammatory markers."
  },
  107: {
    A: ["Kultur darah", "Blood culture", "Prokalsitonin", "Procalcitonin test", "Uji prokalsitonin", "Positif", "Positive (two lines)", "Dua garis", "Reaktif", "Terjadi reaksi", "Sepsis", "Bakteremia"],
    B: ["Penggunaan antibiotik", "Antibiotic use", "Waktu sampling", "Sample timing", "Kontaminasi", "Contamination", "Status imun pasien", "Patient's immune status", "Faktor yang mempengaruhi", "Antibiotik", "Waktu", "Kontaminasi"],
    penjelasan: "Antibiotik dapat menurunkan sensitivitas kultur; waktu sampling mempengaruhi hasil.",
    penjelasan_en: "Antibiotics can reduce culture sensitivity; sampling time affects results."
  },
  108: {
    A: ["Kultur darah", "Blood culture", "Prokalsitonin", "Procalcitonin test", "Uji prokalsitonin", "Positif", "Positive (two lines)", "Dua garis", "Reaktif", "Terjadi reaksi", "Sepsis", "Bakteremia"],
    B: ["Broad-spectrum antibiotics", "Antibiotik spektrum luas", "Meropenem", "Piperacillin-tazobactam", "Vancomycin", "Meropenem", "Piperacillin-tazobactam", "Vankomisin", "Antibiotik empiris", "Terapi empiris"],
    penjelasan: "Terapi empiris sepsis biasanya menggunakan antibiotik spektrum luas (misalnya meropenem, piperacillin-tazobactam, atau vancomycin).",
    penjelasan_en: "Empirical sepsis therapy typically uses broad-spectrum antibiotics (e.g., meropenem, piperacillin-tazobactam, or vancomycin)."
  },
  109: {
    A: ["Kultur darah", "Blood culture", "Prokalsitonin", "Procalcitonin test", "Uji prokalsitonin", "Positif", "Positive (two lines)", "Dua garis", "Reaktif", "Terjadi reaksi", "Sepsis", "Bakteremia"],
    B: ["Septic shock", "Syok septik", "Multiple organ failure", "MODS", "Kegagalan multi organ", "ARDS", "DIC", "Disseminated intravascular coagulation", "Komplikasi sepsis", "Syok", "MODS", "ARDS", "DIC"],
    penjelasan: "Sepsis dapat menyebabkan syok septik, kegagalan multi organ (MODS), ARDS, dan DIC.",
    penjelasan_en: "Sepsis can cause septic shock, multiple organ failure (MODS), ARDS, and DIC."
  },
  110: {
    A: ["Kultur darah", "Blood culture", "Prokalsitonin", "Procalcitonin test", "Uji prokalsitonin", "Positif", "Positive (two lines)", "Dua garis", "Reaktif", "Terjadi reaksi", "Sepsis", "Bakteremia"],
    B: ["Gram stain", "Pewarnaan Gram", "PCR", "MALDI-TOF", "Biochemical tests", "Uji biokimia", "Serology", "Serologi", "Identifikasi agen", "Kultur", "PCR", "MALDI-TOF", "Gram stain"],
    penjelasan: "Identifikasi agen sepsis dapat dilakukan dengan Gram stain, PCR, MALDI-TOF, atau uji biokimia.",
    penjelasan_en: "Identification of sepsis agents can be done with Gram stain, PCR, MALDI-TOF, or biochemical tests."
  }
};

console.log("Kamus Mikrobiologi loaded:", Object.keys(KAMUS).length, "entri");