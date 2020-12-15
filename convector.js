const getTemplate = () =>{
  return `
          <ul class='selectList'>
            <li class='selectItem'>1</li>
            <li class='selectItem'>2</li>
            <li class='selectItem'>3</li>
            <li class='selectItem'>4</li>
            <li class='selectItem'>5</li>
            <li class='selectItem'>6</li>
            <li class='selectItem'>7</li>
          </ul>
        `
}
class Select{
  constructor(selector, options){
    this.el = document.querySelector(selector)
    this.#render()
    this.#setup()
  }

  #render(){
    this.el.innerHTML=getTemplate()
  }

  #setup(){
    this.clickHandler = this.clickHandler.bind(this)
    this.el.addEventListener('click', this.clickHandler)
  }

  clickHandler(event){
      console.log(event)
  }
  open(){
    this.el.classList.add('selectOpen')
  }

  close(){
    this.el.classList.remove('selectOpen')
  }
  destroy(){
   this.el.removeEventListener('click', this.clickHandler)
  }
}
const select = new Select('#select',{

})
window.s = select;

console.log(select);
let output = document.getElementById('output')
let inputUnit = document.getElementById('inputUnit')

let input = document.createElement('input');
input.type = 'number';
input.id = 'inputUnit';
input.placeholder = 'Input ';
input.className = 'form-control form--control-lg'

inputUnit.appendChild(input);

let block1 = document.createElement('div');
let blockLit = document.createElement('div');
let nameElem = document.createElement('h4');
let element = document.createElement('div');

block1.id = 'meters';
block1.className = 'card alert-warning';

nameElem.innerHTML = 'Meters:';

element.id = 'metersOutput';

blockLit.className = 'card-block';

output.appendChild(block1).appendChild(blockLit).appendChild(nameElem);
output.appendChild(block1).appendChild(blockLit).appendChild(element);
  document.getElementById('output').style.visibility='hidden';

document.getElementById('inputUnit').addEventListener('input', function(e){
  document.getElementById('output').style.visibility='visible';
  let km = e.target.value;
  document.getElementById('metersOutput').innerHTML=km*1000;
})

/*let header = document.querySelector('header');
let section = document.querySelector('section');
let requestURL= 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload =function () {
  let superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
} 

function populateHeader(jsonObj) {
  let myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  let myPara = document.createElement('p');
  myPara.textContent='Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
  let heroes = jsonObj['members'];
  console.log(jsonObj);
  console.log(heroes);
  for (let i = 0; i < heroes.length; i++) {
   let myArticle = document.createElement('article');
   let myH2 = document.createElement('h2');
   let myPara1 = document.createElement('p');
   let myPara2 = document.createElement('p');
   let myPara3 = document.createElement('p');
   let myList = document.createElement('ul');

   myH2.textContent = heroes[i].name;
   myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
   myPara2.textContent = 'Age: ' + heroes[i].age;
   myPara3.textContent = 'Superpowers:';
    
   let superPowers = heroes[i].powers;
   for (let j = 0; j < superPowers.length; j++) {
     let listItem = document.createElement('li');
     listItem.textContent = superPowers[j];
     myList.appendChild(listItem);     
   }
   myArticle.appendChild(myH2)
   myArticle.appendChild(myPara1)
   myArticle.appendChild(myPara2)
   myArticle.appendChild(myPara3)
   myArticle.appendChild(myList)
   section.appendChild(myArticle)
  }
}
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();
*/
/*
let superHeroes=[{
  'squadName': 'Super hero squad',
  'homeTown': 'Metro City',
  'formed': 2016,
  'secretBase': 'Super tower',
  'active': true,
  'members': [
    {
      'name': 'Molecule Man',
      'age': 29,
      'secretIndentity': 'Dan Jukes',
      'powers': [
        'Radiation resistance',
        'Turning tiny',
        'Radiation blast'
      ]
    },
    {
      'name':'Madame Uppercut',
      'age': 39,
      'secretIdenity': 'Jane Wilson',
      'powers':[
        'Millon tonne punch',
        'Damage resistance',
        'Superhuman reflexes'
      ]
    },
    {
      'name':'Enternal Flame',
      'age': 1000000,
      'secretIdentity': 'Unknown',
      'powers':[
        'Immortality',
        'Heat Immunity',
        'Inferno',
        'Teleportation',
        'Interdimensional travel'
      ]
    }
  ]
}]
superHeroes.homeTown
superHeroes['active']
superHeroes[0][1]['powers'][2]

*/