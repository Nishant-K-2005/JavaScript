// ---------- ADDITIONS B/W NUMBER AND STRING -------------

    console.log('1'+2) // type=>String | value=>12
    console.log(1+'2')// type=>String | value=>12

    console.log(1+2+'3') // type=>string | value=>33
    console.log(1+'2'+3) // type=>string | value=>123
    console.log('1'+2+3) // type=>string | value=>123





// ---------- SUBTRACTION B/W NUMBER AND STRING -----------

    console.log('2'-1) // type=>number | value=>1
    console.log(2-'1') // type=>number | value=>1
    console.log('2'-'1') // type=>number | value=>1


    console.log(5-2-'1')
    console.log(5-'2'-1)
    console.log('5'-2-1)
    // FOR ALL THREE OF THE ABOVE:- type=>number | value=>2


    console.log(1-'a')
    console.log('a'-1)
    // FOR BOTH OF THE ABOVE :- type=>number | value=>NaN 