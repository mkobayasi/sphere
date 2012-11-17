#pragma strict

function Start () {

}

function Update () {
    var obj1 : GameObject = GameObject.FindWithTag("enemy");
    transform.localScale.x=1.0*obj1.GetComponent.<Enemy>().life/obj1.GetComponent.<Enemy>().life_max;

}