/*
 * Receiver.js
 *
 * Created by Hunter Holder
 *
 * Takes in the file and detects the type of file being used, then passes it to the parser if all tests are passed.
 */

/// Identifies the type of file being received (filename), and returns fileType
function processFile() {
    
    //    Takes the extension of the current file and converts it into a string
    this.fileExtension = function(filename) {
        var ext = filename.split('.')
        return ext[ext.length - 1]
    }
    
    //    Right now, this parser will only support Java, but other languages should be supported in the future
    this.fileValidate = function() {
        var ext = fileExtension(filename);
        switch (ext.toLowerCase()) {
            case 'java':
                Parser.parseJava()
                console.log("Java input file")
                //       more file types can be added here
                return true
        }
        return false
    }
    
    //    Alerts in the case that the given file is not the right type, or is not successfully opened/read
    
}
