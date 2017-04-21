var fs = require('fs');
var ascending = require('sort-asc');
var mergeArray = require('merge-array');

fs.readFile('./people1.JSON', 'utf-8', function(err, data){    
	if (err) {                 
		console.log(`an error occurred reading file 1: ${err}`);        
  	 	throw err;  
  	 	    } else {
  	  allpeople1 = JSON.parse(data);
      fs.readFile('./people2.JSON', 'utf-8', function(err, data){    
      if (err) {                 
      console.log(`an error occurred reading file 2: ${err}`);        
        throw err;  
          } else {
      allpeople2 = JSON.parse(data);
      mergeArray(allpeople2,allpeople1);
      allpeople2.sort(ascending);
      fs.writeFile('./peopleComplete.txt', allpeople2, (err) => {
        if (err) throw err;
        console.log('New file has been created');
      });
    }
  });
  	}
});



