/*jshint esversion: 6 */
const exec = require('child_process').exec;

exec('yarn beginFile', function(error, stdout, stderr){
    console.log(error, stdout, stderr);
}).stdout.on('data', (data) => {
    data = data.replace(/\n$/, '');
    console.log('\x1b[36m', 'reactjs ->', '\x1b[0m', data);
});

exec('neu run --frontend-lib-dev', function(error, stdout, stderr){
    console.log(error, stdout, stderr);
}).stdout.on('data', (data) => {
    console.log('\x1b[36m', 'neujs ->', '\x1b[0m', data.replace(/\n$/, ''));
});