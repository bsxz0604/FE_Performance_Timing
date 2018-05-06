"use strict"
export function isObject(what) {
  return typeof what === 'object' && what !== null;
}

export function formatMs(timeGap){
  if ( typeof(timeGap) !== 'number' ){
    return
  }
  if (timeGap > 1000 ){
    return (timeGap/1000).toFixed(2) + 's'
  }
  return Math.round(timeGap) + 'ms'
}

export function isImg(name){  
  if (/\.(gif|jpg|jpeg|png|webp)/i.test(name)) {  
    return true;  
  }  
  return false;  
}

export function isJs(name){  
  if (/\.(js)/i.test(name)) {  
    return true;  
  }  
  return false;  
}

export function isCss(name){  
  if (/\.(css)/i.test(name)) {  
    return true;  
  }  
  return false;  
}

export function isVideo(name){  
  if (/\.(mp4|rm|rmvb|mkv|avi|flv|ogv|webm)/i.test(name)) {  
    return true;  
  }  
  return false;  
}

export function checkResourceType(name){
  if (/\.(gif|jpg|jpeg|png|webp|svg)/i.test(name)) {  
    return 'image';  
  }
  if (/\.(js)/i.test(name)) {  
    return 'javascript';  
  }
  if (/\.(css)/i.test(name)) {  
    return 'css';  
  }  
  if (/\.(mp4|rm|rmvb|mkv|avi|flv|ogv|webm)/i.test(name)) {  
    return 'video';  
  } 
  return 'other'
}