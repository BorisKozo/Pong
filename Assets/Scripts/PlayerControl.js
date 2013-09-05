#pragma strict

var speed: float = 2;
var scoreDisplay: GUIText;


//private var labelPosition: Rect;
private var score : int = 0;

function Update () {
	var axis = Input.GetAxis ("Vertical");
	var newZ = transform.position.z + speed*axis*Time.deltaTime;
	transform.position.z = Mathf.Clamp(newZ,-8,8);
}



function AddScore(){
 	score++;
 	scoreDisplay.text = score.ToString();
}