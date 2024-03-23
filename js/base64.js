        var img = document.getElementById('img')  
            , imgShow = document.getElementById('imgShow')  
            , conte = document.getElementById('conte') 
            , start = document.getElementById('start')   
        start.addEventListener('click', startt);  
      
        /*转换函数*/  
        function startt() {  
            var imgFile = new FileReader();  
            imgFile.readAsDataURL(img.files[0]);  
            imgFile.onload = function () {  
                var imgData = this.result; //base64数据    
                imgShow.setAttribute('src', imgData);  
                conte.value = imgData;  
            }  
        }  
