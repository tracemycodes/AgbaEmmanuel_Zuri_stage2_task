function printName(name){
  console.log(name);
}
printName('Agba Emmanuel');


// my function to print my resume page
var printMyResume = document.getElementById('printe');
// console.log(printMyResume);
printMyResume.addEventListener('click', printthis);

function printthis (e) {
  console.log(`event type: ${e.type}`);
  window.print();
}
