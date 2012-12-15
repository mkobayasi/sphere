#pragma strict

private var speed:Vector3;

function Start () {

}

function Update () {
    var player=GameObject.FindWithTag("Player");
    var target:Vector3=player.transform.position;
    target.z=-20;
       transform.position=
     Vector3.SmoothDamp(transform.position,target,speed,0.5);
}