// 리팩토링 전

let defaultOwner = { firstName: "마틴", lastName: "파울러" };

const spaceship = {};
// 참조
spaceship.owner = defaultOwner;
// 갱신
defaultOwner = { firstName: "레베카", lastName: "파슨스" };
