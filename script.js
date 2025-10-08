function LoaderAnimation() {
    var h5Timer = document.querySelector(".linePart h5")
    var grow = 0

    var tl = gsap.timeline()

    tl.from(".line h1",{
        y: 150,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.5,
        
    })

    tl.from(".linePart",{
        opacity: 0,
        onStart: function(){
            var interval = setInterval(function(){
                if(grow < 100){
                    h5Timer.innerHTML = grow++
                } else {
                    h5Timer.innerHTML = grow
                    clearInterval(interval);
                }
            }, 33)}
    })

    tl.to(".line h2",{
    animationName: "anime",
    opacity: 1
    })

    tl.to("#loader",{
        opacity : 0,
        duration: 0.2,
        delay: 2.5
        
    })
    tl.from("#page1",{
        delay: 0.2,
        y: 1600,
        opacity: 0,
        ease: Power4.easeOut
    })

    tl.set("#loader",{
        display: "none"
    })

    tl.from("#nav", {
        opacity: 0
    })

    tl.from(".hero1 h1, .hero2 h1, .hero3 h2, .hero3 h3, .hero4 h1", {
        y: 150,
        stagger: 0.2
    })
 }

 function CursorAnimation() {
     document.addEventListener("mousemove",function(dets){
         gsap.to("#cursor",{
             left: dets.x,
             top: dets.y
             
            })
        })
        
        Shery.makeMagnet("#nav-part2 h4", {
            //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            //   duration: 1,
        });
    }
    
LoaderAnimation()
CursorAnimation()