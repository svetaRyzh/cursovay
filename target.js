function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let input = prompt("Введите число:", 0);
        this.value += Number(input);
    };
}

function testAccumulator(){
    let accumulator = new Accumulator(10);
    accumulator.read();
    accumulator.read();
    accumulator.read();
    alert(`Итоговое значение: ${accumulator.value}`);
}
