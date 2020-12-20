// libraries
var readlineSync = require('readline-sync');
const chalk = require('chalk');
// printing game title and description
console.log(chalk.bold.bgBlack.green('\t\t\t\tTic Tac Toe'))
console.log(chalk.bold.bgBlack.green('\nBut with 1 and 0 where in \n1 --> X and 0 --> O\n'))
// taking input of player names 
var playerOneName=readlineSync.question(chalk.green("Enter Player 1's name\n"))
var playerTwoName=readlineSync.question(chalk.green("Enter Player 2's name\n"))
// assigning props of game
console.log(chalk.green('%s gets 1 i.e X'),playerOneName)
console.log(chalk.green('%s gets 0 i.e O'),playerTwoName)
// empty canvas
var canvas=[
  ["-","-","-","-"],
  ["-","-","-","-"],
  ["-","-","-","-"],
  ["-","-","-","-"]
];
print();/* printing initial canvas */
// main loop
var br=0;
var won=2;
var ipRow,ipCol=0;
for(var i=0;i<9;i++){
  if(i%2==0){
    console.log('Its %s\'s chance now',playerOneName);
    ipRow=readlineSync.question("Enter row position");
    ipCol=readlineSync.question("Enter column position");
    br = entry(ipRow,ipCol,1);/* entry to canvas */
    if(br==2){
      break;
    }
    won=check();/* checking */
  }
  else{
    console.log('Its %s\'s chance now',playerTwoName);
    ipRow=readlineSync.question("Enter row position");
    ipCol=readlineSync.question("Enter column position");
    br = entry(ipRow,ipCol,0);/* entry to canvas */
    if(br==2){
      break;
    }
    won=check();
  }
  if(won==1){
    break;
  }
}
// printing the canvas
function print(){
console.log("")
var string="";
for(var i=0;i<3;i++){
  string+="\t"
  for(var j=0;j<3;j++){
    string += " | "+canvas[i][j];
  }
  string+=" |\n"
}
console.log(chalk.green("Canvas looks like this as of now\n"))
console.log(chalk.blue(string))
}
// to change value in canvas
function entry(x,y,z){
  if(x=="" || y==""){
      console.log('you missed it');
      if(z==1){
         console.log(chalk.green('hurrayyy %s won!!!'),playerTwoName);
      }
      else{
         console.log(chalk.green('hurrayyy %s won!!!'),playerOneName);
      }
      return 2;
  }
  else{
    canvas[x-1][y-1]=chalk.whiteBright(z);
    print();
    calculate();
  }
}
// to calculate result
function calculate(){
  for(var l=0;l<3;l++){
      canvas[l][3]=canvas[l][0]+canvas[l][1]+canvas[l][2];
      // console.log(canvas[l][3])
      canvas[3][l]=canvas[0][l]+canvas[1][l]+canvas[2][l];
      // console.log(canvas[l][3])
  }
   canvas[3][3]=canvas[0][0]+canvas[1][1]+canvas[2][2];
}
// checking who won
function check(){
  for(var i=0;i<4;i++){
    if(canvas[i][3]=="3"||canvas[3][i]=="3"||canvas[3][3]=="3"){
      console.log(chalk.green('hurrayyy %s won!!!'),playerOneName);
      return 1;
    }
    else if(canvas[i][3]==0||canvas[3][i]==3||canvas[3][3]=="0"){
      console.log(chalk.green('hurrayyy %s won!!!',playerTwoName))
      return 1;
    }
  }
}