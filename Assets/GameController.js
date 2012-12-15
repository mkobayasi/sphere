#pragma strict

public var text_style:GUIStyle;
private var state:String;

private var player:GameObject;
private var enemy:GameObject;

function Start () {

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
    
}

function Update () {
    
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
}