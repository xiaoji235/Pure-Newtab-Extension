 (function (window) {
            var ws = "日一二三四五六";
            var document = window.document;
            var $ = (sel => document.querySelector(sel));
            var sn = "";
            var timer = null;
            var nativeInfoData = {};

            //请求天气接口
            window.getTemperature = function() {
                return fetch(`https://cloud-rest.lenovomm.com/cloud-weather/weather/localWeather`, {
                    headers: {
                        "Accept": "application/json",
                    },
                }).then(response => {
                    // console.log(response);
                    return response.json();
                }).then(res => {
                    // console.log(res);
                    if (res.code == 10000 && res.data.length) {
                        this.setWeatherLogic(res.data[0])
                    }
                })
            }
            this.getTemperature();
            //设置时间
            setInterval(function() {
                var now = new Date();
                var yea = now.getFullYear();
                var mon = now.getMonth() + 1;
                var day = now.getDate();
                var hou = now.getHours();
                var min = now.getMinutes();
                var wee = now.getDay();
                var wz = ws[wee];
                $('.info').style.opacity = '1';
            }, 1000);

            window.setWeatherLogic = function(obj) {
                let {
                    weatherIndex
                } = obj.current;
                let {
                    temperature_am,
                    temperature_pm
                } = obj.forecast;
                if (weatherIndex) {
                    $('#weather_icon').style.display = 'block';
                    $('#weather_icon').setAttribute('src', `weather/${weatherIndex}.svg`);/*这里可能要修改一下*/
                }
                let temperature_interval = '';
                if (!temperature_pm || !temperature_am) return;
                temperature_interval = Number(temperature_pm) > Number(temperature_am) ? `${temperature_am}~${temperature_pm}℃` : `${temperature_pm}~${temperature_am}℃`;
                $('.temp').style.display = 'block';
                $('.temp').innerText = temperature_interval;
            }
        })(window)