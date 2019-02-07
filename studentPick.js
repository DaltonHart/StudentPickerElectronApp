let students = ['Darnell',
  'JJ',
  'Christina',
  'Joseph',
  'Brandon C',
  'Michael',
  'Eunice',
  'Matthew',
  'Jonathan R',
  'Luke',
  'Nicolette',
  'Enrique',
  'Amberly',
  'Ronni',
  'Alomgir',
  'Heggy',
  'Bryant',
  'Rhea',
  'Isaac',
  'Justin',
  'Brandon J',
  'Tristan',
  'Lourdes',
  'Nassima',
  'Jason',
  'Ghenet',
  'Tiffany',
  'Karma',
  'Paris',
  'Chike',
  'Siri',
  'Leonardo'
]
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
