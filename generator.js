reason = [
	"To save a Princess",
	"To kill a dragon",
	"To save the universe",
	"To stop WWIII from happening",
	"To stop a evil computer network",
	"To find a magical orb",
	"To find a magical amulet",
	"To kill a demon"
];

time = [
	"Medieval",
	"Current-Day",
	"Near Future",
	"Near Past",
	"Steampunk Future",
	"Steampunk Past",
	"Stone Age",
	"Classical Age",
	"Iron Age",
	"Renaissance",
	"Dark Ages",
	"Hell",
	"Alien World",
	"Space"
];

mechanics = [
	"Randomly generated world",
	"Voxel based graphics",
	"Living chatting mace",
	"Dungeon",
	"Made of cheese",
	"Evil comedian sword",
	"Spells based on character size",
	"Spherical Character",
	"Leveling Weapons",
	"As the player levels the world gets smaller",
	"Rippling Swords",
	"Stepping from planet to planet",
	"Time Travel",
	"Throwing dice weapons",
	"Ninjas",
	"Drafting Spells",
	"Spell Creation",
	"Real time computer programming as combat",
	"Levels restarting at the start of each battle",
	"Randomly generated dialog",
	"Graphics get worse as the player gets wounded",
	"Player gets points with pixels of a certain color"
];

function randomArray(arry) {
	return arry[Math.floor(Math.random() * arry.length)];
}

function doGenerate() {
	$("#reason").text(randomArray(reason));
	$("#time").text(randomArray(time));
	$("#mechanic1").text(randomArray(mechanics));
	$("#mechanic2").text(randomArray(mechanics));
	$("#mechanic3").text(randomArray(mechanics));
}