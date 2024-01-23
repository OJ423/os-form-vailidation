
addEventListener("pageshow",() => {
    let params = new URLSearchParams(document.location.search)
    let zodiac = params.get("zodiac-sign")
    let name = params.get("first-name")
    let dob = params.get("dob") 
    console.log(getAge(dob))
    const regex = new RegExp(zodiac, "i")
    let info = getAge(dob) <=30 ? horoscopes[zodiac].underAnd30 : horoscopes[zodiac].over30
    const horoscope = document.getElementById("horoscope")
    horoscope.innerText = info.replace(regex,name)
})


function getAge(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

