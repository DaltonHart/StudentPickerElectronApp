let students = ['one','two','three','four','five']
let studentsAnswered = []

let studentShufflePull = () => {
  if (students.length == 0){
    console.log('reset')
    students = studentsAnswered
    studentsAnswered = []
  }
  let arr = students
  var m = arr.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  studentsAnswered.push(arr[0])
  students.splice(0, 1);
  students = arr
  let lastIndex = studentsAnswered.length -1
  return studentsAnswered[lastIndex]
}

studentShufflePull()