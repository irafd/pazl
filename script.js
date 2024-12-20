function buildSequence(numbers) {
    var fragments = numbers.map(String);
    var sequence = fragments.shift() || "";
    while (fragments.length > 0) {
        var found = false;
        for (var i = 0; i < fragments.length; i++) {
            var current = fragments[i];
            if (sequence.slice(-2) === current.slice(0, 2)) {
                sequence += current.slice(2);
                fragments.splice(i, 1);
                found = true;
                break;
            }
            if (sequence.slice(0, 2) === current.slice(-2)) {
                sequence = current.slice(0, -2) + sequence;
                fragments.splice(i, 1);
                found = true;
                break;
            }
        }
        if (!found) {
            break;
        }
    }
    return sequence;
}
function displaySequence() {
    var input = document.getElementById("input-numbers").value;
    var numbers = input.split(",").map(function (num) { return num.trim(); }).filter(function (num) { return num !== ""; });
    if (numbers.length === 0) {
        alert("Будь ласка, введіть хоча б кілька чисел.");
        return;
    }
    var result = buildSequence(numbers);
    document.getElementById("sequence-result").textContent = "Найдовша послідовність: " + result;
}
document.getElementById("startButton").addEventListener("click", displaySequence);
