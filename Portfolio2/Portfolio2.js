tl = gsap.timeline();
tl



.from(".lowest",{
    opacity: 0,
    onStart: function () {
        $('.lowest').textillate({ 
            in: { 
                effect: 'fadeInUp', 
                callback: function(){
                    $('.lowest').textillate('out')
                }
            }, 
        out: {effect: 'fadeOutUp'}
    });
    }
})
.from(".second-lowest",{
    opacity: 0,
    delay: 0.8,
    onStart: function () {
        $('.second-lowest').textillate({ 
            in: { 
                effect: 'fadeInUp', 
                callback: function(){
                    $('.second-lowest').textillate('out')
                }
            }, 
        out: {effect: 'fadeOutUp'}
    });
    }
})
.from(".second-top",{
    opacity: 0,
    delay: 0.8,
    onStart: function () {
        $('.second-top').textillate({ 
            in: { 
                effect: 'fadeInUp', 
                callback: function(){
                    $('.second-top').textillate('out')
                }
            }, 
        out: {effect: 'fadeOutUp'}
    });
    }
})
.from(".top",{
    opacity: 0,
    delay: 0.8,
    onStart: function () {
        $('.top').textillate({ 
            in: { 
                effect: 'fadeInUp', 
            }
    });
    }
})
.to(".top-screen",{
    top: "-100%",
    delay: 1,
    duration: 1.2,
    ease: "Power4.easeOut"
})


.from(".nav",{
    opacity:0,
    y:20,
})
.from(".head1, .head2",{
    opacity: 0,
    delay: 0.3,
    x: "-10%",
    onStart: function () {
        $('.head1').textillate({ 
            in: { 
                effect: 'fadeInUp', 
            }
    });
    }
})

.from(".image-div",{
    opacity: 0,
    delay: 0.6,
    y:20,
    onStart: function () {
        $('.image-div').textillate({ 
            in: { 
                effect: 'fadeInUp', 
            }
    });
    }
})
.from(".para, .icon, .my-name",{
    opacity: 0,
    delay: 0.6,
    y: 20,
    onStart: function () {
        $('.image-div').textillate({ 
            in: { 
                effect: 'fadeInUp', 
            }
    });
    }
})

gsap.from(".center1 p",{
    scrollTrigger:{
        trigger: ".content1 p",
        scroller: "body",
        scrub: 5,
    },
    opacity:0,
    scale:0.5,
    x: 30,
    duration:2,
    delay: 2,
})

// .from(".content1-p1, .content1-p1",{
//     opacity: 0,
//     delay: 3,
//     y: "-60%",
//     onStart: function () {
//         $('.content1-p1, .content1-p1').textillate({ 
//             in: { 
//                 effect: 'fadeInUp', 
//             }
//     });
//     }
// })
// .from("center1-content1 p",{
//     scrollTrigger:{
//         trigger: "p",
//         scroller: "body"
//     },
// })
// .from(".content1-p1, .content1-p1",{
//     scrollTrigger: {
//         trigger: ".content1-p1, .content1-p1",
//         scroller: "body"
//     },
//     opacity: 0,
//     delay: 0.6,
//     onStart: function () {
//         $('.content1-p1, .content1-p1').textillate({ 
//             in: { 
//                 effect: 'fadeInUp', 
//             }
//     });
// }
// })



