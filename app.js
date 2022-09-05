var container = document.querySelector('.container');
const button = document.querySelector('button')

/* Color Func start */
function randomInteger(max = 256) {
    return Math.floor(Math.random() * max);
}
/* Color Func end */




button.addEventListener('click', () => {
    /* Heigt an Width container */
    let h = window.innerHeight - 70
    let w = window.innerWidth - 70
    container.style.height = `${h}px`
    container.style.width = `${w}px`
    /* Heigt an Width container end */
    let ContainerSize = container.getBoundingClientRect()
    let ContainernNewSize = ContainerSize.height - 30
    let ContainerNewWidth = ContainerSize.width - 30
    let randomH = Math.floor(Math.random() * ContainernNewSize)
    let randomW = Math.floor(Math.random() * ContainerNewWidth)
    /* create element */
    const span = document.createElement('span')
    span.style.width = "35px";
    span.style.height = "35px";
    /* create elemnt end */

    span.classList.add('span')
    /* random color and size */
    span.style.background = `rgba(${randomInteger()},${randomInteger()},${randomInteger()})`;
    span.style.marginTop = `${randomH}px`
    span.style.marginLeft = `${randomW}px`

    /* random color and size end */
    container.appendChild(span)
    /* remove elemnet start */
    span.addEventListener('click', () => {
        span.remove()
    })
    /* remove elemnet end */

})

