class User{
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName (){
        let fullname = `${this.firstname} ${this.lastname} is my full name`
        return fullname;
        //do this just 1 line
    }
    editName(newname){
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
        //take a middle name too
    }
}

const john = new User('Jhon','Anderson', 34);
//console.log(john);
console.log(john.getFullName());
john.editName('Jhonny Anderson');
console.log(john.getFullName());



// const sammy = new User();
// console.log(sammy);
