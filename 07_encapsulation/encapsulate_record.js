// 리팩토링 전
const organization = { name: "애크미 구스베리", country: "GB" };

const result = `<h1>${organization.name}</h1>`;
organization.name = "newName";
