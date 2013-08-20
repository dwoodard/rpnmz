App = function(aSettings){
	var app = this;
	app.update = function() {
		// console.log("update", i++);
	};

	app.restart = function(){
		// restart game
		$("#newGameBtn").click(function(){
			window.setTimeout('location.reload()', 1000)
			console.log('reload')
		});
	}

	app.resize = function() {
		// console.log("resize");
	};
	// Mouse
	app.mousemove = function(){
		// console.log("mousemove");
	}
	app.mousedown = function(evt){
		// console.log("mousedown",evt.x,evt.y);
	}
	app.mouseup = function(evt){
		// console.log("mouseup",evt.x,evt.y);
	}

	// Touch
	app.touchstart = function(){
		// console.log("touchstart");
	}
	app.touchend = function(){
		// console.log("touchend");
	}
	app.touchcancel = function(){
		// console.log("touchcancel");
	}
	app.touchmove = function(){
		// console.log("touchmove");
	}

	// Keys
	app.keydown = function(event){
		console.log(event.keyCode);
		

		if(event.keyCode == keys.num_1){
			$("#ui li a:eq(0)").trigger('click')
		}
		if(event.keyCode == keys.num_2){
			$("#ui li a:eq(1)").trigger('click')
		}
		if(event.keyCode == keys.num_3){
			$("#ui li a:eq(2)").trigger('click')
		}
		if(event.keyCode == keys.num_4){
			$("#ui li a:eq(3)").trigger('click')
		}
		if(event.keyCode == keys.num_5){
			$("#ui li a:eq(4)").trigger('click')
		}
		
		
		
		
	}
	app.keyup = function(event){
		// console.log("keyup");
	}
	app.round = 1
	app.choice = $("#ui li a").click(function() {
		// console.log($(this));
		// console.log(app.random_choice());


		var result = app.calculate($(this).attr("id"), app.random_choice(), app.round++);

		$("#battle-view").html(result.outcome);


		var player1 = "#player1 td:eq("+ (result.round) +")";
		var player2 = "#player2 td:eq("+ (result.round) +")";
		
			$(player1).html(result.winner == 1 ? 'x' : '-').addClass("round");
			$(player2).html(result.winner == 2 ? 'x' : '-').addClass("round");			
		if (result.round+1 > 10) {
			var p1 = 0;
			var p2 = 0;
			var ties = 0;
			for (var i = 0; i < results.length; i++) {
				switch(results[i].winner)
				{
					case 0:
						ties++;
						break;
					case 1:
						p1++;
						break;
					case 2:
						p2++;
						break;
					default:
						break;

				}
			};
			console.log("Player 1: " + p1 + "<br> Comp: " + p2 + "<br> Ties: " + ties);

			var wins = (p2 > p1) ? 'Player 1: Loses ' : 'Player 1: Wins ';
			
			$("#battle-view").html(wins  + "<br><br><span id='smaller' style=font-size:18px;> Player 1: " + p1  + "<br> Comp: " + p2 + "<br> Ties: " + ties + "</span>");
		} 

	})


	app.random_choice = function(){
		var choice = Math.floor(Math.random()*5)
		switch(choice)
		{
			case 0:
				choice = "robot"
				break;
			case 1:
				choice = "pirate"
				break;
			case 2:
				choice = "ninja"
				break;
			case 3:
				choice = "monkey"
				break;
			case 4:
				choice = "zombie"
				break;
		}
		return choice
	}

	var results = [];
	app.calculate = function (choice1,choice2,round) {
		// console.log(choice1,choice2)
		
		var result = {
			player1:choice1,
			player2:choice2,
			round:round,
			winner:null
		};


		var losesBy;



		if (choice1 == "robot") {
			
			switch(choice2)
			{
				// Tie
				case "robot":
					result.winner = 0;
					result.outcome = "Robot ties with Robot";
					break;
				// Wins
				case "ninja":
					result.winner = 1;
					result.outcome = "Robot chokes Ninja";
					break;
				case "zombie":
					result.winner = 1;
					result.outcome = "Robot crushes Zombie";
					break;
				// Loses
				case "pirate": 
					result.winner = 2;
					result.outcome = "Pirate drowns Robot";
					break;
				case "monkey": 
					result.winner = 2;
					result.outcome = "Monkey unplugs Robot";
					break;
			}
		};	

		if (choice1 == "pirate") {
			
			switch(choice2)
			{
				// Tie
				case "pirate":
					result.winner = 0;
					result.outcome = "Pirate ties with Pirate";
					break;
				// Wins
				case "robot":
					result.winner = 1;
					result.outcome = "Pirate drowns Robot";
					break;
				case "monkey":
					result.winner = 1;
					result.outcome = "Pirate skewers Monkey";
					break;
				
				// Loses
				case "ninja": 
					result.winner = 2;
					result.outcome = "Ninja karate chops Pirate";
					break;
				case "zombie": 
					result.winner = 2;
					result.outcome = "Zombie eats Pirate";
					break;
			}
		};	

		if (choice1 == "ninja") {
			
			switch(choice2)
			{

				// Tie				
				case "ninja":
					result.winner = 0;
					result.outcome = "Ninja ties with Ninja";
					break;
				// Wins					
				case "pirate":
					result.winner = 1;
					result.outcome = "Ninja karate chops Pirate";
					break;
				case "zombie":
					result.winner = 1;
					result.outcome = "Ninja decapitates Zombie";
					break;
				// Loses					
				case "robot": 
					result.winner = 2;
					result.outcome = "Robot chokes Ninja";
					break;
				case "monkey": 
					result.winner = 2;
					result.outcome = "Monkey fools Ninja";
					break;
			}
		};	
		
		if (choice1 == "monkey") {
			
			switch(choice2)
			{
				// Tie
				case "monkey":
					result.winner = 0;
					result.outcome = "Monkey ties with Monkey";
					break;
				// Wins
				case "ninja":
					result.winner = 1;
					result.outcome = "Monkey fools Ninja";
					break;
				case "robot":
					result.winner = 1;
					result.outcome = "Monkey unplugs Robot";
					break;
				// Loses
				case "pirate": 
					result.winner = 2;
					result.outcome = "Pirate skewers Monkey";
					break;
				case "zombie": 
					result.winner = 2;
					result.outcome = "Zombie savages Monkey";
					break;
			}
		};	

		if (choice1 == "zombie") {
			
			switch(choice2)
			{
				// Tie			
				case "zombie":
					result.winner = 0;
					result.outcome = "Zombie ties with Zombie";
					break;
				// Wins				
				case "pirate":
					result.winner = 1;
					result.outcome = "Zombie eats Pirate";
					break;
				case "monkey":
					result.winner = 1;
					result.outcome = "Zombie savages Monkey";
					break;
				// Loses				
				case "ninja": 
					result.winner = 2;
					result.outcome = "Ninja decapitates Zombie";
					break;
				case "robot": 
					result.winner = 2;
					result.outcome = "Robot crushes Zombie";
					break;
			}
		};
		
		console.log(result);

		results.push(result);
		// console.log(results);
		return result
	}

	// // Constructor
	// (function(){ 
	// 	// app.resize()
	// 	
	// 	// model = new Model();
	// 	// model.settings = aSettings;
	// 	
	// })();


}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}