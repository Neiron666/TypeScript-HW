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

//***********USER ARRAY**********/

// interface Name {
//   first: string;
//   midle?: string;
//   last: string;
// }
// interface Image {
//   url: string;
//   alt: string;
// }

// interface Address {
//   state?: string;
//   country: string;
//   city: string;
//   street: string;
//   houseNumber: number;
//   ZIP: number;
// }
// interface User {
//   id: string;
//   name: Name;
//   phone: string;
//   email: string;
//   pasword: string;
//   image: Image;
//   address: Address;
//   isAdmin: boolean;
//   isBussiness: boolean;
//   createdAt: Date;
// }

// type Combined = string | number | boolean;

// const tuple: [Combined, Combined] = [4, "sdfgdf"];
// const unionArray: (string | number)[] = [];
// const genericArray: Array<string | number> = [];
// const literalArray: (5 | 15)[] = [];

// unionArray.push("Valik");
// unionArray.push("Valik");
// unionArray.push("Valik");

// genericArray.push("BBB");
// genericArray.push("AAA");
// genericArray.push("RRR");

// genericArray.forEach((element) => {
//   console.log(element);
// });

// const users: User[] = [
//   {
//     id: "123",
//     name: {
//       first: "string",
//       midle: "string",
//       last: "string",
//     },
//     phone: "string",
//     email: "string",
//     pasword: "string",
//     image: {
//       url: "string",
//       alt: "string",
//     },
//     address: {
//       state: "string",
//       country: "string",
//       city: "string",
//       street: "string",
//       houseNumber: 5,
//       ZIP: 5,
//     },
//     isAdmin: false,
//     isBussiness: false,
//     createdAt: new Date(),
//   },
//   {
//     id: "123",
//     name: {
//       first: "string",
//       midle: "string",
//       last: "string",
//     },
//     phone: "string",
//     email: "string",
//     pasword: "string",
//     image: {
//       url: "string",
//       alt: "string",
//     },
//     address: {
//       state: "string",
//       country: "string",
//       city: "string",
//       street: "string",
//       houseNumber: 5,
//       ZIP: 5,
//     },
//     isAdmin: false,
//     isBussiness: false,
//     createdAt: new Date(),
//   },
// ];
// const user1 = {
//   id: "123",
//   name: {
//     first: "string",
//     midle: "string",
//     last: "string",
//   },
//   phone: "string",
//   email: "string",
//   pasword: "string",
//   image: {
//     url: "string",
//     alt: "string",
//   },
//   address: {
//     state: "string",
//     country: "string",
//     city: "string",
//     street: "string",
//     houseNumber: 5,
//     ZIP: 5,
//   },
//   isAdmin: false,
//   isBussiness: false,
//   createdAt: new Date(),
// };
// const user2 = {
//   id: "12",
//   name: {
//     first: "string",
//     midle: "string",
//     last: "string",
//   },
//   phone: "string",
//   email: "string",
//   pasword: "string",
//   image: {
//     url: "string",
//     alt: "string",
//   },
//   address: {
//     state: "string",
//     country: "string",
//     city: "string",
//     street: "string",
//     houseNumber: 5,
//     ZIP: 5,
//   },
//   isAdmin: false,
//   isBussiness: false,
//   createdAt: new Date(),
// };
// const user3 = {
//   id: "1234",
//   name: {
//     first: "string",
//     midle: "string",
//     last: "string",
//   },
//   phone: "string",
//   email: "string",
//   pasword: "string",
//   image: {
//     url: "string",
//     alt: "string",
//   },
//   address: {
//     state: "string",
//     country: "string",
//     city: "string",
//     street: "string",
//     houseNumber: 5,
//     ZIP: 5,
//   },
//   isAdmin: false,
//   isBussiness: false,
//   createdAt: new Date(),
// };
// const fn = (id: string, users: User[]) => {
//   if (!users.length) return null;
//   const goodId = users.filter((item) => {
//     return item.id === id;
//     // console.log(item.id, id);
//   });

//   if (!goodId.length) return "No user with this id was found";
//   return goodId;
// };

// const fn1 = fn("123", [user1]);
// const fn2 = fn("123", [user2]);
// const fn3 = fn("123", [user3]);

// console.log(fn1);
// console.log(fn2);
// console.log(fn3);

//***********CLASS**********/

// class User {
//   #id: number;
//   #name: string;
//   #address:object;
//   constructor(){}

// }
