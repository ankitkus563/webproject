let event_card_bands = document.getElementsByClassName("upcoming-event-bands")
let event_band_read_more = document.getElementsByClassName("event-band-read-more")
let read_more_btn = document.getElementsByClassName("read-more-btn")
let arrow_btn = document.getElementsByClassName("arrow-btn")
let photo_card_profile = document.getElementsByClassName("photo-card-profile")

for(let i=0; i<event_card_bands.length; i++){

console.log(event_card_bands[i])
event_card_bands[i].addEventListener("mouseover", function(){

    event_card_bands[i].style.width = "550px";
    event_band_read_more[i].style.backgroundColor ="#032f46"
    read_more_btn[i].style.color ="white"
})

}
for(let i=0; i<event_card_bands.length; i++){

    console.log(event_card_bands[i])
    event_card_bands[i].addEventListener("mouseout", function(){
    
        event_card_bands[i].style.width = "500px";
        event_band_read_more[i].style.backgroundColor ="#8dcbe8"
        read_more_btn[i].style.color ="black"
    })
    
    }



let event_card_box = document.getElementsByClassName("event-card-box")
event_card_box[0].addEventListener("mouseover",function(){
    
    event_card_box[0].style.width = "360px";
event_card_box[0].style.height = "360px";
event_card_box[0].style.backgroundColor = "#032f46"

});

event_card_box[0].addEventListener("mouseout",function(){
    
    event_card_box[0].style.width = "355px";
event_card_box[0].style.height = "355px";
event_card_box[0].style.backgroundColor = "#259ebb"

});

for (let i=0; i<arrow_btn.length; i++){
arrow_btn[i].addEventListener("click", function(){

  if (i==1){

    document.getElementsByClassName("card-1")[0].style.display = "block";
    
  }else{

    document.getElementsByClassName("card-5")[0].style.display = "none";

  }

  if (i==0){

    document.getElementsByClassName("card-5")[0].style.display = "block";
    
  }else{

    document.getElementsByClassName("card-1")[0].style.display = "none";

  }
  
 
})
}