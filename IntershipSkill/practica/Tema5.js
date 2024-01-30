/* Create a function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
ex: pentru 100 si 5 returneaza 95
20 si 30 returneaza zero */

const playersCurrentHealth = (health, damage) => {
  let currentHealth = health - damage;
  if (currentHealth < 0) {
    currentHealth = 0;
  }
  return currentHealth;
};

console.log(playersCurrentHealth(20, 30));

/* Sa se creeze o funcție care primește 2 parametrii reprezentând lungimea și lățimea unui dreptunghi. 
Sa se returneze urmatorul array: [perimetru, arie] Pentru 5 și 8 sa se returneze [26, 40] */

const parametriiDreptunghi = (lungimea, latimea) => {
  let perimetru = lungimea * 2 + latimea * 2;
  let arie = lungimea * latimea;
  return [perimetru, arie];
};

console.log(parametriiDreptunghi(5, 8));
