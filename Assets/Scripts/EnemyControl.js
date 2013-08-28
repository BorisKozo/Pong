#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision) {
		
			collisionInfo.rigidbody.AddForce(1,0,0, ForceMode.Impulse);   
	}