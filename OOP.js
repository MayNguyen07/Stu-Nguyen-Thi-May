
// create class person
class Personn {
  constructor(lastname, firstname, gender, date) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.gender = gender;
    this.date = date;
  }

  fullname() {
    alert(this.firstname + " " + this.lastname + ".");
  }
  personInfo() {
    alert(
      this.firstname +
        " " +
        this.lastname +
        " " +
        this.gender +
        " " +
        this.date +
        "."
    );
  }
}

// create class student

class  extends Personn {
    constructor(lastname, firstname, gender, date,_class,faculity,majors,subjectSore1, subjectSore2,subjectSore3) {
        super(lastname, firstname, gender, date);
        this. Class = _class;
        this.faculity=faculity;
        this.majors=majors;
     
    }
    
    set subjectSore1(score1){
        this.subjectSore1=score1;
        
    }
    set subjectSore2(score2){
        this.subjectSore2=score2;
        
    }
    set subjectSore3(score3){
        this.subjectSore3=score3;
        
    }

    get averageScore(){
        return (( this.subjectSore1+this.subjectSore2+this.subjectSore3)/3)
    }

    rank(num){if (averageScore>= 9 && averageScore<=10  ){
        return console.log("Excellent");
    } else if(averageScore>= 8 && averageScore<9 ){
        return console.log("good");;\

    }else if (averageScore>= 7 && averageScore<8){
        return console.log("Average");
    }else if (averageScore>= 5 && averageScore<7){
        return console.log("Below Average");
    }else {
        return console.log("Weak");
        

}}

infor(){
    console.log(" Score of first subject: " + this.subjectSore1);
    console.log("Score of second subject: " + this.subjectSore2);
    console.log("Score of third subject: " + this.subjectSore3);
    console.log("Average scores: " + this.averageScore());
}
 

studentInfo(){
    this.personInfo();
    this.infor();
    this.rank(this.averageScore);

}