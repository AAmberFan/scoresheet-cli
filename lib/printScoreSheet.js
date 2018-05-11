let Student = require('./student');
const readlineSync = require('cli-interact');
let allStudent = require('./allStudent');
let getStudent = allStudent.getAllstudent();

function scoreSheetPrintComment(){
    let students = readlineSync.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n');
    students = students.split(',');
    let student = [];
    for(let i of students){
        if(valid(i)){
            continue;
        }
        student.push(valid(i));
    }
    printStudent(student);
}
function valid(id) {
    for(let i of getStudent){
        if (i.id == id){
            return i;
        }
    }
    console.log(`${id} doesn't exist\n`);
    return;
}
function totalScore(){
    let total = 0.0;
    let num = 0.0;
    for(let i of getStudent){
        total+= i.totalScore();
    }
    return total/getStudent.length;
}
function mediumScore(){
    let totalScores = getStudent.map(function(element){
        return element.totalScore();
    });
    totalScores = totalScores.sort(sortAsc);
    if(getStudent.length%2 ==1){
        return totalScores[(getStudent.length-1)/2];
    }else{
        return (totalScores[getStudent.length/2] + totalScores[getStudent.length/2 - 1])/2.0;
    }
}
function sortAsc(num1, num2){
    return num1 - num2;   //num1 > num2 就返回正数
}
function printStudent(studentlist){
    let menu = '成绩单\n' +
        '姓名|数学|语文|英语|编程|平均分|总分 \n' +
        '========================\n';
    let student = '';
    for(let i of studentlist){
        student+=i.name+'|';
        student+=i.math+'|';
        student+=i.chinese+'|';
        student+=i.english+'|';
        student+=i.programming+'|';
        student+=i.averageScore+'|';
        student+=i.totalScore()+'|';
        console.log(student+'\n');
        student='';
    }

    console.log('========================\n');

    console.log(`全班总分平均数：${totalScore()}\n全班总分中位数：${mediumScore()}`);
}
module.exports = scoreSheetPrintComment;