var h5Timer = document.querySelector(".linePart h5")
var grow = 0

var tl = gsap.timeline()

 tl.from(".line h1",{
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
    
})

tl.from(".linePart, .line h2",{
    opacity: 0,
    onStart: function(){
        setInterval(function(){
            if(grow < 100){
                h5Timer.innerHTML = grow++
            } else {
                h5Timer.innerHTML = grow
            }
        }, 35)}
})

 tl.to("#loader",{
    opacity : 0,
    duration: 0.4,
    delay: 3.8
    
 })