function toggleAns(question) {
    let answer = question.nextElementSibling;
    console.dir(answer);
    if (answer.matches(".show")) {
        answer.classList.remove("show")
    } else {
        answer.classList.add("show")
    }
}