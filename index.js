const createElements = () => {
const logo = document.createElement('img')
logo.src = '/logo.png'
const modelS = document.createElement('a')
modelS.innerHTML = 'Model S'
const modelX = document.createElement('a')
modelX.innerHTML = 'Model X'
const shop = document.createElement('a')
shop.innerHTML = 'Shop'
const container = document.createElement('div')
const nav = document.createElement('div')
const menu = document.createElement('img')
menu.src = '/menu.png'
const bgLogo = document.createElement('div')
const photoMS = document.createElement('img')
photoMS.src = '/modelS.png'

return {logo, modelS, modelX, shop, container, menu, photoMS, nav, bgLogo }
}

const setAttribute = ({logo, modelS, modelX, shop, container, menu, photoMS, nav, bgLogo }) => {
logo.setAttribute('class', 'logo')
modelS.setAttribute('class', 'modelS')
modelX.setAttribute('class', 'modelX')
container.setAttribute('class', 'container')
shop.setAttribute('class', 'shop')
menu.setAttribute('class', 'menu')
photoMS.setAttribute('class', 'photoMS')
bgLogo.setAttribute('class', 'bgLogo')
nav.setAttribute('class', 'nav')
}

const initial = () => {
const {logo, modelS, modelX, shop, container, menu, photoMS, nav, bgLogo} = createElements()
setAttribute({logo, modelS, modelX, shop, container, menu, photoMS, nav, bgLogo})

document.body.appendChild(container)
container.appendChild(nav)
nav.appendChild(logo)
nav.appendChild(modelS)
nav.appendChild(modelX)
nav.appendChild(shop)
nav.appendChild(menu)
container.appendChild(photoMS)
container.appendChild(bgLogo)

}

initial()

const links = document.querySelectorAll('a')
const highLight = document.createElement('span')
highLight.classList.add('highLight')
document.body.appendChild(highLight)

function displayHighLight() {
  const linkCoords = this.getBoundingClientRect()
    const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top,
    left: linkCoords.left
    // top: linkCoords.top + window.scrollY,
    // left: linkCoords.left + window.scrollX

  }

  highLight.style.width = `${coords.width}px`
  highLight.style.height = `${coords.height}px`
  highLight.style.transform = `translate(${coords.left}px, ${coords.top}px)`

}

links.forEach(link => {
  link.addEventListener('mouseover', displayHighLight)
})


