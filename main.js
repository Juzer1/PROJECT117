quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length) + 1);
sketch = quick_draw_data_se[random_number];
document.getElementById('sketch_name').innerHTML="sketch to be drawn : "+sketch;                                                                                                  