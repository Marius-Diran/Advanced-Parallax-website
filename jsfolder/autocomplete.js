let availableKeywords = [
  'London',
  'Tokyo',
  'Paris',
  'New York',
  'Mumbai',
  'Amsterdam',
  'Bangkok',
  'Budapest',
  'Istanbul',
  'Jakarta',
  'Helsinki',
  'Barcelona',
  'Spain',
  'Sydney',
  'Dubai',
  'Rome',
  'Moscow',
  'Hungary',
  'Thailand',
  'Netherlands',
  'Berlin',
  'Brazil',
  'Durban',
  'Chicago',
  'Nigeria',
  'Lagos',
  'Los Angeles',
  'Napoli',
  'Japan',
  'Xian',
];

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input--box');

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;

  if(input.length){
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }

  display(result);

  if(!result.length){
    resultBox.innerHTML = '';
  }
}

function display(result){
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = '';
}