//data-types

//string
var student_name = "Anvi";
console.log(student_name)

//number
var age = 7.2;
console.log(age);

//boolean - true or false
var studying = false;
console.log(studying);

//undefined
var marks;
console.log(marks);

//null
marks = null;
console.log(marks);

//enter more than one value - same data-type or different
//arrays
//array with different data type
//index number: value
//0: Arush
var student_details = ["Arush", "M","Mumbai",95,"Cricket"];
for(var i = 0;i<student_details.length;i++){ //i = i + 1 Or i +=1
    console.log(student_details[i])
}
//to add more values inside array, use push
student_details.push("Cold Coffee");
console.log(student_details);

//list of arrays inside an array
var position = [200,130];
console.log(position);
var trajectory = [];
trajectory.push(position);
console.log(trajectory);

position = [400,150];
//console.log(position);
//var trajectory = [];
trajectory.push(position);
//console.log(trajectory[1][0]);

for(var i = 0;i<trajectory.length;i++){ //i = i + 1 Or i +=1
    console.log(trajectory[i][0],trajectory[i][1])
}