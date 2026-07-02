const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'src/style/about.css');
let s = fs.readFileSync(filePath, 'utf8');

let result = '';
let depth = 0;
let removedCount = 0;

for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') {
        depth++;
        result += s[i];
    } else if (s[i] === '}') {
        if (depth > 0) {
            depth--;
            result += s[i];
        } else {
            removedCount++;
            console.log('Removing extra } at position', i);
        }
    } else {
        result += s[i];
    }
}

// Add missing closing braces at the end if any
while (depth > 0) {
    result += '\n}';
    depth--;
    console.log('Adding missing } at end');
}

console.log('Fixed about.css. Removed:', removedCount);
fs.writeFileSync(filePath, result);
