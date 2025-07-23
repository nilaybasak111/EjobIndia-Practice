import { Test } from "./12July_ex5";

var t3: Test = {
    id: 11,
    nm: "Ayan",
    gen: "M",
    loc: {
        city: "Kolkata",
        pin: 700444,
        state: "West Bengal",
    },
    lang: ["English", "Hindi", "Bengali"],
};

console.log(t3);
console.log(t3.loc.pin);
console.log(t3.loc.state);
console.log(t3.lang);