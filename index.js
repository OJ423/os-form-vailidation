addEventListener("submit", (event) => {
    const zodiac = document.getElementById("zodiac-sign")
    const validZodiacs = ["aries", "taurus", "gemini", "cancer", "leo","virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"]
    if(!validZodiacs.includes(zodiac.value.toLowerCase())){
        event.preventDefault()
        const zodiacError = document.getElementById("zodiac-error")
        zodiacError.innerText = "Please choose a valid Zodiac sign"
    }
})

const firstName = document.getElementById("first-name")

firstName.addEventListener("blur", (event) => {
    firstNameError = document.getElementById("first-name-error")
    if(!event.target.value){
        firstNameError.classList.add('error')
        firstNameError.innerText ="Required input"
    }
    else {
        firstNameError.classList.remove('error')
        firstNameError.innerText =""
    }
})

const lastName = document.getElementById("last-name")

lastName.addEventListener("blur", (event) => {
    lastNameError = document.getElementById("last-name-error")
    if(!event.target.value){
        lastNameError.classList.add('error')
        lastNameError.innerText ="Required input"
    }
    else {
        lastNameError.classList.remove('error')
        lastNameError.innerText =""
    }

})