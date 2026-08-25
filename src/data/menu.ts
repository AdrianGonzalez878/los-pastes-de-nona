export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
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
        price: 45,
      },
      {
        name: "Mole negro",
        price: 42,
      },
      {
        name: "Carne con papas",
        price: 45,
      },
      {
        name: "Atún a la vizcaína",
        price: 47,
      },
      {
        name: "Champiñones al ajillo con queso",
        price: 40,
      },
      {
        name: "Choriqueso",
        description: "Chorizo con queso",
        price: 45,
      },
    ],
  },
  {
    id: "estrella",
    title: "Paste estrella",
    items: [
      {
        name: "Carne árabe con queso",
        price: 45,
        tag: "Estrella",
      },
    ],
  },
  {
    id: "dulces",
    title: "Pastes dulces",
    items: [
      {
        name: "Dulce de leche con queso crema",
        price: 40,
      },
      {
        name: "Nutella con queso crema",
        price: 41,
      },
      {
        name: "Manzana canela",
        price: 39,
      },
      {
        name: "Queso crema con zarzamora",
        price: 39,
      },
      {
        name: "Fresa Turín",
        price: 49,
        tag: "Nuevo",
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { name: "Chimichurri", price: 8 },
      { name: "Macha", price: 8 },
      { name: "Catsup / Valentina", price: 8 },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        name: "Agua embotellada 600 ml",
        price: 20,
      },
      {
        name: "Café americano",
        price: 24,
      },
      {
        name: "Refresco",
        price: 25,
      },
      {
        name: "Soda italiana fresa",
        description: "Próximamente en menú impreso",
        price: 75,
        tag: "Nuevo",
      },
      {
        name: "Soda italiana manzana verde",
        description: "Próximamente en menú impreso",
        price: 75,
        tag: "Nuevo",
      },
    ],
  },
];

export function formatPrice(price: number) {
  return `$${price}`;
}
