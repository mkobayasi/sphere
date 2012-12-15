#pragma strict

private var degree:float;
private var speed:Vector3;
private var slider:Slider;

function Start () {
    degree=0;
    slider=FindObjectOfType(Slider);
}

function Update () {

    transform.localRotation=Quaternion.AngleAxis(degree,Vector3(0,0,1));
    degree+=slider.slider_val*Time.deltaTime;

    var enemy=GameObject.FindWithTag("enemy");
    
     transform.position=
         Vector3.SmoothDamp(transform.position,
   			enemy.transform.position,
     speed,0.9);    
    /*
     transform.position=
         Vector3.SmoothDamp(transform.position,
   			enemy.transform.position,
     speed,(100-slider.slider_val)*0.9);

     */
}