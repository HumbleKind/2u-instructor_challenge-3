const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

console.log("Our robot's name is:", playerName);

const enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function () {
  window.alert('Welcome to Robot Gladiators!');

  // our robot attacks
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName +
      ' attacked ' +
      enemyName +
      '. ' +
      enemyName +
      ' now has ' +
      enemyHealth +
      ' health remaining.'
  );
  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
  }

  // enemy robot attacks
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName +
      ' attacked ' +
      playerName +
      '. ' +
      playerName +
      ' now has ' +
      playerHealth +
      ' health remaining.'
  );
  if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');
  } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
  }
};

fight();
