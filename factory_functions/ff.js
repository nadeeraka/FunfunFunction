// using factory function can reduse un nesasry complexcity
//also if we use class base aproch  some times we have to deal with this
// or bind.(this)/
// 0.00004 factory functions
//0.00002 class

const Dog = () => {
  let sound = "woof";

  return {
    bark: () => console.log(sound)
  };
};

let boxer = Dog();

console.log(boxer.bark());

const round = radius => {
  return {
    radius,
    draw: () => console.log("drawing round ...")
  };
};

newRound = round();

newRound.draw();
