const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetailImg = document.querySelector(".detail-image")
const ramenDetailH2 = document.querySelector(".name")
const ramenDetailH3 = document.querySelector(".restaurant")
const ramenRating = document.getElementById('rating-display')
const ramenComment = document.getElementById('comment-display')
const ramenForm = document.getElementById('new-ramen')

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newRamenObj = {}
    newRamenObj.name = e.target.name.value
    newRamenObj.restaurant = e.target.restaurant.value
    newRamenObj.image = e.target.image.value
    newRamenObj.rating = e.target.rating.value
    newRamenObj.comment = e.target['new-comment'].value
    const img = document.createElement('img')
    img.addEventListener('click', () => {
        changeDetail(newRamenObj)
    })
    img.src = newRamenObj.image
    img.alt = `${newRamenObj.name} from ${newRamenObj.restaurant}`
    ramenMenu.append(img)
    ramenForm.reset()
})
fetch('http://localhost:3000/ramens')
    .then(r => r.json())
    .then(data => {
        changeDetail(data[0])
        data.forEach(renderRamenImg)
    })

function renderRamenImg(ramensArray) {
    const img = document.createElement('img')
    img.addEventListener('click', () => {
        changeDetail(ramensArray)
    })
    img.src = ramensArray.image
    img.alt = `${ramensArray.name} from ${ramensArray.restaurant}`
    ramenMenu.append(img)
}
function changeDetail(ramensObj) {
    ramenDetailImg.src = ramensObj.image
    ramenDetailH2.innerText = ramensObj.name
    ramenDetailH3.innerText = ramensObj.restaurant
    ramenRating.innerText = ramensObj.rating
    ramenComment.innerText = ramensObj.comment
}