const getTemplate = (data = [], placeholder) => {
	const text = placeholder ?? 'Placeholder default'
	const items = data.map(item => {

		return `
		<li class='selectItem' data-type='item' >${item.fullName}</li>
		`
	})
	return `

	<div class='selectInput' data-type='input' >

								
			<span class= 'span' data-type='value' data-distance='${text}'>${text}</span>
				<i class="fa fa-chevron-down" aria-hidden="true" data-type='arrow'></i>
	</div>
							
	<div class='selectDropdown' id='select'  data-type='selec'>
		<ul class='selectList' id = 'hi'>${items.join('')}
		</ul>
	</div>
	
`

}
class Selector {
	constructor(selector, options) {

		this.el = document.querySelector(selector)
		this.options = options
		this.seleId = null

		this.render()
		this.setup()

	}

	render() {
		const { placeholder, data } = this.options
		this.el.classList.add('select')
		this.el.innerHTML = getTemplate(data, placeholder)

	}


	setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.el.addEventListener('click', this.clickHandler)
		this.arrow = this.el.querySelector('[data-type="arrow"]')
		this.selec = this.el.querySelector('[data-type="selec"]')
		this.value = this.el.querySelector('[data-type="value"]')
		this.distance = this.el.querySelector('[data-distance="value"]')
		this.convert = this.el.querySelector('[data-convert="value"]')
		this.unit = this.el.querySelector('[data-unit="value"]')
	}

	clickHandler(event) {

		const { type } = event.target.dataset
		if (type === 'input' || type === 'value' || type === 'arrow') {
			this.toggle()
		} else if (type === 'item') {

			const id = event.target.dataset.value
			const distance = event.target.multiplier
			const convert_to = event.target.value
			const fullName = event.target.innerHTML
			this.select(distance, convert_to, fullName)
		} else if (type === 'backdrop') {

		}

	}

	get isOpen() {

		return this.el.lastElementChild.classList.contains('selectOpen')

	}


	select(distance, convert_to, fullName) {


		this.distance = distance
		this.convert = convert_to
		this.fullName = fullName

		this.value.textContent = fullName
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


}
class ConversionRates {
	_rates = [];

	constructor() {
		this._rates = [
			{ unitName: 'm', multiplier: 0.001, value: 'k', fullName: 'Metre' },
			{ unitName: 'cm', multiplier: 10, value: 'c', fullName: 'Centimetre' },
			{ unitName: 'mm', multiplier: 100, value: 'd', fullName: 'Millimetres' },
		];
	}

	getConversionRate(targetUnit) {
		return this._rates.find(v => v.fullName === targetUnit);
	}

	addConversionRate(unitName, multiplier, value, fullName) {
		this._rates.push({ unitName: unitName, multiplier: multiplier, value: value, fullName: fullName })

		const select = new Selector('#select', {
			placeholder: "Choose elements",
			data: addElement._rates
		})

	}

}

const addElement = new ConversionRates()
const select = new Selector('#select', {
	placeholder: "Choose elements",
	data: addElement._rates
})



const a = select;
window.s = select;

const baseInput = document.createElement('div');

baseInput.id = 'baseInput';

const inputOne = document.createElement('input');


baseInput.appendChild(inputOne);
const button = document.createElement('button');
button.style = `  margin: 0px 5px 5px 50px;padding:20px 5px 5px 20px;border-radius: 3px;`;

let bas = [
	{ unitName: 'mph', multiplier: 0.001, value: 'k', fullName: 'Mille' },
	{ unitName: 'd', multiplier: 0.001, value: 'k', fullName: 'Penny' },
	{ unitName: 'fur', multiplier: 0.001, value: 'k', fullName: 'Furh' },
	{ unitName: 'rod', multiplier: 0.001, value: 'k', fullName: 'Rod' },
]
baseInput.appendChild(button);
baseInput.style = `padding: 12px;`;
inputOne.style = `border-radius: 8px;`
inputOne.id = 'My'
inputUnit.appendChild(baseInput);
let inputs = { inputOne }
button.onclick = () => {
	bas.map((num) => {
		if (inputOne.value === num.unitName) {
			addElement.addConversionRate(num.fullName);
			num.fullName = '';
		}
	})
}

/*
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
	let inputName = select.el.textContent
	let convert = select.convert


	if (select.convert === 'cm') {
		document.getElementById('output').style.visibility = 'visible';
		let elem = e.target.value;
		document.getElementById('metersOutput').innerHTML = elem * select.distance;
		nameElem.innerHTML = `${select.convert}:`;
	}
	else if (select.convert === 'ft') {
		document.getElementById('output').style.visibility = 'visible';
		let elem = e.target.value;
		document.getElementById('metersOutput').innerHTML = elem / select.distance;
		nameElem.innerHTML = `${select.convert}:`;
	}
})
*/