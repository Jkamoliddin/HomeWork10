const output = document.getElementById("out");
const buttons = document.querySelectorAll(".btn");
const gamesData = [
    { image: "https://images.unsplash.com/photo-1640622842523-4825918c4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", name: "Roblox", genre: "racing",info:"Roblox — многопользовательская онлайн-платформа, которая позволяет пользователям играть в созданные другими пользователями игры и создавать свои собственные."},
    { image: "https://images.unsplash.com/photo-1616969083856-d574203763fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", name: "Standoff 2", genre: "rpg",info:"Standoff 2 — условно-бесплатная мобильная многопользовательская онлайн-игра в жанре шутера от первого лица, разработанная и изданная российской компанией Axlebolt в 2017 году для платформы Android, а в 2018 году для iOS. "},
    { image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", name: "Brawl Stars", genre: "racing",info:"Brawl Stars — игра для мобильных устройств в жанре MOBA, разработанная и изданная компанией Supercell. Глобальный релиз состоялся 12 декабря 2018 года."},
    { image: "https://images.unsplash.com/photo-1611297684967-61bbdf21b8f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60", name: "Clash of Clans", genre: "rpg",info:"Clash of Сlans — стратегическая игра, созданная финской студией-разработчиком Supercell для мобильных устройств. Распространяется по модели free-to-play."},
    { image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60", name: "Clash royale", genre: "racing",info:"Clash Royale — игра для мобильных устройств жанра RTS с элементами ККИ, доступная на платформах Android и iOS, выпущенная 2 марта 2016 года компанией Supercell. За первый год Clash Royale принесла своим создателям более миллиарда долларов. А к 2020 году доход от игры превысил 3 миллиарда долларов."},
    { image: "https://images.unsplash.com/photo-1647448922274-320dd98a576f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60", name: "Geometry Dash", genre: "rpg",info:"Geometry Dash — компьютерная игра в жанре 2D-платформера, выпущенная изначально для мобильных устройств на iOS/Android, позже и для настольных компьютеров. Создатель игры — шведский разработчик Роберт Топала, выступающий под псевдонимом RobTop."},
    { image: "https://images.unsplash.com/photo-1609962798614-97bddfd3d685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60", name: "Flappy Bird", genre: "rpg",info:"Flappy Bird — игра для мобильных устройств, разработанная вьетнамским разработчиком Донгом Нгуеном, в которой игрок с помощью касаний экрана должен контролировать полёт птицы между рядами зелёных труб, не задевая их. Была реализована на платформах iOS и Android."},
    { image: "https://images.unsplash.com/photo-1647522229283-03f81cb83fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60", name: "Chrome", genre: "racing",info:"Google Chrome — браузер, разрабатываемый компанией Google на основе свободного браузера Chromium и движка Blink. Первая публичная бета-версия для Windows вышла 2 сентября 2008 года, а первая стабильная — 11 декабря 2008 года."},
    { image: "https://images.unsplash.com/photo-1601877346302-15125c237191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60", name: "Google", genre: "racing",info:"Google — американская транснациональная корпорация в составе холдинга Alphabet, инвестирующая в интернет-поиск, облачные вычисления и рекламные технологии. Google поддерживает и разрабатывает ряд интернет-сервисов и продуктов и получает прибыль в первую очередь от рекламы через свою программу Ads."},
    { image: "https://images.unsplash.com/photo-1647460020082-15716b89a873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60", name: "Youtube", genre: "rpg",info:"YouTube — видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео. YouTube стал популярнейшим видеохостингом и вторым сайтом в мире по количеству посетителей."},
    { image: "https://images.unsplash.com/photo-1647451050374-81542d0d4fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60", name: "Minecraft", genre: "racing",info:"Minecraft is a 3D sandbox game developed by Mojang Studios where players interact with a fully modifiable three-dimensional environment made of blocks and entities. Its diverse gameplay lets players choose the way they play, allowing for countless possibilities."},
    { image: "https://images.unsplash.com/photo-1597900087354-fd72dab61157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60", name: "Gmail", genre: "racing",info:"Gmail — бесплатная почтовая служба от компании Google. Предоставляет доступ к почтовым ящикам через веб-интерфейс и по протоколам POP3, SMTP и IMAP, а также в приложении Gmail на Android."},
    { image: "https://images.unsplash.com/photo-1578239864516-b9b3482dd60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60", name: "Email", genre: "racing",info:"Адрес электронной почты — запись, установленная по RFC 5322, однозначно идентифицирующая почтовый ящик, в который следует доставить сообщение электронной почты. Адрес состоит из двух частей, разделённых символом «@». Левая часть указывает имя почтового ящика, часто оно совпадает с логином пользователя."},
    { image: "https://images.unsplash.com/photo-1647532272618-8d0cca8d3557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60", name: "Click Evolution", genre: "racing",info:"Специальное и современное приложение для Вашего смартфона. Просто скачайте его и начните оплачивать и переводить средства в удобном интерфейсе. Не забывайте чаще обновлять приложение, чтобы насладиться самыми последними удобствами нашего приложения!"},
    { image: "https://images.unsplash.com/photo-1647527234642-b43cf13d6a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60", name: "OLX", genre: "racing",info:"OLX — платформа онлайн-объявлений, которая объединяет людей для покупки, продажи или обмена товарами и услугами."},
];

function DisplayData(data) {
    let html = "";

    data.forEach((e) => {
        html += `<div class="card">
      <img class="card__img" src="${e.image}" alt="">
      <div class="card__name">${e.name}</div>
      <p class="card__name">${e.info}</p>
    </div>`;
    });

    output.innerHTML = html;
}

function filteringData(data, btn) {
    let filteredData = data.filter((e)=> e.name == btn.textContent)
    DisplayData(filteredData)
}

buttons.forEach((e)=>{
    e.addEventListener("click",()=>{
        DisplayData(gamesData)
        filteringData(gamesData, e)
    });
});
