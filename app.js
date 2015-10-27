$(document).ready(function() {
    
    var correctAnswers = 0;
    var hideTry = questions 
    $('#try').hide();
    

    // Questions to ask
    var currentQuestion = 0;
    var questions = [{
        question: "What year did Arcade Fire release their first album?",
        alternatives: ["2002", "2003", "2004", "2005"],
        qNum: 0,
        correct: 2,
    },
    {
        question: "What famous TV characters were featured in the Dance Yrself Clean music video??",
        alternatives: ["The Simpsons", "The Muppets", "Friends", "True"],
        qNum: 1,
        correct: 1,
    },
    {
        question: "How old was Lorde when she first released music on Soundcloud?",
        alternatives: ["15", "13", "16", "18"],
        qNum: 2,
        correct: 2,
    },
    {
        question: "What was the name of first album by Disclosure?",
        alternatives: ["Settle", "Decide", "Arrange", "Verify"],
        qNum: 3,
        correct: 0,
    },
    {
        question: "What album did Radiohead let fans pay what they wanted for?",
        alternatives: ["The Bends", "OK Computer", "Kid A", "In Rainbows"],
        qNum: 4,
        correct: 3,
    },
    {
        question: "YOU'RE DONE! You got ",
        qNum: 5,
        correct: 3,
    }]

    $('#submit').click(function(e) {
        e.preventDefault();
        $('#try').hide();

        // Check answer see if it is correct
        if ($('input[name="option"]:checked').val() == questions[currentQuestion].correct){
            $('#feedback span').text('CORRECT');
            correctAnswers++;
            $('#try').hide();
        } else {
            $('#feedback span').text('INCORRECT');  
            $('#try').hide();
        }

        // increment current question
        currentQuestion++;
        var current = questions[currentQuestion];

        $('#question').text(current.question);  

        // Hide submit on last question
        if (currentQuestion !== questions.length - 1) {
            // update next question info
            $('#count').text(currentQuestion + 1);  
            $('#question').text(current.question); 

            for (i = 0; i < current.alternatives.length; i++) { 
                $('.answer-' + i).text(current.alternatives[i])
            }

            // uncheck checked input
            $('input[name="option"]:checked').each(function(){
                $(this).prop('checked', false);
            });
        } else {
            // we have reached the end
            $('#answers, #submit').hide();
            $('#question').append(correctAnswers + " correct answers");
            $('#try').show();
        }
        $('#try').click(function(){
            location.reload();
        })

    });

});