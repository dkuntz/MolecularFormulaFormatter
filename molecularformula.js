//Formats and subscripts molecular formulas using a simple regex.  Also formats for parentheses.
//From https://github.com/dkuntz/MolecularFormulaFormatter
//Written by David Kuntz DavidMicahKuntzatgmail.com
//Version 1.0

/*To Use:

1. Download molecularformula.js (this file) to your chosen JavaScript directory (js in this example)
2. Place the JQuery link <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> in the header of your web document.
3. Place <script src="js/molecularformula.js"></script> under the JQuery link
4. Place <MF> and </MF> tags before and after your molecular formula, IE <MF>H2O</MF>.  The formulas should automatically be subscripted!

Note: you can also call the script after initialization, simply by including MolecularFormulaFormat(); in your JavaScript file.

Feel free to redistribute for any purpose as long as this notice is maintained.

See examples in examples.html

I am in the process of adding charges
*/

$(function() {
   MolecularFormulaFormat();
});

function MolecularFormulaFormat() {
   var spans = document.getElementsByTagName("MF");
   for (var i=0;i<spans.length;i++) {
   spans[i].innerHTML = spans[i].innerHTML.replace(/([)a-zA-Z])(\d+)/g, "$1<sub>$2</sub>");
   }
}
