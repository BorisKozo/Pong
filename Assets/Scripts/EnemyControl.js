#pragma strict

var speed: float = 2;
var scoreDisplay: GUIText;

private var ball: GameObject;
private var score: float;

function Start () {
	ball = GameObject.Find("Ball");
	score = 0;
}

function Update () {
	
	var delta = transform.position.z - ball.transform.position.z;
	var sign = Mathf.Sign(delta);
	delta = Mathf.Abs(delta);
	var newZ = transform.position.z - Mathf.Min(speed, delta)*sign;
	transform.position.z = Mathf.Clamp(newZ,-8,8);
}

function AddScore(){
 	score++;
 	scoreDisplay.text = score.ToString();
}
