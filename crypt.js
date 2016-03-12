'use strict';

const Encrypt = require('./encrypt');
const flags = ['-e', '-d'];

const USAGE_STRING = `
        USAGE:
        ----------------------------------- 
        crypt <method> <string> <key>
        
        Methods (can be specified at any point):
        
        -e - encrypt
        -d - decrypt
        
        ----------------------------------- 
        Examples:
        
        Encrypting string: 
        
        \t crypt -e <string> <key>
        
        Decrypting a string: 
        
        \t crypt -d <string> <key>`;

const [ nodePath, scriptPath, arg1, arg2, arg3 ] = process.argv;
const args = [arg1, arg2, arg3].filter(a => !!a);

// build the flag and string arguments
let [flag, stringArgs] = ((args, flags) => {
  
  let f, s = [];
  args.forEach(a => {
    if (!f && flags.indexOf(a) !== -1) {
      f = a;
    } else {
      s.push(a);
    }
  });
  
  return [f, s];
})(args, flags);

if (stringArgs.length == 2 && !!flag) {  
  
  const [str, key] = stringArgs;
  const encrypt = new Encrypt(key);
  
  const isEncoding = flag == '-e';
  const method = isEncoding ? encrypt.encode : encrypt.decode; 
    
  let outputMsg = isEncoding ? 'Encoded' : 'Decoded';
  let outputStr = method(str);

  console.log(`\n${outputMsg}: ${outputStr}`);
} else {
  console.log(USAGE_STRING);
}


