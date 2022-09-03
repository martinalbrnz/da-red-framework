export interface Pet {
  specie: string;
  name: string;
  age: number;
  sound(): void;
}

function meow(): void {
  alert("Meoooow")
}

function bark(): void {
  alert("Woof Woof")
}

export const pets: Pet[] = [
  { specie: "cat", name: "tomillo", age: 4, sound: meow },
  { specie: "cat", name: "pol", age: 5, sound: meow },
  { specie: "cat", name: "gala", age: 1, sound: meow },
  { specie: "cat", name: "vela", age: 1, sound: meow },
  { specie: "dog", name: "ema", age: 7, sound: bark }
]
