const playerName = window.prompt('What is your robot\'s name?');
let playerHealth = 100;
let playerAttack = 10;

console.log('Our robot\'s name is:', playerName);

const enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function() {
  window.alert('Welcome to Robot Gladiators!');

  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + 'attacked' + enemyName + '.' + enemyName + 'now has' + enemyHealth + 'health remaining.'
  );

  playerHealth = playerHealth - enemyAttack
  console.log(
    enemyName + 'attacked' + playerName + '.' + playerName + 'now has' + playerHealth + 'health remaining.'
  );
}

fight();
