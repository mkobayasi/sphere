#pragma strict

private var count:int;
private var speed:Vector3;

function Start () {
    count=0;
}

function Update () {

    transform.localRotation=Quaternion.AngleAxis(count,Vector3(0,0,1));
    count++;

    var enemy=GameObject.FindWithTag("enemy");
     transform.position=
         Vector3.SmoothDamp(transform.position,
   			enemy.transform.position,
     speed,0.5);
}