 //   1  //

 const person = {
    name: 'Kolia',
    gender: 'male',
    lastName: 'Borisenko',
    age: 23
};

function getPerson({gender,lastName}) {
    return {
        isStudent: true,
        gender,
        lastName,
    }
}const newPerson = getPerson(person);


 //    2   //

function getPerson2() {
    [first,second] = array;
    return first > second;
}
const array = [10, 34, 54, 23];
getPerson2(array);


//         3            //

        //3 есть обьект. Необходимо
        // 1 - на выходе получить обьект в котором будет 2 поля 
        // previousCentury, currentCentury,
        // где в первом поле будет массив с тех школ в которых year меньше 2000 а во втором все остальные
        // 2 - в каждом обьекте где School1, School2 и так далее добавить два поля male, female где будут массивы
        // в male те обьекты в которых  gender- male, в female те - у которых female
        let schools = [ 
            {
                name: 'School1',
                year: 1980,
                students: [
                    { gender: 'male', name: 'G' },
                    { gender: 'female', name: 'M' },
                    { gender: 'male', name: 'N' },
                    { gender: 'female', name: 'K' },
                    { gender: 'male', name: 'A' },
                ],
            },
            {
                name: 'School2',
                year: 1990,
                students: [
                    { gender: 'male', name: 'G' },
                    { gender: 'female', name: 'M' },
                    { gender: 'male', name: 'N' },
                    { gender: 'female', name: 'K' },
                    { gender: 'male', name: 'A' },
                ],
            },
            {
                name: 'School3',
                year: 2001,
                students: [
                    { gender: 'male', name: 'G' },
                    { gender: 'female', name: 'M' },
                    { gender: 'male', name: 'N' },
                    { gender: 'female', name: 'K' },
                    { gender: 'male', name: 'A' },
                ],
            },
            {
                name: 'School4',
                year: 2012,
                students: [
                    { gender: 'male', name: 'G' },
                    { gender: 'female', name: 'M' },
                    { gender: 'male', name: 'N' },
                    { gender: 'female', name: 'K' },
                    { gender: 'male', name: 'A' },
                ],
            },
            {
                name: 'School5',
                year: 1993,
                students: [
                    { gender: 'male', name: 'G' },
                    { gender: 'female', name: 'M' },
                    { gender: 'male', name: 'N' },
                    { gender: 'female', name: 'K' },
                    { gender: 'male', name: 'A' },
                ],
            },
            {
                name: 'School6',
                year: 2007,
                students: [
                    { gender: 'male', name: 'G' },
                    { gender: 'female', name: 'M' },
                    { gender: 'male', name: 'N' },
                    { gender: 'female', name: 'K' },
                    { gender: 'male', name: 'A' },
                ],
            }
        ];

        schools.map(school=> {
            school.maleStudents = school.students.filter(stud=>stud.gender === 'male');
            return school; 
        });

        schools.map(school=> {
            school.femaleStudents = school.students.filter(stud=>stud.gender === 'female');
            return school; 
        });

let sortedSchools = {};
function sortSchoolsBySentury(schools){
    sortedSchools.previousSentury = [{...schools.filter((el) => el.year < 2000 )}];
    sortedSchools.nowdaySentury = [{...schools.filter((el) => el.year > 2000 )}];
}; 
sortSchoolsBySentury(schools);
console.log(sortedSchools);
