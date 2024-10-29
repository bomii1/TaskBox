class Employee {

    constructor(
        private _empName: string, 
        private _age: number, 
        private _empJob: string) {

        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
    }

    get empName() {
        return this._empName;
    }

    set empName(val: string) {
        this._empName = val;
    }

    printEmp = () => {
        console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`);
    }

}

let employee1 = new Employee('kim', 20, '개발자');
employee1.printEmp(); 