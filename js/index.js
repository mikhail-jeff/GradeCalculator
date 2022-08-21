let studentName;
let gradeLiterature, gradePhilosophy, gradeScience, gradeEnglish, gradeHistory, gradeCalculus, gradeFilipino, gradeAlgebra;
let averageGrade;
let subjectList;
let checkGrades;

// * Display student name function
function displayStudentName() {
    studentName = document.getElementById("studentName").value;

    document.getElementById("name").innerHTML = `Student Name: ${studentName.toString()}`;
}

// * Get average function
function getAverage() {
    gradeLiterature = parseInt(document.querySelector("#literature").value);
    gradePhilosophy = parseInt(document.querySelector("#philosophy").value);
    gradeScience = parseInt(document.querySelector("#science").value);
    gradeEnglish = parseInt(document.querySelector("#english").value);
    gradeHistory = parseInt(document.querySelector("#history").value);
    gradeCalculus = parseInt(document.querySelector("#calculus").value);
    gradeFilipino = parseInt(document.querySelector("#filipino").value);
    gradeAlgebra = parseInt(document.querySelector("#algebra").value);

    // * Getting the average grade
    averageGrade = (gradeLiterature + gradePhilosophy + gradeScience + gradeEnglish + gradeHistory + gradeCalculus + gradeFilipino + gradeAlgebra) / 8;

    console.log(`Average Grade: ${averageGrade.toFixed(1)}`);
}

// * Get failed grade function
function getFailedGrade() {
    gradeLiterature = parseInt(document.querySelector("#literature").value);
    gradePhilosophy = parseInt(document.querySelector("#philosophy").value);
    gradeScience = parseInt(document.querySelector("#science").value);
    gradeEnglish = parseInt(document.querySelector("#english").value);
    gradeHistory = parseInt(document.querySelector("#history").value);
    gradeCalculus = parseInt(document.querySelector("#calculus").value);
    gradeFilipino = parseInt(document.querySelector("#filipino").value);
    gradeAlgebra = parseInt(document.querySelector("#algebra").value);

    // * Array of subjects
    subjectList = ["Literature", "Philosophy", "Science", "English", "History", "Calculus", "Filipino", "Algebra"];
    // * Array of grades
    checkGrades = [gradeLiterature, gradePhilosophy, gradeScience, gradeEnglish, gradeHistory, gradeCalculus, gradeFilipino, gradeAlgebra];

    for (i = 0; i < checkGrades.length; i++) {
        if (checkGrades[i] < 75) {
            console.log(`You FAILED in ${subjectList[i]} with a grade of ${checkGrades[i]}!`);
        }
    }
}

// * Get passed grade function
function getPassedGrade() {
    gradeLiterature = parseInt(document.querySelector("#literature").value);
    gradePhilosophy = parseInt(document.querySelector("#philosophy").value);
    gradeScience = parseInt(document.querySelector("#science").value);
    gradeEnglish = parseInt(document.querySelector("#english").value);
    gradeHistory = parseInt(document.querySelector("#history").value);
    gradeCalculus = parseInt(document.querySelector("#calculus").value);
    gradeFilipino = parseInt(document.querySelector("#filipino").value);
    gradeAlgebra = parseInt(document.querySelector("#algebra").value);

    subjectList = ["Literature", "Philosophy", "Science", "English", "History", "Calculus", "Filipino", "Algebra"];

    checkGrades = [gradeLiterature, gradePhilosophy, gradeScience, gradeEnglish, gradeHistory, gradeCalculus, gradeFilipino, gradeAlgebra];

    for (i = 0; i < checkGrades.length; i++) {
        if (checkGrades[i] >= 75) {
            console.log(`You PASSED in ${subjectList[i]} with a grade of ${checkGrades[i]}!`);
        }
    }
}

// * Check average function
function checkAverage() {
    studentName = document.getElementById("studentName").value;

    gradeLiterature = parseInt(document.querySelector("#literature").value);
    gradePhilosophy = parseInt(document.querySelector("#philosophy").value);
    gradeScience = parseInt(document.querySelector("#science").value);
    gradeEnglish = parseInt(document.querySelector("#english").value);
    gradeHistory = parseInt(document.querySelector("#history").value);
    gradeCalculus = parseInt(document.querySelector("#calculus").value);
    gradeFilipino = parseInt(document.querySelector("#filipino").value);
    gradeAlgebra = parseInt(document.querySelector("#algebra").value);

    averageGrade = (gradeLiterature + gradePhilosophy + gradeScience + gradeEnglish + gradeHistory + gradeCalculus + gradeFilipino + gradeAlgebra) / 8;

    if (averageGrade < 68 && averageGrade >= 50) {
        console.log("Retake/Failed");
    } else if (averageGrade >= 69 && averageGrade <= 74) {
        console.log("Remedial");
    } else if (averageGrade >= 75 && averageGrade <= 100) {
        console.log("Passed");
    } else if (averageGrade < 50 || averageGrade > 100) {
        console.log("Invalid");
    }

    alert(`${studentName} average grade is ${averageGrade.toFixed(1)}`);
}

// * Compute grade function
function computeGrade() {
    displayStudentName();
    getAverage();
    getFailedGrade();
    getPassedGrade();
    checkAverage();
}
