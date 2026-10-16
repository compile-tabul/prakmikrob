// ============================================
// KAMUS MIKROBIOLOGI - VARIASI JAWABAN
// ============================================
// Berdasarkan BATCH 3 (Keyword & Variasi Jawaban)
// Total: 100 soal
// Format: Setiap entri berisi keyword + variasi ID/EN
// ============================================

const KAMUS = {
  metadata: {
    total_soal: 100,
    sumber: [
      "Draft Latsol Praktikum Mikrobiologi",
      "Batch 3: Keyword & Variasi Jawaban"
    ]
  },
  kamus: {
    // ============================================
    // TOPIK 1: BIOSAFETY DAN PENGENALAN ALAT (7 Soal)
    // ============================================
    "soal_1": {
      "topik": "Biosafety dan Pengenalan Alat",
      "kategori": "Biosafety",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["APD", "masker N95", "sarung tangan", "droplet", "airborne", "CSF", "meningokokus", "biosafety level 2"],
          "variasi_id": [
            "Masker N95 dan sarung tangan lateks",
            "Masker bedah, face shield, dan gown",
            "Pelindung mata (goggles), masker N95, dan sarung tangan",
            "Sarung tangan lateks, masker N95, dan jas lab",
            "Masker N95, sarung tangan, dan pelindung wajah"
          ],
          "variasi_en": [
            "N95 mask and latex gloves",
            "Surgical mask, face shield, and gown",
            "Eye protection (goggles), N95 mask, and gloves",
            "Latex gloves, N95 mask, and lab coat",
            "N95 mask, gloves, and face shield"
          ]
        },
        {
          "label": "B",
          "keywords": ["droplet", "airborne", "kontak langsung", "droplet nuclei", "aerosol"],
          "variasi_id": [
            "Droplet",
            "Airborne",
            "Kontak langsung dengan mukosa",
            "Droplet nuclei, aerosol",
            "Kontak dengan cairan CSF, droplet"
          ],
          "variasi_en": [
            "Droplet",
            "Airborne",
            "Direct contact with mucosa",
            "Droplet nuclei, aerosol",
            "Contact with CSF fluid, droplet"
          ]
        }
      ]
    },
    "soal_2": {
      "topik": "Biosafety dan Pengenalan Alat",
      "kategori": "Biosafety",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Autoclave", "121°C", "15 menit", "15 psi", "sterilisasi panas lembab", "uap air jenuh"],
          "variasi_id": [
            "Autoklaf",
            "Autoclave",
            "Sterilisasi uap air jenuh",
            "Moist heat sterilizer"
          ],
          "variasi_en": [
            "Autoclave",
            "Moist heat sterilizer",
            "Saturated steam sterilizer"
          ]
        },
        {
          "label": "B",
          "keywords": ["121°C", "15 menit", "15 psi", "134°C", "3 menit"],
          "variasi_id": [
            "121 derajat Celcius, 15 menit",
            "Autoclave, 134°C, 3 menit (untuk alat yang lebih cepat)",
            "Autoklaf, 121°C, 15 menit, 15 psi",
            "Autoclave, suhu 121°C, tekanan 15 psi, waktu 15 menit",
            "Autoklaf, 121°C, 20 menit (tergantung volume)",
            "Sterilisasi uap air jenuh pada 121°C selama 15 menit"
          ],
          "variasi_en": [
            "121°C, 15 minutes",
            "Autoclave, 134°C, 3 minutes (for faster cycles)",
            "Autoclave, 121°C, 15 minutes, 15 psi",
            "Autoclave, temperature 121°C, pressure 15 psi, time 15 minutes",
            "Autoclave, 121°C, 20 minutes (depending on volume)",
            "Saturated steam sterilization at 121°C for 15 minutes"
          ]
        }
      ]
    },
    "soal_3": {
      "topik": "Biosafety dan Pengenalan Alat",
      "kategori": "Biosafety",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Lensa objektif 100x", "oil immersion", "perbesaran 1000x"],
          "variasi_id": [
            "Lensa 100x (perbesaran 1000x)",
            "Lensa objektif 100x dengan minyak imersi",
            "Lensa minyak (oil immersion lens)",
            "Lensa 100x untuk morfologi detail"
          ],
          "variasi_en": [
            "100x objective lens (1000x magnification)",
            "100x objective lens with oil immersion",
            "Oil immersion lens",
            "100x lens for detailed morphology"
          ]
        },
        {
          "label": "B",
          "keywords": ["diafragma", "kondensor", "iris diafragma", "pengatur cahaya"],
          "variasi_id": [
            "Diafragma",
            "Kondensor",
            "Iris diafragma",
            "Pengatur cahaya",
            "Diafragma untuk mengatur intensitas cahaya",
            "Kondensor untuk memfokuskan cahaya",
            "Iris diafragma untuk mengatur lebar cahaya"
          ],
          "variasi_en": [
            "Diaphragm",
            "Condenser",
            "Iris diaphragm",
            "Light regulator",
            "Diaphragm to adjust light intensity",
            "Condenser to focus light",
            "Iris diaphragm to adjust light width"
          ]
        }
      ]
    },
    "soal_4": {
      "topik": "Biosafety dan Pengenalan Alat",
      "kategori": "Biosafety",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Cuci tangan", "APD", "dekontaminasi", "biosafety"],
          "variasi_id": [
            "Mencuci tangan dengan sabun dan air mengalir",
            "Menggunakan hand sanitizer",
            "Memakai jas lab dan sarung tangan",
            "Prosedur: cuci tangan 6 langkah; gunakan APD lengkap; dekontaminasi meja kerja"
          ],
          "variasi_en": [
            "Washing hands with soap and running water",
            "Using hand sanitizer",
            "Wearing lab coat and gloves",
            "Procedure: 6-step handwashing; use full PPE; decontaminate workbench"
          ]
        },
        {
          "label": "B",
          "keywords": ["kontak", "droplet", "airborne", "infeksi nosokomial", "kontaminasi silang"],
          "variasi_id": [
            "Transmisi: kontak langsung; droplet; airborne; kontak tidak langsung",
            "Transmisi: melalui tangan yang terkontaminasi; melalui aerosol",
            "Jika tidak dilakukan: infeksi nosokomial; kontaminasi silang"
          ],
          "variasi_en": [
            "Transmission: direct contact; droplet; airborne; indirect contact",
            "Transmission: through contaminated hands; through aerosols",
            "If not done: nosocomial infection; cross-contamination"
          ]
        }
      ]
    },
    "soal_5": {
      "topik": "Biosafety dan Pengenalan Alat",
      "kategori": "Biosafety",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Disinfektan", "sodium hipoklorit", "tumpahan", "dekontaminasi"],
          "variasi_id": [
            "Menutup tumpahan dengan tisu; Menuangkan disinfektan; Membersihkan dari luar ke dalam",
            "Langkah pertama: isolasi area; gunakan APD; tuang disinfektan",
            "Cara: semprot disinfektan, diamkan 10 menit, lap"
          ],
          "variasi_en": [
            "Covering spill with tissue; Pouring disinfectant; Cleaning from outside to inside",
            "First step: isolate area; use PPE; pour disinfectant",
            "Method: spray disinfectant, let stand 10 minutes, wipe"
          ]
        },
        {
          "label": "B",
          "keywords": ["Sodium hipoklorit 1%", "Alkohol 70%", "Fenol", "Klorin", "Glutaraldehyde"],
          "variasi_id": [
            "Sodium hipoklorit 1%",
            "Alkohol 70%",
            "Fenol",
            "Klorin",
            "Sodium hypochlorite 0.5% - 1%",
            "Glutaraldehyde",
            "Hydrogen peroxide"
          ],
          "variasi_en": [
            "Sodium hypochlorite 1%",
            "70% alcohol",
            "Phenol",
            "Chlorine",
            "Sodium hypochlorite 0.5% - 1%",
            "Glutaraldehyde",
            "Hydrogen peroxide"
          ]
        }
      ]
    },
    "soal_6": {
      "topik": "Biosafety dan Pengenalan Alat",
      "kategori": "Biosafety",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Bunsen", "pemijaran", "sterilisasi", "red heat", "flaming", "ose"],
          "variasi_id": [
            "Api bunsen",
            "Flaming",
            "Red heat",
            "Pemijaran",
            "Sterilisasi dengan api langsung",
            "Pemijaran di api bunsen sampai merah",
            "Flaming pada api bunsen",
            "Red heat sterilization"
          ],
          "variasi_en": [
            "Bunsen burner",
            "Flaming",
            "Red heat",
            "Direct flame sterilization",
            "Flaming on bunsen burner until red",
            "Red heat sterilization"
          ]
        },
        {
          "label": "B",
          "keywords": ["sampai merah", "red heat", "beberapa detik"],
          "variasi_id": [
            "Sampai merah",
            "Red heat",
            "Beberapa detik",
            "Hingga membara"
          ],
          "variasi_en": [
            "Until red hot",
            "Red heat",
            "A few seconds"
          ]
        }
      ]
    },
    "soal_7": {
      "topik": "Biosafety dan Pengenalan Alat",
      "kategori": "Biosafety",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["APD", "masker N95", "sarung tangan", "airborne", "sputum", "tuberkulosis"],
          "variasi_id": [
            "Masker N95 dan sarung tangan lateks",
            "Masker bedah, face shield, dan gown",
            "Pelindung mata (goggles), masker N95, dan sarung tangan",
            "Sarung tangan lateks, masker N95, dan jas lab"
          ],
          "variasi_en": [
            "N95 mask and latex gloves",
            "Surgical mask, face shield, and gown",
            "Eye protection (goggles), N95 mask, and gloves",
            "Latex gloves, N95 mask, and lab coat"
          ]
        },
        {
          "label": "B",
          "keywords": ["airborne", "droplet nuclei", "aerosol", "droplet"],
          "variasi_id": [
            "Airborne",
            "Droplet nuclei",
            "Aerosol",
            "Droplet",
            "Kontak dengan mukosa"
          ],
          "variasi_en": [
            "Airborne",
            "Droplet nuclei",
            "Aerosol",
            "Droplet",
            "Contact with mucosa"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 2: MIKROSKOP DAN PEWARNAAN (8 Soal)
    // ============================================
    "soal_8": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Staphylococcus", "kokus", "ungu", "bergerombol", "Gram positif", "anggur"],
          "variasi_id": [
            "Staphylococcus aureus",
            "Kokus Gram positif",
            "Bakteri berbentuk bulat",
            "Bergerombol seperti anggur",
            "Morfologi: kokus; Susunan: bergerombol (cluster)",
            "Gram positif kokus; Tersusun dalam kelompok",
            "Bakteri bulat; Gram positif; Cluster"
          ],
          "variasi_en": [
            "Staphylococcus aureus",
            "Gram-positive cocci",
            "Round bacteria",
            "Clustered like grapes",
            "Morphology: cocci; Arrangement: clustered",
            "Gram-positive cocci; Arranged in clusters",
            "Round bacteria; Gram-positive; Cluster"
          ]
        },
        {
          "label": "B",
          "keywords": ["Staphylococcus", "Staphylococcus aureus"],
          "variasi_id": [
            "Staphylococcus",
            "Staphylococcus aureus",
            "Staph"
          ],
          "variasi_en": [
            "Staphylococcus",
            "Staphylococcus aureus",
            "Staph"
          ]
        }
      ]
    },
    "soal_9": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Ziehl-Neelsen", "carbol fuchsin", "BTA", "basil tahan asam", "Mycobacterium"],
          "variasi_id": [
            "Pewarnaan tahan asam",
            "ZN",
            "Pewarnaan BTA",
            "Carbol fuchsin",
            "Metode Ziehl-Neelsen",
            "Acid-fast staining"
          ],
          "variasi_en": [
            "Acid-fast staining",
            "Ziehl-Neelsen",
            "AFB staining",
            "Carbol fuchsin"
          ]
        },
        {
          "label": "B",
          "keywords": ["carbol fuchsin", "karbol fuksin"],
          "variasi_id": [
            "Carbol fuchsin",
            "Karbol fuksin",
            "Fuchsin",
            "Fuksin"
          ],
          "variasi_en": [
            "Carbol fuchsin",
            "Fuchsin"
          ]
        }
      ]
    },
    "soal_10": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Schaeffer-Fulton", "malachite green", "spora", "sel vegetatif", "safranin"],
          "variasi_id": [
            "Pewarnaan spora",
            "Metode Schaeffer dan Fulton",
            "Malachite green",
            "Safranin",
            "Schaeffer-Fulton"
          ],
          "variasi_en": [
            "Spore staining",
            "Schaeffer-Fulton method",
            "Malachite green",
            "Safranin"
          ]
        },
        {
          "label": "B",
          "keywords": ["malachite green", "malasit hijau"],
          "variasi_id": [
            "Malachite green",
            "Malasit hijau"
          ],
          "variasi_en": [
            "Malachite green"
          ]
        }
      ]
    },
    "soal_11": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Nigrosin", "Indian ink", "pewarnaan negatif"],
          "variasi_id": [
            "Tinta India",
            "Nigrosin",
            "Pewarnaan latar belakang",
            "Indian ink",
            "Pewarnaan negatif"
          ],
          "variasi_en": [
            "India ink",
            "Nigrosin",
            "Background staining",
            "Negative staining"
          ]
        },
        {
          "label": "B",
          "keywords": ["melihat morfologi", "melihat kapsul", "latar belakang gelap"],
          "variasi_id": [
            "Melihat morfologi dan kapsul",
            "Latar belakang gelap",
            "Bakteri tidak terwarnai",
            "Latar belakang hitam"
          ],
          "variasi_en": [
            "Observe morphology and capsule",
            "Dark background",
            "Bacteria unstained",
            "Black background"
          ]
        }
      ]
    },
    "soal_12": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Neisser", "metakromatik granula", "toluidine blue", "Corynebacterium"],
          "variasi_id": [
            "Pewarnaan Neisser",
            "Granula metakromatik",
            "Corynebacterium",
            "Toluidine blue",
            "Metode Neisser"
          ],
          "variasi_en": [
            "Neisser stain",
            "Metachromatic granules",
            "Corynebacterium",
            "Toluidine blue",
            "Neisser method"
          ]
        },
        {
          "label": "B",
          "keywords": ["Corynebacterium", "Corynebacterium diphtheriae"],
          "variasi_id": [
            "Corynebacterium",
            "Corynebacterium diphtheriae",
            "C. diphtheriae"
          ],
          "variasi_en": [
            "Corynebacterium",
            "Corynebacterium diphtheriae",
            "C. diphtheriae"
          ]
        }
      ]
    },
    "soal_13": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Sederhana (satu warna)", "negatif (latar berwarna)", "prinsip"],
          "variasi_id": [
            "Simple staining menggunakan satu zat warna",
            "Pewarnaan negatif tidak mewarnai sel",
            "Prinsip: simple staining mewarnai sel; negatif mewarnai latar",
            "Perbedaan: simple staining sel berwarna; negatif sel transparan"
          ],
          "variasi_en": [
            "Simple staining uses one dye",
            "Negative staining does not stain cells",
            "Principle: simple staining stains cells; negative stains background",
            "Difference: simple staining cells colored; negative cells transparent"
          ]
        },
        {
          "label": "B",
          "keywords": ["keunggulan", "tidak mengubah morfologi", "melihat kapsul"],
          "variasi_id": [
            "Keunggulan: sel tidak terwarnai, morfologi jelas",
            "Tidak mengubah morfologi sel",
            "Dapat melihat kapsul",
            "Simple staining: satu warna; Negatif: latar gelap, sel terang"
          ],
          "variasi_en": [
            "Advantage: cells unstained, morphology clear",
            "Does not alter cell morphology",
            "Can see capsule",
            "Simple staining: one color; Negative: dark background, bright cells"
          ]
        }
      ]
    },
    "soal_14": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Mordanting", "mordant"],
          "variasi_id": [
            "Mordanting",
            "Mordant",
            "Langkah: mordanting"
          ],
          "variasi_en": [
            "Mordanting",
            "Mordant",
            "Step: mordanting"
          ]
        },
        {
          "label": "B",
          "keywords": ["lugol", "iodine", "iodin"],
          "variasi_id": [
            "Lugol",
            "Iodin",
            "Reagen: lugol (iodin)"
          ],
          "variasi_en": [
            "Lugol",
            "Iodine",
            "Reagent: lugol (iodine)"
          ]
        }
      ]
    },
    "soal_15": {
      "topik": "Mikroskop dan Pewarnaan",
      "kategori": "Pewarnaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Basil", "batang", "merah", "BTA", "Mycobacterium", "tahan asam"],
          "variasi_id": [
            "Batang tahan asam",
            "Basil",
            "Mycobacterium",
            "Berwarna merah",
            "Morfologi: batang; Sifat: tahan asam; Warna: merah"
          ],
          "variasi_en": [
            "Acid-fast bacilli",
            "Rods",
            "Mycobacterium",
            "Red color",
            "Morphology: rod; Property: acid-fast; Color: red"
          ]
        },
        {
          "label": "B",
          "keywords": ["Mycobacterium", "Mycobacterium tuberculosis"],
          "variasi_id": [
            "Mycobacterium",
            "Mycobacterium tuberculosis",
            "M. tuberculosis"
          ],
          "variasi_en": [
            "Mycobacterium",
            "Mycobacterium tuberculosis",
            "M. tuberculosis"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 3: STERILISASI, DESINFEKSI DAN PERBENIHAN BAKTERI (8 Soal)
    // ============================================
    "soal_16": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Sterilisasi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Autoclave", "121°C", "15 menit", "media agar", "sterilisasi panas lembab"],
          "variasi_id": [
            "Autoklaf",
            "Autoclave",
            "Sterilisasi uap air jenuh",
            "Sterilisasi panas lembab"
          ],
          "variasi_en": [
            "Autoclave",
            "Moist heat sterilization",
            "Saturated steam sterilization"
          ]
        },
        {
          "label": "B",
          "keywords": ["121°C", "15 menit", "15 psi"],
          "variasi_id": [
            "121 derajat, 15 menit",
            "Autoclave; 121°C; 15 menit; 15 psi",
            "Sterilisasi uap air jenuh; 121°C; 15 menit",
            "Autoklaf; Suhu 121°C; Waktu 15 menit"
          ],
          "variasi_en": [
            "121°C; 15 minutes",
            "Autoclave; 121°C; 15 minutes; 15 psi",
            "Saturated steam sterilization; 121°C; 15 minutes",
            "Autoclave; Temperature 121°C; Time 15 minutes"
          ]
        }
      ]
    },
    "soal_17": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Sterilisasi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Tyndalisasi", "Tyndallization", "pemanasan intermiten"],
          "variasi_id": [
            "Tyndallization",
            "Pemanasan intermiten",
            "Tyndalisasi",
            "Metode tyndallization"
          ],
          "variasi_en": [
            "Tyndallization",
            "Intermittent heating",
            "Tyndallization method"
          ]
        },
        {
          "label": "B",
          "keywords": ["100°C", "30 menit", "3 hari"],
          "variasi_id": [
            "100°C; 30 menit; 3 hari",
            "Tyndalisasi; Suhu 100°C; 30 menit; 3 hari berturut-turut",
            "100 derajat; 30 menit; 3 hari",
            "Pemanasan uap intermiten"
          ],
          "variasi_en": [
            "100°C; 30 minutes; 3 days",
            "Tyndallization; Temperature 100°C; 30 minutes; 3 consecutive days",
            "100°C; 30 minutes; 3 days; Intermittent"
          ]
        }
      ]
    },
    "soal_18": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Desinfeksi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["disinfektan", "disinfectant"],
          "variasi_id": [
            "Disinfektan",
            "Disinfectant"
          ],
          "variasi_en": [
            "Disinfectant"
          ]
        },
        {
          "label": "B",
          "keywords": ["Oksidasi", "protein", "denaturasi"],
          "variasi_id": [
            "Oksidasi protein",
            "Denaturasi",
            "Menghasilkan oksigen",
            "Mekanisme: oksidasi; Target: protein"
          ],
          "variasi_en": [
            "Protein oxidation",
            "Denaturation",
            "Oxygen generation",
            "Mechanism: oxidation; Target: protein"
          ]
        }
      ]
    },
    "soal_19": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Media Perbenihan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Blood agar", "chocolate agar", "enriched", "media diperkaya"],
          "variasi_id": [
            "Media darah",
            "Media coklat",
            "Media diperkaya",
            "Blood agar",
            "Chocolate agar"
          ],
          "variasi_en": [
            "Blood agar",
            "Chocolate agar",
            "Enriched media"
          ]
        },
        {
          "label": "B",
          "keywords": ["nutrisi tambahan", "memperkaya media"],
          "variasi_id": [
            "Nutrisi tambahan",
            "Memperkaya media",
            "Sumber nutrisi"
          ],
          "variasi_en": [
            "Additional nutrients",
            "Enrich the medium",
            "Nutrient source"
          ]
        }
      ]
    },
    "soal_20": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Media Perbenihan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Media sintesis", "media non-sintesis", "media dasar", "media kompleks"],
          "variasi_id": [
            "Media dasar",
            "Media kompleks",
            "Media sederhana",
            "Media non-sintesis",
            "Lowenstein-Jensen"
          ],
          "variasi_en": [
            "Synthetic media",
            "Non-synthetic media",
            "Complex media",
            "Basal media",
            "Lowenstein-Jensen"
          ]
        },
        {
          "label": "B",
          "keywords": ["Lowenstein-Jensen", "Nutrient Agar", "Tryptic Soy Agar"],
          "variasi_id": [
            "Lowenstein-Jensen",
            "Nutrient Agar",
            "Tryptic Soy Agar"
          ],
          "variasi_en": [
            "Lowenstein-Jensen",
            "Nutrient Agar",
            "Tryptic Soy Agar"
          ]
        }
      ]
    },
    "soal_21": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Media Perbenihan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Thioglycolate", "cooked meat medium", "anaerob"],
          "variasi_id": [
            "Media thioglikolat",
            "Media daging",
            "Media anaerob",
            "Thioglycolate",
            "Cooked meat medium"
          ],
          "variasi_en": [
            "Thioglycolate",
            "Cooked meat medium",
            "Anaerobic media"
          ]
        },
        {
          "label": "B",
          "keywords": ["menurunkan oksigen", "anaerob", "gradien oksigen"],
          "variasi_id": [
            "Menurunkan oksigen",
            "Anaerob",
            "Gradien oksigen"
          ],
          "variasi_en": [
            "Oxygen reduction",
            "Anaerobic",
            "Oxygen gradient"
          ]
        }
      ]
    },
    "soal_22": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Media Perbenihan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Hemolisis", "darah", "diferensial", "Blood Agar", "zona jernih"],
          "variasi_id": [
            "Media diferensial",
            "Media diperkaya",
            "Melihat hemolisis",
            "Zona jernih",
            "Blood agar"
          ],
          "variasi_en": [
            "Differential media",
            "Enriched media",
            "Hemolysis observation",
            "Clear zone",
            "Blood agar"
          ]
        },
        {
          "label": "B",
          "keywords": ["hemolisis", "zona jernih", "pola hemolisis"],
          "variasi_id": [
            "Hemolisis",
            "Zona jernih",
            "Pola hemolisis"
          ],
          "variasi_en": [
            "Hemolysis",
            "Clear zone",
            "Hemolysis pattern"
          ]
        }
      ]
    },
    "soal_23": {
      "topik": "Sterilisasi, Desinfeksi dan Perbenihan Bakteri",
      "kategori": "Sterilisasi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Red heat", "pemijaran", "sterilisasi", "ose", "flaming"],
          "variasi_id": [
            "Flaming",
            "Pemijaran",
            "Sterilisasi panas kering",
            "Ose",
            "Red heat"
          ],
          "variasi_en": [
            "Flaming",
            "Red heat",
            "Dry heat sterilization",
            "Loop"
          ]
        },
        {
          "label": "B",
          "keywords": ["ose", "loop", "jarum inokulum", "forceps", "pinset"],
          "variasi_id": [
            "Ose",
            "Loop",
            "Jarum inokulum",
            "Forceps",
            "Pinset",
            "Scalpel"
          ],
          "variasi_en": [
            "Loop",
            "Inoculating needle",
            "Forceps",
            "Scalpel"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 4: VIBRIO, PSEUDOMONAS, ACINETOBACTER (8 Soal)
    // ============================================
    "soal_24": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["TCBS", "kuning", "sukrosa", "Vibrio cholerae", "diare"],
          "variasi_id": [
            "Vibrio cholerae",
            "Fermentasi sukrosa",
            "Koloni kuning",
            "Diare",
            "TCBS",
            "Sukrosa positif"
          ],
          "variasi_en": [
            "Vibrio cholerae",
            "Sucrose fermentation",
            "Yellow colonies",
            "Diarrhea",
            "TCBS",
            "Sucrose positive"
          ]
        },
        {
          "label": "B",
          "keywords": ["Vibrio cholerae", "V. cholerae"],
          "variasi_id": [
            "Vibrio cholerae",
            "V. cholerae",
            "Vibrio"
          ],
          "variasi_en": [
            "Vibrio cholerae",
            "V. cholerae",
            "Vibrio"
          ]
        }
      ]
    },
    "soal_25": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["TCBS", "hijau", "non-sukrosa", "Vibrio parahaemolyticus"],
          "variasi_id": [
            "Vibrio parahaemolyticus",
            "Tidak memfermentasi sukrosa",
            "Koloni hijau",
            "Diare",
            "Sukrosa negatif"
          ],
          "variasi_en": [
            "Vibrio parahaemolyticus",
            "Non-sucrose fermentation",
            "Green colonies",
            "Diarrhea",
            "Sucrose negative"
          ]
        },
        {
          "label": "B",
          "keywords": ["Vibrio parahaemolyticus", "V. parahaemolyticus"],
          "variasi_id": [
            "Vibrio parahaemolyticus",
            "V. parahaemolyticus"
          ],
          "variasi_en": [
            "Vibrio parahaemolyticus",
            "V. parahaemolyticus"
          ]
        }
      ]
    },
    "soal_26": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Vibrio cholerae", "TCBS", "kuning", "oksidase positif", "Gram negatif batang"],
          "variasi_id": [
            "Vibrio cholerae",
            "Kolera",
            "Sukrosa positif",
            "Oksidase positif",
            "TCBS kuning",
            "Gram negatif batang"
          ],
          "variasi_en": [
            "Vibrio cholerae",
            "Cholera",
            "Sucrose positive",
            "Oxidase positive",
            "TCBS yellow",
            "Gram-negative rod"
          ]
        },
        {
          "label": "B",
          "keywords": ["fermentasi sukrosa", "sukrosa positif", "koloni kuning"],
          "variasi_id": [
            "Fermentasi sukrosa",
            "Sukrosa positif",
            "Koloni kuning",
            "Fermentasi sukrosa; koloni kuning"
          ],
          "variasi_en": [
            "Sucrose fermentation",
            "Sucrose positive",
            "Yellow colonies"
          ]
        }
      ]
    },
    "soal_27": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Oksidase positif", "non-fermenter", "Pseudomonas", "aerob obligat", "pigmen hijau"],
          "variasi_id": [
            "Oksidase positif",
            "Tidak memfermentasi glukosa",
            "Aerob obligat",
            "Pigmen hijau",
            "Pseudomonas aeruginosa",
            "Non-fermenter"
          ],
          "variasi_en": [
            "Oxidase positive",
            "Non-fermenter",
            "Obligate aerobe",
            "Green pigment",
            "Pseudomonas aeruginosa"
          ]
        },
        {
          "label": "B",
          "keywords": ["Oksidase positif", "non-fermenter", "pigmen hijau"],
          "variasi_id": [
            "Oksidase positif; Non-fermenter; Pigmen hijau",
            "Oksidase positif; Non-fermenter",
            "Oksidase positif; Pigmen hijau"
          ],
          "variasi_en": [
            "Oxidase positive; Non-fermenter; Green pigment",
            "Oxidase positive; Non-fermenter",
            "Oxidase positive; Green pigment"
          ]
        }
      ]
    },
    "soal_28": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Acinetobacter", "MacConkey", "non-fermenter", "oksidase negatif", "nosokomial"],
          "variasi_id": [
            "Acinetobacter baumannii",
            "Koloni tidak berwarna",
            "Oksidase negatif",
            "Nosokomial",
            "MacConkey",
            "Tidak berwarna"
          ],
          "variasi_en": [
            "Acinetobacter baumannii",
            "Colorless colonies",
            "Oxidase negative",
            "Nosocomial",
            "MacConkey"
          ]
        },
        {
          "label": "B",
          "keywords": ["oksidase negatif", "tidak ada pigmen", "Acinetobacter"],
          "variasi_id": [
            "Oksidase negatif",
            "Tidak ada pigmen",
            "Acinetobacter"
          ],
          "variasi_en": [
            "Oxidase negative",
            "No pigment",
            "Acinetobacter"
          ]
        }
      ]
    },
    "soal_29": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Pseudomonas aeruginosa", "pyocyanin", "hijau", "oksidase positif"],
          "variasi_id": [
            "Pseudomonas aeruginosa",
            "Pigmen pyocyanin",
            "Hijau",
            "Oksidase positif"
          ],
          "variasi_en": [
            "Pseudomonas aeruginosa",
            "Pyocyanin pigment",
            "Green",
            "Oxidase positive"
          ]
        },
        {
          "label": "B",
          "keywords": ["pyocyanin", "pyosianin"],
          "variasi_id": [
            "Pyocyanin",
            "Pyosianin"
          ],
          "variasi_en": [
            "Pyocyanin"
          ]
        }
      ]
    },
    "soal_30": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["TCBS", "selektif", "Vibrio", "Thiosulfate Citrate Bile Sucrose"],
          "variasi_id": [
            "Thiosulfate Citrate Bile Sucrose",
            "Media selektif Vibrio",
            "TCBS",
            "Media selektif"
          ],
          "variasi_en": [
            "Thiosulfate Citrate Bile Sucrose",
            "Selective medium for Vibrio",
            "TCBS",
            "Selective medium"
          ]
        },
        {
          "label": "B",
          "keywords": ["selektif", "sukrosa", "koloni kuning/hijau"],
          "variasi_id": [
            "Selektif untuk Vibrio",
            "Fermentasi sukrosa",
            "Koloni kuning/hijau",
            "Fermentasi sukrosa"
          ],
          "variasi_en": [
            "Selective for Vibrio",
            "Sucrose fermentation",
            "Yellow/green colonies"
          ]
        }
      ]
    },
    "soal_31": {
      "topik": "Vibrio, Pseudomonas, Acinetobacter",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Pyocyanin", "pyoverdine", "biofilm", "elastase", "exotoxin A"],
          "variasi_id": [
            "Pigmen",
            "Kapsul",
            "Endotoksin",
            "Exotoxin A",
            "Biofilm",
            "Elastase",
            "Pyocyanin",
            "Pyoverdine"
          ],
          "variasi_en": [
            "Pigment",
            "Capsule",
            "Endotoxin",
            "Exotoxin A",
            "Biofilm",
            "Elastase",
            "Pyocyanin",
            "Pyoverdine"
          ]
        },
        {
          "label": "B",
          "keywords": ["Pyocyanin", "pyoverdine", "biofilm", "elastase", "exotoxin A"],
          "variasi_id": [
            "Pyocyanin",
            "Pyoverdine",
            "Biofilm",
            "Elastase",
            "Exotoxin A"
          ],
          "variasi_en": [
            "Pyocyanin",
            "Pyoverdine",
            "Biofilm",
            "Elastase",
            "Exotoxin A"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 5: UJI KEPEKAAN ANTIMIKROBA DIFUSI, DILUSI (7 Soal)
    // ============================================
    "soal_32": {
      "topik": "Uji Kepekaan Antimikroba Difusi, Dilusi",
      "kategori": "Uji Kepekaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Zona hambat", "difusi", "antibiotik", "Mueller-Hinton", "zona bening"],
          "variasi_id": [
            "Zona bening",
            "Daerah hambatan",
            "Zona inhibisi",
            "Mueller-Hinton Agar",
            "Zona hambat"
          ],
          "variasi_en": [
            "Clear zone",
            "Inhibition zone",
            "Zone of inhibition",
            "Mueller-Hinton Agar"
          ]
        },
        {
          "label": "B",
          "keywords": ["Mueller-Hinton", "MHA"],
          "variasi_id": [
            "Mueller-Hinton Agar",
            "MHA",
            "Mueller Hinton"
          ],
          "variasi_en": [
            "Mueller-Hinton Agar",
            "MHA",
            "Mueller Hinton"
          ]
        }
      ]
    },
    "soal_33": {
      "topik": "Uji Kepekaan Antimikroba Difusi, Dilusi",
      "kategori": "Uji Kepekaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["KHM", "dilusi", "jernih", "konsentrasi", "MIC"],
          "variasi_id": [
            "Konsentrasi Hambat Minimal",
            "Tabung jernih",
            "Kadar terendah",
            "Dilusi",
            "KHM",
            "MIC"
          ],
          "variasi_en": [
            "Minimum Inhibitory Concentration",
            "Clear tube",
            "Lowest concentration",
            "Dilution",
            "MIC"
          ]
        },
        {
          "label": "B",
          "keywords": ["KHM", "MIC", "konsentrasi terendah"],
          "variasi_id": [
            "Konsentrasi terendah",
            "Menghambat pertumbuhan",
            "Konsentrasi hambat minimal"
          ],
          "variasi_en": [
            "Lowest concentration",
            "Inhibits growth",
            "Minimum inhibitory concentration"
          ]
        }
      ]
    },
    "soal_34": {
      "topik": "Uji Kepekaan Antimikroba Difusi, Dilusi",
      "kategori": "Uji Kepekaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["DDST", "ESBL", "sinergi", "clavulanate", "amoxicillin"],
          "variasi_id": [
            "Double Disk Synergy Test",
            "ESBL",
            "Zona melebar",
            "Clavulanate",
            "Sinergi"
          ],
          "variasi_en": [
            "Double Disk Synergy Test",
            "ESBL",
            "Expanded zone",
            "Clavulanate",
            "Synergy"
          ]
        },
        {
          "label": "B",
          "keywords": ["blaCTX-M", "CTX-M", "blaTEM", "blaSHV"],
          "variasi_id": [
            "blaCTX-M",
            "CTX-M",
            "blaTEM",
            "blaSHV"
          ],
          "variasi_en": [
            "blaCTX-M",
            "CTX-M",
            "blaTEM",
            "blaSHV"
          ]
        }
      ]
    },
    "soal_35": {
      "topik": "Uji Kepekaan Antimikroba Difusi, Dilusi",
      "kategori": "Uji Kepekaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["MRSA", "cefoxitin", "resisten", "mecA", "Staphylococcus aureus"],
          "variasi_id": [
            "MRSA",
            "Methicillin-resistant Staphylococcus aureus",
            "mecA",
            "Resisten"
          ],
          "variasi_en": [
            "MRSA",
            "Methicillin-resistant Staphylococcus aureus",
            "mecA",
            "Resistant"
          ]
        },
        {
          "label": "B",
          "keywords": ["MRSA", "mecA", "cefoxitin"],
          "variasi_id": [
            "MRSA",
            "Methicillin-resistant Staphylococcus aureus",
            "mecA"
          ],
          "variasi_en": [
            "MRSA",
            "Methicillin-resistant Staphylococcus aureus",
            "mecA"
          ]
        }
      ]
    },
    "soal_36": {
      "topik": "Uji Kepekaan Antimikroba Difusi, Dilusi",
      "kategori": "Uji Kepekaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["pH", "suhu", "inokulum", "ketebalan media", "waktu inkubasi"],
          "variasi_id": [
            "Ketebalan media",
            "Waktu inkubasi",
            "Konsentrasi inokulum",
            "pH media",
            "Suhu"
          ],
          "variasi_en": [
            "Medium thickness",
            "Incubation time",
            "Inoculum concentration",
            "Medium pH",
            "Temperature"
          ]
        },
        {
          "label": "B",
          "keywords": ["pH", "suhu", "inokulum", "ketebalan media"],
          "variasi_id": [
            "pH media",
            "Suhu inkubasi",
            "Konsentrasi inokulum",
            "Ketebalan media",
            "Waktu inkubasi"
          ],
          "variasi_en": [
            "Medium pH",
            "Incubation temperature",
            "Inoculum concentration",
            "Medium thickness",
            "Incubation time"
          ]
        }
      ]
    },
    "soal_37": {
      "topik": "Uji Kepekaan Antimikroba Difusi, Dilusi",
      "kategori": "Uji Kepekaan",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Difusi", "dilusi", "zona hambat", "KHM"],
          "variasi_id": [
            "Difusi mengukur zona hambat",
            "Dilusi mengukur KHM",
            "Difusi: zona hambat; Dilusi: KHM",
            "Difusi: kualitatif; Dilusi: kuantitatif"
          ],
          "variasi_en": [
            "Diffusion measures inhibition zone",
            "Dilution measures MIC",
            "Diffusion: inhibition zone; Dilution: MIC",
            "Diffusion: qualitative; Dilution: quantitative"
          ]
        },
        {
          "label": "B",
          "keywords": ["kuantitatif", "KHM", "lebih akurat"],
          "variasi_id": [
            "Kuantitatif",
            "Menentukan KHM",
            "Lebih akurat"
          ],
          "variasi_en": [
            "Quantitative",
            "Determine MIC",
            "More accurate"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 6: STAPHYLOCOCCUS, STREPTOCOCCUS, MRSA, M. LEPRAE (10 Soal)
    // ============================================
    "soal_38": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Staphylococcus", "kokus", "ungu", "anggur", "Gram positif", "cluster"],
          "variasi_id": [
            "Staphylococcus aureus",
            "Kokus Gram positif",
            "Bergerombol",
            "Ungu",
            "Staphylococcus",
            "Kokus",
            "Cluster"
          ],
          "variasi_en": [
            "Staphylococcus aureus",
            "Gram-positive cocci",
            "Clustered",
            "Purple",
            "Staphylococcus",
            "Cocci",
            "Cluster"
          ]
        },
        {
          "label": "B",
          "keywords": ["Staphylococcus", "Staphylococcus aureus"],
          "variasi_id": [
            "Staphylococcus",
            "Staphylococcus aureus",
            "Staph"
          ],
          "variasi_en": [
            "Staphylococcus",
            "Staphylococcus aureus",
            "Staph"
          ]
        }
      ]
    },
    "soal_39": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Katalase positif", "Staphylococcus", "gelembung gas", "infeksi kulit"],
          "variasi_id": [
            "Staphylococcus",
            "Katalase positif",
            "Gelembung gas",
            "Infeksi kulit"
          ],
          "variasi_en": [
            "Staphylococcus",
            "Catalase positive",
            "Gas bubbles",
            "Skin infection"
          ]
        },
        {
          "label": "B",
          "keywords": ["Staphylococcus aureus", "S. aureus"],
          "variasi_id": [
            "Staphylococcus aureus",
            "S. aureus",
            "Staph aureus"
          ],
          "variasi_en": [
            "Staphylococcus aureus",
            "S. aureus",
            "Staph aureus"
          ]
        }
      ]
    },
    "soal_40": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Koagulase positif", "Staphylococcus aureus", "plasma menggumpal"],
          "variasi_id": [
            "Staphylococcus aureus",
            "Koagulase positif",
            "Plasma menggumpal",
            "Infeksi kulit"
          ],
          "variasi_en": [
            "Staphylococcus aureus",
            "Coagulase positive",
            "Plasma clotted",
            "Skin infection"
          ]
        },
        {
          "label": "B",
          "keywords": ["infeksi kulit", "skin infection", "bisul", "abses"],
          "variasi_id": [
            "Infeksi kulit",
            "Bisul",
            "Abses",
            "Folikulitis",
            "Pneumonia",
            "Sepsis",
            "Food poisoning"
          ],
          "variasi_en": [
            "Skin infection",
            "Boil",
            "Abscess",
            "Folliculitis",
            "Pneumonia",
            "Sepsis",
            "Food poisoning"
          ]
        }
      ]
    },
    "soal_41": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["MSA", "kuning", "Staphylococcus aureus", "fermentasi manitol"],
          "variasi_id": [
            "Staphylococcus aureus",
            "Mannitol Salt Agar",
            "Fermentasi manitol",
            "Kuning",
            "MSA"
          ],
          "variasi_en": [
            "Staphylococcus aureus",
            "Mannitol Salt Agar",
            "Mannitol fermentation",
            "Yellow",
            "MSA"
          ]
        },
        {
          "label": "B",
          "keywords": ["fermentasi manitol", "mannitol fermentation", "asam"],
          "variasi_id": [
            "Fermentasi manitol",
            "Asam",
            "Manitol positif"
          ],
          "variasi_en": [
            "Mannitol fermentation",
            "Acid",
            "Mannitol positive"
          ]
        }
      ]
    },
    "soal_42": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Novobiocin", "S. epidermidis", "S. saprophyticus"],
          "variasi_id": [
            "Uji novobiocin",
            "Novobiocin",
            "Novobiocin test"
          ],
          "variasi_en": [
            "Novobiocin test",
            "Novobiocin"
          ]
        },
        {
          "label": "B",
          "keywords": ["resisten", "S. saprophyticus"],
          "variasi_id": [
            "S. saprophyticus resisten",
            "Resisten",
            "R",
            "Tahan novobiocin"
          ],
          "variasi_en": [
            "S. saprophyticus resistant",
            "Resistant",
            "R"
          ]
        }
      ]
    },
    "soal_43": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Streptococcus", "kokus", "rantai", "katalase negatif"],
          "variasi_id": [
            "Streptococcus",
            "Katalase negatif",
            "Rantai",
            "Beta-hemolitik"
          ],
          "variasi_en": [
            "Streptococcus",
            "Catalase negative",
            "Chains",
            "Beta-hemolytic"
          ]
        },
        {
          "label": "B",
          "keywords": ["Streptococcus pyogenes", "S. pyogenes"],
          "variasi_id": [
            "Streptococcus pyogenes",
            "S. pyogenes",
            "Group A Streptococcus",
            "GAS"
          ],
          "variasi_en": [
            "Streptococcus pyogenes",
            "S. pyogenes",
            "Group A Streptococcus",
            "GAS"
          ]
        }
      ]
    },
    "soal_44": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Beta hemolysis", "zona jernih", "Streptococcus", "S. pyogenes"],
          "variasi_id": [
            "Beta hemolisis",
            "Hemolisis total",
            "Zona jernih",
            "Streptococcus pyogenes"
          ],
          "variasi_en": [
            "Beta hemolysis",
            "Complete hemolysis",
            "Clear zone",
            "Streptococcus pyogenes"
          ]
        },
        {
          "label": "B",
          "keywords": ["Streptococcus pyogenes", "S. pyogenes"],
          "variasi_id": [
            "Streptococcus pyogenes",
            "S. pyogenes",
            "Group A Streptococcus"
          ],
          "variasi_en": [
            "Streptococcus pyogenes",
            "S. pyogenes",
            "Group A Streptococcus"
          ]
        }
      ]
    },
    "soal_45": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Mycobacterium leprae", "ZN", "batang merah", "makrofag", "kusta"],
          "variasi_id": [
            "Mycobacterium leprae",
            "Kusta",
            "Basil tahan asam",
            "Makrofag",
            "Batang merah"
          ],
          "variasi_en": [
            "Mycobacterium leprae",
            "Leprosy",
            "Acid-fast bacilli",
            "Macrophages",
            "Red rods"
          ]
        },
        {
          "label": "B",
          "keywords": ["kerokan kulit", "skin scraping", "biopsi saraf", "hapusan hidung"],
          "variasi_id": [
            "Kerokan kulit",
            "Swap lesi",
            "Biopsi saraf",
            "Hapusan hidung"
          ],
          "variasi_en": [
            "Skin scraping",
            "Lesion swab",
            "Nerve biopsy",
            "Nasal smear"
          ]
        }
      ]
    },
    "soal_46": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Media selektif", "M. leprae", "Lowenstein-Jensen"],
          "variasi_id": [
            "Lowenstein-Jensen",
            "LJ",
            "Media selektif",
            "Media LJ"
          ],
          "variasi_en": [
            "Lowenstein-Jensen",
            "LJ",
            "Selective medium"
          ]
        },
        {
          "label": "B",
          "keywords": ["pertumbuhan lambat", "slow growth", "koloni krem"],
          "variasi_id": [
            "Pertumbuhan lambat",
            "Koloni krem",
            "Tidak dapat dikultur in vitro"
          ],
          "variasi_en": [
            "Slow growth",
            "Cream colonies",
            "Cannot be cultured in vitro"
          ]
        }
      ]
    },
    "soal_47": {
      "topik": "Staphylococcus, Streptococcus, MRSA, M. leprae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["MRSA", "mecA", "cefoxitin", "resisten"],
          "variasi_id": [
            "MRSA",
            "Methicillin-resistant Staphylococcus aureus",
            "Resisten"
          ],
          "variasi_en": [
            "MRSA",
            "Methicillin-resistant Staphylococcus aureus",
            "Resistant"
          ]
        },
        {
          "label": "B",
          "keywords": ["mecA"],
          "variasi_id": [
            "mecA",
            "mec A",
            "PBP2a"
          ],
          "variasi_en": [
            "mecA",
            "mec A",
            "PBP2a"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 7: NEISSERIA, BACTERIAL VAGINOSIS, ANAEROB (8 Soal)
    // ============================================
    "soal_48": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Neisseria gonorrhoeae", "diplokokus", "PMN", "Gram negatif", "gonore"],
          "variasi_id": [
            "Neisseria gonorrhoeae",
            "Gonore",
            "Diplokokus Gram negatif",
            "Leukosit PMN"
          ],
          "variasi_en": [
            "Neisseria gonorrhoeae",
            "Gonorrhea",
            "Gram-negative diplococci",
            "PMN leukocytes"
          ]
        },
        {
          "label": "B",
          "keywords": ["Thayer-Martin", "MTM", "GC agar"],
          "variasi_id": [
            "Thayer-Martin",
            "Thayer Martin",
            "MTM",
            "Modified Thayer-Martin",
            "GC agar"
          ],
          "variasi_en": [
            "Thayer-Martin",
            "Thayer Martin",
            "MTM",
            "Modified Thayer-Martin",
            "GC agar"
          ]
        }
      ]
    },
    "soal_49": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Clue cell", "sel epitel"],
          "variasi_id": [
            "Clue cell",
            "Sel epitel",
            "Bakteri menempel"
          ],
          "variasi_en": [
            "Clue cell",
            "Epithelial cell",
            "Attached bacteria"
          ]
        },
        {
          "label": "B",
          "keywords": ["bacterial vaginosis", "Gardnerella"],
          "variasi_id": [
            "Bacterial vaginosis",
            "Gardnerella",
            "Vaginosis bakterial"
          ],
          "variasi_en": [
            "Bacterial vaginosis",
            "Gardnerella"
          ]
        }
      ]
    },
    "soal_50": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Nugent", "Lactobacillus", "Gardnerella", "Mobiluncus"],
          "variasi_id": [
            "Skor Nugent",
            "Morfotipe",
            "Lactobacillus",
            "Gardnerella",
            "Mobiluncus"
          ],
          "variasi_en": [
            "Nugent score",
            "Morphotype",
            "Lactobacillus",
            "Gardnerella",
            "Mobiluncus"
          ]
        },
        {
          "label": "B",
          "keywords": ["Lactobacillus", "Gardnerella", "Mobiluncus"],
          "variasi_id": [
            "Lactobacillus",
            "Gardnerella",
            "Mobiluncus"
          ],
          "variasi_en": [
            "Lactobacillus",
            "Gardnerella",
            "Mobiluncus"
          ]
        }
      ]
    },
    "soal_51": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Clostridium", "spora", "anaerob", "Gram positif"],
          "variasi_id": [
            "Clostridium",
            "Spora terminal",
            "Anaerob",
            "Gram positif"
          ],
          "variasi_en": [
            "Clostridium",
            "Terminal spore",
            "Anaerobic",
            "Gram-positive"
          ]
        },
        {
          "label": "B",
          "keywords": ["Clostridium perfringens", "Clostridium tetani"],
          "variasi_id": [
            "Clostridium perfringens",
            "C. perfringens",
            "Clostridium tetani",
            "C. tetani",
            "Clostridium botulinum"
          ],
          "variasi_en": [
            "Clostridium perfringens",
            "C. perfringens",
            "Clostridium tetani",
            "C. tetani",
            "Clostridium botulinum"
          ]
        }
      ]
    },
    "soal_52": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Gas pack", "evacuation replacement", "anaerob", "anaerobic jar", "palladium"],
          "variasi_id": [
            "Gas pack",
            "Gas generating kit",
            "Hydrogen + palladium catalyst"
          ],
          "variasi_en": [
            "Gas pack",
            "Gas generating kit",
            "Hydrogen + palladium catalyst"
          ]
        },
        {
          "label": "B",
          "keywords": ["evacuation replacement", "gas replacement", "vacuum pump"],
          "variasi_id": [
            "Evacuation replacement",
            "Gas replacement",
            "Evakuasi dan penggantian gas",
            "Vacuum pump",
            "Pompa vakum"
          ],
          "variasi_en": [
            "Evacuation replacement",
            "Gas replacement",
            "Vacuum pump"
          ]
        }
      ]
    },
    "soal_53": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Methylene blue", "indikator anaerob", "resazurin"],
          "variasi_id": [
            "Methylene blue",
            "Metilen biru",
            "Resazurin",
            "Anaerobic indicator"
          ],
          "variasi_en": [
            "Methylene blue",
            "Resazurin",
            "Anaerobic indicator"
          ]
        },
        {
          "label": "B",
          "keywords": ["biru", "tidak berwarna", "colorless"],
          "variasi_id": [
            "Tidak berwarna",
            "Menjadi bening",
            "Biru ke tidak berwarna"
          ],
          "variasi_en": [
            "Colorless",
            "Clear",
            "Blue to colorless"
          ]
        }
      ]
    },
    "soal_54": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Nugent", "skor 8", "bacterial vaginosis"],
          "variasi_id": [
            "Skor Nugent 8",
            "Bacterial vaginosis",
            "Vaginosis bakterial"
          ],
          "variasi_en": [
            "Nugent score 8",
            "Bacterial vaginosis"
          ]
        },
        {
          "label": "B",
          "keywords": ["Gardnerella", "Mobiluncus", "Bacteroides"],
          "variasi_id": [
            "Gardnerella vaginalis",
            "G. vaginalis",
            "Gardnerella",
            "Mobiluncus",
            "Bacteroides"
          ],
          "variasi_en": [
            "Gardnerella vaginalis",
            "G. vaginalis",
            "Gardnerella",
            "Mobiluncus",
            "Bacteroides"
          ]
        }
      ]
    },
    "soal_55": {
      "topik": "Neisseria, Bacterial Vaginosis, Anaerob",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Mobiluncus", "Gram negatif", "koma", "bacterial vaginosis"],
          "variasi_id": [
            "Mobiluncus",
            "Gram negatif",
            "Melengkung",
            "Koma",
            "Bacterial vaginosis"
          ],
          "variasi_en": [
            "Mobiluncus",
            "Gram-negative",
            "Curved",
            "Comma",
            "Bacterial vaginosis"
          ]
        },
        {
          "label": "B",
          "keywords": ["bacterial vaginosis", "vaginosis bakterial"],
          "variasi_id": [
            "Bacterial vaginosis",
            "Vaginosis bakterial",
            "BV"
          ],
          "variasi_en": [
            "Bacterial vaginosis",
            "BV"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 8: ENTEROBACTERALES (LF DAN NLF) (12 Soal)
    // ============================================
    "soal_56": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["MacConkey", "merah muda", "laktosa positif", "Escherichia coli", "LF"],
          "variasi_id": [
            "Escherichia coli",
            "Fermentasi laktosa",
            "Koloni merah muda",
            "LF",
            "Laktosa positif"
          ],
          "variasi_en": [
            "Escherichia coli",
            "Lactose fermentation",
            "Pink colonies",
            "LF",
            "Lactose positive"
          ]
        },
        {
          "label": "B",
          "keywords": ["Escherichia coli", "E. coli", "Klebsiella"],
          "variasi_id": [
            "Escherichia coli",
            "E. coli",
            "Klebsiella",
            "Enterobacter"
          ],
          "variasi_en": [
            "Escherichia coli",
            "E. coli",
            "Klebsiella",
            "Enterobacter"
          ]
        }
      ]
    },
    "soal_57": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["MacConkey", "tidak berwarna", "laktoza negatif", "Salmonella", "Shigella", "NLF"],
          "variasi_id": [
            "Salmonella",
            "Shigella",
            "Tidak memfermentasi laktoza",
            "NLF",
            "Tidak berwarna"
          ],
          "variasi_en": [
            "Salmonella",
            "Shigella",
            "Non-lactose fermenter",
            "NLF",
            "Colorless"
          ]
        },
        {
          "label": "B",
          "keywords": ["Salmonella", "Shigella", "Proteus", "Pseudomonas"],
          "variasi_id": [
            "Salmonella",
            "Shigella",
            "Proteus",
            "Pseudomonas"
          ],
          "variasi_en": [
            "Salmonella",
            "Shigella",
            "Proteus",
            "Pseudomonas"
          ]
        }
      ]
    },
    "soal_58": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["TSI", "slant merah", "butt kuning", "glukosa", "Alk/A", "Salmonella"],
          "variasi_id": [
            "TSI Alk/A",
            "Glukosa positif",
            "Laktosa negatif",
            "Salmonella"
          ],
          "variasi_en": [
            "TSI Alk/A",
            "Glucose positive",
            "Lactose negative",
            "Salmonella"
          ]
        },
        {
          "label": "B",
          "keywords": ["Salmonella", "Shigella", "Proteus"],
          "variasi_id": [
            "Salmonella",
            "Shigella",
            "Proteus"
          ],
          "variasi_en": [
            "Salmonella",
            "Shigella",
            "Proteus"
          ]
        }
      ]
    },
    "soal_59": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["TSI", "gas", "H2S", "butt hitam", "A/A H2S", "Salmonella"],
          "variasi_id": [
            "TSI A/A H2S",
            "Gas positif",
            "H2S positif",
            "Salmonella"
          ],
          "variasi_en": [
            "TSI A/A H2S",
            "Gas positive",
            "H2S positive",
            "Salmonella"
          ]
        },
        {
          "label": "B",
          "keywords": ["Salmonella", "Proteus", "Citrobacter"],
          "variasi_id": [
            "Salmonella",
            "Proteus",
            "Citrobacter"
          ],
          "variasi_en": [
            "Salmonella",
            "Proteus",
            "Citrobacter"
          ]
        }
      ]
    },
    "soal_60": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["IMViC", "Indole (+)", "MR (+)", "VP (-)", "Citrate (-)", "Escherichia coli"],
          "variasi_id": [
            "Escherichia coli",
            "IMViC ++--",
            "Indole positif",
            "MR positif",
            "Indole (+); MR (+); VP (-); Citrate (-)"
          ],
          "variasi_en": [
            "Escherichia coli",
            "IMViC ++--",
            "Indole positive",
            "MR positive",
            "Indole (+); MR (+); VP (-); Citrate (-)"
          ]
        },
        {
          "label": "B",
          "keywords": ["ISK", "UTI", "diare", "infeksi saluran kemih"],
          "variasi_id": [
            "ISK",
            "UTI",
            "Urinary tract infection",
            "Diare",
            "Infeksi saluran kemih"
          ],
          "variasi_en": [
            "UTI",
            "Urinary tract infection",
            "Diarrhea"
          ]
        }
      ]
    },
    "soal_61": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Salmonella", "Shigella", "Arabinosa", "Rhamnosa", "Manitol", "fermentasi"],
          "variasi_id": [
            "Salmonella: Arabinosa (+), Rhamnosa (+); Shigella: Manitol (+), Arabinosa (-)",
            "Salmonella: Arabinosa (+); Shigella: Manitol (+)"
          ],
          "variasi_en": [
            "Salmonella: Arabinose (+), Rhamnose (+); Shigella: Mannitol (+), Arabinose (-)",
            "Salmonella: Arabinose (+); Shigella: Mannitol (+)"
          ]
        },
        {
          "label": "B",
          "keywords": ["Manitol", "mannitol", "Shigella"],
          "variasi_id": [
            "Shigella: Manitol (+)",
            "Manitol",
            "Mannitol"
          ],
          "variasi_en": [
            "Shigella: Mannitol (+)",
            "Mannitol"
          ]
        }
      ]
    },
    "soal_62": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["SS Agar", "tidak berwarna", "pusat hitam", "H2S", "Salmonella"],
          "variasi_id": [
            "Salmonella",
            "SS Agar",
            "H2S positif",
            "Pusat hitam"
          ],
          "variasi_en": [
            "Salmonella",
            "SS Agar",
            "H2S positive",
            "Black center"
          ]
        },
        {
          "label": "B",
          "keywords": ["Salmonella", "Proteus", "Citrobacter"],
          "variasi_id": [
            "Salmonella",
            "Proteus",
            "Citrobacter"
          ],
          "variasi_en": [
            "Salmonella",
            "Proteus",
            "Citrobacter"
          ]
        }
      ]
    },
    "soal_63": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["SS Agar", "selektif", "Salmonella", "Shigella"],
          "variasi_id": [
            "SS Agar",
            "Media selektif",
            "Salmonella",
            "Shigella"
          ],
          "variasi_en": [
            "SS Agar",
            "Selective medium",
            "Salmonella",
            "Shigella"
          ]
        },
        {
          "label": "B",
          "keywords": ["pH indicator", "phenol red", "fenol merah"],
          "variasi_id": [
            "Phenol red",
            "Fenol merah",
            "Neutral red",
            "Bromthymol blue"
          ],
          "variasi_en": [
            "Phenol red",
            "Neutral red",
            "Bromthymol blue"
          ]
        }
      ]
    },
    "soal_64": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["TSI", "merah", "Alk/Alk", "non-fermenter", "Pseudomonas", "Acinetobacter"],
          "variasi_id": [
            "TSI Alk/Alk",
            "Tidak fermentasi",
            "Pseudomonas",
            "Acinetobacter",
            "Non-fermenter"
          ],
          "variasi_en": [
            "TSI Alk/Alk",
            "Non-fermenter",
            "Pseudomonas",
            "Acinetobacter"
          ]
        },
        {
          "label": "B",
          "keywords": ["Pseudomonas", "Acinetobacter", "Stenotrophomonas"],
          "variasi_id": [
            "Pseudomonas",
            "Acinetobacter",
            "Stenotrophomonas",
            "Burkholderia"
          ],
          "variasi_en": [
            "Pseudomonas",
            "Acinetobacter",
            "Stenotrophomonas",
            "Burkholderia"
          ]
        }
      ]
    },
    "soal_65": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Swarming", "Proteus", "Nutrient Agar", "motil"],
          "variasi_id": [
            "Proteus",
            "Swarming",
            "Nutrient Agar",
            "Motil"
          ],
          "variasi_en": [
            "Proteus",
            "Swarming",
            "Nutrient Agar",
            "Motile"
          ]
        },
        {
          "label": "B",
          "keywords": ["urease positif", "motil", "swarming"],
          "variasi_id": [
            "Urease positif",
            "Motil",
            "Swarming",
            "H2S positif"
          ],
          "variasi_en": [
            "Urease positive",
            "Motile",
            "Swarming",
            "H2S positive"
          ]
        }
      ]
    },
    "soal_66": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Proteus mirabilis", "Escherichia coli", "urease", "indole", "motilitas"],
          "variasi_id": [
            "Proteus: urease (+), motil (+); E. coli: indole (+), MR (+)",
            "Proteus: urease (+); E. coli: indole (+)"
          ],
          "variasi_en": [
            "Proteus: urease (+), motile (+); E. coli: indole (+), MR (+)",
            "Proteus: urease (+); E. coli: indole (+)"
          ]
        },
        {
          "label": "B",
          "keywords": ["indole", "MR", "motilitas"],
          "variasi_id": [
            "Indole",
            "MR",
            "Motilitas",
            "Urease"
          ],
          "variasi_en": [
            "Indole",
            "MR",
            "Motility",
            "Urease"
          ]
        }
      ]
    },
    "soal_67": {
      "topik": "Enterobacterales (LF dan NLF)",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Oksidase", "Enterobacteriaceae", "negatif", "Plesiomonas"],
          "variasi_id": [
            "Oksidase negatif",
            "Enterobacteriaceae",
            "Plesiomonas pengecualian"
          ],
          "variasi_en": [
            "Oxidase negative",
            "Enterobacteriaceae",
            "Plesiomonas exception"
          ]
        },
        {
          "label": "B",
          "keywords": ["Plesiomonas", "Aeromonas"],
          "variasi_id": [
            "Plesiomonas",
            "Plesiomonas shigelloides",
            "Aeromonas"
          ],
          "variasi_en": [
            "Plesiomonas",
            "Plesiomonas shigelloides",
            "Aeromonas"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 9: MYCOBACTERIUM TUBERCULOSIS, C. DIPHTHERIAE (8 Soal)
    // ============================================
    "soal_68": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Ziehl-Neelsen", "7 batang", "IUATLD", "scanty", "BTA"],
          "variasi_id": [
            "Scanty",
            "1-9 BTA per 100 lapang",
            "IUATLD",
            "Ziehl-Neelsen"
          ],
          "variasi_en": [
            "Scanty",
            "1-9 AFB per 100 fields",
            "IUATLD",
            "Ziehl-Neelsen"
          ]
        },
        {
          "label": "B",
          "keywords": ["carbol fuchsin", "karbol fuksin"],
          "variasi_id": [
            "Carbol fuchsin",
            "Karbol fuksin",
            "Fuchsin",
            "Fuksin"
          ],
          "variasi_en": [
            "Carbol fuchsin",
            "Fuchsin"
          ]
        }
      ]
    },
    "soal_69": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Sputum", "kualitas", "sel epitel", "PMN", "saliva"],
          "variasi_id": [
            "Tidak berkualitas",
            "Banyak sel epitel",
            "Sedikit PMN",
            "Saliva"
          ],
          "variasi_en": [
            "Not good quality",
            "Many epithelial cells",
            "Few PMN",
            "Saliva"
          ]
        },
        {
          "label": "B",
          "keywords": ["sel epitel", "PMN", "saliva"],
          "variasi_id": [
            "Banyak sel epitel",
            "Sedikit PMN",
            "Kontaminasi saliva"
          ],
          "variasi_en": [
            "Many epithelial cells",
            "Few PMN",
            "Saliva contamination"
          ]
        }
      ]
    },
    "soal_70": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Lowenstein-Jensen", "kultur", "M. tuberculosis", "koloni krem"],
          "variasi_id": [
            "Lowenstein-Jensen",
            "Kultur",
            "M. tuberculosis",
            "Koloni krem",
            "MGIT",
            "7H9"
          ],
          "variasi_en": [
            "Lowenstein-Jensen",
            "Culture",
            "M. tuberculosis",
            "Cream colonies",
            "MGIT",
            "7H9"
          ]
        },
        {
          "label": "B",
          "keywords": ["pertumbuhan lambat", "koloni krem", "rough"],
          "variasi_id": [
            "Pertumbuhan lambat",
            "Koloni krem",
            "Rough",
            "Berbutir"
          ],
          "variasi_en": [
            "Slow growth",
            "Cream colonies",
            "Rough"
          ]
        }
      ]
    },
    "soal_71": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Neisser", "Corynebacterium diphtheriae", "granula", "huruf Cina"],
          "variasi_id": [
            "Corynebacterium diphtheriae",
            "Neisser",
            "Granula",
            "Huruf Cina"
          ],
          "variasi_en": [
            "Corynebacterium diphtheriae",
            "Neisser",
            "Granules",
            "Chinese letters"
          ]
        },
        {
          "label": "B",
          "keywords": ["Loeffler's serum", "Tellurite", "Tinsdale"],
          "variasi_id": [
            "Loeffler's serum",
            "Loeffler serum",
            "Tellurite",
            "Tinsdale",
            "Blood Agar"
          ],
          "variasi_en": [
            "Loeffler's serum",
            "Tellurite",
            "Tinsdale",
            "Blood Agar"
          ]
        }
      ]
    },
    "soal_72": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Elek", "toksigenisitas", "precipitin line", "antitoksin"],
          "variasi_id": [
            "Uji Elek",
            "Toksigenisitas",
            "Precipitin line",
            "Antitoksin"
          ],
          "variasi_en": [
            "Elek test",
            "Toxigenicity",
            "Precipitin line",
            "Antitoxin"
          ]
        },
        {
          "label": "B",
          "keywords": ["precipitin line", "antitoksin", "antigen-antibodi"],
          "variasi_id": [
            "Precipitin line",
            "Garis presipitasi",
            "Antitoksin",
            "Reaksi antigen-antibodi"
          ],
          "variasi_en": [
            "Precipitin line",
            "Antitoxin",
            "Antigen-antibody reaction"
          ]
        }
      ]
    },
    "soal_73": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["LJ", "MGIT", "7H9", "solid", "liquid"],
          "variasi_id": [
            "LJ solid",
            "MGIT liquid",
            "7H9",
            "Padat vs cair"
          ],
          "variasi_en": [
            "LJ solid",
            "MGIT liquid",
            "7H9",
            "Solid vs liquid"
          ]
        },
        {
          "label": "B",
          "keywords": ["LJ visual", "MGIT fluorescent", "fluoresensi"],
          "variasi_id": [
            "LJ visual",
            "MGIT fluorescent",
            "Fluoresensi",
            "Indikator",
            "Manual vs otomatis"
          ],
          "variasi_en": [
            "LJ visual",
            "MGIT fluorescent",
            "Fluorescence",
            "Indicator",
            "Manual vs automated"
          ]
        }
      ]
    },
    "soal_74": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Corynebacterium diphtheriae", "media selektif", "Loeffler's serum"],
          "variasi_id": [
            "Loeffler's serum",
            "Media selektif",
            "C. diphtheriae",
            "Morfologi"
          ],
          "variasi_en": [
            "Loeffler's serum",
            "Selective medium",
            "C. diphtheriae",
            "Morphology"
          ]
        },
        {
          "label": "B",
          "keywords": ["batang", "Gram positif", "huruf Cina", "granula"],
          "variasi_id": [
            "Batang",
            "Gram positif",
            "Huruf Cina",
            "Granula",
            "Club-shaped"
          ],
          "variasi_en": [
            "Rods",
            "Gram-positive",
            "Chinese letter",
            "Granules",
            "Club-shaped"
          ]
        }
      ]
    },
    "soal_75": {
      "topik": "Mycobacterium tuberculosis, C. diphtheriae",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Ziehl-Neelsen", "carbol fuchsin", "BTA", "merah"],
          "variasi_id": [
            "Ziehl-Neelsen",
            "Carbol fuchsin",
            "BTA",
            "Merah"
          ],
          "variasi_en": [
            "Ziehl-Neelsen",
            "Carbol fuchsin",
            "AFB",
            "Red"
          ]
        },
        {
          "label": "B",
          "keywords": ["carbol fuchsin", "karbol fuksin"],
          "variasi_id": [
            "Carbol fuchsin",
            "Karbol fuksin",
            "Fuchsin"
          ],
          "variasi_en": [
            "Carbol fuchsin",
            "Fuchsin"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 10: MYCOLOGI KEDOKTERAN (5 Soal)
    // ============================================
    "soal_76": {
      "topik": "Mycologi Kedokteran",
      "kategori": "Mikologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["GMS", "ragi", "dinding sel", "Candida"],
          "variasi_id": [
            "GMS",
            "Ragi",
            "Dinding sel",
            "Candida",
            "Cryptococcus",
            "Histoplasma"
          ],
          "variasi_en": [
            "GMS",
            "Yeast",
            "Cell wall",
            "Candida",
            "Cryptococcus",
            "Histoplasma"
          ]
        },
        {
          "label": "B",
          "keywords": ["kapsul", "adhesin", "biofilm", "enzim proteolitik"],
          "variasi_id": [
            "Kapsul",
            "Adhesin",
            "Biofilm",
            "Enzim proteolitik"
          ],
          "variasi_en": [
            "Capsule",
            "Adhesin",
            "Biofilm",
            "Proteolytic enzymes"
          ]
        }
      ]
    },
    "soal_77": {
      "topik": "Mycologi Kedokteran",
      "kategori": "Mikologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["India Ink", "halo", "kapsul", "Cryptococcus"],
          "variasi_id": [
            "India Ink",
            "Halo",
            "Kapsul",
            "Cryptococcus"
          ],
          "variasi_en": [
            "India Ink",
            "Halo",
            "Capsule",
            "Cryptococcus"
          ]
        },
        {
          "label": "B",
          "keywords": ["kapsul", "capsule", "halo"],
          "variasi_id": [
            "Kapsul",
            "Halo",
            "Polisakarida kapsul"
          ],
          "variasi_en": [
            "Capsule",
            "Halo",
            "Capsular polysaccharide"
          ]
        }
      ]
    },
    "soal_78": {
      "topik": "Mycologi Kedokteran",
      "kategori": "Mikologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Paracoccidioides", "hifa", "tidak bersekat", "GMS"],
          "variasi_id": [
            "Paracoccidioides",
            "Hifa",
            "Tidak bersekat",
            "GMS",
            "Sporothrix",
            "Blastomyces"
          ],
          "variasi_en": [
            "Paracoccidioides",
            "Hyphae",
            "Non-septate",
            "GMS",
            "Sporothrix",
            "Blastomyces"
          ]
        },
        {
          "label": "B",
          "keywords": ["hifa", "tidak bersekat", "ragi", "multiple budding"],
          "variasi_id": [
            "Hifa",
            "Tidak bersekat",
            "Ragi",
            "Multiple budding"
          ],
          "variasi_en": [
            "Hyphae",
            "Non-septate",
            "Yeast",
            "Multiple budding"
          ]
        }
      ]
    },
    "soal_79": {
      "topik": "Mycologi Kedokteran",
      "kategori": "Mikologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Pneumocystis", "GMS", "ragi", "imunokompromais"],
          "variasi_id": [
            "Pneumocystis",
            "GMS",
            "Ragi",
            "Imunokompromais",
            "Pneumocystis jirovecii",
            "P. jirovecii"
          ],
          "variasi_en": [
            "Pneumocystis",
            "GMS",
            "Yeast",
            "Immunocompromised",
            "Pneumocystis jirovecii",
            "P. jirovecii"
          ]
        },
        {
          "label": "B",
          "keywords": ["ragi bulat", "dinding sel", "hitam"],
          "variasi_id": [
            "Ragi bulat",
            "Dinding sel",
            "Hitam"
          ],
          "variasi_en": [
            "Round yeast",
            "Cell wall",
            "Black"
          ]
        }
      ]
    },
    "soal_80": {
      "topik": "Mycologi Kedokteran",
      "kategori": "Mikologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Mucormycosis", "hifa", "tidak bersekat", "GMS"],
          "variasi_id": [
            "Mucormycosis",
            "Hifa",
            "Tidak bersekat",
            "GMS",
            "Mucor",
            "Rhizopus",
            "Absidia"
          ],
          "variasi_en": [
            "Mucormycosis",
            "Hyphae",
            "Non-septate",
            "GMS",
            "Mucor",
            "Rhizopus",
            "Absidia"
          ]
        },
        {
          "label": "B",
          "keywords": ["Mucormycosis", "Zygomycosis", "mukormikosis"],
          "variasi_id": [
            "Mucormycosis",
            "Zygomycosis",
            "Mukormikosis"
          ],
          "variasi_en": [
            "Mucormycosis",
            "Zygomycosis"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 11: VIROLOGI KEDOKTERAN (6 Soal)
    // ============================================
    "soal_81": {
      "topik": "Virologi Kedokteran",
      "kategori": "Virologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Virus", "kapsid", "asam nukleat", "envelope", "capsomere"],
          "variasi_id": [
            "Kapsid",
            "Asam nukleat",
            "Envelope",
            "Capsomere"
          ],
          "variasi_en": [
            "Capsid",
            "Nucleic acid",
            "Envelope",
            "Capsomere"
          ]
        },
        {
          "label": "B",
          "keywords": ["asam nukleat", "envelope", "capsomere", "DNA", "RNA"],
          "variasi_id": [
            "Asam nukleat",
            "Envelope",
            "Capsomere",
            "DNA",
            "RNA"
          ],
          "variasi_en": [
            "Nucleic acid",
            "Envelope",
            "Capsomere",
            "DNA",
            "RNA"
          ]
        }
      ]
    },
    "soal_82": {
      "topik": "Virologi Kedokteran",
      "kategori": "Virologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["PCR", "sensitif", "materi genetik", "NAAT"],
          "variasi_id": [
            "PCR",
            "Sensitif",
            "Materi genetik",
            "NAAT",
            "qPCR",
            "Real-Time PCR"
          ],
          "variasi_en": [
            "PCR",
            "Sensitive",
            "Genetic material",
            "NAAT",
            "qPCR",
            "Real-Time PCR"
          ]
        },
        {
          "label": "B",
          "keywords": ["sensitif", "spesifik", "cepat", "tidak perlu kultur"],
          "variasi_id": [
            "Sensitif",
            "Spesifik",
            "Cepat",
            "Tidak perlu kultur"
          ],
          "variasi_en": [
            "Sensitive",
            "Specific",
            "Rapid",
            "No culture needed"
          ]
        }
      ]
    },
    "soal_83": {
      "topik": "Virologi Kedokteran",
      "kategori": "Virologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["ELISA", "antigen-antibodi", "enzim", "substrat", "warna"],
          "variasi_id": [
            "ELISA",
            "Antigen-antibodi",
            "Enzim",
            "Substrat",
            "Warna kuning"
          ],
          "variasi_en": [
            "ELISA",
            "Antigen-antibody",
            "Enzyme",
            "Substrate",
            "Yellow color"
          ]
        },
        {
          "label": "B",
          "keywords": ["ELISA reader", "spectrophotometer", "spektrofotometer"],
          "variasi_id": [
            "ELISA reader",
            "Spectrophotometer",
            "Spektrofotometer",
            "Plate reader"
          ],
          "variasi_en": [
            "ELISA reader",
            "Spectrophotometer",
            "Plate reader"
          ]
        }
      ]
    },
    "soal_84": {
      "topik": "Virologi Kedokteran",
      "kategori": "Virologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["PCR", "kultur", "keuntungan", "cepat", "sensitif"],
          "variasi_id": [
            "PCR lebih cepat",
            "Lebih sensitif",
            "Tidak perlu kultur",
            "Cepat"
          ],
          "variasi_en": [
            "PCR faster",
            "More sensitive",
            "No culture needed",
            "Fast"
          ]
        },
        {
          "label": "B",
          "keywords": ["sensitif", "spesifik", "lebih sensitif"],
          "variasi_id": [
            "Lebih sensitif",
            "Sensitif",
            "Spesifik"
          ],
          "variasi_en": [
            "More sensitive",
            "Sensitive",
            "Specific"
          ]
        }
      ]
    },
    "soal_85": {
      "topik": "Virologi Kedokteran",
      "kategori": "Virologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Elektroforesis", "200 bp", "pita DNA", "interpretasi"],
          "variasi_id": [
            "Pita DNA 200 bp",
            "Interpretasi",
            "Produk PCR"
          ],
          "variasi_en": [
            "DNA band 200 bp",
            "Interpretation",
            "PCR product"
          ]
        },
        {
          "label": "B",
          "keywords": ["ukuran DNA", "konsentrasi gel", "voltase", "waktu"],
          "variasi_id": [
            "Ukuran DNA",
            "Konsentrasi gel",
            "Voltase",
            "Waktu"
          ],
          "variasi_en": [
            "DNA size",
            "Gel concentration",
            "Voltage",
            "Time"
          ]
        }
      ]
    },
    "soal_86": {
      "topik": "Virologi Kedokteran",
      "kategori": "Virologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["PCR konvensional", "qPCR", "real-time", "kuantitatif"],
          "variasi_id": [
            "PCR konvensional endpoint; qPCR real-time; Kuantitatif",
            "PCR konvensional; qPCR; Real-time",
            "PCR konvensional; qPCR; Kuantitatif"
          ],
          "variasi_en": [
            "Conventional PCR endpoint; qPCR real-time; Quantitative",
            "Conventional PCR; qPCR; Real-time",
            "Conventional PCR; qPCR; Quantitative"
          ]
        },
        {
          "label": "B",
          "keywords": ["kuantitatif", "real-time", "tidak perlu gel"],
          "variasi_id": [
            "Kuantitatif",
            "Real-time",
            "Tidak perlu gel",
            "Lebih cepat"
          ],
          "variasi_en": [
            "Quantitative",
            "Real-time",
            "No gel needed",
            "Faster"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 12: BAKTERIOLOGI SEPSIS & IMUNOLOGI (8 Soal)
    // ============================================
    "soal_87": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Kultur darah", "volume", "dewasa", "20 mL", "Bactec"],
          "variasi_id": [
            "20 mL per set",
            "10 mL per botol",
            "Dewasa"
          ],
          "variasi_en": [
            "20 mL per set",
            "10 mL per bottle",
            "Adult"
          ]
        },
        {
          "label": "B",
          "keywords": ["teknik aseptik", "desinfeksi kulit", "kontaminasi kulit"],
          "variasi_id": [
            "Teknik aseptik",
            "Desinfeksi kulit",
            "Kontaminasi kulit"
          ],
          "variasi_en": [
            "Aseptic technique",
            "Skin disinfection",
            "Skin contamination"
          ]
        }
      ]
    },
    "soal_88": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Kontaminasi", "coagulase-negative Staphylococcus", "satu botol"],
          "variasi_id": [
            "Kontaminasi",
            "Koagulase-negatif Staphylococcus",
            "Satu botol positif"
          ],
          "variasi_en": [
            "Contamination",
            "Coagulase-negative Staphylococcus",
            "One bottle positive"
          ]
        },
        {
          "label": "B",
          "keywords": ["ulangi kultur", "repeat culture", "kultur ulang"],
          "variasi_id": [
            "Ulangi kultur",
            "Kultur ulang",
            "Ambil darah baru",
            "New blood sample"
          ],
          "variasi_en": [
            "Repeat culture",
            "New blood sample"
          ]
        }
      ]
    },
    "soal_89": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["SIRS", "suhu", "detak jantung", "pernapasan", "leukosit"],
          "variasi_id": [
            "Suhu >38°C atau <36°C",
            "HR >90",
            "RR >20",
            "Leukosit >12 atau <4"
          ],
          "variasi_en": [
            "Temperature >38°C or <36°C",
            "HR >90",
            "RR >20",
            "WBC >12 or <4"
          ]
        },
        {
          "label": "B",
          "keywords": ["HR", "RR", "Leukosit", "WBC"],
          "variasi_id": [
            "HR >90",
            "RR >20",
            "Leukosit >12 atau <4"
          ],
          "variasi_en": [
            "HR >90",
            "RR >20",
            "WBC >12 or <4"
          ]
        }
      ]
    },
    "soal_90": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Procalcitonin", "biomarker", "sepsis", "infeksi sistemik"],
          "variasi_id": [
            "Procalcitonin",
            "Biomarker",
            "Sepsis",
            "Infeksi sistemik",
            "CRP",
            "C-reactive protein"
          ],
          "variasi_en": [
            "Procalcitonin",
            "Biomarker",
            "Sepsis",
            "Systemic infection",
            "CRP",
            "C-reactive protein"
          ]
        },
        {
          "label": "B",
          "keywords": ["membedakan bakteri vs virus", "spesifik", "cepat"],
          "variasi_id": [
            "Membedakan bakteri vs virus",
            "Spesifik",
            "Cepat"
          ],
          "variasi_en": [
            "Distinguish bacterial vs viral",
            "Specific",
            "Rapid"
          ]
        }
      ]
    },
    "soal_91": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Kultur darah", "Gram positif kokus", "Staphylococcus", "Streptococcus"],
          "variasi_id": [
            "Staphylococcus aureus",
            "Streptococcus pneumoniae",
            "Kokus Gram positif"
          ],
          "variasi_en": [
            "Staphylococcus aureus",
            "Streptococcus pneumoniae",
            "Gram-positive cocci"
          ]
        },
        {
          "label": "B",
          "keywords": ["thioglycolate", "media thioglikolat"],
          "variasi_id": [
            "Thioglycolate",
            "Media thioglikolat",
            "Anaerobic blood agar",
            "Bactec anaerobic"
          ],
          "variasi_en": [
            "Thioglycolate",
            "Anaerobic blood agar",
            "Bactec anaerobic"
          ]
        }
      ]
    },
    "soal_92": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Kultur darah", "polimikrobial", "interpretasi", "kontaminasi"],
          "variasi_id": [
            "Polimikrobial",
            "Kontaminasi",
            "Infeksi campuran"
          ],
          "variasi_en": [
            "Polymicrobial",
            "Contamination",
            "Mixed infection"
          ]
        },
        {
          "label": "B",
          "keywords": ["kontaminasi", "teknik aseptik", "infeksi polimikrobial"],
          "variasi_id": [
            "Kontaminasi",
            "Teknik aseptik",
            "Infeksi polimikrobial"
          ],
          "variasi_en": [
            "Contamination",
            "Aseptic technique",
            "Polymicrobial infection"
          ]
        }
      ]
    },
    "soal_93": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Kultur darah", "organisme", "Staphylococcus aureus", "E. coli"],
          "variasi_id": [
            "Staphylococcus aureus",
            "Escherichia coli",
            "Pseudomonas aeruginosa"
          ],
          "variasi_en": [
            "Staphylococcus aureus",
            "Escherichia coli",
            "Pseudomonas aeruginosa"
          ]
        },
        {
          "label": "B",
          "keywords": ["Escherichia coli", "Pseudomonas aeruginosa", "Klebsiella"],
          "variasi_id": [
            "Escherichia coli",
            "Pseudomonas aeruginosa",
            "Klebsiella",
            "Streptococcus",
            "Staphylococcus epidermidis"
          ],
          "variasi_en": [
            "Escherichia coli",
            "Pseudomonas aeruginosa",
            "Klebsiella",
            "Streptococcus",
            "Staphylococcus epidermidis"
          ]
        }
      ]
    },
    "soal_94": {
      "topik": "Bakteriologi Sepsis & Imunologi",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Kultur darah", "Staphylococcus aureus", "interpretasi", "true bacteremia"],
          "variasi_id": [
            "True bacteremia",
            "Staphylococcus aureus",
            "Interpretasi",
            "Bakteremia sejati"
          ],
          "variasi_en": [
            "True bacteremia",
            "Staphylococcus aureus",
            "Interpretation"
          ]
        },
        {
          "label": "B",
          "keywords": ["uji kepekaan", "antibiotik", "identifikasi"],
          "variasi_id": [
            "Uji kepekaan",
            "Antibiotik",
            "Identifikasi"
          ],
          "variasi_en": [
            "Susceptibility testing",
            "Antibiotic",
            "Identification"
          ]
        }
      ]
    },

    // ============================================
    // TOPIK 13: ISK DAN INFEKSI GENITALIA (6 Soal)
    // ============================================
    "soal_95": {
      "topik": "ISK dan Infeksi Genitalia",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["MacConkey", "merah muda", "Escherichia coli", "ISK"],
          "variasi_id": [
            "Escherichia coli",
            "Fermentasi laktosa",
            "ISK",
            "Koloni merah muda"
          ],
          "variasi_en": [
            "Escherichia coli",
            "Lactose fermentation",
            "UTI",
            "Pink colonies"
          ]
        },
        {
          "label": "B",
          "keywords": ["fermentasi laktosa", "lactose fermentation", "LF"],
          "variasi_id": [
            "Fermentasi laktosa",
            "LF",
            "Lactose fermenter"
          ],
          "variasi_en": [
            "Lactose fermentation",
            "LF",
            "Lactose fermenter"
          ]
        }
      ]
    },
    "soal_96": {
      "topik": "ISK dan Infeksi Genitalia",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Urin", "midstream", ">10^5 CFU/mL", "ISK"],
          "variasi_id": [
            ">10^5 CFU/mL",
            "ISK",
            "Midstream urine",
            "Infeksi saluran kemih"
          ],
          "variasi_en": [
            ">10^5 CFU/mL",
            "UTI",
            "Midstream urine",
            "Urinary tract infection"
          ]
        },
        {
          "label": "B",
          "keywords": ["midstream", "porsi tengah", "clean catch"],
          "variasi_id": [
            "Midstream",
            "Porsi tengah",
            "Clean catch",
            "Kateter",
            "Suprapubik"
          ],
          "variasi_en": [
            "Midstream",
            "Clean catch",
            "Catheter",
            "Suprapubic"
          ]
        }
      ]
    },
    "soal_97": {
      "topik": "ISK dan Infeksi Genitalia",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Neisseria gonorrhoeae", "diplokokus", "PMN", "Thayer-Martin"],
          "variasi_id": [
            "Neisseria gonorrhoeae",
            "Diplokokus",
            "PMN",
            "Thayer-Martin"
          ],
          "variasi_en": [
            "Neisseria gonorrhoeae",
            "Diplococci",
            "PMN",
            "Thayer-Martin"
          ]
        },
        {
          "label": "B",
          "keywords": ["Thayer-Martin", "MTM", "GC agar"],
          "variasi_id": [
            "Thayer-Martin",
            "Thayer Martin",
            "MTM",
            "Modified Thayer-Martin",
            "GC agar"
          ],
          "variasi_en": [
            "Thayer-Martin",
            "Thayer Martin",
            "MTM",
            "Modified Thayer-Martin",
            "GC agar"
          ]
        }
      ]
    },
    "soal_98": {
      "topik": "ISK dan Infeksi Genitalia",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Urin", "penyimpanan", "4°C", "24 jam"],
          "variasi_id": [
            "Simpan di lemari es 4°C",
            "Maksimal 24 jam",
            "Jangan dibekukan"
          ],
          "variasi_en": [
            "Refrigerate at 4°C",
            "Maximum 24 hours",
            "Do not freeze"
          ]
        },
        {
          "label": "B",
          "keywords": ["pertumbuhan berlebih", "kontaminasi", "hasil palsu"],
          "variasi_id": [
            "Pertumbuhan berlebih",
            "Kontaminasi",
            "Hasil palsu"
          ],
          "variasi_en": [
            "Overgrowth",
            "Contamination",
            "False result"
          ]
        }
      ]
    },
    "soal_99": {
      "topik": "ISK dan Infeksi Genitalia",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["MacConkey", "tidak berwarna", "NLF", "Pseudomonas"],
          "variasi_id": [
            "Tidak berwarna",
            "NLF",
            "Pseudomonas",
            "ISK"
          ],
          "variasi_en": [
            "Colorless",
            "NLF",
            "Pseudomonas",
            "UTI"
          ]
        },
        {
          "label": "B",
          "keywords": ["Pseudomonas", "Proteus", "Salmonella", "Shigella"],
          "variasi_id": [
            "Pseudomonas",
            "Proteus",
            "Salmonella",
            "Shigella",
            "Acinetobacter"
          ],
          "variasi_en": [
            "Pseudomonas",
            "Proteus",
            "Salmonella",
            "Shigella",
            "Acinetobacter"
          ]
        }
      ]
    },
    "soal_100": {
      "topik": "ISK dan Infeksi Genitalia",
      "kategori": "Bakteriologi",
      "pertanyaan": [
        {
          "label": "A",
          "keywords": ["Nugent", "skor 8", "bacterial vaginosis", "Gardnerella"],
          "variasi_id": [
            "Skor Nugent 8",
            "Bacterial vaginosis",
            "Gardnerella"
          ],
          "variasi_en": [
            "Nugent score 8",
            "Bacterial vaginosis",
            "Gardnerella"
          ]
        },
        {
          "label": "B",
          "keywords": ["Gardnerella vaginalis", "G. vaginalis", "Mobiluncus"],
          "variasi_id": [
            "Gardnerella vaginalis",
            "G. vaginalis",
            "Gardnerella",
            "Mobiluncus",
            "Bacteroides"
          ],
          "variasi_en": [
            "Gardnerella vaginalis",
            "G. vaginalis",
            "Gardnerella",
            "Mobiluncus",
            "Bacteroides"
          ]
        }
      ]
    }
  }
};

// ============================================
// EXPORT & LOG
// ============================================
console.log("Kamus Mikrobiologi loaded:", Object.keys(KAMUS.kamus).length, "entri");