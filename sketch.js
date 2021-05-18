let word_array;
let count = 0;
let hasSubmitted = false;
let csv;

// most of this code comes from sebhastian.com. check it out: https://sebhastian.com/javascript-csv-to-array/

const csv2json = (str, delimiter = ',') => {
    const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};



function setup() {
    createCanvas(800, 800);

    const myForm = document.getElementById("myForm");
    const csvFile = document.getElementById("csvFile");

    myForm.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("Form submitted");
        hasSubmitted = true;
        const input = csvFile.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            csv = text;
            word_array = csv2json(csv);
            console.log(word_array);
            // document.write(text);
        };
        reader.readAsText(input);
    });
    // let csv = `playerX,playerY,petalX,petalY
    // put csv here lol`;
    // word_array = csv2json(csv);
    // console.log(word_array);
}

function draw() {
    if (hasSubmitted) {
        background(0);
        strokeWeight(10);
        stroke("green");
        point((parseFloat(word_array[count].playerX) / 30) * 800, (parseFloat(word_array[count].playerY) / 30) * 800);
        stroke("red");
        point((parseInt(word_array[count].petalX) / 30) * 800, (parseInt(word_array[count].petalY) / 30) * 800);
        count++;
    }
}