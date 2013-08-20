<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Robot Pirate Ninja Monkey Zombie</title>
	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />

</head>
<body>
	<header id="toolbar">
		<nav id="controls">
			<a id="newGameBtn" class="button" href="#">New Game</a>
			<a id="settings" disabled class="button" href="#">Settings</a>
			
		</nav>
	</header>
	<div id="wrapper">
		<div id="game-view">
			<h1>Robot - Pirate - Ninja - Monkey - Zombie</h1>
			<ul id="ui">
				<li><a id="robot" class="btn" href="#">robot</a></li>
				<li><a id="pirate" class="btn" href="#">pirate</a></li>
				<li><a id="ninja" class="btn" href="#">ninja</a></li>
				<li><a id="monkey" class="btn" href="#">monkey</a></li>
				<li><a id="zombie" class="btn" href="#">zombie</a></li>
			</ul>
			<div id="battle-view"></div>
			<div id="scoreboard" style="">
				<table id="score" border="1">
					<tr>
						<th scope="col">&nbsp;</th>
						<th scope="col">1</th>
						<th scope="col">2</th>
						<th scope="col">3</th>
						<th scope="col">4</th>
						<th scope="col">5</th>
						<th scope="col">6</th>
						<th scope="col">7</th>
						<th scope="col">8</th>
						<th scope="col">9</th>
						<th scope="col">10</th>
					</tr>
					<tr id="player1">
						<td>Player 1</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr id="player2">
						<td>Comp</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
					</tr>
				</table>
			</div>		
		</div>
	</div>
</body>
	<script type="text/javascript" src="js/lib/jquery.js"></script>
	<script type="text/javascript" src="js/lib/modernizr-1.5.min.js"></script>
	<script type="text/javascript" src="js/App.js"></script>
	<script type="text/javascript" src="js/Keys.js"></script>
	<script type="text/javascript" src="js/Settings.js"></script>
	<script type="text/javascript" src="js/Model.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</html>


