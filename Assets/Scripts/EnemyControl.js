#pragma strict

var speed: float = 2;

private var ball: GameObject;


function Start () {
	ball = GameObject.Find("Ball");
}

function Update () {
	
	var delta = transform.position.z - ball.transform.position.z;
	var sign = Mathf.Sign(delta);
	delta = Mathf.Abs(delta);
	var newZ = transform.position.z - Mathf.Min(speed, delta)*sign;
	transform.position.z = Mathf.Clamp(newZ,-8,8);
}

