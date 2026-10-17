// ============================================
// QUESTIONS - LATIHAN SOAL PRAKTIKUM MIKROBIOLOGI
// ============================================

const QUESTIONS = [
  {
    id: 1,
    topik: "Biosafety dan Pengenalan Alat",
    kategori: "Biosafety",
    kasus_id: "Seorang petugas laboratorium akan menangani spesimen CSF dari pasien dengan dugaan meningitis meningokokus.",
    kasus_en: "A laboratory worker will handle a CSF specimen from a patient with suspected meningococcal meningitis.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 Alat Pelindung Diri (APD) yang harus digunakan!", teks_en: "State 2 Personal Protective Equipment (PPE) that should be used!" },
      { label: "B", teks_id: "Sebutkan cara transmisi yang relevan pada paparan laboratorium!", teks_en: "State the relevant transmission route in laboratory exposure!" }
    ]
  },
  {
    id: 2,
    topik: "Biosafety dan Pengenalan Alat",
    kategori: "Biosafety",
    kasus_id: "Anda akan mensterilkan alat-alat laboratorium yang terbuat dari kaca dan tahan panas.",
    kasus_en: "You are going to sterilize laboratory instruments made of glass and heat-resistant.",
    pertanyaan: [
      { label: "A", teks_id: "Apa alat yang digunakan untuk melakukan sterilisasi alat laboratorium yang tahan panas?", teks_en: "What equipment is used to sterilize heat-resistant laboratory instruments?" },
      { label: "B", teks_id: "Sebutkan suhu dan durasi sterilisasi dengan menggunakan alat pada soal A!", teks_en: "State the temperature and duration used for sterilization with the equipment mentioned in question A!" }
    ]
  },
  {
    id: 3,
    topik: "Biosafety dan Pengenalan Alat",
    kategori: "Biosafety",
    kasus_id: "Anda mengamati preparat bakteri yang telah diwarnai dengan mikroskop.",
    kasus_en: "You are observing a stained bacterial preparation under a microscope.",
    pertanyaan: [
      { label: "A", teks_id: "Lensa objektif manakah yang digunakan untuk mengamati morfologi bakteri secara optimal?", teks_en: "Which objective lens should be used to optimally observe bacterial morphology?" },
      { label: "B", teks_id: "Bagian apa pada mikroskop yang berfungsi mengarahkan cahaya ke preparat?", teks_en: "Which part of the microscope functions to direct light onto the specimen?" }
    ]
  },
  {
    id: 4,
    topik: "Biosafety dan Pengenalan Alat",
    kategori: "Biosafety",
    kasus_id: "Sebelum melakukan praktikum, Anda diminta mencuci tangan.",
    kasus_en: "Before starting the practicum, you are asked to wash your hands.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 prosedur standar biosafety yang harus dilakukan sebelum dan sesudah bekerja di laboratorium mikrobiologi!", teks_en: "State 2 standard biosafety procedures that must be performed before and after working in a microbiology laboratory!" },
      { label: "B", teks_id: "Sebutkan cara transmisi yang paling mungkin terjadi jika prosedur tersebut tidak dilakukan!", teks_en: "State the most likely transmission route if these procedures are not followed!" }
    ]
  },
  {
    id: 5,
    topik: "Biosafety dan Pengenalan Alat",
    kategori: "Biosafety",
    kasus_id: "Anda menemukan tumpahan biakan bakteri di meja kerja.",
    kasus_en: "You find a bacterial culture spill on the workbench.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan langkah pertama yang harus dilakukan untuk dekontaminasi area tersebut!", teks_en: "State the first step that must be taken to decontaminate the area!" },
      { label: "B", teks_id: "Sebutkan satu bahan desinfektan yang tepat untuk kasus tersebut!", teks_en: "Name one appropriate disinfectant for this case!" }
    ]
  },
  {
    id: 6,
    topik: "Biosafety dan Pengenalan Alat",
    kategori: "Biosafety",
    kasus_id: "Anda akan melakukan pewarnaan Gram pada spesimen klinis.",
    kasus_en: "You will perform Gram staining on a clinical specimen.",
    pertanyaan: [
      { label: "A", teks_id: "Apa alat yang digunakan untuk mensterilkan ose (loop) secara cepat sebelum mengambil koloni bakteri?", teks_en: "What equipment is used to rapidly sterilize the loop before taking bacterial colonies?" },
      { label: "B", teks_id: "Sebutkan suhu dan durasi sterilisasi dengan menggunakan alat pada soal A!", teks_en: "State the temperature and duration used for sterilization with the equipment mentioned in question A!" }
    ]
  },
  {
    id: 7,
    topik: "Biosafety dan Pengenalan Alat",
    kategori: "Biosafety",
    kasus_id: "Seorang petugas laboratorium akan menangani spesimen sputum dari pasien dengan dugaan Tuberkulosis.",
    kasus_en: "A laboratory worker will handle a sputum specimen from a patient with suspected Tuberculosis.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 APD yang wajib digunakan!", teks_en: "State 2 PPE that must be used!" },
      { label: "B", teks_id: "Sebutkan cara transmisi yang relevan pada paparan laboratorium tersebut!", teks_en: "State the relevant transmission route in laboratory exposure!" }
    ]
  },
  {
    id: 8,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Seorang pasien datang dengan keluhan benjolan kemerahan yang nyeri dan mengeluarkan pus pada kulit. Spesimen pus dikirim ke laboratorium untuk pemeriksaan mikroskopis. Pada pengamatan preparat pewarnaan Gram, terlihat bakteri berwarna ungu dan berbentuk bulat tersusun seperti anggur.",
    kasus_en: "A patient presents with a painful, erythematous skin swelling with purulent discharge. A pus specimen is sent to the laboratory for microscopic examination. On Gram-stained preparation observation, purple round bacteria arranged like grapes are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan morfologi dan susunan bakteri tersebut!", teks_en: "State the morphology and arrangement of the bacteria!" },
      { label: "B", teks_id: "Sebutkan genus bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial genus!" }
    ]
  },
  {
    id: 9,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Seorang pasien datang dengan keluhan batuk berbahak selama lebih dari tiga minggu, disertai demam dan keringat malam. Spesimen sputum diperiksa menggunakan pewarnaan Ziehl-Neelsen. Pada pemeriksaan mikroskopis terlihat batang berwarna merah di latar belakang biru.",
    kasus_en: "A patient presents with a productive cough lasting more than three weeks, accompanied by fever and night sweats. A sputum specimen is examined using Ziehl-Neelsen staining. Microscopic examination reveals red rods against a blue background.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama metode pewarnaan tersebut!", teks_en: "Name the staining method!" },
      { label: "B", teks_id: "Zat warna apa yang digunakan sebagai pewarna primer/utama pada metode tersebut?", teks_en: "What dye is used as the primary stain in this method?" }
    ]
  },
  {
    id: 10,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Seorang pasien dengan luka terbuka yang terinfeksi mengirim spesimen pus ke laboratorium. Pada pemeriksaan mikroskopis dengan pewarnaan spora, terlihat sel vegetatif berwarna merah dan spora berwarna hijau.",
    kasus_en: "A patient with an infected open wound sends a pus specimen to the laboratory. On microscopic examination with spore staining, red vegetative cells and green spores are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama metode pewarnaan yang digunakan!", teks_en: "Name the staining method used!" },
      { label: "B", teks_id: "Zat warna apa yang digunakan untuk mewarnai spora bakteri?", teks_en: "What dye is used to stain bacterial spores?" }
    ]
  },
  {
    id: 11,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Seorang peneliti ingin mengamati morfologi bakteri tanpa mewarnai selnya. Ia menggunakan metode pewarnaan negatif. Pada pengamatan, bakteri tidak terwarnai sedangkan latar belakangnya berwarna gelap.",
    kasus_en: "A researcher wants to observe bacterial morphology without staining the cells. He uses the negative staining method. On observation, bacteria are unstained while the background is dark.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 zat warna yang biasa digunakan untuk metode ini!", teks_en: "Name 2 dyes commonly used for this method!" },
      { label: "B", teks_id: "Apa tujuan utama dari pewarnaan negatif?", teks_en: "What is the main purpose of negative staining?" }
    ]
  },
  {
    id: 12,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Seorang pasien dengan infeksi saluran napas mengirim spesimen sputum. Pada pemeriksaan mikroskopis dengan pewarnaan metakromatik granula, terlihat granula berwarna biru kehitaman dan sel vegetatif berwarna kuning kecoklatan.",
    kasus_en: "A patient with a respiratory tract infection sends a sputum specimen. On microscopic examination with metachromatic granule staining, dark blue granules and yellowish-brown vegetative cells are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama metode pewarnaan ini!", teks_en: "Name this staining method!" },
      { label: "B", teks_id: "Sebutkan genus bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial genus!" }
    ]
  },
  {
    id: 13,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Anda membandingkan pewarnaan sederhana (simple staining) dan pewarnaan negatif.",
    kasus_en: "You compare simple staining and negative staining.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan perbedaan prinsip antara kedua metode tersebut!", teks_en: "State the difference in principle between the two methods!" },
      { label: "B", teks_id: "Sebutkan satu keunggulan pewarnaan negatif dibandingkan pewarnaan sederhana!", teks_en: "State one advantage of negative staining over simple staining!" }
    ]
  },
  {
    id: 14,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Pada pewarnaan Gram, terdapat langkah yang berfungsi untuk meningkatkan afinitas atau perbedaan antara sel bakteri yang satu dengan yang lain.",
    kasus_en: "In Gram staining, there is a step that functions to increase the affinity or difference between bacterial cells.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama langkah tersebut!", teks_en: "Name the step!" },
      { label: "B", teks_id: "Sebutkan reagen yang digunakan pada langkah tersebut!", teks_en: "State the reagent used in that step!" }
    ]
  },
  {
    id: 15,
    topik: "Mikroskop dan Pewarnaan",
    kategori: "Pewarnaan",
    kasus_id: "Seorang pasien dengan dugaan tuberkulosis mengirim spesimen sputum. Pada pemeriksaan mikroskopis dengan pewarnaan Ziehl-Neelsen, terlihat batang berwarna merah.",
    kasus_en: "A patient with suspected tuberculosis sends a sputum specimen. On microscopic examination with Ziehl-Neelsen staining, red rods are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 ciri morfologi bakteri tersebut!", teks_en: "State 2 morphological characteristics of the bacteria!" },
      { label: "B", teks_id: "Sebutkan genus bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial genus!" }
    ]
  },
  {
    id: 16,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Sterilisasi",
    kasus_id: "Anda memiliki media agar yang akan digunakan untuk menumbuhkan bakteri.",
    kasus_en: "You have an agar medium to be used for bacterial growth.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan metode sterilisasi yang paling tepat untuk media tersebut!", teks_en: "State the most appropriate sterilization method for this medium!" },
      { label: "B", teks_id: "Sebutkan suhu dan durasi sterilisasi yang digunakan!", teks_en: "State the temperature and duration of sterilization used!" }
    ]
  },
  {
    id: 17,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Sterilisasi",
    kasus_id: "Sebuah laboratorium menggunakan metode sterilisasi yang menggunakan uap air secara intermiten pada beberapa hari berturut-turut.",
    kasus_en: "A laboratory uses a sterilization method that uses intermittent steaming over several consecutive days.",
    pertanyaan: [
      { label: "A", teks_id: "Apa nama metode tersebut?", teks_en: "What is the name of the method?" },
      { label: "B", teks_id: "Sebutkan suhu, durasi pemanasan, dan jumlah hari yang digunakan!", teks_en: "State the temperature, heating duration, and number of days used!" }
    ]
  },
  {
    id: 18,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Desinfeksi",
    kasus_id: "Anda mendisinfeksi meja kerja menggunakan larutan sodium hipoklorit 1%.",
    kasus_en: "You disinfect the workbench using a 1% sodium hypochlorite solution.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah bahan tersebut termasuk antiseptik atau disinfektan?", teks_en: "Is the material an antiseptic or a disinfectant?" },
      { label: "B", teks_id: "Sebutkan satu mekanisme antimikroba utama bahan tersebut!", teks_en: "State one main antimicrobial mechanism of this material!" }
    ]
  },
  {
    id: 19,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Media Perbenihan",
    kasus_id: "Anda ingin menumbuhkan bakteri yang membutuhkan nutrisi tambahan berupa darah.",
    kasus_en: "You want to grow bacteria that require additional nutrients in the form of blood.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 contoh media perbenihan yang termasuk dalam kategori media diperkaya (enriched media)!", teks_en: "Name 2 examples of culture media that are classified as enriched media!" },
      { label: "B", teks_id: "Apa fungsi utama penambahan darah pada media tersebut?", teks_en: "What is the main function of adding blood to the medium?" }
    ]
  },
  {
    id: 20,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Media Perbenihan",
    kasus_id: "Berdasarkan komposisinya, media yang mengandung ekstrak daging dan pepton tanpa tambahan zat khusus disebut media apa?",
    kasus_en: "Based on its composition, a medium containing meat extract and peptone without special additives is called what?",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama kategori media tersebut!", teks_en: "Name the category of the medium!" },
      { label: "B", teks_id: "Sebutkan satu contoh media yang termasuk dalam kategori ini!", teks_en: "Name one example of a medium in this category!" }
    ]
  },
  {
    id: 21,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Media Perbenihan",
    kasus_id: "Anda ingin menumbuhkan bakteri anaerob.",
    kasus_en: "You want to grow anaerobic bacteria.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 jenis media yang digunakan untuk kebutuhan ini!", teks_en: "Name 2 types of media used for this purpose!" },
      { label: "B", teks_id: "Sebutkan satu prinsip dasar dari media tersebut!", teks_en: "State one basic principle of the medium!" }
    ]
  },
  {
    id: 22,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Media Perbenihan",
    kasus_id: "Seorang pasien dengan infeksi kulit mengirim spesimen pus. Kultur pada media Blood Agar menunjukkan pertumbuhan bakteri.",
    kasus_en: "A patient with a skin infection sends a pus specimen. Culture on Blood Agar shows bacterial growth.",
    pertanyaan: [
      { label: "A", teks_id: "Berdasarkan fungsinya, Blood Agar termasuk media apa?", teks_en: "Based on its function, what type of medium is Blood Agar?" },
      { label: "B", teks_id: "Informasi tambahan apa yang dapat diperoleh dari pertumbuhan pada media tersebut?", teks_en: "What additional information can be obtained from growth on this medium?" }
    ]
  },
  {
    id: 23,
    topik: "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
    kategori: "Sterilisasi",
    kasus_id: "Anda mensterilkan jarum inokulum (ose) dengan cara memijarkannya di atas api bunsen.",
    kasus_en: "You sterilize an inoculating loop by flaming it over a bunsen burner.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama metode sterilisasi ini!", teks_en: "Name this sterilization method!" },
      { label: "B", teks_id: "Sebutkan satu contoh alat lain yang dapat disterilkan dengan metode ini!", teks_en: "Name one other example of equipment that can be sterilized using this method!" }
    ]
  },
  {
    id: 24,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare cair akut mengirim spesimen feses. Kultur pada media TCBS menunjukkan koloni berwarna kuning.",
    kasus_en: "A patient with acute watery diarrhea sends a stool specimen. Culture on TCBS medium shows yellow colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah bakteri tersebut memfermentasi sukrosa?", teks_en: "Does the bacterium ferment sucrose?" },
      { label: "B", teks_id: "Sebutkan satu spesies bakteri yang mungkin!", teks_en: "Name one possible bacterial species!" }
    ]
  },
  {
    id: 25,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare mengirim spesimen feses. Kultur pada media TCBS menunjukkan koloni berwarna hijau.",
    kasus_en: "A patient with diarrhea sends a stool specimen. Culture on TCBS medium shows green colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah bakteri tersebut memfermentasi sukrosa?", teks_en: "Does the bacterium ferment sucrose?" },
      { label: "B", teks_id: "Sebutkan satu spesies bakteri yang dapat tumbuh tanpa mengubah warna medium tersebut!", teks_en: "Name one bacterial species that can grow without changing the color of the medium!" }
    ]
  },
  {
    id: 26,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare berat mengirim spesimen feses. Kultur pada media TCBS menunjukkan koloni berwarna kuning. Pemeriksaan mikroskopis menunjukkan bakteri Gram negatif berbentuk batang.",
    kasus_en: "A patient with severe diarrhea sends a stool specimen. Culture on TCBS medium shows yellow colonies. Microscopic examination shows Gram-negative rods.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial species!" },
      { label: "B", teks_id: "Sebutkan satu karakteristik penting yang membedakannya dari Vibrio parahaemolyticus!", teks_en: "State one important characteristic that distinguishes it from Vibrio parahaemolyticus!" }
    ]
  },
  {
    id: 27,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi luka bakar mengirim spesimen swab luka. Kultur menunjukkan bakteri Gram negatif batang. Sebutkan 2 karakteristik biokimia utama dari Pseudomonas aeruginosa yang membedakannya dari bakteri Enterobacteriaceae.",
    kasus_en: "A patient with a burn wound infection sends a wound swab specimen. Culture shows Gram-negative rods. State 2 main biochemical characteristics of Pseudomonas aeruginosa that distinguish it from Enterobacteriaceae.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan karakteristik pertama!", teks_en: "State the first characteristic!" },
      { label: "B", teks_id: "Sebutkan karakteristik kedua!", teks_en: "State the second characteristic!" }
    ]
  },
  {
    id: 28,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien di ICU dengan infeksi nosokomial mengirim spesimen sputum. Kultur menunjukkan bakteri Gram negatif berbentuk kokobasil.",
    kasus_en: "An ICU patient with a nosocomial infection sends a sputum specimen. Culture shows Gram-negative coccobacilli.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 karakteristik pertumbuhannya pada media MacConkey agar!", teks_en: "State 2 characteristics of its growth on MacConkey agar!" },
      { label: "B", teks_id: "Sebutkan satu karakteristik penting yang membedakannya dari Pseudomonas aeruginosa!", teks_en: "State one important characteristic that distinguishes it from Pseudomonas aeruginosa!" }
    ]
  },
  {
    id: 29,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi luka mengirim spesimen swab. Kultur pada media Nutrient Agar menunjukkan pertumbuhan bakteri dengan pigmen hijau. Pemeriksaan mikroskopis menunjukkan bakteri Gram negatif batang.",
    kasus_en: "A patient with a wound infection sends a swab specimen. Culture on Nutrient Agar shows bacterial growth with a green pigment. Microscopic examination shows Gram-negative rods.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies bakteri tersebut!", teks_en: "Name the bacterial species!" },
      { label: "B", teks_id: "Sebutkan nama pigmen yang bertanggung jawab atas warna hijau tersebut!", teks_en: "Name the pigment responsible for the green color!" }
    ]
  },
  {
    id: 30,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare berat mengirim spesimen feses. Kultur pada media TCBS menunjukkan koloni kuning.",
    kasus_en: "A patient with severe diarrhea sends a stool specimen. Culture on TCBS medium shows yellow colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama media selektif yang digunakan!", teks_en: "Name the selective medium used!" },
      { label: "B", teks_id: "Jelaskan secara singkat prinsip kerja media tersebut!", teks_en: "Briefly explain the working principle of the medium!" }
    ]
  },
  {
    id: 31,
    topik: "Vibrio, Pseudomonas, Acinetobacter",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi luka bakar mengirim spesimen swab. Kultur menunjukkan bakteri Pseudomonas aeruginosa.",
    kasus_en: "A patient with a burn wound infection sends a swab specimen. Culture shows Pseudomonas aeruginosa.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan faktor virulensi pertama!", teks_en: "State the first virulence factor!" },
      { label: "B", teks_id: "Sebutkan faktor virulensi kedua!", teks_en: "State the second virulence factor!" }
    ]
  },
  {
    id: 32,
    topik: "Uji Kepekaan Antimikroba Difusi, Dilusi",
    kategori: "Uji Kepekaan",
    kasus_id: "Seorang pasien dengan infeksi kulit menjalani uji kepekaan antibiotik metode difusi. Terlihat zona hambat di sekitar cakram antibiotik.",
    kasus_en: "A patient with a skin infection undergoes disk diffusion antimicrobial susceptibility testing. A zone of inhibition is seen around the antibiotic disk.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan definisi dari zona hambat tersebut!", teks_en: "State the definition of the zone of inhibition!" },
      { label: "B", teks_id: "Sebutkan media yang digunakan untuk uji ini!", teks_en: "Name the medium used for this test!" }
    ]
  },
  {
    id: 33,
    topik: "Uji Kepekaan Antimikroba Difusi, Dilusi",
    kategori: "Uji Kepekaan",
    kasus_id: "Seorang pasien dengan infeksi saluran kemih menjalani uji kepekaan dengan metode dilusi. Terlihat tabung ke-4 jernih, sedangkan tabung ke-5 keruh.",
    kasus_en: "A patient with a urinary tract infection undergoes susceptibility testing using the dilution method. Tube 4 is clear, while tube 5 is turbid.",
    pertanyaan: [
      { label: "A", teks_id: "Berapa nilai KHM (Konsentrasi Hambat Minimal) pada kasus ini?", teks_en: "What is the MIC (Minimum Inhibitory Concentration) value in this case?" },
      { label: "B", teks_id: "Apa arti dari nilai KHM tersebut?", teks_en: "What is the meaning of the MIC value?" }
    ]
  },
  {
    id: 34,
    topik: "Uji Kepekaan Antimikroba Difusi, Dilusi",
    kategori: "Uji Kepekaan",
    kasus_id: "Seorang pasien dengan infeksi bakteri Gram negatif menjalani uji DDST (Double Disk Synergy Test). Terlihat zona hambat yang melebar ke arah cakram amoxicillin-clavulanate.",
    kasus_en: "A patient with a Gram-negative bacterial infection undergoes the DDST (Double Disk Synergy Test). The inhibition zone expands toward the amoxicillin-clavulanate disk.",
    pertanyaan: [
      { label: "A", teks_id: "Apa interpretasi dari hasil ini?", teks_en: "What is the interpretation of this result?" },
      { label: "B", teks_id: "Sebutkan satu gen yang mungkin menyandikan resistensi ini!", teks_en: "Name one gene that might encode this resistance!" }
    ]
  },
  {
    id: 35,
    topik: "Uji Kepekaan Antimikroba Difusi, Dilusi",
    kategori: "Uji Kepekaan",
    kasus_id: "Seorang pasien dengan infeksi Staphylococcus aureus menjalani uji kepekaan terhadap cefoxitin. Terbentuk zona hambat dengan diameter 15 mm.",
    kasus_en: "A patient with Staphylococcus aureus infection undergoes susceptibility testing against cefoxitin. A zone of inhibition of 15 mm is formed.",
    pertanyaan: [
      { label: "A", teks_id: "Berdasarkan tabel interpretasi, apakah isolat tersebut resisten atau sensitif?", teks_en: "Based on the interpretation table, is the isolate resistant or susceptible?" },
      { label: "B", teks_id: "Sebutkan istilah untuk fenotipe resistensi ini!", teks_en: "Name the term for this resistance phenotype!" }
    ]
  },
  {
    id: 36,
    topik: "Uji Kepekaan Antimikroba Difusi, Dilusi",
    kategori: "Uji Kepekaan",
    kasus_id: "Seorang pasien menjalani uji kepekaan antibiotik metode difusi. Sebutkan 2 faktor yang dapat mempengaruhi diameter zona hambat.",
    kasus_en: "A patient undergoes disk diffusion antimicrobial susceptibility testing. State 2 factors that can influence the diameter of the inhibition zone.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan faktor pertama!", teks_en: "State the first factor!" },
      { label: "B", teks_id: "Sebutkan faktor kedua!", teks_en: "State the second factor!" }
    ]
  },
  {
    id: 37,
    topik: "Uji Kepekaan Antimikroba Difusi, Dilusi",
    kategori: "Uji Kepekaan",
    kasus_id: "Anda membandingkan metode difusi dan metode dilusi dalam uji kepekaan antibiotik.",
    kasus_en: "You compare the diffusion method and the dilution method in antimicrobial susceptibility testing.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan perbedaan prinsip antara kedua metode tersebut!", teks_en: "State the difference in principle between the two methods!" },
      { label: "B", teks_id: "Sebutkan satu keunggulan metode dilusi dibandingkan metode difusi!", teks_en: "State one advantage of the dilution method over the diffusion method!" }
    ]
  },
  {
    id: 38,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien datang dengan keluhan benjolan kemerahan yang nyeri dan mengeluarkan pus pada kulit. Spesimen pus dikirim ke laboratorium. Pada pengamatan preparat pewarnaan Gram, terlihat bakteri berwarna ungu, berbentuk bulat, dan tersusun dalam gerombolan seperti anggur.",
    kasus_en: "A patient presents with a painful, erythematous skin swelling with purulent discharge. A pus specimen is sent to the laboratory. On Gram-stained preparation observation, purple round bacteria arranged in clusters like grapes are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan morfologi dan susunan bakteri tersebut!", teks_en: "State the morphology and arrangement of the bacteria!" },
      { label: "B", teks_id: "Sebutkan genus bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial genus!" }
    ]
  },
  {
    id: 39,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi kulit mengirim spesimen pus. Pada pemeriksaan laboratorium, dilakukan uji katalase pada bakteri Gram positif kokus. Terbentuk gelembung gas.",
    kasus_en: "A patient with a skin infection sends a pus specimen. In the laboratory examination, a catalase test is performed on Gram-positive cocci. Gas bubbles are formed.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus bakteri yang menunjukkan hasil tersebut!", teks_en: "Name the bacterial genus that shows this result!" },
      { label: "B", teks_id: "Sebutkan satu spesies dari genus tersebut yang sering menyebabkan infeksi kulit!", teks_en: "Name one species from this genus that often causes skin infections!" }
    ]
  },
  {
    id: 40,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi kulit mengirim spesimen pus. Pada uji koagulase, plasma terlihat mengumpal.",
    kasus_en: "A patient with a skin infection sends a pus specimen. In the coagulase test, the plasma appears clotted.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies Staphylococcus yang menunjukkan hasil ini!", teks_en: "Name the Staphylococcus species that shows this result!" },
      { label: "B", teks_id: "Sebutkan satu jenis infeksi yang sering disebabkan oleh spesies tersebut!", teks_en: "Name one type of infection often caused by this species!" }
    ]
  },
  {
    id: 41,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi kulit mengirim spesimen pus. Kultur pada media Mannitol Salt Agar (MSA) menunjukkan perubahan warna media menjadi kuning.",
    kasus_en: "A patient with a skin infection sends a pus specimen. Culture on Mannitol Salt Agar (MSA) shows a color change of the medium to yellow.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies Staphylococcus yang paling mungkin!", teks_en: "Name the most likely Staphylococcus species!" },
      { label: "B", teks_id: "Apa yang menyebabkan perubahan warna media tersebut?", teks_en: "What causes the color change of the medium?" }
    ]
  },
  {
    id: 42,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran kemih mengirim spesimen urin. Kultur menunjukkan bakteri Staphylococcus. Sebutkan uji yang digunakan untuk membedakan Staphylococcus epidermidis dengan Staphylococcus saprophyticus.",
    kasus_en: "A patient with a urinary tract infection sends a urine specimen. Culture shows Staphylococcus bacteria. Name the test used to differentiate Staphylococcus epidermidis from Staphylococcus saprophyticus.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama uji tersebut!", teks_en: "Name the test!" },
      { label: "B", teks_id: "Sebutkan hasil yang diharapkan untuk Staphylococcus saprophyticus!", teks_en: "State the expected result for Staphylococcus saprophyticus!" }
    ]
  },
  {
    id: 43,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi tenggorokan mengirim spesimen swab. Pada pewarnaan Gram, terlihat kokus Gram positif tersusun rantai. Uji katalase menunjukkan tidak ada gelembung gas.",
    kasus_en: "A patient with a throat infection sends a swab specimen. On Gram staining, Gram-positive cocci arranged in chains are seen. The catalase test shows no gas bubbles.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus bakteri tersebut!", teks_en: "Name the bacterial genus!" },
      { label: "B", teks_id: "Sebutkan satu spesies dari genus tersebut yang bersifat beta-hemolitik!", teks_en: "Name one species from this genus that is beta-hemolytic!" }
    ]
  },
  {
    id: 44,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi tenggorokan mengirim spesimen swab. Kultur pada media Blood Agar menunjukkan zona jernih di sekitar koloni Streptococcus.",
    kasus_en: "A patient with a throat infection sends a swab specimen. Culture on Blood Agar shows a clear zone around the Streptococcus colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan tipe hemolisis ini!", teks_en: "Name this type of hemolysis!" },
      { label: "B", teks_id: "Sebutkan satu spesies Streptococcus yang menunjukkan tipe hemolisis ini!", teks_en: "Name one Streptococcus species that shows this type of hemolysis!" }
    ]
  },
  {
    id: 45,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan lesi kulit mengirim spesimen biopsi. Pada pemeriksaan mikroskopis dengan pewarnaan Ziehl-Neelsen, terlihat batang berwarna merah di dalam makrofag.",
    kasus_en: "A patient with a skin lesion sends a biopsy specimen. On microscopic examination with Ziehl-Neelsen staining, red rods are seen inside macrophages.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial species!" },
      { label: "B", teks_id: "Sebutkan satu sampel lain yang dapat digunakan untuk diagnosis penyakit ini!", teks_en: "Name one other sample that can be used for diagnosis of this disease!" }
    ]
  },
  {
    id: 46,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan lesi kulit mengirim spesimen biopsi. Sebutkan media selektif yang digunakan untuk mengisolasi Mycobacterium leprae dari spesimen kulit.",
    kasus_en: "A patient with a skin lesion sends a biopsy specimen. Name the selective medium used to isolate Mycobacterium leprae from skin specimens.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama medianya!", teks_en: "Name the medium!" },
      { label: "B", teks_id: "Sebutkan satu karakteristik pertumbuhan M. leprae pada media tersebut!", teks_en: "State one growth characteristic of M. leprae on this medium!" }
    ]
  },
  {
    id: 47,
    topik: "Staphylococcus, Streptococcus, MRSA, M. leprae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi Staphylococcus aureus menjalani uji kepekaan. Isolat resisten terhadap cefoxitin.",
    kasus_en: "A patient with Staphylococcus aureus infection undergoes susceptibility testing. The isolate is resistant to cefoxitin.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan istilah untuk strain resisten ini!", teks_en: "Name the term for this resistant strain!" },
      { label: "B", teks_id: "Sebutkan gen yang menyandinya!", teks_en: "Name the gene that encodes it!" }
    ]
  },
  {
    id: 48,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pria berusia 24 tahun datang dengan keluhan nyeri saat berkemih dan keluar cairan purulen dari uretra. Spesimen sekret uretra dikirim ke laboratorium. Pada pewarnaan Gram, terlihat diplokokus Gram negatif di dalam leukosit polimorfonuklear.",
    kasus_en: "A 24-year-old man presents with dysuria and purulent urethral discharge. A urethral discharge specimen is sent to the laboratory. On Gram staining, Gram-negative diplococci are seen inside polymorphonuclear leukocytes.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial species!" },
      { label: "B", teks_id: "Sebutkan satu media selektif yang digunakan untuk mengisolasi bakteri tersebut!", teks_en: "Name one selective medium used to isolate this bacterium!" }
    ]
  },
  {
    id: 49,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Seorang wanita datang dengan keluhan keputihan. Spesimen vagina dikirim ke laboratorium. Pada pewarnaan Gram, terlihat sel epitel yang dipenuhi bakteri kecil.",
    kasus_en: "A woman presents with vaginal discharge. A vaginal specimen is sent to the laboratory. On Gram staining, epithelial cells filled with small bacteria are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama sel tersebut!", teks_en: "Name the cell!" },
      { label: "B", teks_id: "Sebutkan diagnosis yang paling mungkin!", teks_en: "Name the most likely diagnosis!" }
    ]
  },
  {
    id: 50,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Seorang wanita datang dengan keluhan keputihan. Spesimen vagina dikirim ke laboratorium untuk pemeriksaan skor Nugent. Sebutkan 3 morfotipe bakteri yang dinilai dalam skor Nugent untuk diagnosis bacterial vaginosis.",
    kasus_en: "A woman presents with vaginal discharge. A vaginal specimen is sent to the laboratory for Nugent score examination. Name 3 bacterial morphotypes assessed in the Nugent score for diagnosis of bacterial vaginosis.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan morfotipe pertama!", teks_en: "State the first morphotype!" },
      { label: "B", teks_id: "Sebutkan morfotipe kedua dan ketiga!", teks_en: "State the second and third morphotypes!" }
    ]
  },
  {
    id: 51,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi luka mengirim spesimen pus. Kultur anaerob menunjukkan bakteri Gram positif berbentuk batang dan membentuk spora.",
    kasus_en: "A patient with a wound infection sends a pus specimen. Anaerobic culture shows Gram-positive rods that form spores.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus bakteri tersebut!", teks_en: "Name the bacterial genus!" },
      { label: "B", teks_id: "Sebutkan satu spesies dari genus tersebut yang sering menyebabkan infeksi luka!", teks_en: "Name one species from this genus that often causes wound infections!" }
    ]
  },
  {
    id: 52,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Sebuah laboratorium akan menumbuhkan bakteri anaerob. Sebutkan 2 metode yang digunakan untuk menciptakan suasana anaerob dalam sungkup anaerob (anaerobic jar).",
    kasus_en: "A laboratory is going to grow anaerobic bacteria. Name 2 methods used to create an anaerobic atmosphere in an anaerobic jar.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan metode pertama!", teks_en: "State the first method!" },
      { label: "B", teks_id: "Sebutkan metode kedua!", teks_en: "State the second method!" }
    ]
  },
  {
    id: 53,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Sebuah laboratorium akan menumbuhkan bakteri anaerob. Sebutkan indikator biologis yang digunakan untuk mengonfirmasi suasana anaerob.",
    kasus_en: "A laboratory is going to grow anaerobic bacteria. Name the biological indicator used to confirm an anaerobic atmosphere.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama indikator tersebut!", teks_en: "Name the indicator!" },
      { label: "B", teks_id: "Bagaimana perubahan yang terjadi pada indikator tersebut jika kondisi anaerob tercapai?", teks_en: "What change occurs in the indicator if anaerobic conditions are achieved?" }
    ]
  },
  {
    id: 54,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Seorang wanita datang dengan keluhan keputihan. Spesimen vagina dikirim ke laboratorium. Pada skor Nugent, didapatkan total skor 8.",
    kasus_en: "A woman presents with vaginal discharge. A vaginal specimen is sent to the laboratory. The Nugent score is 8.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil tersebut!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu bakteri yang berperan dalam kondisi tersebut!", teks_en: "Name one bacterium involved in this condition!" }
    ]
  },
  {
    id: 55,
    topik: "Neisseria, Bacterial Vaginosis, Anaerob",
    kategori: "Bakteriologi",
    kasus_id: "Seorang wanita datang dengan keluhan keputihan. Spesimen vagina dikirim ke laboratorium. Pada pewarnaan Gram, terlihat bakteri Gram negatif melengkung seperti koma.",
    kasus_en: "A woman presents with vaginal discharge. A vaginal specimen is sent to the laboratory. On Gram staining, curved, comma-shaped Gram-negative bacteria are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial genus!" },
      { label: "B", teks_id: "Sebutkan diagnosis yang paling mungkin!", teks_en: "Name the most likely diagnosis!" }
    ]
  },
  {
    id: 56,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare mengirim spesimen feses. Kultur pada media MacConkey Agar menunjukkan koloni berwarna merah muda.",
    kasus_en: "A patient with diarrhea sends a stool specimen. Culture on MacConkey Agar shows pink colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah bakteri tersebut memfermentasi laktosa?", teks_en: "Does the bacterium ferment lactose?" },
      { label: "B", teks_id: "Sebutkan satu contoh spesiesnya!", teks_en: "Name one example species!" }
    ]
  },
  {
    id: 57,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare berdarah mengirim spesimen feses. Kultur pada media MacConkey Agar menunjukkan koloni tidak berwarna (pucat).",
    kasus_en: "A patient with bloody diarrhea sends a stool specimen. Culture on MacConkey Agar shows colorless (pale) colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah bakteri tersebut memfermentasi laktosa?", teks_en: "Does the bacterium ferment lactose?" },
      { label: "B", teks_id: "Sebutkan satu contoh genusnya!", teks_en: "Name one example genus!" }
    ]
  },
  {
    id: 58,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan demam tifoid mengirim spesimen darah. Kultur pada media TSI menunjukkan bagian slant berwarna merah dan butt berwarna kuning.",
    kasus_en: "A patient with typhoid fever sends a blood specimen. Culture on TSI medium shows a red slant and yellow butt.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil ini!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu genus bakteri yang mungkin!", teks_en: "Name one possible bacterial genus!" }
    ]
  },
  {
    id: 59,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare mengirim spesimen feses. Kultur pada media TSI menunjukkan gelembung gas dan bagian butt berwarna hitam.",
    kasus_en: "A patient with diarrhea sends a stool specimen. Culture on TSI medium shows gas bubbles and a black butt.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil ini!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu genus bakteri yang mungkin!", teks_en: "Name one possible bacterial genus!" }
    ]
  },
  {
    id: 60,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran kemih mengirim spesimen urin. Kultur menunjukkan bakteri Gram negatif. Uji IMViC dilakukan dan hasilnya: Indole (+), MR (+), VP (-), Citrate (-).",
    kasus_en: "A patient with a urinary tract infection sends a urine specimen. Culture shows Gram-negative bacteria. The IMViC test is performed with results: Indole (+), MR (+), VP (-), Citrate (-).",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial species!" },
      { label: "B", teks_id: "Sebutkan satu penyakit yang disebabkan oleh bakteri tersebut!", teks_en: "Name one disease caused by this bacterium!" }
    ]
  },
  {
    id: 61,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare mengirim spesimen feses. Kultur menunjukkan bakteri Gram negatif. Sebutkan perbedaan antara Salmonella dan Shigella berdasarkan uji fermentasi karbohidrat.",
    kasus_en: "A patient with diarrhea sends a stool specimen. Culture shows Gram-negative bacteria. State the difference between Salmonella and Shigella based on carbohydrate fermentation tests.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan satu karbohidrat yang difermentasi oleh Salmonella tetapi tidak oleh Shigella!", teks_en: "Name one carbohydrate fermented by Salmonella but not by Shigella!" },
      { label: "B", teks_id: "Sebutkan satu karbohidrat yang difermentasi oleh Shigella tetapi tidak oleh Salmonella!", teks_en: "Name one carbohydrate fermented by Shigella but not by Salmonella!" }
    ]
  },
  {
    id: 62,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare berdarah mengirim spesimen feses. Kultur pada media SS Agar menunjukkan koloni tidak berwarna dan bagian tengah berwarna hitam.",
    kasus_en: "A patient with bloody diarrhea sends a stool specimen. Culture on SS Agar shows colorless colonies with a black center.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil ini!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu genus bakteri yang mungkin!", teks_en: "Name one possible bacterial genus!" }
    ]
  },
  {
    id: 63,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan diare mengirim spesimen feses. Sebutkan media selektif untuk mengisolasi Salmonella dan Shigella.",
    kasus_en: "A patient with diarrhea sends a stool specimen. Name the selective medium for isolating Salmonella and Shigella.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama medianya!", teks_en: "Name the medium!" },
      { label: "B", teks_id: "Sebutkan satu komponen dalam media tersebut yang berfungsi sebagai indikator pH!", teks_en: "Name one component in the medium that functions as a pH indicator!" }
    ]
  },
  {
    id: 64,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi mengirim spesimen. Kultur pada media TSI menunjukkan seluruh tabung berwarna merah.",
    kasus_en: "A patient with an infection sends a specimen. Culture on TSI medium shows the entire tube is red.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil ini!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu genus bakteri yang mungkin!", teks_en: "Name one possible bacterial genus!" }
    ]
  },
  {
    id: 65,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran kemih mengirim spesimen urin. Kultur pada media Nutrient Agar menunjukkan pertumbuhan bakteri yang menyebar (swarming).",
    kasus_en: "A patient with a urinary tract infection sends a urine specimen. Culture on Nutrient Agar shows spreading growth (swarming).",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial genus!" },
      { label: "B", teks_id: "Sebutkan satu karakteristik biokimia yang khas dari genus tersebut!", teks_en: "State one characteristic biochemical feature of this genus!" }
    ]
  },
  {
    id: 66,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran kemih mengirim spesimen urin. Kultur menunjukkan bakteri Gram negatif. Sebutkan 2 uji biokimia yang digunakan untuk membedakan Proteus mirabilis dari Escherichia coli.",
    kasus_en: "A patient with a urinary tract infection sends a urine specimen. Culture shows Gram-negative bacteria. Name 2 biochemical tests used to differentiate Proteus mirabilis from Escherichia coli.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan uji pertama!", teks_en: "State the first test!" },
      { label: "B", teks_id: "Sebutkan uji kedua!", teks_en: "State the second test!" }
    ]
  },
  {
    id: 67,
    topik: "Enterobacterales (LF dan NLF)",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi mengirim spesimen. Kultur menunjukkan bakteri Gram negatif. Anda melakukan uji oksidase pada bakteri Enterobacteriaceae.",
    kasus_en: "A patient with an infection sends a specimen. Culture shows Gram-negative bacteria. You perform an oxidase test on Enterobacteriaceae.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan hasil yang diharapkan!", teks_en: "State the expected result!" },
      { label: "B", teks_id: "Sebutkan satu genus Enterobacteriaceae yang merupakan pengecualian (oksidase positif)!", teks_en: "Name one genus of Enterobacteriaceae that is an exception (oxidase positive)!" }
    ]
  },
  {
    id: 68,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang laki-laki berusia 48 tahun datang dengan keluhan batuk berbahak selama lebih dari tiga minggu, disertai demam terutama pada malam hari, keringat malam, penurunan nafsu makan, dan penurunan berat badan. Spesimen sputum diperiksa menggunakan pewarnaan Ziehl-Neelsen. Pada pemeriksaan mikroskopis ditemukan 7 batang tahan asam berwarna merah dalam 100 lapang pandang.",
    kasus_en: "A 48-year-old man presents with a productive cough lasting for more than three weeks, accompanied by predominantly nocturnal fever, night sweats, decreased appetite, and weight loss. A sputum specimen is examined using Ziehl-Neelsen staining. Microscopic examination reveals 7 red acid-fast bacilli in 100 microscopic fields.",
    pertanyaan: [
      { label: "A", teks_id: "Bagaimana hasil pembacaan pemeriksaan tersebut menurut skala IUATLD?", teks_en: "How should this result be reported according to the IUATLD scale?" },
      { label: "B", teks_id: "Zat warna apa yang digunakan sebagai pewarna primer/utama pada metode Ziehl-Neelsen?", teks_en: "What dye is used as the primary stain in the Ziehl-Neelsen staining method?" }
    ]
  },
  {
    id: 69,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan dugaan tuberkulosis mengirim spesimen sputum. Pada pemeriksaan mikroskopis dengan pewarnaan Gram, terlihat banyak sel epitel skuamosa dan sedikit leukosit PMN.",
    kasus_en: "A patient with suspected tuberculosis sends a sputum specimen. On microscopic examination with Gram staining, many squamous epithelial cells and few PMN leukocytes are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah spesimen ini berkualitas baik?", teks_en: "Is this specimen of good quality?" },
      { label: "B", teks_id: "Sebutkan alasannya!", teks_en: "State the reason!" }
    ]
  },
  {
    id: 70,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan dugaan tuberkulosis mengirim spesimen sputum. Sebutkan media yang digunakan untuk kultur Mycobacterium tuberculosis.",
    kasus_en: "A patient with suspected tuberculosis sends a sputum specimen. Name the medium used for culture of Mycobacterium tuberculosis.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama medianya!", teks_en: "Name the medium!" },
      { label: "B", teks_id: "Sebutkan satu karakteristik pertumbuhan M. tuberculosis pada media tersebut!", teks_en: "State one growth characteristic of M. tuberculosis on this medium!" }
    ]
  },
  {
    id: 71,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran napas mengirim spesimen swab tenggorokan. Pada pewarnaan Neisser, terlihat batang Gram positif dengan granula berwarna biru kehitaman dan susunan seperti huruf Cina.",
    kasus_en: "A patient with a respiratory tract infection sends a throat swab specimen. On Neisser staining, Gram-positive rods with dark blue granules and Chinese letter arrangement are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan spesies bakteri yang paling mungkin!", teks_en: "Name the most likely bacterial species!" },
      { label: "B", teks_id: "Sebutkan media yang digunakan untuk membiakkan bakteri tersebut!", teks_en: "Name the medium used to culture this bacterium!" }
    ]
  },
  {
    id: 72,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan dugaan difteri mengirim spesimen swab tenggorokan. Kultur menunjukkan Corynebacterium diphtheriae. Sebutkan uji yang digunakan untuk menentukan apakah bakteri tersebut memproduksi toksin.",
    kasus_en: "A patient with suspected diphtheria sends a throat swab specimen. Culture shows Corynebacterium diphtheriae. Name the test used to determine whether the bacterium produces toxin.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama uji tersebut!", teks_en: "Name the test!" },
      { label: "B", teks_id: "Jelaskan secara singkat prinsip uji tersebut!", teks_en: "Briefly explain the principle of the test!" }
    ]
  },
  {
    id: 73,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan dugaan tuberkulosis mengirim spesimen sputum. Kultur dilakukan pada media Lowenstein-Jensen (LJ) dan MGIT/7H9. Sebutkan perbedaan antara kedua media tersebut.",
    kasus_en: "A patient with suspected tuberculosis sends a sputum specimen. Culture is performed on Lowenstein-Jensen (LJ) and MGIT/7H9 media. State the difference between the two media.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan perbedaan jenis mediumnya!", teks_en: "State the difference in medium type!" },
      { label: "B", teks_id: "Sebutkan perbedaan cara deteksi pertumbuhannya!", teks_en: "State the difference in growth detection method!" }
    ]
  },
  {
    id: 74,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran napas mengirim spesimen swab tenggorokan. Kultur menunjukkan Corynebacterium diphtheriae.",
    kasus_en: "A patient with a respiratory tract infection sends a throat swab specimen. Culture shows Corynebacterium diphtheriae.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan satu media selektif yang digunakan untuk mengisolasi bakteri tersebut!", teks_en: "Name one selective medium used to isolate this bacterium!" },
      { label: "B", teks_id: "Sebutkan satu karakteristik morfologi bakteri tersebut pada pewarnaan Gram!", teks_en: "State one morphological characteristic of this bacterium on Gram staining!" }
    ]
  },
  {
    id: 75,
    topik: "Mycobacterium tuberculosis, C. diphtheriae",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan dugaan tuberkulosis mengirim spesimen sputum. Pada pemeriksaan mikroskopis dengan pewarnaan Ziehl-Neelsen, terlihat batang berwarna merah.",
    kasus_en: "A patient with suspected tuberculosis sends a sputum specimen. On microscopic examination with Ziehl-Neelsen staining, red rods are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama metode pewarnaan tersebut!", teks_en: "Name the staining method!" },
      { label: "B", teks_id: "Sebutkan reagen utama yang digunakan pada metode tersebut!", teks_en: "State the main reagent used in the method!" }
    ]
  },
  {
    id: 76,
    topik: "Mycologi Kedokteran",
    kategori: "Mikologi",
    kasus_id: "Seorang pasien immunocompromised datang dengan keluhan demam dan lesi kulit. Spesimen biopsi jaringan diperiksa dengan pewarnaan Gomori's Methenamine Silver (GMS). Terlihat sel ragi bulat dengan dinding sel yang jelas.",
    kasus_en: "An immunocompromised patient presents with fever and skin lesions. A tissue biopsy specimen is examined with Gomori's Methenamine Silver (GMS) staining. Round yeast cells with clear cell walls are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus jamur yang paling mungkin!", teks_en: "Name the most likely fungal genus!" },
      { label: "B", teks_id: "Sebutkan satu faktor virulensi utama jamur tersebut!", teks_en: "Name one main virulence factor of the fungus!" }
    ]
  },
  {
    id: 77,
    topik: "Mycologi Kedokteran",
    kategori: "Mikologi",
    kasus_id: "Seorang pasien dengan imunokompromais datang dengan keluhan sakit kepala yang berlangsung perlahan selama beberapa minggu. Pemeriksaan cairan serebrospinal dilakukan dengan pewarnaan India Ink. Terlihat sel bulat dengan halo yang terang.",
    kasus_en: "An immunocompromised patient presents with a gradually progressive headache lasting for several weeks. Cerebrospinal fluid examination is performed with India Ink staining. Round cells with a bright halo are seen.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus jamur yang paling mungkin!", teks_en: "Name the most likely fungal genus!" },
      { label: "B", teks_id: "Sebutkan faktor virulensi utama yang tampak pada pemeriksaan mikroskopis!", teks_en: "Name the major virulence factor observed on microscopic examination!" }
    ]
  },
  {
    id: 78,
    topik: "Mycologi Kedokteran",
    kategori: "Mikologi",
    kasus_id: "Seorang pasien dengan lesi kulit verrukosa yang berkembang perlahan dan riwayat sering bekerja di area berhutan mengirim spesimen biopsi. Pemeriksaan histopatologi dengan pewarnaan GMS menunjukkan gambaran mikroskopis.",
    kasus_en: "A patient with slowly progressive verrucous skin lesions and a history of frequent work in wooded areas sends a biopsy specimen. Histopathological examination with GMS staining shows microscopic findings.",
    pertanyaan: [
      { label: "A", teks_id: "Organisme apakah yang paling mungkin menyebabkan infeksi pada pasien tersebut?", teks_en: "What is the most likely causative organism?" },
      { label: "B", teks_id: "Sebutkan 2 gambaran morfologi khas organisme tersebut pada jaringan!", teks_en: "Mention two characteristic morphological features of this organism in tissue!" }
    ]
  },
  {
    id: 79,
    topik: "Mycologi Kedokteran",
    kategori: "Mikologi",
    kasus_id: "Seorang pasien immunocompromised datang dengan keluhan demam dan sesak napas. Spesimen cairan bronchoalveolar diperiksa dengan pewarnaan Gomori's Methenamine Silver (GMS).",
    kasus_en: "An immunocompromised patient presents with fever and shortness of breath. A bronchoalveolar fluid specimen is examined with Gomori's Methenamine Silver (GMS) staining.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan organisme yang paling mungkin!", teks_en: "Name the most likely organism!" },
      { label: "B", teks_id: "Sebutkan satu karakteristik morfologi organisme tersebut pada pewarnaan GMS!", teks_en: "State one morphological characteristic of the organism on GMS staining!" }
    ]
  },
  {
    id: 80,
    topik: "Mycologi Kedokteran",
    kategori: "Mikologi",
    kasus_id: "Seorang pasien dengan infeksi jamur mengirim spesimen biopsi. Pemeriksaan histopatologi menunjukkan jamur dengan hifa bercabang dan tidak bersekat.",
    kasus_en: "A patient with a fungal infection sends a biopsy specimen. Histopathological examination shows fungi with branching, non-septate hyphae.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan genus jamur yang paling mungkin!", teks_en: "Name the most likely fungal genus!" },
      { label: "B", teks_id: "Sebutkan satu penyakit yang disebabkan oleh jamur tersebut!", teks_en: "Name one disease caused by this fungus!" }
    ]
  },
  {
    id: 81,
    topik: "Virologi Kedokteran",
    kategori: "Virologi",
    kasus_id: "Sebuah laboratorium virologi akan melakukan identifikasi virus. Sebutkan 3 komponen utama struktur virus.",
    kasus_en: "A virology laboratory is going to identify a virus. Name 3 main components of virus structure.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan komponen pertama!", teks_en: "State the first component!" },
      { label: "B", teks_id: "Sebutkan komponen kedua dan ketiga!", teks_en: "State the second and third components!" }
    ]
  },
  {
    id: 82,
    topik: "Virologi Kedokteran",
    kategori: "Virologi",
    kasus_id: "Sebuah laboratorium virologi akan melakukan diagnostik infeksi virus. Sebutkan metode diagnostik virologi yang paling sensitif untuk mendeteksi materi genetik virus.",
    kasus_en: "A virology laboratory is going to perform diagnostic testing for viral infection. Name the most sensitive virological diagnostic method for detecting viral genetic material.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama metode tersebut!", teks_en: "Name the method!" },
      { label: "B", teks_id: "Sebutkan satu keunggulan metode tersebut!", teks_en: "State one advantage of the method!" }
    ]
  },
  {
    id: 83,
    topik: "Virologi Kedokteran",
    kategori: "Virologi",
    kasus_id: "Sebuah laboratorium melakukan uji ELISA untuk mendeteksi antigen virus. Pada uji tersebut, terjadi perubahan warna menjadi kuning.",
    kasus_en: "A laboratory performs an ELISA test to detect viral antigen. In the test, a color change to yellow occurs.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan prinsip reaksi yang terjadi!", teks_en: "State the principle of the reaction!" },
      { label: "B", teks_id: "Sebutkan alat yang digunakan untuk membaca hasil uji tersebut!", teks_en: "Name the instrument used to read the test result!" }
    ]
  },
  {
    id: 84,
    topik: "Virologi Kedokteran",
    kategori: "Virologi",
    kasus_id: "Sebuah laboratorium membandingkan pemeriksaan PCR dengan kultur virus. Sebutkan 2 keuntungan dari pemeriksaan PCR dibandingkan dengan kultur virus.",
    kasus_en: "A laboratory compares PCR examination with viral culture. Name 2 advantages of PCR examination compared to viral culture.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan keuntungan pertama!", teks_en: "State the first advantage!" },
      { label: "B", teks_id: "Sebutkan keuntungan kedua!", teks_en: "State the second advantage!" }
    ]
  },
  {
    id: 85,
    topik: "Virologi Kedokteran",
    kategori: "Virologi",
    kasus_id: "Sebuah laboratorium melakukan elektroforesis gel agarosa untuk menganalisis produk PCR. Terlihat pita DNA pada posisi 200 bp.",
    kasus_en: "A laboratory performs agarose gel electrophoresis to analyze PCR products. A DNA band is seen at the 200 bp position.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil ini!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu faktor yang dapat mempengaruhi migrasi pita DNA pada gel elektroforesis!", teks_en: "State one factor that can influence the migration of DNA bands on gel electrophoresis!" }
    ]
  },
  {
    id: 86,
    topik: "Virologi Kedokteran",
    kategori: "Virologi",
    kasus_id: "Sebuah laboratorium membandingkan PCR konvensional dan Real-Time PCR (qPCR).",
    kasus_en: "A laboratory compares conventional PCR and Real-Time PCR (qPCR).",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan perbedaan prinsip antara kedua metode tersebut!", teks_en: "State the difference in principle between the two methods!" },
      { label: "B", teks_id: "Sebutkan satu keunggulan qPCR dibandingkan PCR konvensional!", teks_en: "State one advantage of qPCR over conventional PCR!" }
    ]
  },
  {
    id: 87,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dewasa datang dengan demam tinggi, menggigil, dan hipotensi sehingga dicurigai mengalami bloodstream infection. Sebelum pemberian antibiotik, kultur darah diambil dari dua lokasi venipuncture yang berbeda.",
    kasus_en: "An adult patient presents with high fever, chills, and hypotension, raising suspicion of a bloodstream infection. Before antibiotic administration, blood cultures are collected from two separate venipuncture sites.",
    pertanyaan: [
      { label: "A", teks_id: "Berapa volume darah yang sebaiknya diinokulasikan ke dalam setiap botol kultur darah pada pasien dewasa?", teks_en: "What volume of blood should be inoculated into each blood culture bottle in an adult patient?" },
      { label: "B", teks_id: "Sebutkan satu faktor yang dapat menyebabkan kontaminasi pada kultur darah!", teks_en: "Name one factor that can cause contamination in blood culture!" }
    ]
  },
  {
    id: 88,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dewasa datang dengan demam tinggi, menggigil, dan hipotensi. Kultur darah diambil dari dua lokasi venipuncture yang berbeda. Jika hanya satu dari dua set kultur darah menunjukkan pertumbuhan coagulase-negative Staphylococcus.",
    kasus_en: "An adult patient presents with high fever, chills, and hypotension. Blood cultures are collected from two separate venipuncture sites. If only one of the two blood culture sets grows coagulase-negative Staphylococcus.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah interpretasi yang paling mungkin?", teks_en: "What is the most likely interpretation?" },
      { label: "B", teks_id: "Sebutkan satu tindakan yang harus dilakukan untuk mengonfirmasi hasil tersebut!", teks_en: "Name one action that should be taken to confirm the result!" }
    ]
  },
  {
    id: 89,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan demam tinggi dan hipotensi diduga mengalami sepsis. Sebutkan 3 kriteria SIRS (Systemic Inflammatory Response Syndrome).",
    kasus_en: "A patient with high fever and hypotension is suspected of having sepsis. State 3 criteria of SIRS (Systemic Inflammatory Response Syndrome).",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan kriteria pertama!", teks_en: "State the first criterion!" },
      { label: "B", teks_id: "Sebutkan kriteria kedua dan ketiga!", teks_en: "State the second and third criteria!" }
    ]
  },
  {
    id: 90,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan demam dan menggigil diduga mengalami infeksi sistemik. Sebutkan penanda (biomarker) yang dapat digunakan untuk membedakan infeksi bakteri sistemik dari infeksi lokal.",
    kasus_en: "A patient with fever and chills is suspected of having a systemic infection. Name a biomarker that can be used to differentiate systemic bacterial infection from local infection.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan nama biomarker tersebut!", teks_en: "Name the biomarker!" },
      { label: "B", teks_id: "Sebutkan satu keunggulan biomarker tersebut!", teks_en: "State one advantage of the biomarker!" }
    ]
  },
  {
    id: 91,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi sistemik menjalani kultur darah. Kultur menunjukkan pertumbuhan bakteri Gram positif kokus dalam waktu 24 jam.",
    kasus_en: "A patient with a systemic infection undergoes blood culture. Culture shows growth of Gram-positive cocci within 24 hours.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan 2 spesies bakteri yang paling mungkin!", teks_en: "Name 2 most likely bacterial species!" },
      { label: "B", teks_id: "Sebutkan satu media yang digunakan untuk kultur darah anaerob!", teks_en: "Name one medium used for anaerobic blood culture!" }
    ]
  },
  {
    id: 92,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi sistemik menjalani kultur darah. Kultur menunjukkan pertumbuhan >1 jenis bakteri (polimikrobial).",
    kasus_en: "A patient with a systemic infection undergoes blood culture. Culture shows growth of >1 type of bacteria (polymicrobial).",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil ini!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu faktor yang dapat menyebabkan hasil tersebut!", teks_en: "Name one factor that can cause this result!" }
    ]
  },
  {
    id: 93,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan sepsis menjalani kultur darah. Sebutkan 3 organisme yang paling sering diisolasi dari kultur darah.",
    kasus_en: "A patient with sepsis undergoes blood culture. Name 3 organisms most commonly isolated from blood cultures.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan organisme pertama!", teks_en: "State the first organism!" },
      { label: "B", teks_id: "Sebutkan organisme kedua dan ketiga!", teks_en: "State the second and third organisms!" }
    ]
  },
  {
    id: 94,
    topik: "Bakteriologi Sepsis & Imunologi",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan sepsis menjalani kultur darah. Kultur menunjukkan pertumbuhan Staphylococcus aureus.",
    kasus_en: "A patient with sepsis undergoes blood culture. Culture shows growth of Staphylococcus aureus.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah interpretasi dari hasil ini?", teks_en: "What is the interpretation of this result?" },
      { label: "B", teks_id: "Sebutkan satu tindakan yang harus dilakukan selanjutnya!", teks_en: "Name one action that should be taken next!" }
    ]
  },
  {
    id: 95,
    topik: "ISK dan Infeksi Genitalia",
    kategori: "Bakteriologi",
    kasus_id: "Seorang perempuan berusia 28 tahun datang dengan keluhan nyeri saat berkemih, frekuensi berkemih meningkat, dan rasa tidak nyaman di suprapublik sejak tiga hari terakhir. Sampel urine porsi tengah dikirim untuk kultur. Kultur pada MacConkey agar menunjukkan koloni merah muda.",
    kasus_en: "A 28-year-old woman presents with dysuria, increased urinary frequency, and suprapubic discomfort for the past three days. A midstream urine specimen is sent for culture. Culture on MacConkey agar shows pink colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Spesies bakteri apakah yang paling mungkin menyebabkan infeksi pada pasien ini?", teks_en: "What is the most likely bacterial species causing this infection?" },
      { label: "B", teks_id: "Apa arti koloni berwarna merah muda pada MacConkey agar?", teks_en: "What does the pink colony on MacConkey agar mean?" }
    ]
  },
  {
    id: 96,
    topik: "ISK dan Infeksi Genitalia",
    kategori: "Bakteriologi",
    kasus_id: "Seorang perempuan berusia 28 tahun datang dengan keluhan nyeri saat berkemih. Sampel urine porsi tengah dikirim untuk kultur. Kultur menunjukkan pertumbuhan koloni >10^5 CFU/mL.",
    kasus_en: "A 28-year-old woman presents with dysuria. A midstream urine specimen is sent for culture. Culture shows growth of colonies >10^5 CFU/mL.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan interpretasi dari hasil ini!", teks_en: "State the interpretation of this result!" },
      { label: "B", teks_id: "Sebutkan satu metode pengambilan spesimen urin untuk kultur!", teks_en: "Name one method of urine specimen collection for culture!" }
    ]
  },
  {
    id: 97,
    topik: "ISK dan Infeksi Genitalia",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pria berusia 24 tahun datang dengan keluhan nyeri saat berkemih dan keluar cairan purulen dari uretra. Spesimen sekret uretra dikirim ke laboratorium. Pada pemeriksaan mikroskopis dengan pewarnaan Gram, terlihat diplokokus Gram negatif di dalam leukosit polimorfonuklear.",
    kasus_en: "A 24-year-old man presents with dysuria and purulent urethral discharge. A urethral discharge specimen is sent to the laboratory. On microscopic examination with Gram staining, Gram-negative diplococci are seen inside polymorphonuclear leukocytes.",
    pertanyaan: [
      { label: "A", teks_id: "Spesies bakteri apakah yang paling mungkin menyebabkan infeksi tersebut?", teks_en: "What is the most likely bacterial species causing this infection?" },
      { label: "B", teks_id: "Sebutkan satu media selektif yang digunakan untuk mengisolasi bakteri tersebut!", teks_en: "Name one selective medium used to isolate this bacterium!" }
    ]
  },
  {
    id: 98,
    topik: "ISK dan Infeksi Genitalia",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran kemih mengirim spesimen urin. Spesimen tidak dapat diproses dalam waktu 2 jam.",
    kasus_en: "A patient with a urinary tract infection sends a urine specimen. The specimen cannot be processed within 2 hours.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan cara penyimpanan yang tepat untuk spesimen tersebut!", teks_en: "State the appropriate storage method for the specimen!" },
      { label: "B", teks_id: "Sebutkan satu risiko jika spesimen tidak disimpan dengan benar!", teks_en: "Name one risk if the specimen is not stored properly!" }
    ]
  },
  {
    id: 99,
    topik: "ISK dan Infeksi Genitalia",
    kategori: "Bakteriologi",
    kasus_id: "Seorang pasien dengan infeksi saluran kemih mengirim spesimen urin. Kultur pada media MacConkey agar menunjukkan koloni tidak berwarna.",
    kasus_en: "A patient with a urinary tract infection sends a urine specimen. Culture on MacConkey agar shows colorless colonies.",
    pertanyaan: [
      { label: "A", teks_id: "Apakah bakteri tersebut memfermentasi laktosa?", teks_en: "Does the bacterium ferment lactose?" },
      { label: "B", teks_id: "Sebutkan satu genus bakteri yang mungkin!", teks_en: "Name one possible bacterial genus!" }
    ]
  },
  {
    id: 100,
    topik: "ISK dan Infeksi Genitalia",
    kategori: "Bakteriologi",
    kasus_id: "Seorang wanita datang dengan keluhan keputihan. Spesimen vagina dikirim ke laboratorium. Pada pewarnaan Gram, terlihat sel epitel yang dipenuhi bakteri kecil. Pemeriksaan skor Nugent menunjukkan total skor 8.",
    kasus_en: "A woman presents with vaginal discharge. A vaginal specimen is sent to the laboratory. On Gram staining, epithelial cells filled with small bacteria are seen. Nugent score examination shows a total score of 8.",
    pertanyaan: [
      { label: "A", teks_id: "Sebutkan diagnosis yang paling mungkin!", teks_en: "Name the most likely diagnosis!" },
      { label: "B", teks_id: "Sebutkan satu bakteri yang berperan dalam kondisi tersebut!", teks_en: "Name one bacterium involved in this condition!" }
    ]
  }
];

// EKSPOR UNTUK INDEX.HTML
window.ALL_QUESTIONS = QUESTIONS;
console.log("Questions loaded:", QUESTIONS.length, "soal");