const classA = [
    {
        name: "Anna",
        grade: 7
    },
    
    {
        name: "Beatriz",
        grade: 6
    },
    
    {
        name: "Luna",
        grade: 2
    }
]

const classB = [
    {
        name: "Dayanne",
        grade: 10
    },
    
    {
        name: "Cida",
        grade: 10
    },
    
    {
        name: "Amanda",
        grade: 6
    },

    {
        name: 'João',
        grade: 4
    },

    {
        name: 'Maria',
        grade: 2
    }
]

function calculateAverage(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

function sendMessage(average, classes) {
    if (average > 5) {
        console.log(`The ${classes} average was ${average}. \nCongratulations to the class!\n`)
    } else {
        console.log(`The ${classes} average was ${average}. \nThe class was not good!\n`)
    }
}

sendMessage(averageA.toFixed(2), 'class A')
sendMessage(averageB.toFixed(2), 'class B')

// Marcar student como flunked se a grade for menor que 5
function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
    // console.table(students) -> mostra o conteúdo em uma tabela
}

function sendFlunkedMessage(student){
    if (student.flunked){
        console.log(`The student ${student.name} was flunked!`)
    }
}

function studentflunked(students) {
    for (let student of students) { // outra forma de usar for
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

studentflunked(classA)
studentflunked(classB)
