const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];
const output = document.querySelector(".output");
output.textContent = "";
const admitted = document.querySelector(".admitted");
console.log(admitted.textContent);
admitted.textContent = "Admit: ";

const refused = document.querySelector(" .refused");
refused.textContent = "Refuse: ";
let i = 0
while(i < people.length ){
  if (people[i] === `Phil` || people[i] === `Lola`)
    refused.textContent += people[i] + ", ";
  else
    admitted.textContent += people[i] + ", ";
i++;
}

// refused.textContent += ...;
// admitted.textContent += ...;
