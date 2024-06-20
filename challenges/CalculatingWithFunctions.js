// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/

export default function main() {

    function zero(operation = [null, null]) {
        return operator(operation, 0)
    }
    function one(operation = [null, null]) {
        return operator(operation, 1)
    }
    function two(operation = [null, null]) {
        return operator(operation, 2)

    }
    function three(operation = [null, null]) {
        return operator(operation, 3)

    }
    function four(operation = [null, null]) {
        return operator(operation, 4)

    }
    function five(operation = [null, null]) {
        return operator(operation, 5)

    }
    function six(operation = [null, null]) {
        return operator(operation, 6)
    }
    function seven(operation = [null, null]) {
        return operator(operation, 7)
    }
    function eight(operation = [null, null]) {
        return operator(operation, 8)
    }
    function nine(operation = [null, null]) {
        return operator(operation, 9)
    }

    function plus(number) {
        return [number, "add"]

    }
    function minus(number) 
    { 
        return [number, "subtract"]
  
    }
    function times(number) 
    {
        return [number, "times"]
     }
    function dividedBy(number) {
        return [number, 'divide']
    }
    function operator(operation, number) {
        switch (operation[1]) {
            case "add":
                return operation[0] + number
            case "subtract":
                return number - operation[0]
            case "times":
                return operation[0] * number
            case "divide":
                return Math.floor(number / operation[0])
            default:
                return number
        }
    }
    console.log(two(plus(two())))
    console.log(two(plus(three())))
    console.log(three(minus(one())))
    console.log(four(dividedBy(two())))
    console.log(three(times(six())))
}