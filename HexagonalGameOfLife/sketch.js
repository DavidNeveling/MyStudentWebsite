var grid;
var scale, radius;
var speedSlider;
var play;

function setup(){
    createCanvas(600, 600);
    scale = 50;
    grid = freshGrid();
    radius = width / (grid[0].length * 3 - 1.5);
    play = false;
    speedSlider = createSlider(0, 190, 175);
	 speedSlider.position(0, height);
    randomizeGrid();
    drawGrid();
}

function draw(){

   background(0);
   updateGrid();
   drawGrid();
   delay(200 - speedSlider.value());
}

function drawGrid(){
    for (var r = 0; r < grid.length; r++){
        for (var c = 0; c < grid[0].length; c++){
           var x = 3 * radius * c;
           if(r % 2 == 1)
               x += int((3.0 / 2) * radius);
           var fillColor;
           if (grid[r][c])
               fillColor = color(255, 0, 0);
           else
               fillColor = color(20);
           drawHexagon(x, int(cos(PI / 6) * radius * r), radius, true, true, fillColor, color(0));
        }
    }
}

function drawHexagon(x, y, r, dofill, dostroke, fCol, sCol){
    if (dofill)
        fill(fCol);
    else
        noFill();
    if (dostroke)
        stroke(sCol);
    else
        noStroke();

    var angle = 0;
    beginShape();

    while(angle < TWO_PI){
        vertex(x + r * cos(angle), y + r * sin(angle));
        angle += (PI / 3);
    }
    endShape();
}

function updateGrid(){
    for (var r = 0; r < grid.length; r++){
        for (var c = 0; c < grid[0].length; c++){
             var n = getNeighbors(r, c);
             if (grid[r][c]){
                 if (n % 2 == 1) // old rules (n < 2 || n > 3)
                     grid[r][c] = false;
             }
             else{
                 if (n % 3 == 0) // old rules (n == 3)
                     grid[r][c] = true;
             }
        }
    }
}

function getNeighbors(r, c){
    var sum = 0;

    if (r % 2 == 0){
       try {
           if(grid[r - 2][c])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r - 1][c])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r - 1][c - 1])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r + 1][c])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r + 1][c - 1])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r + 2][c])
               sum++;
       }
       catch (e){}
   }
   else {
       try {
           if(grid[r - 2][c])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r - 1][c])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r - 1][c + 1])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r + 1][c])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r + 1][c + 1])
               sum++;
       }
       catch (e){}
       try {
           if(grid[r + 2][c])
               sum++;
       }
       catch (e){}
   }
    return sum;
}

function randomizeGrid(){
     for (var r = 0; r < grid.length; r++){
         for (var c = 0; c < grid[0].length; c++){
              grid[r][c] = random(0, 1) >= 0.5;
         }
     }
     drawGrid();
     console.log('randomize');
}

function freshGrid(){
    var newGrid = [];
    for (var r = 0; r < (3 * width / scale) + (3 * width / scale) / 4; r++) {
        newGrid[r] = [];
        for (var c = 0; c < height / scale; c++) {
            newGrid[r][c] = false;
        }
    }
    return newGrid;
}

function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
        var d = new Date();
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
    }
}

function mouseClicked(){
    if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height)
        randomizeGrid();
}
