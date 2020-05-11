/* ╔══════════════════════╗ *
 * ║ TIMEWASTER OPTIMIZED ║ *
 * ║          By DevinF06 ║ *
 * ╚══════════════════════╝ */

(_=>{_=$window({url:"about:blank",title:"TIMEWASTER",center:true,width:350,height:200,minimizable:false,maximizable:false}),a=_.el.body,a.appendChild(g('<p>Welcpme to the TIMEWASTER zone!<br>You will be here for a long time.</p>','margin:10px')),b=g('<p>Wasting time...<span style="position:absolute;right:0"></span></p><div class="skin_inset_deep h20p mt5 relative ui_progress"><div class="ui_progress__bar"style="width:0"></div></div>','position:absolute;bottom:10px;left:10px;width:calc(100% - 20px)'),c=b.lastChild.lastChild.style,d=b.firstChild.lastChild,a.appendChild(b);if(+a.style.top.slice(0,-1)<0||+a.style.left.slice(0,-1)<0){a.style.top="200px",bd.style.left="200px"}try{e}catch(_){e=0}try{clearInterval(f)}catch(_){}f=setInterval(_=>{e++,d.innerHTML=e+"s",c.width=e*5/3%100+"%"},1000),_.cfg.onclose=_=>clearInterval(f);function g(_,a){b=document.createElement("div"),b.innerHTML=_;if(a)b.style.cssText=a;return b}})()
