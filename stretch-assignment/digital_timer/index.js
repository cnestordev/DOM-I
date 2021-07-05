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
    startTimer()
})

const reset = document.getElementById('reset')

function startTimer() {
    resetValues()
    start.disabled = true;
    const id = setInterval(() => {
        if (hasStarted) {
            msTens++
            if (msTens !== 10) {
                mst.innerText = msTens
            }
        }

        if (msTens === 10) {
            msTens = 0;
            mst.innerText = msTens
            msHundreds++
            if (msHundreds !== 10) {
                msh.innerText = msHundreds
            }
        }

        if (msHundreds === 10) {
            msHundreds = 0;
            msh.innerText = msHundreds
            secondOnes++
            if (secondOnes !== 10) {
                so.innerText = secondOnes
            }
        }

        if (secondOnes === 10) {
            secondOnes = 0
            so.innerText = secondOnes
            secondTens++
            st.innerText = secondTens
            clearInterval(id)
            digits.forEach(dig => dig.style.color = "red")
            start.disabled = false;
        }
    }, 10);

    reset.addEventListener('click', () => {
        resetTimer(id)
    })
}

function resetTimer(id) {
    clearInterval(id)
    hasStarted = false
    start.disabled = false;
    resetValues()
}

function resetValues() {
    secondTens = 0;
    secondOnes = 0;
    msHundreds = 0;
    msTens = 0;
    st.innerText = secondTens
    so.innerText = secondOnes
    msh.innerText = msHundreds
    mst.innerText = msTens;
    digits.forEach(dig => dig.style.color = "black")
}