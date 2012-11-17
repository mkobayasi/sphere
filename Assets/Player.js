#pragma strict



private var speed:Vector3;
public var bullet:GameObject;

public var life:int;
public var life_max:int;

private var OldPlayerPosition:Vector3;

private var balance:float;

private var TargetPosX:float;
private var TargetPosY:float;

function Start ()
{
	balance=0;

	SetTarget();


    life=life_max;
    OldPlayerPosition=transform.position;
    while(true)
    {
        yield WaitForSeconds(0.5);
        if(speed.magnitude<=1)//プレイヤーが止まっていたら弾を発射
        {
            var enemy= GameObject.FindWithTag("enemy");
            var enemypos:Vector3=enemy.transform.position;

            var vec:Vector3=Vector3.Normalize(enemypos - transform.position)*3;


            var bulletspeed:GameObject=Instantiate(bullet,transform.position+vec*0.5,transform.rotation);
            var bulletscript=bulletspeed.GetComponent.<Bullet>();

            bulletscript.speed=vec;

            var bulletspeed2:GameObject=Instantiate(bullet,transform.position+vec*0.5,transform.rotation);
            var bulletscript2=bulletspeed2.GetComponent.<Bullet>();

            bulletscript2.speed=Quaternion.AngleAxis(20,Vector3(0,0,1))* vec;

            var bulletspeed3:GameObject=Instantiate(bullet,transform.position+vec*0.5,transform.rotation);
            var bulletscript3=bulletspeed3.GetComponent.<Bullet>();

            bulletscript3.speed=Quaternion.AngleAxis(-20,Vector3(0,0,1))* vec;

        }
    }
}

function Update () {




     /*
    Camera.transform.position.x=transform.position.x;
    Camera.transform.position.y=transform.position.y;
    Camera.transform.LookAt(transform.position,e_p);
    */
       var enemy=GameObject.FindWithTag("enemy");
    transform.LookAt(enemy.transform.position,Vector3(0,0,-1));//敵の方を向く

   OldPlayerPosition=transform.position;//プレイヤーの位置を記録
   
}

function OnTriggerEnter(other:Collider)
{
    if(other.tag == "enemy_bullet")
    {
        life--;
       Destroy(other.gameObject);

        if(life<=0)
            Destroy(gameObject);
    }
}

function SetTarget()
{
    TargetPosY=Random.Range(-20,20);
    TargetPosX=Random.Range(-20,20);
}