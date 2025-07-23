var empInfo: {
  id: number;
  name: string;
  location: string;
  age: number;
  skills: string[];
  present: boolean;
} = {
  id: 5,
  name: "Nilay",
  location: "Kolkata",
  age: 25,
  skills: ["html", "css", "js"],
  present: true,
};

console.log("empInfo ", empInfo);
console.log("Skills ", empInfo.skills);
