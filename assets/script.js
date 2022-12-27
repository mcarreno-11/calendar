// set the current time every second
setInterval(() => {
    document.getElementById('currentDay').textContent = moment().format('LLL');
} , 1000 );

// get the hr
const currentTime = parseInt(moment().format('H'));

// select the textarea so we can select the data attribute
const timeBlock = document.querySelectorAll('textarea');

setInterval(() => {
    // make a function to set the color depending on the time
    const setColorBlock = timeBlock.forEach(blochHour => {
        if( parseInt(blochHour.dataset.time) < currentTime) {
            blochHour.setAttribute('style', 'background-color: #ff6961');
        }; 
     
        if( parseInt(blochHour.dataset.time) > currentTime) {
         blochHour.setAttribute('style', 'background-color: #77dd77');
         }; 
         
     });

}, 1000);

// selest the button
const saveBttn = document.querySelectorAll('.saveBtn');

//  save the txt 
function saveText (ev)  {
    let parentBig = ev.target.parentElement; 
    let hourName = parentBig.firstElementChild.textContent;
    let textInputBlock = parentBig.querySelector('textarea').value;

    localStorage.setItem(hourName, textInputBlock);
  
};
// event 
saveBttn.forEach(bttnSave => {
    bttnSave.addEventListener('click', saveText)
})

