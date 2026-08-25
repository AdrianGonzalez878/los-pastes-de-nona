export const site = {
  name: "Los Pastes de Nonna",
  shortName: "Pastes de Nonna",
  tagline: "Sabor, innovación y corazón oaxaqueño en cada relleno",
  description:
    "Pastes gourmet en Oaxaca de Juárez. Recetas únicas de Nonna, ingredientes de calidad y el toque de nuestra chef. Mole, chocolate y el paste estrella de carne árabe.",
  city: "Oaxaca de Juárez, Oaxaca",
  region: "Oaxaca",
  country: "México",
  locale: "es_MX",
  language: "es-MX",
  url: "https://lospastesdenonna.com",
  keywords: [
    "pastes Oaxaca",
    "pastes gourmet",
    "Los Pastes de Nonna",
    "paste carne árabe",
    "paste de mole",
    "comida oaxaqueña",
    "pastes artesanales Oaxaca de Juárez",
    "franquicias pastes",
  ],
  whatsapp: {
    number: "529512933098",
    display: "951 293 3098",
    message: "Hola, quiero pedir pastes de Nonna",
  },
  instagram: "https://www.instagram.com/los_pastes_de_nonna",
  facebook: "https://www.facebook.com/profile.php?id=61579869712426",
  locations: [
    {
      name: "Los Pastes de Nonna",
      mapUrl: "https://maps.app.goo.gl/y6jnyiTRf78UERmr7",
      embedUrl:
        "https://maps.google.com/maps?q=17.0809799,-96.7157941&z=16&output=embed",
      hours: "Lunes – Sábado: 8:00 – 20:00",
      hoursSchema: "Mo-Sa 08:00-20:00",
      lat: 17.0809799,
      lng: -96.7157941,
    },
    {
      name: "Sucursal Libélula",
      mapUrl: "https://maps.app.goo.gl/hMkK3s6ibuAgkrnZ9",
      embedUrl:
        "https://maps.google.com/maps?q=17.0615336,-96.7127823&z=16&output=embed",
      hours: "Lunes – Sábado: 9:00 – 21:00",
      hoursSchema: "Mo-Sa 09:00-21:00",
      lat: 17.0615336,
      lng: -96.7127823,
    },
  ],
} as const;

export function whatsappUrl(message = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
