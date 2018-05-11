
const readlineSync = require('cli-interact');
let addStudentInfo = require('./addStudentInfo');
let Student = require("./student.js");
let scoreSheetPrintComment = require('./printScoreSheet');
//let allStudent = [new Student('范范',1,1,100,100,100,100)];
let allStudent = require('./allStudent');
let getStudent = allStudent.getAllstudent();
let addStudent = allStudent.addStudent;
function main(){
    let mainMenu = `1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：`;
    let choiceNum;
    try{
        choiceNum = readlineSync.question(mainMenu);

    }catch (e) {
        console.error(e);
        process.exit(1);
    }
    choice(choiceNum);
}
function choice(num){
    if(num ==1){
        addStudent(addStudentInfo());
        //allStudent.push(addStudentInfo());
        console.log(getStudent);
        main();
    }else if(num==2){
        scoreSheetPrintComment();
        main();
    }else if(num ==3){
        process.exit(1);
    }else{
        main();
    }
}


main();
module.exports = main;