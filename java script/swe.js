

/*var month_names = ["Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec"];

var today = new Date();
var day = today.getDate();
var month_index = today.getMonth();
var year = today.getFullYear();

console.log(day + "-" + month_names[month_index] + "-" + year);





a=25; //greatest of five numbers
b=-20;
c=-60;
d= 10;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f); 
}                                       















    var library = [ 
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, //arranging
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
        ];
     
     function compare_to_sort(x,y) 
      {
       if (x.title < y.title)
         return -1;
       if (x.title > y.title)
         return 1;
       return 0;
      }
     
     console.log(library.sort(compare_to_sort)); 



     var myname=["karina","deepika","aishu"]; //ascending and descending of strings
     console.log(myname.sort());
     console.log(myname.reverse());



     var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];//avg marks and avg grade

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}









function ex() {                    //properties to list java obj
    var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    var res = Object.keys(student);
    return res;
    }
    console.log(ex()); 




 



       function ex3(email){                                      //email
        var mail = /^\w+@[a-z A-Z_]+?\.[a-z A-Z]{2,3}$/;
        var res = mail.test(email);
        return res;
        }
        console.log(ex3('hakast@gmail.com'));
        console.log(ex3('hakastgmail.com'));
        console.log(ex3('hakast@gmailcom')); 




       /* function largest(a, b, c, d, e){ //another method for largest
            var largest = a;
            
            if (b > largest){
            largest = b;}
            else if (c > largest){
            largest = c;}
            else if (d > largest){
            largest = d;}
            else if (e > largest){
            largest = e;}
            alert(largest);}
            
            largest(4, 1, 20, 10, 5); 






            let student = {     //another method for java list prop or use for in
                name : "David Rayy",
                sclass : "VI",
                rollno : 12,
              };
              
              console.log(Object.keys(student));    








              function alp(str)      //webmaster
              {
                  return str.split('').sort().join('');
              }
              console.log(alp("webmaster"));   
              
            
     function avg(a,b)   
     {
         return a+b/2;
     }
            
        console.log(avg(2,1)); 



       ( function(){
            console.log(1);
            setTimeout(function(){console.log(2)},1000);
console.log(4);
       })();
        
         
        
    var x=5;
    function check(){
        y=10;
    
    console.log(x);
    var x=10;
}
function check2(){
    var y=10;
    console.log(y);
}
    
check();
check2(); 






var dupu= [1,2,3,4,4,5,6,7,8,7] //duplicate
function remove(a)
{
    var res = []
    for(var i=0;i<a.length;i++)
    {
        if (res.indexOf(a[i])== -1)
        {
            res.push(a[i])


            
        }

    }
    return res
}
console.log(remove(dupu));




const num= prompt("enter the value");//dashes
const str = num.toString();
const result = [str[0]];
 
for( x=1; x<str.length; x++) {
   if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
    {
     result.push('-', str[x]);
    }
   else
    {
     result.push(str[x]);
    }
 }
console.log(result.join(''));   





var obj = {                  //list prop of obj
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
    };
   var arr = [];
   for(var i in obj)
   {
       var val = obj[i];
       arr.push(val);
   }
   console.log(arr);   



   var jsonStr = '{"mac":"Book","woolen":"sweater","cake":"cream"}';//jason
var x=JSON.parse(jsonStr);
console.log(x);
for(var i in x)
{
  console.log(i);
}     


var myObj = [5, [22], [[14]], [[4]],[5,6]];    //flatten
           console.log(" [" + myObj.join() + "]");   



     
    

     /*
           function charcount(str, letter) //count and occurence
           {
           var letterCount = 0;
           for (var position = 0; position < str.length; position++)
           {
           if (str.charAt(position) == letter)
           {
           letterCount += 1;
           }
           }
           return letterCount;
           }
           console.log(charcount('gmail.com', 'm'));      






           var myObj =
           [{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},    //14 (1&2)
           {'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
           {'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
           {'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
           {'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
           {'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
           for(i=0;i<myObj.length;i++)
           {
           if(myObj[i].occupation=="Programmer")
           console.log(myObj[i]);
           }
           console.log(myObj.sort(function(a, b){return a.age < b.age}));    */




           var myObj = [                                                          //  14(3&4)
            { 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
            { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
            { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
            { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
            { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
            { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }
            ];
            var newObj={}
            for (var z of myObj){
              newObj[z['occupation']]=[];
            }
            for (var z of myObj){
              newObj[z['occupation']].push(z);
            }
            for (var k in newObj){
              for (var l of newObj[k]){
                    delete l['occupation']
              }
            }
            console.log(newObj);























  
