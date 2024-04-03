function getAnswer() {
    var question = document.getElementById("questionInput").value;
    if (question.trim() === "") {
        alert("Do you have a question???");
        return;
    }

    var answers = ["Absolutely", "Of course, love!", "Anything for you!", "Definitely", "Duh!", "Miracles happen everyday", "Without a doubt!",
                    "Absolutely Not!", "Of course not", "You're Joking right?", "Nah...", "Sorry to disappoint you...", "It's looking like a no", "The delusion is strong here",
                    "It's not looking good for you Chief", "Nope", "Ehh...", "A strong possibility", "Idk.. Maybe", "Not saying no, but can't say yes", "Anything is possible",
                    "Well I guess so...", "Let me think about it", "Sorry, I was admiring my beauty", "Taking a twerk break, Try again later.", "I gotta see..", "Oops!!! I wasn't listening",
                    "My bad, What did you say?"];
    
    var randomIndex = Math.floor(Math.random() * answers.length);
    var selectedAnswer = answers[randomIndex];

    document.getElementById("answerDisplay").innerHTML = "<strong>Question:</strong> " + question + "<br><strong>Answer:</strong> " + selectedAnswer;
}
