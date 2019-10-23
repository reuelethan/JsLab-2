const randomDamage = () => {
    return Math.floor(Math.random() * 10 + 1);
};
const chooseOption = (opt1, opt2) => {
    let randomNum = Math.round(Math.random());
    if (randomNum != 0) {
        return opt2;
    } else {
        return opt1;
    }
};
const attackPlayer = health => {
    return health - randomDamage();
};

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
};

const isDead = health => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
};
const fight = (player1, player2, player1Health, player2Health) => {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight("Mitch", "Reuel", 2, 2, );