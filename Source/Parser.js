/*
* Parser.js
* 
* Sifts through a given file and identifies classes, methods, variables, and etc.
*
* Created by Hunter Holder
*/


//Identifies the type of file being received (filename), and returns fileType
function fileIdentify() {
    
//    Takes the extension of the current file and converts it into a string
    this.fileExtension = function(filename) {
        var ext = filename.split('.')
        return ext[ext.length -1]
    }
    
//    Right now, this parser will only support Java, but other languages should be supported in the future
    this.fileValidate = function() {
        var ext = fileExtension(filename);
        switch (ext.toLowerCase()) {
        case 'java':
//       more file types can be added here
            return true
        }
        return false
    }
    
//    Alerts in the case that the given file is not the right type, or is not successfully opened/read
    
}

// Utilizes Esprima to parse a Java file
function parseJava() {
    // use Esprima parser on file, then recreate returned hierarchy, leaving only classes, functions, variables, and constants (or find a way to make this happen initially instead)
    this.parseFile = function(filename) {
        
    }
}


function parseJavaScript() {
    
}

//function parseJava() {
//    
//    this.classList = [] // "name, return type"
//    this.functionList = [] // "name, return type"
//    this.variableList = [] // "name, type"
//    this.constantList = [] // "name, type"
//    
//    this.inspectLine = function(lineString) {
//        var parsedElements = {}
//        
////        check if certain certain keywords exist within the string...
//        switch(parsedElements[1]) {
////        identify class
//               case 'class': {
//               for (var i = 0; i < parsedElements.options.length; i++) {
//               
//               }
//               }
////        identify function + parameters
////        identify variable declaration
////        identify constant declaration
//        }
//    }
//    
//    this.readLine = function(inFile)) {
////        var currentLineNumber = 1
//        var currentLineString = "Hello"
//        
//        while (!inFile.eod) {
////            reassign currentLineString
//            
////            call inspectLine on currentLineString
//            
//        }
//        
//    }
//}