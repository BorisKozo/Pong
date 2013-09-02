#pragma strict

var minimalVelocityX : float;
var velocityBoost : float;

function Start () {
	//rigidbody.AddForce (500, 0, 0);
}

function FixedUpdate () {
	
	if (Mathf.Abs(rigidbody.velocity.x) < minimalVelocityX){
		var sign = Mathf.Sign(rigidbody.velocity.x);
		if (sign == 0) sign = 1;
		rigidbody.AddForce(sign*velocityBoost,0,0,ForceMode.Acceleration);
		
	}
}