#pragma strict

public var text_style:GUIStyle;
private var state:String;

private var player:GameObject;
private var enemy:GameObject;


var PlayerBomb: AudioClip;

var EnemyBomb: AudioClip;



var Audio_flag:System.Boolean;


function Start () {

    Audio_flag=false;
    state="wait";

    yield WaitForSeconds(2);
    
     player=GameObject.Find("Player");
     player.GetComponent.<Player>().enabled=true;
     GameObject.Find("player_center").GetComponent.<PlayerCenter>().enabled=true;
     
     enemy=GameObject.Find("enemy");
        GameObject.Find("enemy_center").GetComponent.<EnemyMove>().enabled=true;
        enemy.GetComponent.<Enemy>().enabled=true;

       state="game";

       while(player && enemy )yield;

       if(player)state="enemy dead";
       else state="player dead";

       yield WaitForSeconds(2);

       state="tap Screen";
    
}

function Update () {

     if(state=="enemy dead")
        audio.clip=EnemyBomb;
    else
     if(state=="player dead")
        audio.clip=PlayerBomb;

    if((state=="enemy dead" || state=="player dead")&& !Audio_flag)
    {

        var p:ParticleSystem=GetComponentInChildren(ParticleSystem);
        p.Emit(60);

        Audio_flag=true;
        audio.Play();
    }
    if(state=="tap Screen")
    {
      if(Input.GetMouseButtonUp(0))
      {
        Application.LoadLevel("title");
      }
    }
}

function OnGUI()
{
    if(state=="wait")
        GUI.Label(Rect(0,0,Screen.width,Screen.height),"Get Ready",text_style);
    else
    if(state=="enemy dead")
        GUI.Label(Rect(0,0,Screen.width,Screen.height),"You Win",text_style);
    else
     if(state=="player dead")
        GUI.Label(Rect(0,0,Screen.width,Screen.height),"You Lose",text_style);
    else
    if(state=="tap Screen")
        GUI.Label(Rect(0,0,Screen.width,Screen.height),"Tap Screen",text_style); 
}