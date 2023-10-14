let array = [
   {
       question: "What is the primary purpose of the public static void main(String[] args) method in a Java program?",
       option1: " To declare variables",
       option2: "To define a class",
       option3: "To specify command-line arguments",
       option4: "To start the program",
       answer: "To start the program"
   },
   {
       question: "Which data type is used to represent single characters in Java?",
       option1: "char",
       option2: "string",
       option3: "int",
       option4: "float",
       answer: "char"
   },
   {
      question: "In Java, how is a single-line comment denoted?",
      option1: "//",
      option2: "/**/",
      option3: "#",
      option4: "---",
      answer: "//"
  },
  {
   question: "Which keyword is used to create a new instance of a class in Java?",
   option1: "new",
   option2: "instance",
   option3: "create",
   option4: "class",
   answer: "new"
},
{
   question: "What is the result of 10 / 3 in Java?",
   option1: "3.3333",
   option2: "3.0",
   option3: "3",
   option4: "4",
   answer: "3"
},
{
   question: "Which Java access modifier allows a class or method to be accessed from anywhere?",
   option1: " private",
   option2: "protected",
   option3: "default",
   option4: "public",
   answer: "public"
},
{
   question: "What does the static keyword mean in Java?",
   option1: "It indicates a constant value.",
   option2: " It allows access to the instance variables.",
   option3: " It belongs to the class, not instances.",
   option4: "It makes a method final.",
   answer: " It belongs to the class, not instances."
},
{
   question: "What is the Java keyword for defining a constant (unchanging) value?",
   option1: "constant",
   option2: "final",
   option3: "static",
   option4: "unchangeable",
   answer: "final"
},
{
   question: "Which loop in Java is used to iterate over a range of values?",
   option1: "for",
   option2: "while",
   option3: "do-while",
   option4: "for each",
   answer: "for"
},
{
   question: "In Java, how can you convert a primitive data type to its corresponding wrapper class?",
   option1: " Implicitly, Java does it automatically.",
   option2: "Using the convert() method",
   option3: " Using the toWrapper() method",
   option4: "By casting ",
   answer: " Implicitly, Java does it automatically."
},
{
   question: "Which statement is used to exit from a loop prematurely in Java?",
   option1: "break",
   option2: "continue",
   option3: "exit",
   option4: "terminate",
   answer: "break"
},
{
   question: "What is the default value for instance variables of a class in Java?",
   option1: "0",
   option2: "null",
   option3: "-1",
   option4: "false",
   answer: "null"
},
{
   question: "Which operator is used for logical OR in Java?",
   option1: "&",
   option2: "!",
   option3: "||",
   option4: "^",
   answer: "||"
},
{
   question: "What does the StringBuilder class provide in Java?",
   option1: " Immutable strings",
   option2: "Mutable strings",
   option3: "String comparison",
   option4: "String concatenation",
   answer: "Mutable strings"
},
{
   question: "What is the purpose of the import statement in Java?",
   option1: "To include external libraries",
   option2: "To import classes from the java.lang package",
   option3: "To define a package",
   option4: "To create a new class",
   answer: "To include external libraries"
},
{
   question: "Which Java keyword is used for creating a subclass from a superclass?",
   option1: "inherit",
   option2: "extends",
   option3: "subclass",
   option4: "super",
   answer: "extends"
},
{
   question: "What is the default value of a local variable in Java?",
   option1: "0",
   option2: "null",
   option3: "It is not initialized automatically",
   option4: "false",
   answer: "It is not initialized automatically"
},
{
   question: "Which Java class is used for reading user input from the keyboard?",
   option1: "scanner",
   option2: "inputStreamReader",
   option3: "fileReader",
   option4: "bufferReader",
   answer: "scanner"
},
{
   question: "Which of the following is not a valid access modifier in Java?",
   option1: "public",
   option2: "private",
   option3: "protected",
   option4: "static",
   answer: "static"
},
{
   question: "In Java, how do you compare two String objects for content equality?",
   option1: "==",
   option2: "equals()",
   option3: "compare()",
   option4: "contentEquals()",
   answer: "equals()"
}
];

let k = 0;
let second = 20;
let sno = document.getElementById("sno");
let question = document.getElementById("question");
let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let startcontainer = document.getElementById("startcontainer");
let wrapper = document.getElementById("wrapper");
let testbtn = document.getElementById("testbtn");
let qno = document.getElementById("qno");
let score = document.getElementById("score");
let time = document.getElementById("time");
qno.innerHTML = array.length;
let scores = 0;

function start() {
   startcontainer.style.display = "none";
   wrapper.style.display = "block";
   update();
}

function update() {
   second = 20;
   score.innerHTML = scores;
   sno.innerHTML = k + 1;
   question.innerHTML = array[k].question;
   opt1.innerHTML = array[k].option1;
   opt2.innerHTML = array[k].option2;
   opt3.innerHTML = array[k].option3;
   opt4.innerHTML = array[k].option4;
   clearInterval(timer);
   timer = setInterval(timechange, 1000);
}

function select(eventid) {
   let clickedid = document.getElementById(eventid);
   let word = clickedid.innerHTML;
   if (word === array[k].answer) {
       clickedid.classList.toggle("green");
       k++;
       scores++;
       setTimeout(cssupdate, 1000);
       changequestion();
   } else {
       clickedid.classList.toggle("red");
       k++;
       setTimeout(cssupdate, 1000);
       changequestion();
   }
}

function cssupdate() {
   opt1.classList.remove("green");
   opt2.classList.remove("green");
   opt3.classList.remove("green");
   opt4.classList.remove("green");
   opt1.classList.remove("red");
   opt2.classList.remove("red");
   opt3.classList.remove("red");
   opt4.classList.remove("red");
}

let timer = setInterval(timechange, 1000);

function timechange() {
   second--;
   time.innerHTML = second;
   if(second===0)
   {
      k++;
      changequestion();
   }
}

function changequestion()
{
      if(k+1>array.length)
      {
         clearInterval(timer);
       setTimeout(  Resultquiz,1000);
      }
      else
      {
         clearInterval(timer);
         second=20;
         setTimeout(update,1000);
      }
}
function Resultquiz()
{
   wrapper.style.display = "none";
   let show=document.getElementById("show");
   let scoreshow=document.getElementById("scoreshow");
   show.innerHTML=scores;
   scoreshow.style.display="flex";
}
function back()
{
   window.history.back();
}

