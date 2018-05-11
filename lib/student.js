class Student{
    constructor(name,id,classes,math,chinese,english,programming){
        this.name = name;
        this.id = id;
        this.classes = classes;
        this.math = math;
        this.chinese = chinese;
        this.english = english;
        this.programming = programming;
    }
    averageScore(){
        return (this.math + this.chinese + this.english + this.programming)/4.0;
    }
    totalScore(){
        return (this.math + this.chinese + this.english + this.programming);
    }
}

module.exports = Student;