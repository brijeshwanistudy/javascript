// i -> Ignore case
// g -> globalThis
// m -> Multiline
// y -> Sticky flag



// ---> replace function
let re = /(\w+)\s(\w+)/
let str = 'John Smith'
let newstr = str.replace(re, '$2, $1')
console.log(newstr); //Smith, John

// ---> split function
let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
let lines = text.split(/\r\n|\r|\n/)
console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

// ---> match function
let s = 'Please yes\nmake my day!'
re = new RegExp(/yes.*day/);
s.match(/yes.*day/);
// Returns null
console.log(s.match(/yes[^]*day/));
// Returns ["yes\nmake my day"]

// ---> exec function
re = new RegExp(/\d/, 'y');
while (r = re.exec("123 456")) {
    console.log(r, "AND re.lastIndex", re.lastIndex);
}
// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... and no more match.
//With the global flag g, all 6 digits would be matched, not just 3.


// ---> sticky flag
//A regular expression defined as both sticky and global ignores the global flag.
const str1 = 'table footballfoo';
const regex1 = new RegExp('foo', 'y');
regex1.lastIndex = 6;
console.log(regex1.sticky);
// expected output: true
console.log(regex1.test(str1));
// expected output: true
console.log(regex1.test(str1));
// expected output: false