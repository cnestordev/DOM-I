let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;
let hasStarted = false
const st = document.getElementById('secondTens')
st.innerText = secondTens

const so = document.getElementById('secondOnes')
so.innerText = secondOnes

const msh = document.getElementById('msHundreds')
msh.innerText = msHundreds

const mst = document.getElementById('msTens')
mst.innerText = msTens;

const digits = document.querySelectorAll('.digit')

const start = document.getElementById('start')
start.addEventListener('click', () => {
    hasStarted = true;
})



const id = setInterval(() => {
    if (hasStarted) {
        msTens++
        mst.innerText = msTens
        start.disabled = true;
        if (msTens === 10) {
            msTens = 0;
            mst.innerText = msTens

            msHundreds++
            msh.innerText = msHundreds

            if (msHundreds === 10) {
                msHundreds = 0;
                msTens = 0;
                msh.innerText = msHundreds
                mst.innerText = msTens;

                secondOnes++
                so.innerText = secondOnes

                if (secondOnes === 10) {
                    msHundreds = 0;
                    msTens = 0;
                    secondOnes = 0
                    msh.innerText = msHundreds
                    mst.innerText = msTens;
                    so.innerText = secondOnes
                    secondTens++
                    st.innerText = secondTens
                    clearInterval(id)
                    digits.forEach(dig => dig.classList.add('redDigit'))
                    start.disabled = false;
                }
            }
        }
    }
}, 10)


const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    clearInterval(id)
    let secondTens = 0;
    let secondOnes = 0;
    let msHundreds = 0;
    let msTens = 0;
    let hasStarted = false
    st.innerText = secondTens
    so.innerText = secondOnes
    msh.innerText = msHundreds
    mst.innerText = msTens;
    start.disabled = false;
    digits.forEach(dig => dig.style.color = "black")
})