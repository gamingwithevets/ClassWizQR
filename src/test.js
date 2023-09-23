import { parseUrl } from './index.js';

let url = `
http://wes.casio.com/math/index.php?q=I-234F+U-000000000000+M-C10000AD00+S-001410100000100E1010B000AC14+R-0200000000000000010000000000000000000000+E-31A631
`

console.log(parseUrl(url));

url = `
http://wes.casio.com/math/index.php?q=I-234F+U-000000000000+M-X100000000+S-05099
`
console.log(parseUrl(url));

url = `
http://wes.casio.com/math/index.php?q=I-234F+U-000000000000+M-4501AD0000+S-001410100000100E1010B00051DE+C-010000000000000001000200000000000000010003000000000000000100040000000000000001000500000000000000010006000000000000000100
`
console.log(parseUrl(url));

url = `
http://wes.casio.com/math/index.php?q=I-234F+U-000000000000+M-060400A000+S-001410100000100E1010B0008E08+E-FB20+C-MA23010000000000000001000800000000000000060003400000000000000101070000000000000001000500000000000000010906550301250000000105
`
console.log(parseUrl(url));
