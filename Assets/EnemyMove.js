#pragma strict


private var MoveTarget:Vector3;

private var speed:Vector3;

function Start () {
    while(true)
    {
      MoveTarget.x=Random.Range(25,-12);
      MoveTarget.y=Random.Range(13,-10);

        yield WaitForSeconds(1.5);
    }
}

function Update () {
  transform.position=
         Vector3.SmoothDamp(transform.position,
   			MoveTarget,
     speed,0.9);
}