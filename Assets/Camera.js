#pragma strict

private var speed:Vector3;

function Start () {

}

function Update () {
    var player=GameObject.FindWithTag("Player");

       transform.position=
     Vector3.SmoothDamp(transform.position,
   			player.transform.position,
     speed,0.5);
}