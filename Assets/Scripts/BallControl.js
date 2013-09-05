#pragma strict

var minimalVelocityX : float;
var maximalVelocityZ : float;
var velocityBoost : float;


private var player: GameObject;
private var enemy: GameObject;

function Start(){
  player = GameObject.Find("Player Pad");
  enemy = GameObject.Find("Enemy Pad");
}

function FixedUpdate () {
	Debug.Log(rigidbody.velocity.x);
	if (Mathf.Abs(rigidbody.velocity.x) < minimalVelocityX){
		var sign = Mathf.Sign(rigidbody.velocity.x);
		if (sign == 0) sign = 1;
		rigidbody.AddForce(sign*velocityBoost,0,0,ForceMode.Acceleration);
	}
	
	if (Mathf.Abs(rigidbody.velocity.z) > maximalVelocityZ){
	
		rigidbody.AddForce(0,0,-rigidbody.velocity.z/10,ForceMode.Impulse);
	}
	
	if (Mathf.Abs(transform.position.y)>5){ //Ball fell or jumped
	  var distanceToPlayer = Vector3.Distance(transform.position, player.transform.position);
	  var distanceToEnemy = Vector3.Distance(transform.position, enemy.transform.position);
	  
	  if (distanceToEnemy > distanceToPlayer){
	  	var enemyControl : EnemyControl = enemy.GetComponent("EnemyControl");
	  	enemyControl.AddScore();
	     
	  } else {
	  	var playerControl : PlayerControl = player.GetComponent("PlayerControl");
	  	playerControl.AddScore();

	  }
	  
	  rigidbody.velocity= Vector3(0,0,0);
	  rigidbody.angularVelocity = Vector3(0,0,0);
	  transform.position = Vector3(0,0,0);
	}
}

