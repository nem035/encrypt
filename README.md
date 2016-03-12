# Crypt 

Simple node command line utility that encrypts and decrypts strings using [AES-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)

## Usage
   
   Since `crypt` uses ES6 features that are still not default in node (as of node 5.7.1), 
   It should be run with the following flag:
   
    node --harmony_destructuring path_to_crypt.js
    
   Probably the easiest thing is to create an alias `crypt` for the above command.
   
   The usage is: `crypt <method> <stringToTransform> <aesKey>`
   
   *The method flags are `-e` for encrypt and `-d` for decrypt. 
   The flag is mandatory but can be added at any point.
   
## Examples  

- Encrypt a string.

  `crypt -e "My name is Nemanja" "some awesome key"`

  Output:
  
  `6971ca9b866fe84f8e7d32d27b4939e0d5af`

- Decrypt a string.

  `crypt -d "6971ca9b866fe84f8e7d32d27b4939e0d5af" "some awesome key"`

  Output:
  
  `My name is Nemanja`
  