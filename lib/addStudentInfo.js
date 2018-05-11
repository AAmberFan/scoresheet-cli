let Student = require('./student');
const readlineSync = require('cli-interact');
let allStudent = require('./allStudent');
let getStudent = allStudent.getAllstudent();

function addStudentInfo() {

    let newStudent = readlineSync.question('\n请输入学生信息（格式：姓名, 学号, 班级, 数学成绩, 语文成绩, 英语成绩, 编程成绩），按回车提交：\n');
    let info = newStudent.split(',');
    while(!checkValid(info)){
        let newStudent2 = readlineSync.question('请按正确的格式输入要打印的学生的学号(格式：姓名, 学号, 班级, 数学成绩, 语文成绩, 英语成绩, 编程成绩），按回车提交：\n');
    }
    console.log(`学生${info[0]}的成绩被添加`);
    return new Student(info[0],info[1],info[2],info[3],info[4],info[5],info[6]);

}
function checkValid(score){
    //let score = info.split(',');
    if(!checkId(score[1])){
        console.log("学号重复\n");
        return false;
    }
    if(!checkNum( parseFloat(score[3]))||!checkNum(parseFloat(score[4]))||!checkNum(parseFloat(score[5]))||!checkNum(parseFloat(score[6]))) {
        console.log("成绩输入错误！\n");
        return false;
    }
    return true;
}
function checkId(id){
    if(getStudent==null)
        return true;
    for(let i of getStudent){
        if (i.id == id){
            return false;
        }
    }
    return true;
}
function checkNum(num){
    if(num!=null && num!=""){
        return !isNaN(num);
    }
    return false;
}
module.exports = addStudentInfo;