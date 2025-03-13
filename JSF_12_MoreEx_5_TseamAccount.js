function tseamAccount(arr) {
    let games = arr[0].split(' ');
    let command1 = arr[0];
    let command2 = '';
    let game = '';
    let i = 1;
    while (command1 != 'Play!') {
        command1 = arr[i].split(' ');
        command2 = command1[0];
        game = command1[1];
        switch (command2) {
            case "Install":
                if (!games.includes(game)) {
                    games.push(game);
                }
                break;
            case "Uninstall":
                if (games.includes(game)) {
                    games.splice(games.indexOf(game), 1);
                }
                break;
            case "Update":
                if (games.includes(game)) {
                    games.push(game);
                    games.splice(games.indexOf(game), 1);
                }
                break;
            case "Expansion":
                let game1 = game.split('-');
                game = game1[0];
                if (games.includes(game)) {
                    let game2 = `${game}:${game1[1]}`;
                    games.splice(games.indexOf(game) + 1, 0, game2);
                }
                break;
            default:
                break;
        }
        i++;
        command1 = arr[i];
    }
    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
//CS CS:Go LoL Diablo 
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])
//CS Diablo WoW 