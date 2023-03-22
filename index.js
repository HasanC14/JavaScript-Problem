const vaxTrail = (people) => {
  let A = [];
  let B = [];
  let C = [];
  let D = [];
  for (let i = 0; i < people.length; i++) {
    let CurrentPerson = people[i];
    if (
      CurrentPerson.age >= 20 &&
      CurrentPerson.age <= 30 &&
      CurrentPerson.temperature < 100
    ) {
      A.push(CurrentPerson);
    } else if (
      CurrentPerson.age >= 31 &&
      CurrentPerson.age <= 40 &&
      CurrentPerson.temperature < 100
    ) {
      B.push(CurrentPerson);
    } else if (
      CurrentPerson.age >= 41 &&
      CurrentPerson.age <= 50 &&
      CurrentPerson.temperature < 100
    ) {
      C.push(CurrentPerson);
    } else if (CurrentPerson.temperature >= 100) {
      D.push(CurrentPerson);
    }
  }
  A.sort(
    (a, b) =>
      (a.age % 2 === 0 ? a.age : a.age + 3) -
      (b.age % 2 === 0 ? b.age : b.age + 3)
  );
  B.sort(
    (a, b) =>
      (a.age % 2 === 0 ? a.age : a.age + 3) -
      (b.age % 2 === 0 ? b.age : b.age + 3)
  );
  C.sort(
    (a, b) =>
      (a.age % 2 === 0 ? a.age : a.age + 3) -
      (b.age % 2 === 0 ? b.age : b.age + 3)
  );
  D.sort(
    (a, b) =>
      (a.age % 2 === 0 ? a.age : a.age + 3) -
      (b.age % 2 === 0 ? b.age : b.age + 3)
  );
  return { A, B, C, D };
};
// console.log(
//   vaxTrail([
//     { name: "sunil", age: 23, temperature: 98 },
//     { name: "Biplap", age: 24, temperature: 98 },
//     { name: "Kabir", age: 37, temperature: 99 },
//     { name: "Rahul", age: 34, temperature: 99 },
//     { name: "Paul", age: 45, temperature: 98 },
//     { name: "Kat", age: 40, temperature: 98 },
//     { name: "Nayem", age: 55, temperature: 100 },
//     { name: "Sabnaj", age: 56, temperature: 101 },
//   ])
// );
