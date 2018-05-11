let Student = require('./student');
let allStudent = [new Student('范范',1,1,100,100,100,100)];
function addStudent(student){
    allStudent.push(student);
}
function getAllstudent() {
    return allStudent;
}
module.exports = {
    addStudent,
    getAllstudent
}