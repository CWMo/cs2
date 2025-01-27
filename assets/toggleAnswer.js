function toggleAns(question) {
    let answer = question.nextElementSibling;
    if (answer.matches(".show")) {
        answer.classList.remove("show")
    } else {
        answer.classList.add("show")
    }
}