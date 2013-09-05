#pragma strict

private var textData: GUIText;

function  Start(){
	textData = gameObject.GetComponent(GUIText);
}

function Update () {
	textData.fontSize = Screen.height/11;
}