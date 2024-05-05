const about_us_text = [
    "저희는 대학시절부터 커피를 무척 좋아했습니다. 커피에 대한 사랑과 열정을 많은 사람들에게 나누고 싶습니다. 답답하거나 잠시 쉬고 싶을 때, 저희의 커피 한 잔과 쉼터를 제공하고 싶습니다. 단순히 다양성이 아닌, 고객님만에 커피 한 잔을 위해 저희는 오늘도 연구하고 또 연구합니다.",
    "We are friends from college that are passionate about coffee. We want to elevate people's moods and let them breathe some fresh air. We do not strive for variety, but instead focus on carefully brewing one cup of coffee, just for you."
]

const KR = 0
const EN = 1

const nav = (addr) => {
    location.href = "./" + addr + ".html"
}

var lang = KR

const change_lang = () => {
    var e = document.getElementById("about_us")
    e.innerHTML = about_us_text[lang]
    lang = (lang + 1) % 2
}

if (location.href.endsWith('about.html')) change_lang()

const menu = [
    ["고도 커피", "Goh-doh (Altitude) Coffee"],
    ["구름 커피", "Goo-reum (Cloud) Coffee"],
    ["아메리카노", "Americano"],
    ["라떼", "Latte"],
    ["카푸치노", "Cappuccino"],
    ["코르타도", "Cortado"],
    ["마키아토", "Macchiato"],
    ["에스프레소", "Espresso"],
    ["크루와상", "Croissant"],
    ["오늘의 케잌 (1조각)", "Today's Cake (1 Slice)"]
]


const set_menu = () => {
    accum = "<h3>Our Signatures</h3>"

    for (i = 0; i < 2; i++) {
        accum += menu[i][lang] + "<br>"
    }

    accum += "<h3>Coffee</h3>"

    for (i = 2; i < 8; i++) {
        accum += menu[i][lang] + "<br>"
    }

    accum += "<h3>Bakery</h3>"

    for (i = 8; i < 10; i++) {
        accum += menu[i][lang] + "<br>"
    }

    document.getElementById("menu").innerHTML = accum;

    lang = (lang + 1) % 2
}

if (location.href.endsWith('menu.html')) set_menu()