const usersHTML = document.querySelector(".users");

const usersArray = [
    {
        id: 1,
        name: "Nurel"
    },
    {
        id: 2,
        name: "Umar"
    },
    {
        id: 3,
        name: "Akmat"
    }
]

function redoUsers(users) {
    return users.map((user) => {
        const checkEvenUsers = user.id % 2 === 0 ? "even" : "odd";
        return `
            <li class="user ${checkEvenUsers}">${user.name}</li>
        `
    })
}

let redorHTML = redoUsers(usersArray);

usersHTML.innerHTML = redorHTML.join("");

let pizzaArray = [
    {
        id: 1,
        title:"Песто и Креветка",
        ing: "30 см, традиционное тесто, 630 гКреветки, моцарелла, томаты , шампиьоны , соус песто, итальянские травы , томатный соус",
        images: "https://media.dodostatic.net/image/r:292x292/0196fc98404e73e6b8c1d543e86705f9.avif",
        price: 595,
    },
    {
        id: 2,
        title: "Креветки со сладким чили",
        ing: "30 см, традиционное тесто, 630 гКреветки , ананасы , соус сладкий чили, перец сладкий , моцарелла, соус альфредо",
        images: "https://media.dodostatic.net/image/r:292x292/0197310b1f9d7211a4311ec36dc54d19.avif",
        price: 595,
    },
    {
        id: 3,
        title: "Пикантные колбаски",
        ing: "30 см, традиционное тесто, 530 гКлассические колбаски, лук красный, моцарелла, фирменный томатный соус",
        images: "https://media.dodostatic.net/image/r:292x292/0198cc26b1c776668f088e071d002fa3.avif",
        price:415 ,
    },
    {
        id: 4,
        title: "Чесночный цыпленок",
        ing: "Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо",
        images: "https://media.dodostatic.net/image/r:292x292/0198cc5d9a9a76409b7591fe60781428.avif",
        price: 415,
    },
    {
        id: 5,
        title: "Азиатская",
        ing: "30 см, традиционное тестоФарш из говядины, моцарелла, сушенный перец чили , томаты , красный лук , сладкий перец , томатный соус",
        images: "https://media.dodostatic.net/image/r:292x292/11eec6deef2a8314a75e734e42048301.avif",
        price: 525,
    },
    {
        id: 6,
        title: "Кебаб Пицца",
        ing: "30 см, традиционное тестоДонерное мясо из говядины, моцарелла, томаты , красный лук , соленые огурчики , ранч соус, томатный соус",
        images: "https://media.dodostatic.net/image/r:292x292/11eef31088c14df784152a1ff79438f2.avif",
        price:525,
    },
    {
        id: 7,
        title: "Ветчина и сыр",
        ing: "30 см, традиционное тесто, 480 гВетчина из цыпленка , увеличенная порция моцареллы, соус альфредо",
        images: "https://media.dodostatic.net/image/r:292x292/11ee7d60109d7d49bf0ac5bcad0f9679.avif",
        price: 315,
    },
    {
        id: 8,
        title: "Цыпленок ранч",
        ing: "30 см, традиционное тесто, 660 гЦыпленок , ветчина из цыпленка , моцарелла, томаты , чеснок сухой , соус ранч",
        images: "https://media.dodostatic.net/image/r:292x292/11ee7d60014c5c5ba05197839ea74781.avif",
        price: 495,
    },
    {
        id: 9,
        title: "Бургер Пицца",
        ing: "30 см, традиционное тесто, 650 гВетчина из цыпленка , моцарелла, лук красный , томаты , соленые огурчики , чеснок сухой , бургер соус, томатный соус",
        images: "https://media.dodostatic.net/image/r:292x292/11ee7d60266964ffa4a49159f0a96a1e.avif",
        price: 495,
    },
    {
        id: 10,
        title: "Цыпленок барбекю",
        ing: "30 см, традиционное тесто, 660 гЦыпленок , ветчина из цыпленка , моцарелла, красный лук , соус барбекю, томатный соус",
        images: "https://media.dodostatic.net/image/r:292x292/11ee7d6009411cba8ea4dd066b9c0fab.avif",
        price: 495,
    },
]

console.log(pizzaArray);
