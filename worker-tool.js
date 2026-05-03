export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/cf-api/')) {
      const cfUrl = 'https://api.cloudflare.com/client/v4/' + url.pathname.slice(8);
      const cfReq = new Request(cfUrl, {
        method: request.method,
        headers: {
          'X-Auth-Email': request.headers.get('X-Auth-Email') || '',
          'X-Auth-Key': request.headers.get('X-Auth-Key') || '',
          'Content-Type': request.headers.get('Content-Type') || 'application/json',
        },
        body: request.method !== 'GET' ? request.body : undefined,
      });
      const cfRes = await fetch(cfReq);
      return new Response(cfRes.body, {
        status: cfRes.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }
    const SUB = 'jqvr5kbkmy';
    const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LP Deployer</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,sans-serif;background:#0a0a0a;color:#fff;min-height:100vh}
#s1{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px}
#s2{display:none;padding:20px 16px 80px}
.ttl{font-size:28px;font-weight:900;color:#fe2c55;margin-bottom:6px;text-align:center}
.sub{font-size:13px;color:#555;margin-bottom:32px;text-align:center}
.bx{background:#161616;border:1px solid #222;border-radius:20px;padding:24px;width:100%;max-width:340px}
input,textarea{width:100%;background:#0d0d0d;border:1.5px solid #2a2a2a;border-radius:12px;color:#fff;font-size:16px;padding:14px 16px;outline:none;margin-bottom:14px;-webkit-appearance:none;display:block;font-family:-apple-system,sans-serif}
textarea{resize:none;height:80px;line-height:1.5}
button{display:block;width:100%;text-align:center;border-radius:12px;font-size:16px;font-weight:900;padding:16px;cursor:pointer;font-family:-apple-system,sans-serif;border:none}
.red{background:#fe2c55;color:#fff}
.grn{background:#22c55e;color:#000;margin-bottom:10px}
.drk{background:#1a1a1a;color:#888;margin-bottom:10px}
.blu{background:#3b82f6;color:#fff;margin-bottom:10px}
.sm{background:#161616;color:#555;font-size:12px;padding:6px 10px;border-radius:8px;width:auto}
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.ttl2{font-size:18px;font-weight:900;color:#fe2c55}
.card{background:#161616;border:1px solid #222;border-radius:16px;padding:18px;margin-bottom:12px}
.clbl{font-size:11px;font-weight:900;color:#fe2c55;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px}
.uprv{margin-top:6px;background:#1a0810;border:1px solid #2a1020;border-radius:8px;padding:10px 14px;font-size:12px;color:#fe2c55;font-weight:700;word-break:break-all}
.dbtn{width:100%;background:linear-gradient(135deg,#fe2c55,#ff6b35);border-radius:14px;color:#fff;font-size:17px;font-weight:900;padding:20px;margin-top:4px;border:none;cursor:pointer;display:block;font-family:-apple-system,sans-serif}
.uzone{border:2px dashed #2a2a2a;border-radius:12px;padding:24px 16px;text-align:center;position:relative;cursor:pointer}
.uzone input[type=file]{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;font-size:16px}
.prog{display:none;margin-top:10px}
.pbar{height:4px;background:#1a1a1a;border-radius:2px;overflow:hidden}
.pfil{height:100%;background:#fe2c55;width:0;transition:width 0.3s;border-radius:2px}
.uok{display:none;margin-top:10px;font-size:12px;color:#22c55e;text-align:center}
.phone{margin-top:14px;border-radius:18px;overflow:hidden;border:2px solid #2a2a2a;background:#fff;max-width:200px;margin-left:auto;margin-right:auto}
.pnav{background:#fff;padding:9px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eee}
.pnam{font-size:11px;font-weight:900;color:#000;line-height:1.2}
.phnd{font-size:9px;color:#888}
.prgt{display:flex;gap:8px}
.pimg{width:100%;aspect-ratio:9/14;background:#f0f0f0;overflow:hidden}
.pimg img{width:100%;height:100%;object-fit:cover;object-position:top;display:none}
.pmt{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#ccc;font-size:10px;gap:4px}
.log{display:none;margin-top:12px}
.log.on{display:block}
.lbox{background:#060f06;border:1px solid #1a3a1a;border-radius:10px;padding:14px;font-family:monospace;font-size:11px;line-height:2;max-height:180px;overflow-y:auto}
.ll{display:flex;gap:8px}
.lt{color:#7ec87e;word-break:break-all}
.lt.e{color:#f87171}
.lt.i{color:#60a5fa}
.lt.m{color:#444}
.suc{display:none;background:#071a07;border:1px solid #1a4a1a;border-radius:16px;padding:22px 18px;margin-top:12px;text-align:center}
.suc.on{display:block}
.surl{background:#0a250a;border:1px solid #1e4a1e;border-radius:10px;padding:14px;font-size:14px;color:#22c55e;font-weight:700;word-break:break-all;margin-bottom:12px}
.spin{display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:sp 0.7s linear infinite;vertical-align:middle;margin-right:6px}
@keyframes sp{to{transform:rotate(360deg)}}
.mcard{background:#161616;border:1px solid #222;border-radius:16px;padding:16px;margin-bottom:10px}
.murl{font-size:13px;color:#22c55e;font-weight:700;word-break:break-all;margin-bottom:6px}
.mmemo{font-size:12px;color:#888;margin-bottom:10px;white-space:pre-wrap;line-height:1.5}
.mdate{font-size:10px;color:#444;margin-bottom:10px}
.mbtns{display:flex;gap:8px}
.mbtns button{font-size:12px;padding:8px;flex:1;margin-bottom:0}
.empty{text-align:center;color:#444;font-size:14px;padding:40px 0}
.tabbar{display:flex;gap:8px;margin-bottom:20px}
.tab{flex:1;padding:10px;border-radius:10px;font-size:13px;font-weight:700;border:none;cursor:pointer;font-family:-apple-system,sans-serif}
.tab.on{background:#fe2c55;color:#fff}
.tab.off{background:#161616;color:#555}
</style>
</head>
<body>
<div id="s1">
  <div class="ttl">LP Deployer</div>
  <div class="sub">TikTok LP Auto Deploy</div>
  <div class="bx">
    <span style="font-size:11px;font-weight:900;color:#fe2c55;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;display:block">Cloudflare API Key</span>
    <input type="password" id="k" placeholder="Global API Key" autocorrect="off" autocapitalize="off" spellcheck="false">
    <span style="font-size:11px;font-weight:900;color:#fe2c55;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;display:block">Email</span>
    <input type="email" id="em" placeholder="email@example.com" autocorrect="off" spellcheck="false">
    <button class="red" id="go" type="button">Start</button>
  </div>
</div>
<div id="s2">
  <div class="topbar">
    <div class="ttl2">LP Deployer</div>
    <button class="sm" id="back" type="button">Change API</button>
  </div>
  <div class="tabbar">
    <button class="tab on" id="tab1" type="button">Deploy</button>
    <button class="tab off" id="tab2" type="button">管理</button>
  </div>
  <div id="deploy-area">
    <div class="card">
      <div class="clbl">1. Worker Name</div>
      <input type="text" id="wn" placeholder="e.g. tiktok-minyan221" autocorrect="off" autocapitalize="off" spellcheck="false" style="margin-bottom:0">
      <div style="margin-top:6px;background:#1a0810;border:1px solid #2a1020;border-radius:8px;padding:10px 14px;font-size:12px;color:#fe2c55;font-weight:700;word-break:break-all" id="up">https://[name].jqvr5kbkmy.workers.dev</div>
    </div>
    <div class="card">
      <div class="clbl">2. Nav Bar</div>
      <div style="display:flex;gap:8px">
        <input type="text" id="nn" placeholder="Name" style="margin-bottom:0;flex:1">
        <input type="text" id="nh" placeholder="@account" autocorrect="off" autocapitalize="off" spellcheck="false" style="margin-bottom:0;flex:1">
      </div>
    </div>
    <div class="card">
      <div class="clbl">3. LP Image</div>
      <div class="uzone" id="uz">
        <input type="file" accept="image/*" id="fi">
        <div style="font-size:28px;margin-bottom:8px">&#128193;</div>
        <div style="font-size:13px;color:#555"><b style="color:#fe2c55">Tap to select</b><br>PNG / JPG</div>
      </div>
      <div class="prog" id="pg">
        <div style="font-size:11px;color:#555;margin-bottom:6px;text-align:center">Uploading...</div>
        <div class="pbar"><div class="pfil" id="pf"></div></div>
      </div>
      <div class="uok" id="uo">Upload complete!</div>
      <div class="phone">
        <div class="pnav">
          <span style="font-size:13px;color:#333">&#8592;</span>
          <div style="text-align:center"><div class="pnam" id="pn">Name</div><div class="phnd" id="ph">@account</div></div>
          <div class="prgt"><span style="font-size:13px;color:#333">&#128276;</span><span style="font-size:13px;color:#333">&#8594;</span></div>
        </div>
        <div class="pimg">
          <div class="pmt" id="pe"><span style="font-size:22px">&#128444;</span><span>Select image</span></div>
          <img id="pi" alt="">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="clbl">4. Affiliate Link</div>
      <input type="text" id="al" placeholder="https://lite.tiktok.com/t/..." autocorrect="off" autocapitalize="off" spellcheck="false" style="margin-bottom:0">
    </div>
    <div class="card">
      <div class="clbl">5. メモ（任意）</div>
      <textarea id="memo" placeholder="例：画像1のアフィリンク3 5/3作成" style="margin-bottom:0"></textarea>
    </div>
    <button class="dbtn" id="dep" type="button">Deploy</button>
    <div class="log" id="lg">
      <div style="font-size:11px;color:#fe2c55;font-weight:900;margin-bottom:8px">Log</div>
      <div class="lbox" id="lb"></div>
    </div>
    <div class="suc" id="sc">
      <div style="font-size:48px;margin-bottom:10px">&#127881;</div>
      <div style="font-size:20px;font-weight:900;color:#22c55e;margin-bottom:14px">Deploy Complete!</div>
      <div class="surl" id="su"></div>
      <button class="grn" id="cp" type="button">Copy URL</button>
      <button class="drk" id="ag" type="button">Make Another</button>
      <button class="blu" id="gm" type="button">管理画面へ</button>
    </div>
  </div>
  <div id="manage-area" style="display:none">
    <div id="mlist"></div>
  </div>
</div>
<script>
var K='',E='',IM='',IK='d0d0fc17ec6a67badbdf6719039e3a07';
var SUB='jqvr5kbkmy';
var BASE=location.origin;
var STORE_KEY='lp_deployer_links';
function saveLink(url,memo){var links=getLinks();var now=new Date();var d=now.getFullYear()+'/('+(now.getMonth()+1)+'/'+now.getDate()+' '+now.getHours()+':'+( now.getMinutes()<10?'0':'' )+now.getMinutes();links.unshift({url:url,memo:memo||'',date:d,id:Date.now()});localStorage.setItem(STORE_KEY,JSON.stringify(links));}
function getLinks(){try{return JSON.parse(localStorage.getItem(STORE_KEY)||'[]');}catch(e){return [];}}
function deleteLink(id){var links=getLinks().filter(function(l){return l.id!==id;});localStorage.setItem(STORE_KEY,JSON.stringify(links));}
function renderManage(){var links=getLinks();var el=document.getElementById('mlist');if(links.length===0){el.innerHTML='<div class="empty">まだLPがありません</div>';return;}el.innerHTML=links.map(function(l){return '<div class="mcard"><div class="murl">'+l.url+'</div>'+(l.memo?'<div class="mmemo">'+l.memo.replace(/</g,'&lt;')+'</div>':'')+'<div class="mdate">'+l.date+'</div><div class="mbtns"><button class="grn" type="button" onclick="copyUrl(\''+l.url+'\',this)">コピー</button><button class="drk" type="button" onclick="openUrl(\''+l.url+'\')">開く</button><button style="background:#2a0a0a;color:#f87171;border-radius:12px;font-size:12px;padding:8px;flex:1;border:none;cursor:pointer;font-family:-apple-system,sans-serif;font-weight:900" type="button" onclick="delLink('+l.id+')">削除</button></div></div>';}).join('');}
function copyUrl(url,btn){if(navigator.clipboard){navigator.clipboard.writeText(url).then(function(){btn.textContent='Copied!';setTimeout(function(){btn.textContent='コピー';},2000);});}else{prompt('Copy:',url);}}
function openUrl(url){window.open(url,'_blank');}
function delLink(id){if(!confirm('削除しますか？')){return;}deleteLink(id);renderManage();}
document.getElementById('tab1').onclick=function(){this.className='tab on';document.getElementById('tab2').className='tab off';document.getElementById('deploy-area').style.display='block';document.getElementById('manage-area').style.display='none';};
document.getElementById('tab2').onclick=function(){this.className='tab on';document.getElementById('tab1').className='tab off';document.getElementById('deploy-area').style.display='none';document.getElementById('manage-area').style.display='block';renderManage();};
document.getElementById('gm').onclick=function(){document.getElementById('tab2').click();};
document.getElementById('go').onclick=function(){var k=document.getElementById('k').value.trim();var e=document.getElementById('em').value.trim();if(!k||!e){alert('Enter API Key and Email');return;}K=k;E=e;document.getElementById('s1').style.display='none';document.getElementById('s2').style.display='block';};
document.getElementById('back').onclick=function(){K='';E='';document.getElementById('s2').style.display='none';document.getElementById('s1').style.display='flex';};
document.getElementById('wn').oninput=function(){var v=this.value.trim();document.getElementById('up').textContent=v?'https://'+v+'.'+SUB+'.workers.dev':'https://[name].'+SUB+'.workers.dev';};
document.getElementById('nn').oninput=function(){document.getElementById('pn').textContent=this.value.trim()||'Name';};
document.getElementById('nh').oninput=function(){document.getElementById('ph').textContent=this.value.trim()||'@account';};
document.getElementById('fi').onchange=function(){var f=this.files[0];if(!f)return;var r=new FileReader();r.onload=function(e){var i=document.getElementById('pi');i.src=e.target.result;i.style.display='block';document.getElementById('pe').style.display='none';};r.readAsDataURL(f);document.getElementById('pg').style.display='block';document.getElementById('uo').style.display='none';document.getElementById('uz').style.borderColor='#fe2c55';var p=0,fl=document.getElementById('pf');var iv=setInterval(function(){p=Math.min(p+Math.random()*12,85);fl.style.width=p+'%';},200);var fd=new FormData();fd.append('image',f);fd.append('key',IK);fetch('https://api.imgbb.com/1/upload',{method:'POST',body:fd}).then(function(r){return r.json();}).then(function(d){clearInterval(iv);fl.style.width='100%';if(d.success){IM=d.data.url;setTimeout(function(){document.getElementById('pg').style.display='none';document.getElementById('uo').style.display='block';document.getElementById('uz').style.borderColor='#22c55e';},300);}else throw new Error();}).catch(function(){clearInterval(iv);document.getElementById('pg').style.display='none';document.getElementById('uz').style.borderColor='#f87171';alert('Upload failed');});};
function lg(i,t,c){var b=document.getElementById('lb'),d=document.createElement('div');d.className='ll';d.innerHTML='<span>'+i+'</span><span class="lt '+(c||'')+'">'+t+'</span>';b.appendChild(d);b.scrollTop=b.scrollHeight;}
function wc(img,aff,n,h){var s='export default {async fetch(request){';s+='var I='+JSON.stringify(img)+';';s+='var A='+JSON.stringify(aff)+';';s+='var N='+JSON.stringify(n)+';';s+='var H='+JSON.stringify(h)+';';s+='var p="<!DOCTYPE html><html><head><meta charset=UTF-8><meta name=viewport content=width=device-width,initial-scale=1><title>TikTok</title>";';s+='p+="<style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:100%;background:#fff;font-family:-apple-system,sans-serif}";';s+='p+=".nb{position:fixed;top:0;left:0;right:0;z-index:999;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid #f0f0f0}";';s+='p+=".ni{font-size:18px;color:#333;text-decoration:none}.nc{text-align:center;text-decoration:none}";';s+='p+=".nn{font-size:15px;font-weight:700;color:#000}.nh{font-size:11px;color:#888}";';s+='p+=".nr{display:flex;gap:14px;align-items:center}.ct{padding-top:52px}";';s+='p+=".ct a{display:block;width:100%;text-decoration:none}.ct img{width:100%;display:block}</style></head><body>";';s+='p+="<div class=nb><a class=ni href="+JSON.stringify(A)+">&#8592;</a>";';s+='p+="<a href="+JSON.stringify(A)+" class=nc><div class=nn>"+N+"</div><div class=nh>"+H+"</div></a>";';s+='p+="<div class=nr><a class=ni href="+JSON.stringify(A)+">&#128276;</a>";';s+='p+="<a class=ni href="+JSON.stringify(A)+">&#8594;</a></div></div>";';s+='p+="<div class=ct><a href="+JSON.stringify(A)+"><img src="+JSON.stringify(I)+"></a></div></body></html>";';s+='return new Response(p,{headers:{"Content-Type":"text/html;charset=UTF-8","Cache-Control":"no-cache"}});';s+='}}';return s;}
document.getElementById('dep').onclick=function(){var wn=document.getElementById('wn').value.trim();var nn=document.getElementById('nn').value.trim()||'TikTok';var nh=document.getElementById('nh').value.trim()||'@tiktok';var al=document.getElementById('al').value.trim();var memo=document.getElementById('memo').value.trim();if(!wn){alert('Enter Worker name');return;}if(!IM){alert('Upload image first');return;}if(!al){alert('Enter affiliate link');return;}var btn=document.getElementById('dep');btn.innerHTML='<span class="spin"></span>Deploying...';btn.disabled=true;document.getElementById('lg').classList.add('on');document.getElementById('sc').classList.remove('on');document.getElementById('lb').innerHTML='';lg('...','Checking API...');fetch(BASE+'/cf-api/accounts',{headers:{'X-Auth-Email':E,'X-Auth-Key':K}}).then(function(r){return r.json();}).then(function(d){if(!d.success)throw new Error('Auth failed');var aid=d.result[0].id;lg('OK','Account OK','i');lg('...','Deploying...');var code=wc(IM,al,nn,nh);var fd=new FormData();fd.append('metadata',new Blob([JSON.stringify({main_module:'worker.js'})],{type:'application/json'}),'metadata.json');fd.append('worker.js',new Blob([code],{type:'application/javascript+module'}),'worker.js');return fetch(BASE+'/cf-api/accounts/'+aid+'/workers/scripts/'+wn,{method:'PUT',headers:{'X-Auth-Email':E,'X-Auth-Key':K},body:fd}).then(function(r){return r.json();}).then(function(d2){if(!d2.success)throw new Error('Deploy failed: '+(d2.errors&&d2.errors[0]?d2.errors[0].message:''));lg('OK','Success!','i');return fetch(BASE+'/cf-api/accounts/'+aid+'/workers/scripts/'+wn+'/subdomain',{method:'POST',headers:{'X-Auth-Email':E,'X-Auth-Key':K,'Content-Type':'application/json'},body:JSON.stringify({enabled:true})});}).then(function(){lg('...','Waiting 15s...','m');return new Promise(function(res){setTimeout(res,15000);});}).then(function(){var url='https://'+wn+'.'+SUB+'.workers.dev';saveLink(url,memo);lg('OK','Done! '+url,'i');document.getElementById('su').textContent=url;document.getElementById('sc').classList.add('on');document.getElementById('sc').scrollIntoView({behavior:'smooth'});btn.innerHTML='Deploy';btn.disabled=false;});}).catch(function(e){lg('ERR',e.message,'e');btn.innerHTML='Deploy';btn.disabled=false;});};
document.getElementById('cp').onclick=function(){var url=document.getElementById('su').textContent;var b=this;if(navigator.clipboard){navigator.clipboard.writeText(url).then(function(){b.textContent='Copied!';setTimeout(function(){b.textContent='Copy URL';},2000);});}else{prompt('Copy:',url);}}
document.getElementById('ag').onclick=function(){document.getElementById('wn').value='';document.getElementById('nn').value='';document.getElementById('nh').value='';document.getElementById('al').value='';document.getElementById('memo').value='';IM='';document.getElementById('up').textContent='https://[name].'+SUB+'.workers.dev';document.getElementById('pn').textContent='Name';document.getElementById('ph').textContent='@account';document.getElementById('pi').style.display='none';document.getElementById('pe').style.display='flex';document.getElementById('uz').style.borderColor='';document.getElementById('uo').style.display='none';document.getElementById('lg').classList.remove('on');document.getElementById('sc').classList.remove('on');window.scrollTo({top:0,behavior:'smooth'});};
</script>
</body>
</html>`;
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};
