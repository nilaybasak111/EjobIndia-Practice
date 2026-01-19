var empdata = [
  { id: 1, name: "Ravi", city: "Mumbai" },
  { id: 2, name: "Ramesh", city: "Delhi" },
  { id: 3, name: "Rajesh", city: "Chennai" },
  { id: 4, name: "Nilay", city: "Kolkata" },
];

empdata.forEach((value, index) => {
  console.log(`Id : ${value.id} Name : ${value.name} City : ${value.city}`);
});
