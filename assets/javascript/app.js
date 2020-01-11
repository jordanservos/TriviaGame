$(document).ready(function() {

    //Define all the required variables 
    var questionCount;
    var rightAnswer;
    var wrongAnswer;
    var missedAnswers;
    var answered;
    var answerChoice;
    var seconds;
    var time;

    var messages = {
        right: "That answer is right! Congrats!",
        wrong: "That is the WRONG answer! FAIL...",
        timeOut: "You ran out of time!",
        finished: "Here's your final results!"
    };

    //Build the trivia question list 

    var masterQuestions = [{
            question: "It's a great day to be outside! I've packed my rucksack with food, water, raincoat, first aid kit and other supplies. I'm now heading out to the National Park for a walk through the forest to see that waterfall everyone has been talking about. Which of the following words, used in different parts of the world, does NOT describe this activity?",
            choiceList: ["Hiking",
                "Abseiling",
                "Tramping",
                "Bushwalking",
            ],
            answer: 1,
            image: "assets/images/Abseilen_jumelle.jpg",
            moreInfo: "Abseiling is a technique used by climbers to descend down a rock face or cliff by controlled sliding down a rope. The other three terms are all synonymous and can be used interchangeably. 'Hiking' is commonly used in North America and the UK, while 'Bushwalking' is predominantly an Australian term and 'Tramping' is the term for this fantastic activity in New Zealand."
        },

        {
            question: "It's a great day for some exercise and excitement! My friend calls me and says she wants to go spelunking. She says she'll bring all the equipment we need including ropes, harnesses, helmets and torches. Into what environment will we be heading for this adventure?",
            choiceList: ["Cliff",
                "Building",
                "Tree",
                "Cave",

            ],
            answer: 3,
            image: "assets/images/spelunking-caving-bend-1600.jpg",
            moreInfo: "'Spelunking', also called caving and pot-holing, involves the exploration of caves. Depending on the level of expertise of the participants, this activity may involve negotiating small cliffs, squeeze points and water-filled areas. The term 'spelunking' comes from the very similar Latin and Greek words for 'cave' which also form the basis of 'speleology', the scientific study of caves."
        },

        {
            question: "It's a great day to be out in the mountains! Our group is close to reaching the summit but the snow has turned to ice making progression more difficult. Everyone pulls out their ice axe from their rucksack and puts a device on each boot that provides steel points that dig into the slippery terrain. What is the name for this boot attachment, needed for mountaineering above the snowline?",
            choiceList: ["Crampon",
                "Carabiner",
                "Piton",
                " Belay",

            ],
            answer: 0,
            image: "assets/images/400069_Contact_Strap_web_F15.jpg",
            moreInfo: "English rock climber and railway engineer, Oscar Eckenstein, designed the first crampon in 1908. Strapping these devices to the bottom of the boots provided much greater traction as the sharp points dug into the snow and ice. Before this time, the safest way to proceed up a slippery incline was the laborious process of cutting steps into the ice. Crampons have advanced enormously in design over the last century with several varieties available including versions just for the instep or the toe of the boot, but the essential principle remains the same."
        },

        {
            question: "'It's a great day to go twitching!' my English friend said. So I grabbed my binoculars, my camera and an identification book on the endemic avian fauna and headed out to the nearest woodland. What activity are we participating in?",
            choiceList: ["Hunting",
                "Frogspotting",
                "Botany",
                "Birdwatching",

            ],
            answer: 3,
            image: "assets/images/shutterstock_666596116.jpg",
            moreInfo: "Very enthusiastic birdwatchers - or 'twitchers' - often keep a log book of the birds they see, especially any rare species. Several sources indicate that 'twitching' actually refers to the adding of a tick mark alongside a species that has just been spotted for the first time. Apocryphal stories suggest that the 'twitching' refers to the barely suppressed excitement associated with a rare find! The log books of twitchers are often extremely valuable to scientists and management agencies who are studying the occurrence and behavior of various species, often to develop informed management actions for protection and preservation. 'Chasing' is the North American term but the meaning is essentially the same as 'twitching'."
        },

        {
            question: "It was a great day to be cross-country skiing in the back-country with my friend Olav. I spotted another group skiing down a nearby glacier and using a strange and graceful means of turning - they'd drop one knee down almost to the ski. Olav told me it was a traditional technique from his country and if I watch the Olympic ski-jumping, they also land in this position. It's called 'telemark skiing', from the Telemark region in which it originated. But from which nordic country?",
            choiceList: ["Austria",
                "Russia",
                "Norway",
                "Estonia",

            ],
            answer: 2,
            image: "assets/images/Norway-Ski-Touring-Gear-Patrol-Slide-6.jpg",
            moreInfo: "The largest difference between telemark skiing and alpine (downhill) skiing, is that with telemarking, the heel of the ski boot is not attached to the ski and hence can be lifted, much like in cross-country skiing. Turning is achieved by dropping the inside knee towards the ski and also dropping that ski backwards a little. The technique was first demonstrated by Norwegian Sondre Norheim in 1868 and the style prevailed for nearly 50 years before the development of the 'stem Christie' - named after Christiania Oslo. The stem-Christie is the forerunner of today's parallel skiing styles. Telemarking regained popularity in the 1970s and is a relatively common sight at many ski resorts and in backcountry areas. Modern telemark gear frequently involves a molded plastic boot - very similar to an alpine ski boot - and wide, slalom style skis."
        },

        {
            question: "It's a great day to try something new! Jack asks me if I want to play a modern game of 'Hide and Seek'! He tells me I'll need a hand-held Global Positioning System and we have to find these hidden containers using coordinates from a 'listing site'. What outdoor activity will I be learning today?",
            choiceList: ["Geocaching",
                "Rogaining",
                "Orienteering",
                "Geopositioning"
            ],
            answer: 0,
            image: "assets/images/devon-geocaching-feature-1.jpg",
            moreInfo: "A key date for the development of geocaching was May 2, 2000 when 'selective availability' for GPS was turned off by US President Bill Clinton. This allowed much greater accuracy in positioning for civilian users. The objective of the activity is to use coordinates from a host website to locate hidden (waterproof) containers, known as 'caches', and then sign the logbook within. Often small trinkets are also exchanged. As homage to Harry Potter, people unaware of geocaching are called 'Muggles'!"
        },

        {
            question: "It's a great day for avoiding being arrested! An acquaintance of mine asked me to grab my special parachute and join him on top of the highest building in town just before dawn. We are then going to jump off, deploy the chutes, float safely to earth and then escape before being picked up for trespassing, as we don't have a permit for this! Tomorrow at dawn we're going to leap off the large TV antenna tower. What, sometimes illegal, 'jumping' activity are we indulging in?",
            choiceList: ["TOP",
                "Sky",
                "BASE",
                "Tower",

            ],
            answer: 2,
            image: "assets/images/base.jpg",
            moreInfo: "BASE jumping gets its name from 'Buildings, Antennas, Spans, Earth' where 'spans' are bridges and 'earth' is usually cliffs. The activity is not illegal but many of the desirable locations do not allow their facilities to be used. It is potentially quite dangerous as unlike sky diving, there is no time to deploy a reserve chute if something goes wrong. One of the less successful early BASE jumps was performed by Franz Reichelt in 1912, where he demonstrated his new 'coat parachute' by jumping off the first level of the Eiffel Tower. The device failed and Reichelt died. The ski chase scene in the 1977 film 'The Spy Who Loved Me' (James Bond) featured a BASE jump as James skis off the cliff and deploys a parachute (which of course was colored as a Union Jack). The jump was performed by Hollywood stuntman, Rick Sylvester."
        },

        {
            question: "It's a great day to go for a bike ride! I head out on the forest trail close to home where I soon meet a friend. After greeting me, he inspects my bike and myself and then says 'Haven't you forgotten something?' Legislation requiring compulsory use of this particular cycling item has created a large amount of controversy in many countries, including heated debate after comments by UK Junior Minister for Cycling, Norman Baker, in April 2011. What is this controversial item?",
            choiceList: ["Lights",
                "Eyewear",
                "Bell",
                "Helmet",

            ],
            answer: 3,
            image: "assets/images/troy-lee-designs-a2-mips-bike-helmet-.jpg",
            moreInfo: "The two sides of this debate can be summarized as - Pro Helmet - helps avoid or minimize head injuries after a fall or crash. This benefits the individual and society who then avoid the cost of potentially very expensive hospital treatment and after-care. Anti Helmet - it's an issue of civil rights. I am responsible for my own health and safety and if I want to wear a helmet I will, but I shouldn't be forced to do so. In addition, compulsory helmet use will deter many from cycling and hence the overall health of the community will decline. There are many other aspects to this matter, but I don't want this to become a thesis! As of July 2012, helmet use is compulsory for all cyclists in Australia and New Zealand. In many countries (and in some jurisdictions within those and other countries) helmet use is compulsory for junior riders but there is a wide variation as to the cut-off age."
        },

        {
            question: "It's a great day for flying a kite! The wind is steady but not too strong. I grab my kite and head down to the local park. On arrival, I'm astounded to see this huge kite up in the air! From a distance it looks like a centipede but when I gets closer I realize it's actually a beautifully decorated dragon with a head connected to a long tail. Which of the following countries is most associated with these Dragon Kites?",
            choiceList: ["China",
                "India",
                "Wales",
                "Germany",

            ],
            answer: 0,
            image: "assets/images/kite.jpg",
            moreInfo: "Unlike western dragons, Chinese dragons are seen as wise and bringers of good luck. The dragon's head is usually made from a fine bamboo frame and the silk covering individually painted. Aerodynamically, the lift is created by the long tail section. Although usually much shorter, these kites can be as much as 80m (260 ft) long and require a team on the ground to fly them. Kite making in China dates back to at least 230 BC. The later development of paper-making technology, meant that kites were no longer the preserve of the wealthy (including the Emperor) who could afford silk, they became a highly popular past-time for all."
        },

        {
            question: "It's a great day to go scuba-diving! My buddy Jamie says that a boat has been organized and we're going to investigate that shipwreck near the reef we've been talking about for months. Before leaving, we carefully check all of our equipment. The tanks are full, the wetsuits, masks and snorkels are ready to go. I next check the device that delivers the gas mixture from my tank (today we're using air for our shallow dive) where it is at high pressure, to my mouth at ambient pressure. What is the name of this critical piece of equipment?",
            choiceList: ["Distributor",
                "Regulator",
                "Ventilator",
                "Pressurizer",

            ],
            answer: 1,
            image: "assets/images/scuba.jpeg",
            moreInfo: "Although there are a large number of different designs and may include one tube or two, the basic function of the regulator is simply to reduce the high gas pressure from the gas tank down to a comfortable level for the diver to breathe. This is achieved through valves - sometime just one, often a series. A number of attachments are sometimes found with the regulator including a valve for inflation of a buoyancy compensator and a spare demand valve for emergency use by the diver's buddy. Scuba gear (self-contained underwater breathing apparatus) originated with the 'Aqualung' developed by Emile Gagnan and Jacques-Yves Cousteau in 1943. The actual term 'scuba' was introduced by US army medical corps physician Christian Lambertsen in 1952 who continuously patented his own 'rebreather' from 1940 to 1989. A rebreather circulates the exhaled air and strips out the carbon dioxide."
        },

    ];


    //Build required functions
    // ----------------------------

    //Need to hide the trivia question areas when the page loads
    $("#triviaCol").hide();

    //Create on click for the game start button
    $("#startBtn").on("click", function() {
        $(this).hide();
        newGame();
    });


    //Create a fucntion that progresses the game to the next question
    function newQuestion() {
        $("#message").empty();
        $("#correctAnswerNote").empty();
        $("#pic").hide();
        $("#picInfo").hide();
        answered = true;

        //Display the new question 
        $("#questionCount").html("Question # " + (questionCount + 1) + " of " + masterQuestions.length);
        $(".question").html(masterQuestions[questionCount].question);

        //Build a for-loop to list all multiple choice options in the new question 
        for (var i = 0; i <= 5; i++) {

            var choices = $("<div>");
            choices.text(masterQuestions[questionCount].choiceList[i]);
            choices.attr({ "data-index": i });
            choices.addClass("thisChoice");
            $(".choiceList").append(choices);
        }

        //Start timer
        countdown();

        //Stop the time after a player has answered a question 
        $(".thisChoice").on("click", function() {
            answerChoice = $(this).data("index");
            clearInterval(time);
            answerPage();
        });
    }

    //Build function for a countdown clock 
    function countdown() {
        seconds = 15;
        $("#timeClock").html("00:" + seconds);
        answered = true;
        //Sets a delay of one second before the timer starts
        time = setInterval(showCountdown, 1000);
    }

    //Show the countdown clock timer during questions 
    function showCountdown() {
        seconds--;

        if (seconds < 10) {
            $("#timeClock").html("00:0" + seconds);
        } else {
            $("#timeClock").html("00:" + seconds);
        }

        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    //Bring users to the answer page after an answer has been selected 
    function answerPage() {
        $("#questionCount").empty();
        $(".thisChoice").empty(); //Clears question page
        $(".question").empty();
        $("#pic").show();
        $("#picInfo").show();

        var rightmoreInfo = masterQuestions[questionCount].choiceList[masterQuestions[questionCount].answer];
        var rightAnswerIndex = masterQuestions[questionCount].answer;

        //Add a picture to style the answer page 
        var picImageLink = masterQuestions[questionCount].image;
        var newpic = $("<img>");
        newpic.attr("src", picImageLink);
        newpic.addClass("picImg");
        $("#pic").html(newpic);

        // Add some contect text below the image for each answer on the answer page 
        var picInfo = masterQuestions[questionCount].moreInfo;
        newCaption = $("<div>");
        newCaption.html(picInfo);
        newCaption.addClass("picInfo");
        $("#picInfo").html(newCaption);

        //Check each answer given by the user 
        if ((answerChoice == rightAnswerIndex) && (answered === true)) {
            rightAnswer++;
            $('#message').html(messages.right);
        } else if ((answerChoice != rightAnswerIndex) && (answered === true)) {
            wrongAnswer++;
            $('#message').html(messages.wrong);
            $('#correctAnswerNote').html('The right answer was: ' + rightmoreInfo);
        } else {
            missedAnswers++;
            $('#message').html(messages.timeOut);
            $('#correctAnswerNote').html('The right answer was: ' + rightmoreInfo);
            answered = true;
        }

        if (questionCount == (masterQuestions.length - 1)) {
            setTimeout(scoreboard, 1000);
        } else {
            questionCount++;
            setTimeout(newQuestion, 1000);
        }
    }

    //Show the final stats at the end of the game 
    function scoreboard() {
        $('#timeClock').empty();
        $('#message').empty();
        $('#correctAnswerNote').empty();
        $('#pic').hide();
        $("#picInfo").hide();

        $('#resultsMessage').html(messages.finished);
        $('#rightAnswers').html("Right Answers: " + rightAnswer);
        $('#wrongAnswers').html("Wrong Answers: " + wrongAnswer);
        $('#missedAnswers').html("Missed Answers: " + missedAnswers);
        $('#playAgain').addClass('reset');
        $('#playAgain').show();
        $('#playAgain').html("PLAY AGAIN");
    }

    //Provide a reset button so users can re-play at the end
    $("#playAgain").on("click", function() {
        $(this).hide();
        newGame();
    });

    //Create a function that clears all fields for a new game
    function newGame() {
        $("#triviaCol").show();
        $("#resultsMessage").empty();
        $("#rightAnswers").empty();
        $("#wrongAnswers").empty();
        $("#missedAnswers").empty();
        $("#pic").hide();
        $("#picInfo").hide();
        questionCount = 0;
        rightAnswer = 0;
        wrongAnswer = 0;
        missedAnswers = 0;
        newQuestion();
    }

});