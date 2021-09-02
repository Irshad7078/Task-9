const fs = require('fs');

//create a file
fs.writeFile("task9.txt", "Hello,this is task9 of sig web", (err) => {
    console.log('Your file has been created.');
});

//update data
fs.appendFile('task9.txt', ' and this is the last task of this session.', (err) => {
        console.log('Your data has been updated in file.');
});

//read a file
fs.readFile('task9.txt', 'UTF-8', (err, data) => {

    console.log(data);
});


//     console.log(data);
// });

//delete the file


// fs.unlink('task9.txt',()=>{
//     console.log('Your file has been deleted');
// });

// To Delete, uncomment "delete the file" part(including line 20 and 21) and comment other parts