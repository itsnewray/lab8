$(document).ready(function(){
    correct = ["2009", "Astana","4","Bio","Turan"];
    questions = ["Which year Nazarbayev University was founded?","Where is NU located?","How many UG Schools at NU?","Which one is a Life Science Major?","From which Ave car entry is permitted? "]
    choice_options = [["2009","2010","2011","2012"],["Astana","Almaty","Semey","Karaganda"],["4","5","6","7"],["Phys","ElecEng","CivilEng","PSIR","Bio"],["Kabanbay Batyr","Uly Dala","Mangilik El","Turan"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery

    for (var i = 0; i < questions.length; i++) {
         options = '';
         quizBox.append("<div class='question' id='q"+(i+1)+"'>");
         $('#q'+(i+1)).append ("<p class='d'> Q"+(i+1)+". "+questions[i]+" </p>");
         for (var j = 0; j < choice_options[i].length; j++) {
          console.log(j);
          options += "<label><input type='radio' name='q"+(i+1)+"' value='"+choice_options[i][j]+"'>"+choice_options[i][j]+"</label>";
         }
         $('#q'+(i+1)).append (options);
         $('#q'+(i+1)).append ('</div>');
    }
    
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
        if (reset) countCorrect = 0;
        for (var i = 0; i < questions.length; i++) {
          $("input[name=q"+(i+1)+"]").each (function (index){
               choice = $(this).parent().text();
               console.log(choice); 
               if ($( this ).prop("checked") == true && correct [i] == choice){
                    countCorrect += 1;
               }
        });
        reset = true;
     }
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 

});