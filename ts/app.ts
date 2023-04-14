//***********CARD INTERFACE OBJECT*/

// interface Address {
//   state?: string;
//   country: string;
//   city: string;
//   street: string;
//   houseNumber: number;
//   ZIP: number;
// }
// interface Image {
//   url: string;
//   alt: string;
// }
// interface Card {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   phone: string;
//   email: string;
//   createdAt: Date;
//   web?: string;
//   image: Image;
//   address: Address;
//   bizNumber: number;
//   userId: string;
// }

// const card: Card = {
//   id: "string",
//   title: "string",
//   subtitle: "string",
//   description: "string",
//   phone: "string",
//   email: "string",
//   createdAt: new Date(),
//   web: "string",
//   image: {
//     url: "string",
//     alt: "string",
//   },
//   address: {
//     state: "string",
//     country: "string",
//     city: "string",
//     street: "string",
//     houseNumber: 100,
//     ZIP: 100555,
//   },
//   bizNumber: 5,
//   userId: "string",
// };
// console.log(card);

//***********USER ARRAY*/

interface Name {
  first: string;
  midle?: string;
  last: string;
}
interface Image {
  url: string;
  alt: string;
}

interface Address {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  ZIP: number;
}
interface User {
  id: string;
  name: Name;
  phone: string;
  email: string;
  pasword: string;
  image: Image;
  address: Address;
  isAdmin: boolean;
  isBussiness: boolean;
  createdAt: Date;
}

type Combined = string | number | boolean;

const tuple: [Combined, Combined] = [4, "sdfgdf"];
const unionArray: (string | number)[] = [];
const genericArray: Array<string | number> = [];
const literalArray: (5 | 15)[] = [];

unionArray.push("Valik");
unionArray.push("Valik");
unionArray.push("Valik");

genericArray.push("BBB");
genericArray.push("AAA");
genericArray.push("RRR");

genericArray.forEach((element) => {
  console.log(element);
});

const users: User[] = [
  {
    id: "123",
    name: {
      first: "string",
      midle: "string",
      last: "string",
    },
    phone: "string",
    email: "string",
    pasword: "string",
    image: {
      url: "string",
      alt: "string",
    },
    address: {
      state: "string",
      country: "string",
      city: "string",
      street: "string",
      houseNumber: 5,
      ZIP: 5,
    },
    isAdmin: false,
    isBussiness: false,
    createdAt: new Date(),
  },
  {
    id: "123",
    name: {
      first: "string",
      midle: "string",
      last: "string",
    },
    phone: "string",
    email: "string",
    pasword: "string",
    image: {
      url: "string",
      alt: "string",
    },
    address: {
      state: "string",
      country: "string",
      city: "string",
      street: "string",
      houseNumber: 5,
      ZIP: 5,
    },
    isAdmin: false,
    isBussiness: false,
    createdAt: new Date(),
  },
];


const fn = (id: string, users: User[]) => {
  if (!users) return null;
  if 
};
