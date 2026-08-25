export const photos = {
  hero: {
    src: "/fotos/nonna-ilustracion.png",
    alt: "Ilustración de Nonna con pastes",
  },
  about: {
    src: "/fotos/interior.jpg",
    alt: "Interior de Los Pastes de Nonna con mural de Nonna",
  },
  menu: {
    src: "/fotos/caja-pastes.jpg",
    alt: "Caja de pastes recién horneados",
  },
  gallery: [
    {
      src: "/fotos/paste-vidrio.jpg",
      alt: "Paste frente a la ilustración de Nonna",
      featured: true,
    },
    {
      src: "/fotos/corazon-relleno.jpg",
      alt: "Paste para llevar con el lema Corazón en cada relleno",
      featured: false,
    },
    {
      src: "/fotos/fachada.jpg",
      alt: "Fachada de Los Pastes de Nonna",
      featured: false,
    },
    {
      src: "/fotos/soda-manzana.jpg",
      alt: "Paste y soda italiana de manzana verde",
      featured: false,
    },
    {
      src: "/fotos/bolsa.jpg",
      alt: "Bolsa para llevar de Los Pastes de Nonna",
      featured: false,
    },
  ],
} as const;
