import '../scss/styles.scss'
import imageBuilding from '../assets/images/building.jpg'
import imageNotebook from '../assets/images/notebook.jpg'
import imageCupcake1 from '../assets/images/cupcake1.jpg'
import imageCupcake2 from '../assets/images/cupcake2.jpg'
import imageCupcake3 from '../assets/images/cupcake3.jpg'
import imageCupcake4 from '../assets/images/cupcake4.jpg'
import imageCupcake5 from '../assets/images/cupcake5.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const elemImageCupcake1 = new Image()
elemImageCupcake1.src = imageCupcake1

const elemImageCupcake2 = new Image()
elemImageCupcake2.src = imageCupcake2

const elemImageCupcake3 = new Image()
elemImageCupcake3.src = imageCupcake3

const elemImageCupcake4 = new Image()
elemImageCupcake4.src = imageCupcake4

const elemImageCupcake5 = new Image()
elemImageCupcake5.src = imageCupcake5



document.querySelector('#cupcake1')
    .appendChild(elemImageCupcake1)


document.querySelector('#cupcake2')
    .appendChild(elemImageCupcake2)
    
document.querySelector('#cupcake3')
    .appendChild(elemImageCupcake3)

    
document.querySelector('#cupcake4')
    .appendChild(elemImageCupcake4)

document.querySelector('#cupcake5')
    .appendChild(elemImageCupcake5)