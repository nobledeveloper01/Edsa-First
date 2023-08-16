showResult.style.visibility = 'hidden';
document.getElementById("btnSubmit").addEventListener("click", FillTable, false);
function FillTable() {
    showResult.style.visibility = 'visible';
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var faculty = document.getElementById('faculty').value
    var department = document.getElementById('department').value

     
    document.getElementById('tdfirstName').innerHTML = firstName;
    document.getElementById('tdlastName').innerHTML = lastName;
    document.getElementById('tdfaculty').innerHTML = faculty;
    document.getElementById('tddepartment').innerHTML = department;
   

   const  firstNamenumChars = firstName.length;
    const firstNamenumWords = firstName.split(' ').length;
    const firstNamereversedString = firstName.split('').reverse().join('');
    const firstNameupperCaseString = firstName.toUpperCase();
    const firstNamelowerCaseString = firstName.toLowerCase();
   
    document.getElementById('tdfirstNamenumChars').innerHTML = firstNamenumChars;
    document.getElementById('tdfirstNamenumWords').innerHTML = firstNamenumWords;
    document.getElementById('tdfirstNamereversedString').innerHTML = firstNamereversedString;
    document.getElementById('tdfirstNameupperCaseString').innerHTML = firstNameupperCaseString;
    document.getElementById('tdfirstNamelowerCaseString').innerHTML = firstNamelowerCaseString;


    const lastNamenumChars = lastName.length;
    const lastNamenumWords = lastName.split(' ').length;
    const lastNamereversedString = lastName.split('').reverse().join('');
    const lastNameupperCaseString = lastName.toUpperCase();
    const lastNamelowerCaseString = lastName.toLowerCase();
   
    document.getElementById('tdlastNamenumChars').innerHTML = lastNamenumChars;
    document.getElementById('tdlastNamenumWords').innerHTML = lastNamenumWords;
    document.getElementById('tdlastNamereversedString').innerHTML = lastNamereversedString;
    document.getElementById('tdlastNameupperCaseString').innerHTML = lastNameupperCaseString;
    document.getElementById('tdlastNamelowerCaseString').innerHTML = lastNamelowerCaseString;


    const facultynumChars = faculty.length;
    const facultynumWords = faculty.split(' ').length;
    const facultyreversedString = faculty.split('').reverse().join('');
    const facultyupperCaseString = faculty.toUpperCase();
    const facultylowerCaseString = faculty.toLowerCase();
   
    document.getElementById('tdfacultynumChars').innerHTML = facultynumChars;
    document.getElementById('tdfacultynumWords').innerHTML = facultynumWords;
    document.getElementById('tdfacultyreversedString').innerHTML = facultyreversedString;
    document.getElementById('tdfacultyupperCaseString').innerHTML = facultyupperCaseString;
    document.getElementById('tdfacultylowerCaseString').innerHTML = facultylowerCaseString;


    const departmentnumChars = department.length;
    const departmentnumWords = department.split(' ').length;
    const departmentreversedString = department.split('').reverse().join('');
    const departmentupperCaseString = department.toUpperCase();
    const departmentlowerCaseString = department.toLowerCase();
   
    document.getElementById('tddepartmentnumChars').innerHTML = departmentnumChars;
    document.getElementById('tddepartmentnumWords').innerHTML = departmentnumWords;
    document.getElementById('tddepartmentreversedString').innerHTML = departmentreversedString;
    document.getElementById('tddepartmentupperCaseString').innerHTML = departmentupperCaseString;
    document.getElementById('tddepartmentlowerCaseString').innerHTML = departmentlowerCaseString;
} 

function removeChar(str, char) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== char) {
        result += str[i];
      }
    }
    return result;
  }
  
  let myString = "Hello World!";
  let myChar = "l";
  let newString = removeChar(myString, myChar);
  
  console.log(newString); 