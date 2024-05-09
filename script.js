let students = [
    {
        name: "Maria",
        firstExamGrade: 8,
        secondExamGrade: 9,
        avarege: 0
    },
    {
        name: "João",
        firstExamGrade: 4,
        secondExamGrade: 7,
        avarege: 0
    },
    {
        name: "Vitoria",
        firstExamGrade: 5,
        secondExamGrade: 5,
        avarege: 0
    },
    {
        name: "Augusto",
        firstExamGrade: 10,
        secondExamGrade: 4,
        avarege: 0
    },
    {
        name: "Lopes",
        firstExamGrade: 6,
        secondExamGrade: 4,
        avarege: 0
    }
]
let avarege;

calculateAvarege = function(){
    for (let i = 0; i <= students.length; i++){
        
        avarege = (students[i].firstExamGrade + students[i].secondExamGrade) / 2

        switch(avarege >= 7){
            case true:
                alert(`O aluno(a) ${students[i].name} tirou a nota média de ${avarege}. 
Parabéns ${students[i].name}! Você foi aprovado!`)
                break;
            default:
                alert(`O aluno(a) ${students[i].name} tirou a nota média de ${avarege}. 
Infelizmente não foi dessa vez, ${students[i].name}. Tente novamente!`)
        }

    }
 
}
    
calculateAvarege()