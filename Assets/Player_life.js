#pragma strict

private var localScale_x_first:float;
function Start () {
    localScale_x_first=transform.localScale.x;
}

function Update () {
    var obj1 : GameObject = GameObject.FindWithTag("Player");
    transform.localScale.x=localScale_x_first*obj1.GetComponent.<Player>().life/obj1.GetComponent.<Player>().life_max;
}