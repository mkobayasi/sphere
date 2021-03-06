#pragma strict
@script RequireComponent(AudioSource)

public var bullet:GameObject;

public var life:int;
public var life_max:int;


private var OldPosition:Vector3;

function Start () {

    life=life_max;
    while(true)
    {
        yield WaitForSeconds(0.1);
        if (!enabled) return;

            var bulletspeed:GameObject=Instantiate(bullet,transform.position,transform.rotation);
            var bulletscript=bulletspeed.GetComponent.<Bullet>();

            var player:GameObject= GameObject.FindWithTag("Player");

            var playerpos:Vector3=player.transform.position;

            var vec:Vector3=Vector3.Normalize(playerpos -transform.position )*4;//弾のスピードを調整

            bulletscript.speed=vec;//弾のスピードを登録

            var bulletspeed2:GameObject=Instantiate(bullet,transform.position+vec*0.5,transform.rotation);
            var bulletscript2=bulletspeed2.GetComponent.<Bullet>();

            bulletscript2.speed=Quaternion.AngleAxis(20,Vector3(0,0,1))* vec;

            var bulletspeed3:GameObject=Instantiate(bullet,transform.position+vec*0.5,transform.rotation);
            var bulletscript3=bulletspeed3.GetComponent.<Bullet>();

            bulletscript3.speed=Quaternion.AngleAxis(-20,Vector3(0,0,1))* vec;
    }
}

function Update () {
    var player=GameObject.FindWithTag("Player");
    transform.LookAt(player.transform.position,Vector3(0,0,-1));//プレイヤーの方を向く


}

function OnTriggerEnter(other:Collider)
{

        if(other.tag == "player_bullet")
        {
            life--;
            var p:ParticleSystem=GetComponentInChildren(ParticleSystem);
            p.Emit(20);
           Destroy(other.gameObject);
           if(life==0)
           {
                GameObject.Find("GameController").GetComponent.<GameController>().transform.position=transform.position;
                GameObject.Find("player_center").GetComponent.<PlayerCenter>().enabled=false;
                GameObject.Find("Player").GetComponent.<Player>().enabled=false;
                GameObject.Find("player_life").SetActive(false);

                GameObject.Find("CameraCenter").GetComponent.<CameraMove>().enabled=false;
                GameObject.Find("enemy_life_center").SetActive(false);
                Destroy(gameObject);
           }


           audio.Play();
        }
}