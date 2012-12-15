#pragma strict

private var speed:Vector3;
private var enemy:GameObject;
private var player:GameObject;

function Start () {
    enemy=GameObject.FindWithTag("Player");
    player=GameObject.FindWithTag("enemy");
}

function Update () {
  

    var target:Vector3;

    target.x=(enemy.transform.position.x+player.transform.position.x)/2;
    target.y=(enemy.transform.position.y+player.transform.position.y)/2;


    target.z= -Mathf.Sqrt(
                    Mathf.Pow(
                        Mathf.Abs(target.x-player.transform.position.x),2
                    )+
                    Mathf.Pow(
                        Mathf.Abs(target.y-player.transform.position.y),2
                    )
               )*2;
       transform.position=
     Vector3.SmoothDamp(transform.position,target,speed,0.5);
}