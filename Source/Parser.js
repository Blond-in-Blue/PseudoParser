/*
* Parser.js
* 
* Created by Hunter Holder
*
* Sifts through a given file and identifies classes, methods, variables, and etc.
* Right now, only detects functions and classes, and their accompanying comments.
*/

function Parser() {
    
    this.readLine = function(line) {
        
        var classIndicator = "class"
        var functionIndicator = "function"
        var descriptionIndicator = "///"
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
    }
    
    this.readFile = function(file) {
        var file = this.files[0]
        var fileReader = new FileReader();
        var numberOfLines = this.result.split('\n' || ';')
        
        for (var lineNumber = 0; lineNumber < numberOfLines.length; lineNumber++){
            console.log("Line: " + lineNumber + " of " + numberOfLines)
        }
    }
    
    /// JSON object
    this.addToJSON = function(detectedItem) {
        
        var JSON = {
            "kind": detectedItem.kind(),
            "partOfClass": detectedItem.partOfClass(),
            "name": detectedItem.name(),
            "comment": detectedItem.comment()
        }
        
        return JSON
    }
    
    /// Java
    this.parseJava = function() {
        
        while (!file.eof) {
            
        }
    }
    
    /// JavaScript
    this.parseJavaScript = function() {
        
    }
}

