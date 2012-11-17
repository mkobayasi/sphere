#pragma strict

public var slider_val:float;

function Start () {

}

function Update () {

}

function OnGUI()
{
    slider_val=GUI.VerticalSlider(Rect(0,0,Screen.width,Screen.height),slider_val,100,0);
}