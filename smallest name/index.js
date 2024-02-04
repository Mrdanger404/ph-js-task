const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// Find the friend with the smallest name
const smallestName = names.reduce((a,b) => a.length > b.length ? b: a)

console.log("The friend with the smallest name is:", smallestName);


