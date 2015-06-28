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
    
//    I'll need to add alerts in the case that the given file is not the right type, or is not successfully opened
    
}


function parseJava() {
    
    this.classList = [] // tuple "name, return type"
    this.functionList = [] // tuple "name, return type"
    this.variableList = [] // tuple "name, type"
    this.constantList = [] // tuple "name, type"
    
    this.inspectLine = function(lineString) {
//        while the end of the line hasn't been reached...
        
//        identify class
//        identify function + parameters
//        identify variable declaration
//        identify constant declaration
    }
    
    this.readLine = function(inFile)) {
//        var currentLineNumber = 1
        var currentLineString = "Hello"
        
        while (!inFile.eod) {
//            reassign currentLineString
            
//            call inspectLine on currentLineString
            
        }
        
    }
}