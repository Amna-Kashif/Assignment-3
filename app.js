                         // ===== SHORT CIRCUIT EXPRESSIONS =====  

let a = 5;
let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || a--) || (false && (++a + 1)) * "end";
        // = ('abc' || 'falsetest') * (5) => 'abc' * (5) => NaN || ((6)) * 'end' => NaN   (the entire expression evaluates to NaN)
console.log(exp1); // Output: NAN


a = 5;
let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
        // = 10 * (11) => 110 || 'bar' && ('falsetest')   (|| operator returns first truthy value)
console.log(exp2);   // Output: 'falsetest'


a = 5;
let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
        // = 3 + (5) => 8 * 4 => 32 && ('6value') * (3) => NaN + 'result' => 'NaNresult'   (this expression returns last truthy value)
console.log(exp3);    // Output:  'NaNresult'

a = 5
let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
        // = 'hello' * ('6true') => NaN || (2 + NaN => NaN) * (1) => NaN + 'xyz' => 'NaNxyz' && 0; (&& opearator returns second truthy value) 
console.log(exp4);   // Output: 0


a = 5;
let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
         //= (true)    (|| operator returns first truthy value)
console.log(exp5);  // Output: true 


a = 5;
let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
         //   = 6 + "abc" => '6abc' && (8) + 3 =>  11
console.log(exp6); // Output: 11


a = 5;
let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
         //    = ('foo5') * (7) => NAN || 6 + (3) => 9 (9 is truthy value)
console.log(exp7);   // Output: 9


a = 5;
let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
         //    =  (1) && (1) => 1
console.log(exp8);  // Output: 1


a = 5;
let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
         //   = 3 * "abc" => NAN + (2) => NAN || ('6test') && ('3result') => ('3result' is truthy value) 
console.log(exp9);   // Output: '3result'


a = 5
let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
         //   = (6) && 'start' => 'start' 
console.log(exp10);   // Output: 'start'
         
a = 5;
let exp11 =  (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
         //   = (false = 0) + (5) => 5 * 4 => 20 || NaN && 0 => 0  (|| operator returns first truthy value)
console.log("exp11 " + exp11);    // Output: 20



let exp12 = "hello" + (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
          //  = 'hello' + (1) + 2 => hello12  // it add left to right so it concates both num with string.
console.log(exp12);   // Output: 'hello12'

a = 5;
let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
          //  = 5 * (5) => 25 (truthy value) || (0) + 2 => 27 (27 is truthy value so (false + "test") is evaluated) -> ('falsetest') 
console.log(exp13);    // Output: 'falsetest'

a = 5;                             
let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
         // = ('falseabc') * 2 => NAN || (5) * 'start' + 3 => NAN (because of AND operator it evaluate further) 
console.log(exp14);   // Output:  'end'


a = 5;
let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
         // = (0foo) * 3 => NAN + 1 => NAN  && 'result' 
console.log(exp15);    // Output: 'NANresult'

a = 5;
let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
         // = NAN || false || 'start6' * 5 => NAN && null (all are falsy values before AND operator so it gives null)
console.log(exp16);   // Output: null


a = 5;
let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
         // = 3 + NAN => NAN (&& operator doesnot evaluate right hand side) 0+'value' => 'value' && 4 (&& operator returns second truthy value) 
console.log(exp17);   // Output: 4


a = 5;
let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
        // = left-handside => NAN || (7) * 3 + 'result' => '21result' && 0 (both are truthy but && operator returns second truthy value) 
console.log(exp18); // Output: 0


a = 5;
let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
     // =  (6) && 'foo' (it gets truthy value on both sides)
console.log(exp19);   // Output: 'foo' 



a = 5;
let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
         // = 5 + 'hello' => '5hello' && (6) * 'result' => NAN || 'end5' (it returns this truthy value)
console.log(exp20);   // Output: 'end5'


a = 5;
let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
         // = 5 * (7) => 35 && ('testfalse') (both are truthy so it gives second value)
console.log(exp21);  // Output: 'testfalse'


a = 5;
let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
        // = 'foo4' && (7) * 'start' => NAN || 5 + 6 * (1) => 11 && 'test' (it returns last truthy value)
console.log(exp22);  // Output: 'test'


a = 5;
let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
         // = (2) || (6) * 'end' => NAN && 'start' || 20 && 'result' (it returns last truthy value)
console.log(exp23);   // Output: 'result'


a = 5;
let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
         // = 3 + NAN => NAN (0 + 5) * 'hello' => NAN && 'world1' || 2  (it returns last truthy value)
console.log(exp24);   // Output: 2


a = 5;
let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
        // = (7) * (5) => 35 && 5 (it returns second truthy value)
console.log(exp25);   // Output: 5


a = 5;
let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
        // = 'hello' && 6 + (6) = 12  (it gets truthy value)
console.log(exp26);   // Output: 12


a = 5;
let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
      // = NAN + (3) => NAN && (falsy value) || 'start5' 
console.log(exp27);   // Output:  'start5'


a = 5;
let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
        // = (1) * 'hello' => NAN || 3 + (5) * 'result' => 3 + NAN => NAN || 'world' (Since NAN is falsy, the result is 'world', which is truthy)
console.log(exp28);   // Output: 'world'


a = 5;
let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
         // = 'start' + 2 => 'start2' && ('value') * 5 => NAN + 'result' => 'NANresult'
console.log(exp29);   // Output: 'NANresult'


a = 5;
let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
         // =  (4) * 'test' => NAN || 6 && 'falsevalueend' (&& operator returns second truthy value which is concatenation of 3 strings)
console.log(exp30);   // Output: 'falsevalueend'


a = 5;
let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
         // = '3end' || NAN (|| operator returns first truthy value)
console.log(exp31);   // Output: '3end'


a = 5;
let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
         // = (3) * (1) => 3 (|| operator returns first truthy value)
console.log(exp32);   // Output: 3


a = 5;
let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
         // = 5 && 'end5'   (&& operator returns second truthy value)
console.log(exp33);   // Output:  'end5'


a = 5;
let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
         // = 'hello' + 4 * (5) => 'hello20'  (|| operator returns first truthy value)
console.log(exp34);   // Output: 'hello20'


a = 5;
let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
         // =  'start' && (5) * 4 => 20 + 5 => 25 && ('falseend')   (&& operator returns second truthy value if the first value is also truthy first value is 25 which is truthy)
console.log(exp35);   // Output: 'falseend'


a = 5;
let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
         // = '1value' && (8)  (&& operator returns second truthy value)
console.log(exp36);   // Output: 8


a = 5;
let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
         // = 'hello' && '2test'  (&& operator returns second truthy value)
console.log(exp37);   // Output: '2test'


a = 5;
let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
         // = 5 * (5) => 25 && NaN || '2end' (last value is truthy so it returns it)
console.log(exp38);   // Output: '2end'


a = 5;
let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
         // = 'start' && (1) * 2 => 2   (&& operator returns second truthy value)
console.log(exp39);   // Output: 2


a = 5;
let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
         // = ('test') * 5 => NaN || 6 + NaN => NaN   (both gives NaN which falsy value so it returns so far NaN)
console.log(exp40);   // Output: NaN


a = 5;
let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
         // = 'start' && (5) * 'test' => NaN + 5 => NaN || 4 * (1) => 4 && 'hello'     (&& operator returns second truthy value)
console.log(exp41);   // Output: 'hello'


a = 5;
let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
         // = 1 + NaN => NaN || (3) && 'rsult' * 4 => NaN + 5 => NaN    (both gives NaN which falsy value so it returns so far NaN)
console.log(exp42);   // Output: NaN


a = 5;
let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
        //  = (5) || 4 * (5) => 20 && 'start5' (it returns last truthy value)
console.log(exp43);   // Output: 'start5'


a = 5;
let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
       //   = 12 + 3 => 15 && 'value1'  (&& operator returns second truthy value)
console.log(exp44);   // Output: 'value1'



a = 5;
let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
        // = '1test' && 5 + (15) => 20  (&& operator returns second truthy value)
console.log(exp45);   // Output: 20


a = 5;
let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
        // = (14) && 'test'    (&& operator returns second truthy value)
console.log(exp46);   // Output: 'test' 


a = 5;
let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
//         = 'result' && (4) * 2 => 8 (&& operator returns second truthy value)
console.log(exp47);   // Output: 8


a = 5;
let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--
        // = (1) * 'test' => NaN && 4 || (3) * 'hello' => NaN + 5 => NaN  (the entire expression evaluates to NaN)
console.log(exp48);   // Output:  NaN


a = 5;
let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
        // = (6) + 'result' => '6result' && 4 * (6) => 24   (&& operator returns second truthy value)
console.log(exp49);   // Output: 24


a = 5;
let exp50 = 32 && true - ++a && "" || "true";
        // = 32 && 1 - 6 => 5 && (evaluates further) "" -> (falsy value) || "true" (returns string)
console.log(exp50);   // Output: 'true'



a = 5;
let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
        // = (7) * (6) => 42 (|| operator returns first truthy value)
console.log(exp51);   // Output: 42



a = 5;
let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
        // = (3) * "test" => NaN || 4 + "start" * ('5result') => 4 + NaN   (the entire expression evaluates to NaN)
console.log(exp52);   // Output:  NaN


a = 5;
let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
         // = 3 + "value" * (7) => 3+NaN => NaN || ('start') + 'end' =>'startend'   (it returns last truthy value)
console.log(exp53);   // Output:   'startend'


a = 5;
let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
         // = (7) * 'result' => NaN || (5) * 'test' =>  NaN + 4 => NaN   (the entire expression evaluates to NaN)
console.log(exp54);   // Output: NaN


a = 5;
let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
         // = 'start' + 5 * ('5test') => 'start' + NaN => 'startNaN'  (concates string and NaN)
console.log(exp55);   // Output: 'startNaN'


a = 5;
let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
         // = 4 * (6) + "test" => '24test'
console.log(exp56);   // Output: '24test'   (|| operator returns first truthy value)


a = 5;
let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
         // = (NaN) || (5) * "result" => NaN || "value"   (this expression returns the last truthy value)
console.log(exp57);   // Output: "value"


a = 5;
let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
         // = ('5start') * "result" => NaN || (2) 'end' + 3 => '2end3'   (this expression returns the last truthy value)
console.log(exp58);   // Output: '2end3'


a = 5;
let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
         // = 5 * (8) => 40 * "test" => NaN || (false) + 2 => 2  (&& operator returns first falsy value and last truthy value (false && "start"))
console.log(exp59);   // Output: 2


a = 5;
let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
         // = ('5value') * 'test' => NAN + 4 => NaN || (2) * 'end' => NaN   (the entire expression evaluates to NaN)
console.log(exp60);   // Output: NaN


a = 5;
let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
         // = 3 + ('6result') => '36result'  (|| operator returns first truthy value)
console.log(exp61);   // Output: '36result'


a = 5;
let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
         // = 'start' + ('5start') * 3 => 'start' + NaN => 'startNaN'  (|| operator returns first truthy value)
console.log(exp62);   // Output: NaN


a = 5;
let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
         // = (7) * 'test' => NaN || 'value' + (8) * 'result' => 'valueNaN'  (this expression returns concatenation of two strings)
console.log(exp63);   // Output: 'valueNaN'



a = 5;
let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result")
         // = 5 * 'end' + (6) * 'test' => NaN + NaN => NaN || 'start' + (false) => 'startfalse'   (this expression returns the last truthy value)
console.log(exp64);   // Output: 'startfalse'


a = 5;
let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
         // = 'value' + 3 * ('5test') => 'valueNaN'  (|| operator returns first truthy value)
console.log(exp65);   // Output: 'valueNaN'


a = 5;
let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
         // = ('6test') * 2 => NaN || (6) * 'start' => NaN + 'result' => 'NaNresult'
console.log(exp66);   // Output: 'NaNresult'   (this expression returns the last truthy value)


a = 5;
let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
         // = 'start' + (8) * 'end' => 'start' + NaN => 'startNaN'   (|| operator returns first truthy value)
console.log(exp67);   // Output: 'startNaN'


a = 5;
let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
         // = 2 * (6) + 'result' => 12 + 'result' => '12result'   (|| operator returns first truthy value)
console.log(exp68);   // Output: '12result'


a = 5;
let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
         // = 4 + ('5test') * 5 => 4 + NaN => NaN || (2) * 'start' => NaN   (the entire expression evaluates to NaN)
console.log(exp69);   // Output: NaN


a = 5;
let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
         // = (7) * 'result' => NaN || (false) + 3 => 3   (this expression evaluates to end 0 + 3 which returns 3)
console.log(exp70);   // Output: 3



a = 5;
let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
         // = 'test' + 2 * (8) => 'test' + 16 => 'test16'   (|| operator returns first truthy value)
console.log(exp71);   // Output:  'test16'


a = 5;
let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
         // = 3 * ('5value') => NaN || (2) * 'test' => NaN  (the entire expression evaluates to NaN)
console.log(exp72);   // Output: NaN


a = 5;
let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
         // = ('5test') * 4 => NaN || (1) * 'result' => NaN + 'start' => 'NaNstart'   (this expression returns the last truthy value)  
console.log(exp73);   // Output: 'NaNstart'


a = 5;
let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
         // = (11) * 'end' => NaN || (7) * 'result' => NaN + 'start' => 'NaNstart'   (this expression returns the last truthy value)
console.log(exp74);   // Output:  'NaNstart'


a = 5;
let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
         // = (NaN) + ('5start') => 'NaN5start'   (this expression returns the last truthy value)
console.log(exp75);   // Output:  'NaN5start'

