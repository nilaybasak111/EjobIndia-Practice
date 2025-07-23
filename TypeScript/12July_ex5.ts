// An interface in TypeScript defines the structure of objects, ensuring type safety by specifying required properties and their types.
// You don't need to write object type everytime.
// You can export the interface and Use it in other files
export interface Test {
  id: number;
  nm: string;
  gen: string;
  loc: {
    city: string;
    pin: number;
    state: string;
  };
  lang: string[];
}

var t1: Test = {
  id: 10,
  nm: "Nilay",
  gen: "M",
  loc: {
    city: "Kolkata",
    pin: 700043,
    state: "West Bengal",
  },
  lang: ["English", "Hindi", "Bengali"],
};

console.log(t1);
console.log(t1.loc.pin);
console.log(t1.loc.state);
console.log(t1.lang);

var t2: Test = {
  id: 15,
  nm: "Rajesh",
  gen: "M",
  loc: {
    city: "Kolkata",
    pin: 700043,
    state: "West Bengal",
  },
  lang: ["English", "Hindi", "Bengali"],
};

console.log(t2);
console.log(t2.loc.pin);
console.log(t2.loc.state);
console.log(t2.lang);
