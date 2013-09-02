#pragma strict

var speed: float = 2;


function Start () {

}

function Update () {
	var axis = Input.GetAxis ("Vertical");
	var newZ = transform.position.z + speed*axis*Time.deltaTime;
	transform.position.z = Mathf.Clamp(newZ,-8,8);
}


