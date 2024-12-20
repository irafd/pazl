function buildSequence(numbers: string[]): string {
    let fragments: string[] = numbers.map(String);
    let sequence: string = fragments.shift() || "";

    while (fragments.length > 0) {
        let found: boolean = false;

        for (let i: number = 0; i < fragments.length; i++) {
            let current: string = fragments[i];

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

function displaySequence(): void {
    const input: string = (document.getElementById("input-numbers") as HTMLInputElement).value;
    const numbers: string[] = input.split(",").map(num => num.trim()).filter(num => num !== "");

    if (numbers.length === 0) {
        alert("Будь ласка, введіть хоча б кілька чисел.");
        return;
    }

    const result: string = buildSequence(numbers);
    (document.getElementById("sequence-result") as HTMLElement).textContent = "Найдовша послідовність: " + result;
}

(document.getElementById("startButton") as HTMLElement).addEventListener("click", displaySequence);


