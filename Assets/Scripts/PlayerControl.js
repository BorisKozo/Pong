#pragma strict

var speed: float = 2;
var repelForce: float = 200;
var sideBias: float = 50;

function Start () {

}

function Update () {
	var axis = Input.GetAxis ("Vertical");
	var newZ = transform.position.z + speed*axis*Time.deltaTime;
	transform.position.z = Mathf.Clamp(newZ,-8,8);
}


function OnCollisionEnter(collisionInfo : Collision) {
		var contact : ContactPoint = collisionInfo.contacts[0];
		if (contact != null){
		  	var deltaZ = contact.point.z - contact.thisCollider.transform.position.z;
		  	print(deltaZ);
			collisionInfo.rigidbody.AddForce(-repelForce,0,Mathf.Pow(deltaZ,3)*sideBias,ForceMode.Impulse);   
		}
	}