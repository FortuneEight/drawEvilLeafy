let word_array;
let count = 0;

function setup() {
    createCanvas(400, 400);
    const csv2json = (str, delimiter = ',') => {
        const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
        const rows = str.slice(str.indexOf('\n') + 1).split('\n');
        return rows.map(row => {
            const values = row.split(delimiter);
            return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
        });
    };


    let csv = `playerX,playerY,petalX,petalY
    put csv here lol`;
    word_array = csv2json(csv);
    console.log(word_array);
}

function draw() {
    background(0);
    strokeWeight(10);
    stroke("green");
    point((parseFloat(word_array[count].playerX) / 30) * 400, (parseFloat(word_array[count].playerY) / 30) * 400);
    stroke("red");
    point((parseInt(word_array[count].petalX) / 30) * 400, (parseInt(word_array[count].petalY) / 30) * 400);
    count++;
}