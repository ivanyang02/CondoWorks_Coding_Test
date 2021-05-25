const fs = require('fs')

path = process.argv[2];
var txt;
fs.readFile(path, (err, data) => {
    if (err) console.log("error");
    txt = data.toString();

    //finds and outputs the customer number
    str = txt.match(/Customer no\. - Account no\.\n.*[0-9]+ - [0-9]+/)[0];
    str = str.match(/[0-9]+ - [0-9]+/)[0];
    console.log("Customer no. - Account no: " + str);

    //finds and outputs the bill period
    str = txt.match(/Bill period\:\n.*[JFMASOND][aepuco][nbrynlgptvc] ([1-3][0-9]|[1-9]), [1-2][09][0-9][0-9] to [JFMASOND][aepuco][nbrynlgptvc] ([1-3][0-9]|[1-9]), [1-2][09][0-9][0-9]/)[0]
    str = str.match(/[JFMASOND][aepuco][nbrynlgptvc] ([1-3][0-9]|[1-9]), [1-2][09][0-9][0-9] to [JFMASOND][aepuco][nbrynlgptvc] ([1-3][0-9]|[1-9]), [1-2][09][0-9][0-9]/)[0];
    console.log("Bill period: " + str);

    //finds and outputs the bill number
    console.log(txt.match(/Bill number\: [0-9]+/)[0]);

    //finds and outputs the bill date
    console.log(txt.match(/Bill date\: ....?.?.?.?.?.? ([1-3][0-9]|[1-9]), [1-2][09][0-9][0-9]/)[0]);

    //finds and outputs the total new charges
    str = txt.match(/Total new charges( )+\$(0|[1-9][0-9]?[0-9]?(\,[0-9][0-9][0-9])*)\.[0-9][0-9]/)[0];
    str = str.match(/\$(0|[1-9][0-9]?[0-9]?(\,[0-9][0-9][0-9])*)\.[0-9][0-9]/)[0];
    console.log("Total new charges: " + str);
})