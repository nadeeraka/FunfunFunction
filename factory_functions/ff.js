// using factory function can reduse un nesasry complexcity
//also if we use class base aproch  some times we have to deal with this
// or bind.(this)

const Dog = () => {
  let sound = "woof";

  return {
    bark: () => console.log(sound)
  };
};

let boxer = Dog();

console.log(boxer.bark());
