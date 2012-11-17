#pragma strict
public var speed:Vector3;

function Start () {

        yield WaitForSeconds(20);
        Destroy(gameObject);
    
}

function Update () {
    transform.position+=speed*Time.deltaTime;
}