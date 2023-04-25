gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


var cursorpg = document.querySelector("#overlay")
var cursor = document.querySelector("#cursor")


cursorpg.addEventListener("mousemove", (dets)=>{
  cursor.style.opacity = 1;
  cursor.style.scale = 1;
  cursor.style.left = dets.pageX +"px";
  cursor.style.top = dets.pageY +"px";
});
cursorpg.addEventListener("mouseleave", (dets)=>{
  cursor.style.opacity = 0;
  cursor.style.scale = 0;
});