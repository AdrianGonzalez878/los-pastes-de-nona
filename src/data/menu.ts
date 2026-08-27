export interface MenuItem {
  name: string;
  description?: string;
  image?: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "salados",
    title: "Pastes salados",
    items: [
      {
        name: "Hawaiano",
        description: "Jamón, queso y piña",
        image: "/fotos/menu/hawaiano.jpg",
      },
      {
        name: "Mole negro",
        description: "Mole negro oaxaqueño",
        image: "/fotos/menu/mole-negro.jpg",
      },
      {
        name: "Carne con papas",
        description: "Carne y papa",
        image: "/fotos/menu/carne-con-papas.jpg",
      },
      {
        name: "Atún a la vizcaína",
        description: "Atún a la vizcaína",
        image: "/fotos/menu/atun-vizcaina.jpg",
      },
      {
        name: "Champiñones al ajillo con queso",
        description: "Champiñones al ajillo y queso",
        image: "/fotos/menu/champinones-ajillo.jpg",
      },
      {
        name: "Choriqueso",
        description: "Chorizo con queso",
        image: "/fotos/menu/choriqueso.jpg",
      },
    ],
  },
  {
    id: "estrella",
    title: "Paste estrella",
    items: [
      {
        name: "Carne árabe con queso",
        description: "El favorito de la casa: carne árabe y queso fundido",
        image: "/fotos/menu/carne-arabe.jpg",
        tag: "Estrella",
      },
    ],
  },
  {
    id: "dulces",
    title: "Pastes dulces",
    items: [
      {
        name: "Chocolate oaxaqueño",
        description: "Chocolate tradicional de Oaxaca",
        image: "/fotos/menu/chocolate-oaxaqueno.jpg",
      },
      {
        name: "Dulce de leche con queso crema",
        description: "Dulce de leche y queso crema",
        image: "/fotos/menu/dulce-de-leche.jpg",
      },
      {
        name: "Nutella con queso crema",
        description: "Nutella y queso crema",
        image: "/fotos/menu/nutella-queso-crema.jpg",
      },
      {
        name: "Manzana canela",
        description: "Manzana con canela",
        image: "/fotos/menu/manzana-canela.jpg",
      },
      {
        name: "Queso crema con zarzamora",
        description: "Queso crema y zarzamora",
        image: "/fotos/menu/queso-crema-zarzamora.jpg",
      },
      {
        name: "Fresa Turín",
        description: "Fresa y chocolate Turín",
        image: "/fotos/menu/fresa-turin.jpg",
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      {
        name: "Chimichurri",
        image: "/fotos/menu/chimichurri.jpg",
      },
      {
        name: "Macha",
        image: "/fotos/menu/salsa-macha.jpg",
      },
      {
        name: "Catsup / Valentina",
        image: "/fotos/menu/catsup-valentina.jpg",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        name: "Café americano",
        image: "/fotos/menu/cafe-americano.jpg",
      },
      {
        name: "Soda italiana fresa",
        image: "/fotos/menu/soda-italiana-fresa.jpg",
      },
      {
        name: "Soda italiana manzana verde",
        image: "/fotos/menu/soda-italiana-manzana.jpg",
      },
      {
        name: "Agua embotellada 600 ml",
        image: "/fotos/menu/agua.jpg",
      },
      {
        name: "Refresco",
        image: "/fotos/menu/refrescos.jpg",
      },
    ],
  },
];

export const pasteCount = menuCategories
  .filter((category) => ["salados", "estrella", "dulces"].includes(category.id))
  .reduce((total, category) => total + category.items.length, 0);
