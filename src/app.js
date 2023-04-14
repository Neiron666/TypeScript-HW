"use strict";
const tuple = [4, "sdfgdf"];
const unionArray = [];
const genericArray = [];
const literalArray = [];
unionArray.push("Valik");
unionArray.push("Valik");
unionArray.push("Valik");
genericArray.push("BBB");
genericArray.push("AAA");
genericArray.push("RRR");
genericArray.forEach((element) => {
    console.log(element);
});
const users = [
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
const fn = (id, users) => {
    if (!users)
        return null;
    if ()
        ;
};
