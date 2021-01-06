let ser = [
	{ id: '1', value: 'React', distance: { "unit": "m", "value": 0.5 }, convert_to: "ft" },
	{ id: '2', value: 'Angular', distance: { "unit": "c", "value": 0.5 }, convert_to: "ft" },
	{ id: '3', value: 'Vue', distance: { "unit": "i", "value": 0.5 }, convert_to: "ft" },
	{ id: '4', value: 'React Native', distance: { "unit": "f", "value": 0.5 }, convert_to: "ft" }
]

let bas = JSON.stringify(ser)


const getTemplate = (data = [], placeholder) => {
	const text = placeholder ?? 'Placeholder default'

	const items = data.map(item => {
		return `
		<li class='selectItem' data-type='item' data-value='${item.id}'>${item.value}</li>
		`
	})
	return `
	<div class = 'selectBackdrop' data-type='backdrop'></div>
	<div class='selectInput' data-type='input' >
						<span data-type='value'>${text}</span>
							<i class="fa fa-chevron-down" aria-hidden="true" data-type='arrow'></i>
						</div>
						<div class='selectDropdown' id='select'  data-type='selec'>
						<ul class='selectList' id = 'hi'> 
						${items.join('')}
						
					  </ul>
	</div>
			
		  `
}

class Select {
	constructor(selector, options) {

		this.el = document.querySelector(selector)

		this.options = options
		this.seleId = null
		this.my()
		this.#render()

		this.#setup()


	}

	#render() {
		const { placeholder, data } = this.options
		this.el.classList.add('select')
		this.el.innerHTML = getTemplate(data, placeholder)

	}

	#setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.el.addEventListener('click', this.clickHandler)
		this.arrow = this.el.querySelector('[data-type="arrow"]')
		this.selec = this.el.querySelector('[data-type="selec"]')
		this.value = this.el.querySelector('[data-type="value"]')
	}

	clickHandler(event) {
		console.log(event.target.dataset);
		const { type } = event.target.dataset
		if (type === 'input') {
			this.toggle()
		} else if (type === 'item') {
			const id = event.target.dataset.value
			this.select(id)
		} else if (type === 'backdrop') {
			console.log(1);
		}
		//input.placeholder = `Input ${select.el.querySelector('[data-type="value"]').textContent.toLowerCase(0)}`;
	}

	get isOpen() {
		return this.el.lastElementChild.classList.contains('selectOpen')
	}

	get current() {
		return this.options.data.find(item => item.id === this.selectedId)
	}

	select(id) {
		this.selectedId = id
		this.value.textContent = this.current.value
		this.el.querySelectorAll('[data-id="item"]').forEach(el => {
			el.classList.remove('selected')
		})

		this.close()
	}

	toggle() {

		this.isOpen ? this.close() : this.open()
	}

	open() {
		this.selec.classList.add('selectOpen')
		this.arrow.classList.remove('fa-chevron-down')
		this.arrow.classList.add('fa-chevron-up')
	}

	close() {
		this.selec.classList.remove('selectOpen')
		this.arrow.classList.add('fa-chevron-down')
		this.arrow.classList.remove('fa-chevron-up')
	}
	destroy() {
		this.el.removeEventListener('click', this.clickHandler)

	}
	my() {

		this.options.data.push({ id: '4', value: 'Feet' })

	}

}

const select = new Select('#select', {
	placeholder: "Choose elements",
	data: JSON.parse(bas)
})
const a = select
console.log(select);
window.s = select;
let x = `{"distance":{
			"unit": "m",
			"value": 0.5
			},
	"convert_to": "ft"}`
let my = JSON.parse(x)
ser.push(my)
console.log(ser);

function test() {
	/*let elw = document.getElementById('hi')
	let link = document.createElement('li')

	link.innerHTML = 'dd'
	elw.appendChild(link)
	console.log(JSON.parse(x));*/
	ser.push(my)

}
function del() {
	let ela = document.getElementById('b')
	let d = document.getElementById('hi')
	d.removeChild(ela)

}
/*
console.log(document.getElementById('select'));

let output = document.getElementById('output')
let inputUnit = document.getElementById('inputUnit')

let input = document.createElement('input');
input.type = 'number';
input.id = 'inputUnit';
input.className = 'form-control form--control-lg'

inputUnit.appendChild(input);

let block1 = document.createElement('div');
let blockLit = document.createElement('div');
let nameElem = document.createElement('h4');
let element = document.createElement('div');

block1.id = 'meters';
block1.className = 'card alert-warning';



element.id = 'metersOutput';

blockLit.className = 'card-block';

output.appendChild(block1).appendChild(blockLit).appendChild(nameElem);
output.appendChild(block1).appendChild(blockLit).appendChild(element);
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('inputUnit').addEventListener('input', function (e) {
	let inputName = select.el.querySelector('[data-type="value"]').textContent

	console.log(inputName);
	if (inputName === 'Inches') {
		document.getElementById('output').style.visibility = 'visible';
		let km = e.target.value;
		document.getElementById('metersOutput').innerHTML = km * 2.54;
		nameElem.innerHTML = `Centimeters:`;
	}
	else if (inputName === 'Centimeters') {
		document.getElementById('output').style.visibility = 'visible';
		let km = e.target.value;
		document.getElementById('metersOutput').innerHTML = km / 2.54;
		nameElem.innerHTML = `Inches:`;
	}
})*/