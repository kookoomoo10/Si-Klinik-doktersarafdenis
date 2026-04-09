// ================================================================
//  TEMPLATE KONFIGURASI — SALIN FILE INI JADI firebase-config.js
//  Lalu isi dengan nilai asli dari Firebase Console kamu.
//  JANGAN isi file ini dengan nilai asli!
// ================================================================

window.FIREBASE_CONFIG = {
  apiKey:            "GANTI_DENGAN_apiKey_KAMU",
  authDomain:        "GANTI_DENGAN_authDomain_KAMU",
  projectId:         "GANTI_DENGAN_projectId_KAMU",
  storageBucket:     "GANTI_DENGAN_storageBucket_KAMU",
  messagingSenderId: "GANTI_DENGAN_messagingSenderId_KAMU",
  appId:             "GANTI_DENGAN_appId_KAMU"
};

// UID bisa dilihat di Firebase Console > Authentication > Users
window.ROLE_MAP = {
  "UID_DOKTER_DARI_FIREBASE_AUTH" : "dokter",
  "UID_STAFF_DARI_FIREBASE_AUTH"  : "staff",
};

// Dari Google Cloud Console > APIs > Credentials (opsional)
window.GCAL_CLIENT_ID = "CLIENT_ID.apps.googleusercontent.com";

// Format internasional tanpa + dan spasi. Contoh: 6281234567890
window.WA_DOKTER = "628xxxxxxxxxx";
