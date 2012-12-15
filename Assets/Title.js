#pragma strict

public var text_style:GUIStyle;
public var text_style2:GUIStyle;
function Start () {

}

function Update () {

      if(Input.GetMouseButtonUp(0))
      {
        Application.LoadLevel("game");
      }

}

function OnGUI()
{
    GUI.Label(Rect(0,0,Screen.width,Screen.height/3),"Title",text_style);
    GUI.Label(Rect(0,0,Screen.width,Screen.height*2/3),"Tap Screen",text_style2); 
}