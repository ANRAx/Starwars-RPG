// Once DOM loads, execute this code
$(document).ready(function() {
    // declare variables
    // +++++++++++++++++++++++++++++++++++++++++++++++++++
    // create an object to hold game characters
    var character = {
        "Obi-Wan Kenobi": {
            name: "Obi-Wan Kenobi",
            health: 120,
            attack: 8,
            imageUrl: "#",
            enemyAttackBack: 15
        },

        "Luke Skywalker": {
            name: "Luke Skywalker",
            health: 100,
            attack: 14,
            imageUrl: "#",
            enemyAttackBack: 5
        },

        "Darth Sidious": {
            name: "Darth Sidious",
            health: 150,
            attack: 8,
            imageUrl: "#",
            enemyAttackBack: 5
        },

        "Darth Maul": {
            name: "Darth Maul",
            health: 180,
            attack: 7,
            imageUrl: "#",
            enemyAttackBack: 25
        }
    };

    // var to populate when character is selected
    var attacker;
    // var to populate with unselected characters
    var combatants = [];
    // var to populate when player chooses and opponenet
    var defender;
    // var to track turns during combat phase and calculating player damage
    var turnCounter = 1;
    // var to track num of defeated enemies
    var killCount = 0;

    // FUNCTIONS
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // render character card to page where status is determined by passed args 
    var renderCharacter = function(character, renderArea) {
        
    }
});