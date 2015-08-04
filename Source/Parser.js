/*
* Parser.js
* 
* Created by Hunter Holder
*
* Sifts through a given file and identifies classes, methods, variables, and etc.
* Right now, only detects functions and classes, and their accompanying comments.
*/

function Parser() {
    
    /// Given a line (type: String), analyzes the line at line
//    this.readLine = function(line) {
//        
//        var classIndicator = "class"
//        var functionIndicator = "function"
//        var descriptionIndicator = "///"
//        var commentIndicator = "//"
//        var inClass = false
//        
//        while (!inClass) {
//            if (test.indexOf(classIndicator) != -1) {
//                // add to JSON
//                inClass = true
//            } else if (test.indexOf(functionIndicator) != -1) {
//                // add to JSON
//            } else if (test.indexOf(descriptionIndicator) != -1) {
//                // add to JSON
//            } else if (test.indexOf(commentIndicator) != -1) {
//                // add to JSON
//            }
//        }
//        
//        while (inClass) {
//            if (test.indexOf(functionIndicator) != -1) {
//                // add to JSON
//            } else if (test.indexOf(descriptionIndicator) != -1) {
//                // add to JSON
//            } else if (test.indexOf(commentIndicator) != -1) {
//                // add to JSON
//            }
//            // And detect end of class, setting inClass = false. I'm not sure how this should be done.
//        }
//    }
    
    /// Reads the given file line-by-line
    this.readFile = function(file) {
        var file = this.files[0]
        var fileReader = new FileReader();
        var numberOfLines = this.result.split('\n')
        var lineString = ""
        
        for (var lineNumber = 0; lineNumber < numberOfLines.length; lineNumber++){
            console.log("Line: " + lineNumber + " of " + numberOfLines)
            // lineString = line at line number
            readLine(lineString)
        }
    }
    
    /// Adds a given item (type: String) to the JSON
    this.addToJSON = function(detectedItem) {
        
        var JSON = {
            "kind": detectedItem.kind(),
            "name": detectedItem.name(),
            "comment": detectedItem.comment(),
            "contains": []
        }
        
        return JSON
    }
    
    
    
    /// Java
    this.parseJava = function() {
        
        var classIndicator = "class"
        var functionIndicator = "function"
        var blockCommentIndicator = "/*"
        var documentationCommentIndicator = "/**"
        var commentIndicator = "//"
        var inClass = false
        
        while (!inClass) {
            if (test.indexOf(classIndicator) != -1) {
                // add to JSON
                inClass = true
            } else if (test.indexOf(functionIndicator) != -1) {
                // add to JSON
            } else if (test.indexOf(descriptionIndicator) != -1) {
                // add to JSON
            } else if (test.indexOf(commentIndicator) != -1) {
                // add to JSON
            }
        }
        
        while (inClass) {
            if (test.indexOf(functionIndicator) != -1) {
                // add to JSON
            } else if (test.indexOf(descriptionIndicator) != -1) {
                // add to JSON
            } else if (test.indexOf(commentIndicator) != -1) {
                // add to JSON
            }
            // And detect end of class, setting inClass = false. I'm not sure how this should be done.
        }
    }
    
    /// JavaScript
    this.parseJavaScript = function() {
        
    }
}








// Eli's functions


//function getNewFileObject (){
//    
//    return {
//    type: "",
//    name: "",
//    comments: "",
//    contains: []
//    };
//    
//}
//
//
//function readFile(text){
//    
//    var lines = text.split("\n");
//    
//    var file = getNewFileObject ();
//    
//    var head = file;
//    
//    for(var i = 0; i < lines.length; i ++){
//        head = readLine( lines[i], file, head);
//    }
//    
//    return file;
//    
//}
//
//
//function readLine(line, fileBuilding, head){
//    
//    
//    if( line is comment ){
//        fileBuilding.comments += "\n"+line;
//        return fileBuilding;
//    }
//    
//    
//    if( line is declaration ){
//        newHead = fileBuilding;
//        fill in declaration information
//        fileBuilding.contains.push(newHead);
//        return newHead;
//    }
//    
//    
//    if( line is end ){
//        move up the chain to a previous head
//    }
//    
//}
//
