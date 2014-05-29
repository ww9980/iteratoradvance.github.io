// Generated by CoffeeScript 1.4.0
(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};window.NAN.maximumNumber=1e8,NAN.NumberSet=function(){function t(){this.numbers=[],this.description="Interesting Number"}return t.prototype.analyze=function(t){return t=parseInt(t),e.call(this.numbers,t)>=0?{score:Math.max(1,t)/Math.max(1,this.numbers.indexOf(t)),description:this.description}:{score:0,description:null}},t}(),NAN.PrimeNumberSet=function(e){function t(){this.description="质数"}return n(t,e),t.prototype.isPrime=function(e){var t;e=parseInt(e);if(e===2)return!0;if(e<2)return!1;t=2;while(t*t<=e){if(e%t===0)return!1;t+=1}return!0},t.prototype.analyze=function(e){var t;return e=parseInt(e),this.isPrime(e)?(t={},t.score=Math.floor(10+Math.pow(Math.log(e),2)),t.description=this.description,t):null},t}(NAN.NumberSet),NAN.PureOddNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="纯奇数"}return n(t,e),t.prototype.analyze=function(e){var t,n,r,i;for(r=0,i=e.length;r<i;r++){t=e[r];if(parseInt(t)%2===0)return null}return n={score:Math.max(0,e.length-4),description:this.description},n},t}(NAN.NumberSet),NAN.PureEvenNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="纯偶数"}return n(t,e),t.prototype.analyze=function(e){var t,n,r,i;for(r=0,i=e.length;r<i;r++){t=e[r];if(parseInt(t)%2===1)return null}return n={score:Math.max(0,e.length-4),description:this.description},n},t}(NAN.NumberSet),NAN.PureNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="纯数"}return n(t,e),t.prototype.analyze=function(e){var t,n,r,i;for(r=0,i=e.length;r<i;r++){t=e[r];if(t!==e[0])return null}return n={score:10*Math.pow(Math.max(0,e.length-2),2),description:this.description},n},t}(NAN.NumberSet),NAN.APNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="等差数列数"}return n(t,e),t.prototype.analyze=function(e){var t,n,r,i,s,o;if(e.length<3)return null;t=-1;for(n=s=0,o=e.length-1;0<=o?s<o:s>o;n=0<=o?++s:--s){r=(e[n+1]-e[n]+10)%10;if(r===0)return null;if(t===-1)t=r;else if(t!==r)return null}return i={score:e.length,description:this.description},i},t}(NAN.NumberSet),NAN.WaveNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="波浪数"}return n(t,e),t.prototype.analyze=function(e){var t,n,r,i,s,o;if(e.length<3)return null;n=0;for(t=s=0,o=e.length-1;0<=o?s<o:s>o;t=0<=o?++s:--s){r=e[t+1]-e[t];if(Math.abs(r)!==1)return null;if(n!==0&&r+n!==0)return null;n=r}return i={score:e.length,description:this.description},i},t}(NAN.NumberSet),NAN.PowerOf2NumberSet=function(e){function t(){var e;t.__super__.constructor.call(this),this.description="2的幂",e=1;while(e<NAN.maximumNumber)this.numbers.push(e),e*=2}return n(t,e),t}(NAN.NumberSet),NAN.CloseToSomePowerOf2NumberSet=function(e){function t(){var e;t.__super__.constructor.call(this),this.description="接近2的幂",e=16;while(e<NAN.maximumNumber)this.numbers.push(e+1),this.numbers.push(e-1),e*=2}return n(t,e),t}(NAN.NumberSet),NAN.SquareNumberSet=function(e){function t(){var e,n,r;t.__super__.constructor.call(this),this.description="平方数";for(e=n=0,r=Math.floor(Math.sqrt(NAN.maximumNumber));0<=r?n<r:n>r;e=0<=r?++n:--n)this.numbers.push(e*e)}return n(t,e),t}(NAN.NumberSet),NAN.CubicNumberSet=function(e){function t(){var e,n,r;t.__super__.constructor.call(this),this.description="立方数";for(e=n=0,r=NAN.maximumNumber;0<=r?n<r:n>r;e=0<=r?++n:--n){this.numbers.push(e*e*e);if(e*e*e>=NAN.maximumNumber)break}}return n(t,e),t}(NAN.NumberSet),NAN.FactorialNumberSet=function(e){function t(){var e,n,r;t.__super__.constructor.call(this),this.description="阶乘数",e=1;for(n=r=1;r<=1e3;n=++r){e*=n;if(e>=NAN.maximumNumber)break;this.numbers.push(e)}}return n(t,e),t}(NAN.NumberSet),NAN.HundredNumberSet=function(e){function t(){var e,n,r,i,s;t.__super__.constructor.call(this),this.description="以0结尾",e=1;for(r=i=1;i<=1e3;r=++i){e*=10;for(n=s=1;s<=9;n=++s){if(e*n>=NAN.maximumNumber)break;this.numbers.push(e*n)}}}return n(t,e),t.prototype.analyze=function(e){var n;return n=t.__super__.analyze.call(this,e),n&&(n.score=Math.sqrt(n.score)),n},t}(NAN.NumberSet),NAN.AutomorphicNumberNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="Automorphic Number"}return n(t,e),t}(NAN.NumberSet),NAN.FibonacciNumberSet=function(e){function t(){var e,n,r,i,s;t.__super__.constructor.call(this),this.description="Fibonacci数",e=0,n=1;for(i=s=1;s<=1e3;i=++s){r=e+n,e=n,n=r;if(e>=NAN.maximumNumber)break;this.numbers.push(e)}}return n(t,e),t}(NAN.NumberSet),NAN.PalindromicNumberSet=function(e){function t(){this.description="回文数"}return n(t,e),t.prototype.analyze=function(e){return e.split("").reverse().join("")===e?{score:10*Math.pow(Math.max(e.length-2,0),2),description:this.description}:null},t}(NAN.NumberSet),NAN.prefixNumberSet=function(e){function t(){this.numbers=[],this.newNumber({number:"31415926535",description:"圆周率",score:60}),this.newNumber({number:"2718281828",description:"自然常数e",score:60}),this.newNumber({number:"1414213562",description:"根号2",score:40})}return n(t,e),t.prototype.newNumber=function(e){return this.numbers.push({number:e.number,description:e.description,score:e.score})},t.prototype.getResult=function(e){var t,n,r,i;i=this.numbers;for(n=0,r=i.length;n<r;n++){t=i[n];if(t.number.indexOf(e)===0)return{score:t.score*e.length,description:t.description+("的前"+e.length+"位")}}return null},t.prototype.analyze=function(e){return e.length<3?null:this.getResult(e)},t}(NAN.NumberSet),NAN.meaningfulNumberSet=function(e){function t(){this.numbers=[],this.newNumber({number:42,description:"the answer to life, the universe,<br>and everything",score:100}),this.newNumber({number:59,description:"挂科啦",score:50}),this.newNumber({number:63,description:"南南的生日",score:200}),this.newNumber({number:603,description:"南南的生日",score:200}),this.newNumber({number:60,description:"谢老师不挂之恩",score:70}),this.newNumber({number:360,description:"安全卫士",score:70}),this.newNumber({number:211,description:"开发者的狗窝",score:70}),this.newNumber({number:985,description:"看起来是一所好大学",score:70}),this.newNumber({number:250,description:"脑子出了点问题",score:70}),this.newNumber({number:100,description:"学霸你够了",score:70}),this.newNumber({number:99,description:"学霸你够了",score:70}),this.newNumber({number:233,description:"很好笑的样子",score:70}),this.newNumber({number:119,description:"着火啦",score:70}),this.newNumber({number:1024,description:"给你1024凑个整",score:70})}return n(t,e),t.prototype.newNumber=function(e){return this.numbers.push({number:e.number,description:e.description,score:e.score})},t.prototype.getResult=function(e){var t,n,r,i;i=this.numbers;for(n=0,r=i.length;n<r;n++){t=i[n];if(t.number===e)return{score:t.score,description:t.description}}return null},t.prototype.analyze=function(e){return e=parseInt(e),this.getResult(e)},t}(NAN.NumberSet),NAN.Analyzer=function(){function e(){var e;this.numberSets=[];for(e in NAN)e.toString().indexOf("NumberSet")>0&&this.numberSets.push(new(NAN[e.toString()]))}return e.prototype.analyze=function(e){var t,n,r,i,s,o,u,a;s=0,t=[],r=0,a=this.numberSets;for(o=0,u=a.length;o<u;o++){n=a[o],i=n.analyze(e);if(i===null)continue;s+=i.score,r+=1,t.push(i.description)}return{score:Math.floor(s*r),descriptions:t}},e}()}).call(this);