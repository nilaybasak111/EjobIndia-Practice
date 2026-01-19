const msg = "Welcome to My Custom Module";

const isEven = (num) => {
  if (num % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
};

const empInfo = {
  id: 20,
  nm: "Nil",
  loc: { city: "kolkata", st: "wb", pin: "700001" },
  skills: ["c", "c++", "java", "php"],
};

// module.exports={info:msg,
//                 check:isEven,
//                 emp:empInfo};

module.exports = { msg, isEven, empInfo };
