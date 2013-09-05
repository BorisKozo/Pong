#pragma strict

var repelForce: float;
var sideBias: float = 50;

function OnCollisionEnter(collisionInfo : Collision) {
		var contact : ContactPoint = collisionInfo.contacts[0];
		if (contact != null){
		  	var deltaZ = contact.point.z - contact.thisCollider.transform.position.z;
			collisionInfo.rigidbody.AddForce(-repelForce,0,Mathf.Pow(deltaZ,3)*sideBias,ForceMode.Impulse);   
		}
	}