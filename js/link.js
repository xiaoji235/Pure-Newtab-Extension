window.onload = function(){
    createUrlList();
};

// 默认URL
let urlList = [
    {
        title:'知乎',
        url:'https://www.zhihu.com',
    },
    {
        title:'Bing',
        url:'https://bing.com/',
    },
    {
        title:'哔哩哔哩',
        url:'https://www.bilibili.com',
    },
    {
        title:'GitHub',
        url:'https://www.github.com',
    },
    {
        title:'百度',
        url:'https://www.baidu.com',
    },
]

function createUrlList(){
   let list = document.getElementById("commonly-use-url");
   removeAllChild();
   let listArr = JSON.parse(localStorage.getItem('list_arr')) ||  urlList;
   for(let i=0; i<listArr.length;i++){
       const { title, url } = listArr[i]
        iconUrl=isImg({img:url});
        const html = `
            <div class="del-icon" id='del_${i}'>
                <svg t="1648322791251" class="maskedImage" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1812" width="200" height="200"><path d="M265.28 310.72a32 32 0 0 1 45.44-45.44l448 448a32 32 0 0 1-45.44 45.44z" p-id="1813" fill="#e6e6e6"></path><path d="M713.28 265.28a32 32 0 0 1 45.44 45.44l-448 448a32 32 0 0 1-45.44-45.44z" p-id="1814" fill="#e6e6e6"></path></svg>
            </div>
            <div class="icon">
                <img id='imgUrl' draggable="false" alt="" src='${iconUrl}'>
            </div>
            <div class="url-title">${title}</div>
        `;
        const a = document.createElement('a');
        a.className='url-icon'
        a.href= url
        a.target= '_blank'
        a.innerHTML = html;

        //list.appendChild(div);
        list.appendChild(a); 
        const del = document.getElementById(`del_${i}`);
                del.addEventListener('click',()=>{delUrl(i);event.preventDefault();})//阻止冒泡
   }
}

function removeAllChild()  {
    var div = document.getElementById("commonly-use-url");
    while(div.hasChildNodes()) 
    //当div下还存在子节点时 循环继续
    {   
        div.removeChild(div.firstChild);
    }
}


function delUrl(index){
    let listArr = JSON.parse(localStorage.getItem('list_arr')) ||  urlList
    listArr.splice(index,1);
    localStorage.setItem("list_arr", JSON.stringify(listArr))
    createUrlList()
}

$('#addUrl').click(()=>{
    let listArr = JSON.parse(localStorage.getItem('list_arr')) ||  urlList
    if(listArr.length>=14){
        alert('只能添加14个，如需增加，请前往link.js修改')
        return;
    }
    let title=document.getElementById('title')
    let url =document.getElementById('url')
    listArr.push({title:title.value, url: url.value})
    localStorage.setItem("list_arr", JSON.stringify(listArr))
    console.log(listArr)
    createUrlList()
    alert('添加成功')
    title.value=''
    url.value=''
});


//打开与关闭
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("close-Url").addEventListener("click", closeUrl);
});
function closeUrl(){
	document.getElementById("link-set").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("link-set").style="display:none"},100)
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("show-Add").addEventListener("click", showAdd);
});
function showAdd(){
	document.getElementById("link-set").style="display:block;opacity:0"
	setTimeout(function(){document.getElementById("link-set").style="display:block;opacity:1"},100)
}




function isImg({img='https://zhihu.com'}){
    reg = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i
    res = img.match(reg)
    console.log(res)
    if(!res){
        return 'images/logo_64.png'
    }
    newimg= res[1]+res[2]+'/favicon.ico';
    return newimg;
}
