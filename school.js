//super parent
class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;

    }
    get level(){
        return this._level;
        
    }
    get numberOfStudents(){
        return this._numberOfStudents;  
    }
    set numberOfStudents(numberOfStudents){
        if(numberOfStudents === number ){
        this._numberOfStudents = numberOfStudents;
        }
        else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFacts()
    {
        console.log( this._name + ' educates ' +  this._numberOfStudents  + ' students at the ' + this._level  + ' school level.');

    }
    static pickSubstituteTeacher(substituteTeachers)
    {
        let num =  Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[num];

    }   
}
class Primary extends School{
    constructor(name,numberOfStudents,pickupPolicy){
        super(name);
        this._numberOfStudents = numberOfStudents;
        this._level = 'primary';
        this._pickupPolicy = pickupPolicy;
        
    }
    get pickupPolicy(){
        return this._pickupPolicy;

    }
}
class Middle extends School{
    constructor(name,school,numberOfStudents){
        super(name);
        super(level) = 'middle';
        super(school);
        super(numberOfStudents);
          
    }
}
class High extends School{
    constructor(name,numberOfStudents,sportsTeams){
        super(name);
        this._level = 'high'; 
        this._numberOfStudents = numberOfStudents;
        this._sportsTeams = sportsTeams;
          
    }
    get sportsTeams()
    {
        console.log(this._sportsTeams);
    }
}


const lorraineHansbury = new Primary('Lorraine Hansbury',25,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));




const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();
console.log(alSmith.sportsTeams);