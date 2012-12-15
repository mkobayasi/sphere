#pragma strict



private var speed:Vector3;
public var bullet:GameObject;

public var life:int;
public var life_max:int;

private var OldPlayerPosition:Vector3;

private var slider:Slider;

private var TargetPosX:float;
private var TargetPosY:float;

function Start ()
{
    slider=FindObjectOfType(Slider);


	SetTarget();


    life=life_max;
    OldPlayerPosition=transform.position;
  
     while(true)
    {

        yield WaitForSeconds(slider.slider_val*0.01+0.2);
          if (!enabled) return;
            var enemy= GameObject.FindWithTag("enemy");
            var enemypos:Vector3=enemy.transform.position;

            var vec:Vector3=Vector3.Normalize(enemypos - transform.position)*4;


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

function Update () {

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

        if(life==0)
        {
                
            GameObject.Find("enemy").GetComponent.<Enemy>().enabled=false;
            GameObject.Find("enemy_center").GetComponent.<EnemyMove>().enabled=false;
            GameObject.Find("CameraCenter").GetComponent.<CameraMove>().enabled=false;


            GameObject.Find("player_life").SetActive(false);
            GameObject.Find("Player").GetComponent.<Player>().enabled=false;
            GameObject.Find("enemy_life_center").GetComponent.<Enemy_life>().enabled=false;
            GameObject.Find("enemy_life_center").SetActive(false);
            Destroy( GameObject.Find("player_life"));
            Destroy(gameObject);
        }
    }

}

function SetTarget()
{
    TargetPosY=Random.Range(-20,20);
    TargetPosX=Random.Range(-20,20);
}