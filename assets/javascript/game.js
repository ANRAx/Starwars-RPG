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
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class= 'character-name'>").text(character.name);
        var charImage = $("img alt= 'image' class='character-image'>").att("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
    };

    // load all character into the CHARACTER SECTION to be selected w/ this anonymous function
    var initializeGame = function() {
        for (var key in characters) {
            renderCharacter(character[key], "#characters-section");
        }
    };

    // call initializeGame function 
    initializeGame();

    // function to handle updating the selected player or the current defender
    var updateCharacter = function(charObj, areaRender) {
        $(areaRender).empty();
        renderCharacter(charObj, areaRender);
    };

    // function to render the available enemies to attack (runs after character has been selected)
    var renderEnemies = function(enemyArr) {
        for (let i = 0; < enemyArr.length; i++) {       
            renderCharacter(enemyArr[i], "#available-to-attack-section");
        }
    };

    // function to handle rendering game messages 
    var renderMessage = function(message) {
        var gameMessageSet = $("#game-message");
        var newMessage = $("<div>").text(message);
        gameMessageSet.append(newMessage);
    };

    // function that handles restaring the game after win/loss
    var restartGame = function(resultMessage) {
        var restart = $("<button>Restart</button>").click(function() {
            location.reload();
        });

        // build div that will display the win/loss message
        var gameState = $("<div").text(resultMessage);

        // render the restart button and win/loss message to the page
        $("body").append(gameState);
        $("body").append(restart);
    };

    // function to cleawr the game message section 
    var clearMessage = function() {
        var gameMessage = $("game-message");
        gameMessage.text("");
    };

    // On-Click Events 
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // on click event for selecting our chacters
    $("characters-section").on("click", ".chacter", function() {
        var name = $(this).attr("data-name");
        // if players hasn't been chosen, populate attacker with select chars. info and loop thru remaining chars and push them to combatants array
        if(!attacker) {
            attacker = character[names];
            for(var key in character) {
                if(key !== name) {
                    combatants.push(character[key]);
                }
            }
            // Hide the character select div 
            $("#characters-section").hide();

            // render our selected character and our combatants 
            updateCharacter(attacker, "#selected-character");
            renderEnemies(combatants);
        }  
    });

    // on click event for each enemy
    $("#available-to-attack-section").on("click", ".character", function() {
        // save the opponenet name
        var name = $(this).attr("data-name");

        // if there is no defender, the clicked enemy will become the defender
        if ($("#defender").children().length === 0) {
            defender = characters[name];
            updateCharacter(defender, "#defender");

            // remove element (as it will now be a new defender)
            $(this).remove();
            clearMessage();
        }
    });

    // on click event for attack button and gameplay logic 
    $("#attack-button").on("click", function () {
        if ($("#defender").children().length !== 0) {
            var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";

            var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
            clearMessage();
        }
    })
});

