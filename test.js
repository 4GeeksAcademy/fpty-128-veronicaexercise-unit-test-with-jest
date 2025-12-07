// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dolar should be 156.5 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dolar 1.07 euros y 1 euro son 156,5 yenes, entonces 3.5 dolares debe ser ((3.5/1.07)* 156.5)
    const expected = ((3.5 /1.07)* 156.5);

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // 1 dolar son 156.5 yenes, entonces 3.5 dolares deberían ser = (3.5 * 156.5)
})
test("One Yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound} = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);

    // Si 1 yen son 156.5 euros y 1 euro son 0.87 pounds, entonces 3.5 dolares debe ser ((3.5*0.87)/156.5)
    const expected = ((3.5 *0.87)/ 156.5);

    // Hago mi comparación (la prueba)
    expect(pound).toBe(expected); // 1 dolar son 156.5 yenes, entonces 3.5 dolares deberían ser = (3.5 * 156.5)
})
