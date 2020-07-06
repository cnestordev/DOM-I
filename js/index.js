const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAV----------------------------------------------------------
const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent.nav['nav-item-1']
navLinks[1].textContent = siteContent.nav['nav-item-2']
navLinks[2].textContent = siteContent.nav['nav-item-3']
navLinks[3].textContent = siteContent.nav['nav-item-4']
navLinks[4].textContent = siteContent.nav['nav-item-5']
navLinks[5].textContent = siteContent.nav['nav-item-6']

//CTA---------------------------------------------------------------
const header = document.querySelector('.cta-text h1')
header.innerText = siteContent.cta.h1

const headerButton = document.querySelector('.cta-text button')
headerButton.innerText = siteContent.cta.button

const headerImg = document.querySelector('.cta img')
headerImg.src = siteContent.cta['img-src']

//MAIN-CONTENT------------------------------------------------------------
//*********************TOP CONTENT************************************ */
const mainHeader = document.querySelector('div.top-content .text-content:first-of-type h4')
mainHeader.innerText = siteContent['main-content']['features-h4']
const mainSubheader = document.querySelector('div.top-content .text-content:first-of-type p')
mainSubheader.innerText = siteContent['main-content']['features-content']

const aboutHeader = document.querySelector('div.top-content div.text-content:last-of-type h4')
aboutHeader.textContent = siteContent['main-content']['about-h4']

const aboutsubHeader = document.querySelector('div.top-content div.text-content:last-of-type p')
aboutsubHeader.textContent = siteContent['main-content']['about-content']

// ***************************MIDDLE IMAGE******************************************

const middleImg = document.getElementById('middle-img')
middleImg.src = siteContent['main-content']['middle-img-src']

// *************************BOTTOM CONTENT*************************************

const servicesHeader = document.querySelector('div.bottom-content div.text-content:first-of-type h4')
servicesHeader.innerText = siteContent['main-content']['services-h4']

const servicesSubHeader = document.querySelector('div.bottom-content div.text-content:first-of-type p')
servicesSubHeader.innerText = siteContent['main-content']['services-content']

const visionHeader = document.querySelector('div.bottom-content div.text-content:nth-child(2) h4')
visionHeader.textContent = siteContent['main-content']['vision-h4']

const visionSubheader = document.querySelector('div.bottom-content div.text-content:nth-child(2) p')
visionSubheader.textContent = siteContent['main-content']['vision-content']

const productHeader = document.querySelector('div.bottom-content div.text-content:last-of-type h4')
productHeader.textContent = siteContent['main-content']['product-h4']

const productSubHeader = document.querySelector('div.bottom-content div.text-content:last-of-type p')
productSubHeader.textContent = siteContent['main-content']['product-content']


//CONTACT -----------------------------------------------------------------------------------
const contactHeader = document.querySelector('section.contact h4')
contactHeader.textContent = siteContent.contact['contact-h4']

const contactParagraphs = document.querySelectorAll('section.contact p')
contactParagraphs[0].textContent = siteContent.contact.address
contactParagraphs[1].textContent = siteContent.contact.phone
contactParagraphs[2].textContent = siteContent.contact.email

//FOOTER-------------------------------------------------------------------
const footerParagraph = document.querySelector('footer p')
footerParagraph.textContent = siteContent.footer.copyright

//ADD NEW CONTENT
//****change color of nav text to green
const navColor = 'green'
navLinks.forEach(item => item.style.color = navColor)
// ****use appendChild() and prepend()
const navBar = document.querySelector('nav')

const newLink = document.createElement('a')
newLink.href = "#"
newLink.textContent = "Mission"
newLink.style.color = navColor
navBar.appendChild(newLink)

const newLink2 = document.createElement('a')
newLink2.href = "#"
newLink2.textContent = "Home"
newLink2.style.color = navColor
navBar.prepend(newLink2)

// STRETCH------------------------------------------------------------------------
// ****update styles
headerButton.style.width = 'auto'
headerButton.style.height = 'auto'
headerButton.style.borderWidth = '3px'
headerButton.style.padding = '3% 7%'
headerButton.style.marginTop = '0'
headerButton.style.borderStyle = 'solid'
headerButton.style.borderRadius = '3px'



middleImg.style.width = "100%"

const container = document.querySelector('.container')
container.style.backgroundColor = "#fff"
container.style.padding = "0 2%"

document.body.style.backgroundColor = "#F8F8FF"

const fontLink = document.createElement('link')
fontLink.href = "https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
fontLink.setAttribute('rel', 'stylesheet')
document.head.appendChild(fontLink)

const allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach(p => {
  p.style.fontFamily = 'Quicksand'
  p.style.lineHeight = '1.5'
})

navLinks.forEach(link => {
  link.style.fontFamily = 'Quicksand'
})