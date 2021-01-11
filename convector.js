let ser = [
	{ id: '1', unit: 'Foot', value: 30.48, convert_to: "cm" },
	{ id: '2', unit: 'Centimeters', value: 30.48, convert_to: "ft" },

]

let bas = JSON.stringify(ser)


const getTemplate = (data = [], placeholder) => {
	const text = placeholder ?? 'Placeholder default'

	const items = data.map(item => {
		return `
		<li class='selectItem' data-type='item' data-unit='${item.unit}' data-value='${item.id}' data-distance='${item.value}' data-convert='${item.convert_to}'>${item.unit}</li>
		`
	})
	return `
	
	<div class='selectInput' data-type='input' >
						<span data-type='value' data-distance='${text}'>${text}</span>
							<i class="fa fa-chevron-down" aria-hidden="true" data-type='arrow'></i>
						</div>
						<div class='selectDropdown' id='select'  data-type='selec'>
						<ul class='selectList' id = 'hi'> 
						${items.join('')}
						
					  </ul>
					  
	</div>
	
  
</div>
		  `

}
class Select {
	constructor(selector, options) {

		this.el = document.querySelector(selector)
		this.options = options
		this.seleId = null

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
		this.distance = this.el.querySelector('[data-distance="value"]')
		this.convert = this.el.querySelector('[data-convert="value"]')
		this.unit = this.el.querySelector('[data-unit="value"]')
	}

	clickHandler(event) {
		const { type } = event.target.dataset
		if (type === 'input') {
			this.toggle()
		} else if (type === 'item') {

			const id = event.target.dataset.value
			const distance = event.target.dataset.distance
			const convert_to = event.target.dataset.convert
			const unit = event.target.dataset.convert
			this.select(id, distance, convert_to, unit)
		} else if (type === 'backdrop') {

		}
		//input.placeholder = `Input ${select.el.querySelector('[data-type="value"]').textContent.toLowerCase(0)}`;
	}

	get isOpen() {
		console.log(this.el.lastElementChild.classList);
		return this.el.lastElementChild.classList.contains('selectOpen')

	}

	get current() {
		return this.options.data.find(item => item.id === this.selectedId)
	}

	select(id, distance, convert_to, unit) {
		this.selectedId = id
		this.distance = distance
		this.convert = convert_to
		this.unit = this.current.unit
		this.value.textContent = this.current.unit
		this.el.querySelectorAll('[data-id="item"]').forEach(el => {
			el.classList.remove('selected')
		})

		this.close()
	}

	toggle() {
		console.log(this.isOpen);
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

const select = new Select('#select', {
	placeholder: "Choose elements",
	data: JSON.parse(bas)
})

const a = select

window.s = select;
let x = `{"distance":{
			"unit": "m",
			"value": 0.5
			},
	"convert_to": "ft"}`
let my = JSON.parse(x)
ser.push(my)



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
