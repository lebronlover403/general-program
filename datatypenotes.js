// these will be notes on data types 

// there are 8 data types in javascript

/* 
1. numbers (both integers and floating point (decimals))
            -in addition to tradition numbers, the number data type
            includes infinity and NaN (not a number
2. BigInt 
            for very large numbers javascripit starts to approximate the value
            we can override this with a bigint which we form but adding a lowercase n 
            to the end of the numver 
3. string 
            letters  words characters numvers symboles  that are treated like text 

            // + WITH STRINS PRODUCES "CONCATENATION" : connection two symbols one
            // after the other 
            /* strings are generally formed by encapsulaing symbols in quotation marks.
            in java script there is three kinds of quotation marks that you can use.

            "hello" - double quotes 
            "hello' - single quotes 
            `hello` - back ticks 

            */


            console.log("hello world");


            // if your string contain an apostrophe use double quotes 
            // if your string contains a quotation use single quotes

            // backticks allow you embed variables into a string 
            let myname = "caleb";
            console.log (`hello, ${myname}` );

            // you can also do math or other operatoins inside of curly braces;
            console.log(`2 + 3 = ${2 + 3}`);

