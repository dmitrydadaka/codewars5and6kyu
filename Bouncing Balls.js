const bouncingBall = (h, b, w) => (h <= 0 || b <= 0 || b >= 1 || w >= h) ? -1 : 2 + bouncingBall(h*b, b, w);

function bouncingBall(h,  bounce,  window) {
  return bounce>0&&bounce<1&&window<h?Math.ceil(Math.log(window/h)/Math.log(bounce))*2-1:-1
}

function bouncingBall(h,  bounce,  window) {
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
    return -1;
  }

  var newHeight = h * bounce;
  return bouncingBall(newHeight, bounce, window) + 2;
}

function bouncingBall(h,  bounce,  window) {
  if(bounce>0&&bounce<1){
  let count=-1
  while(h>window){
    count+=2
    h*=bounce
    }
    return count
  }
  return -1
}
function bouncingBall(h,  bounce,  window) {
  if(h>window&&bounce>0&&bounce<1&&h>0&&window>0){
  count=0
  while(h>window){
    count+=2
    h=h*bounce
    }
    return count-1
  }
  return -1
}