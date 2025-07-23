var facts = (h: number): number => {
  // Second number is for the return type
  let f: number = 1;
  for (let i: number = 1; i <= h; i++) {
    f = f * i;
  }
  return f;
};

console.log(facts(5));

var disp = (msg: string): void => {
  // If we don't return anything then we use void
  console.log(msg);
};

disp("Hello & Welcome to Typescript");
