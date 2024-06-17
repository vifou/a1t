(function(win,doc){var defaultConfig={  templateLine:"${textThree} ${logo} ${info} ${amount} ${textOne} ${number} ${textTwo}",textOne: "أو على",textTwo: "أقساط متساوية بدون تكاليف اضافية بقيمة",textThree: "مع",currency:"AED",numberOfPayment:4,targetXPath:"",renderToPath:"",price:null,forcedShow:false,merchantID:null};var POPUP_CSS=".spotii-popup{position:fixed;left:0;top:0;bottom:0;right:0;z-index:99998}.spotii-popup__backdrop{position:absolute;left:0;top:0;bottom:0;right:0;background:rgba(0,0,0,.5)}.spotii-popup__wrap{position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);width:100%;max-width:754px}.spotii-popup__content{color:#333;font-size:16px;text-align:center;box-sizing:border-box;background:#fff;border-radius:16px;padding:40px 32px 24px;box-shadow:0 4px 15px rgba(0,0,0,.15)}.spotii-popup__close{color:#666;position:absolute;right:24px;top:24px;cursor:pointer}.spotii-popup__close:hover{color:#333}.spotii-popup__logo{width:160px;margin:0 auto 16px}.spotii-popup__moto{font-weight:700;font-size:1.25em;margin:0 0 8px}.spotii-popup__moto b{color:#ff4d4a}.spotii-popup__statement{color:#666;margin:0 0 40px}.spotii-popup__row{overflow:hidden;text-align:center}.spotii-popup__col{display:inline-block;vertical-align:top;width:230px;box-sizing:border-box;padding-left:12px;padding-right:12px;margin-bottom:40px}.spotii-popup__icon{color:#ff4d4a;display:inline-block;vertical-align:middle;padding:20px;background:#066;background:rgba(255,77,74,.1);border-radius:50%;margin-bottom:16px}.spotii-popup__icon svg{vertical-align:middle}.spotii-popup__point-title{font-weight:700;font-size:1em;line-height:1.375;min-height:2.75em;margin:0 0 8px}.spotii-popup__point-text{color:#666;line-height:1.5;font-size:.875em;margin:0}.spotii-popup__cta{margin:0 0 40px}.spotii-popup .spotii-popup__button,.spotii-popup .spotii-popup__button:active,.spotii-popup .spotii-popup__button:hover,.spotii-popup .spotii-popup__button:visited{display:inline-block;vertical-align:middle;color:#fff;font-weight:700;font-size:.875em;text-align:center;text-decoration:none;padding:12px 40px;border-radius:8px;background:#fe6b5f;cursor:pointer;transition:color 180ms ease,background 180ms ease}.spotii-popup .spotii-popup__button:hover{background:#ff4d4a}.spotii-popup__footer{color:#999;font-size:.75em;margin:32px 0 0}.spotii-popup__footer a{color:#999}.spotii-animation-zoom-in{opacity:0;transform:scale(.9);transition:all .3s ease}.spotii-animation-zoom-in-enter{opacity:1;transform:scale(1)}@media (max-width:768px){.spotii-popup__wrap{position:relative;left:0;top:0;height:100%;transform:none;border-radius:0;overflow-y:auto}.spotii-popup__content{min-height:100%}}";var POPUP_CONTENT='<div class="spotii-popup__inner"> <div class="spotii-popup__logo"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 563.84 182"><defs><style>.cls-1{fill:#ff4b44;}.cls-2{fill:#ffc4be;}</style></defs><title>Spotti_Brand_Ar2</title><path class="cls-1" d="M1157.42,407.12V418.6c0,10.72-1.33,16.21-11,16.21h-19.76a57.94,57.94,0,0,1-13.34-1.19l-7.92-1.88v22.87l3.35.87c8.81,2.28,8.81,5.57,8.81,6.65a3,3,0,0,1-1,2.09c-1.65,1.63-7.58,5.4-27,5.18-13.55-.15-23.38-5.54-30.06-16.46l-1.33-2.18-24,12.31,1.5,2.52c11.52,19.4,29.46,29.64,51.89,29.64h.62c33.9-.28,55.8-11.17,55.8-27.74a20.69,20.69,0,0,0-1.92-9h5c27.49,0,36.77-14.27,36.77-44.69V392.57Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1417.91,406.19v20.08c0,6.82-.77,8.54-6.56,8.54s-6.44-2.66-6.44-5.15V401.82l-26.4,14.57v9.88c0,6.92-.6,8.54-6.56,8.54s-6.41-2.66-6.41-5.15V411.54l-26.38,14.53,0,1.58c-.15,5.59-1,7.11-6.31,7.16-5.18-.05-15.87-2.62-15.87-10.24V391.88l-26.41,14.55V422.6c0,2.65.12,4.87.21,6.66.11,2,.25,4.54-.08,5-.13.12-.86.52-4.44.52h-20.67V424.15c0-9.08-2.75-16.94-7.94-22.74-5.9-6.59-14.75-10.07-25.6-10.07-20.48,0-35.92,15.14-35.92,35.21,0,19.13,14.89,32,37.06,32h3.23c-2.16,1.68-6.46,3.25-15.23,3.25-2.76,0-5.84-.24-9.11-.49l-4-.31,1.46,24.3,2.38.2c3.51.29,7,.43,10.25.43,25.58,0,39.18-8.71,42.59-27.38h21.49c5,0,6.36-.33,9.08-1.15.61-.19,1.32-.4,2.23-.65a26.31,26.31,0,0,0,9.77-4.76c5.55,4.43,16.5,6.52,25.41,6.56h.29c10.58,0,16.62-1.35,21.76-4.95,6.49,4.36,14.4,4.95,20.73,4.95,8.5,0,14.78-1.49,20.07-4.82a36.69,36.69,0,0,0,18.75,4.82c17.94,0,30-10.92,30-27.18V391.64Zm-186.67,4a14.73,14.73,0,1,1-14.73,14.73A14.75,14.75,0,0,1,1231.24,410.17Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1109.44,500.05a11.48,11.48,0,1,0,11.48,11.48A11.48,11.48,0,0,0,1109.44,500.05Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1082.32,500.05a11.48,11.48,0,1,0,11.47,11.48A11.48,11.48,0,0,0,1082.32,500.05Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1151.79,367.25A12.25,12.25,0,1,0,1164,355,12.25,12.25,0,0,0,1151.79,367.25Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1146.27,389.48A12.25,12.25,0,1,0,1134,401.73,12.26,12.26,0,0,0,1146.27,389.48Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1280.53,470.84A11.48,11.48,0,1,0,1292,482.32,11.48,11.48,0,0,0,1280.53,470.84Z" transform="translate(-1034.19 -341)"/><path class="cls-2" d="M1574.69,383.68,1598,360.34a66.1,66.1,0,0,0-103.6,13.14A66.06,66.06,0,0,1,1574.69,383.68Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1504.62,453.75l-23.33,23.33a66.1,66.1,0,0,0,103.6-13.14A66.08,66.08,0,0,1,1504.62,453.75Z" transform="translate(-1034.19 -341)"/><path class="cls-2" d="M1574.69,383.68l-70.07,70.07a66.08,66.08,0,0,0,80.27,10.19A66.05,66.05,0,0,0,1574.69,383.68Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1504.62,453.75l70.07-70.07a66.06,66.06,0,0,0-80.27-10.2A66.09,66.09,0,0,0,1504.62,453.75Z" transform="translate(-1034.19 -341)"/></svg></div><p class="spotii-popup__moto">  <b> ادفع </b> الآن، <b> عش </b> الآن، <b> تسوق </b>لاحقا</p><p class="spotii-popup__statement">جزء الدفع على <span id="numberOfPayment">' + defaultConfig.numberOfPayment+ '</span> أقساط متساوية خالية من التكاليف الاضافية</p><div class="spotii-popup__row"><div class="spotii-popup__col"> <i class="spotii-popup__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></i><p class="spotii-popup__point-title">!تسجيل دخول سهل وسريع</p><p class="spotii-popup__point-text">ببساطة اختر سبوتي عند الدفع واملئ بعض البيانات الاساسية</p></div><div class="spotii-popup__col"> <i class="spotii-popup__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg></i>  <p class="spotii-popup__point-title">!موافقة فورية لتأكيد الطلب</p><p class="spotii-popup__point-text">لا داعي للانتظار! سيتم شحن طلبك فوراً بدون أي تأثير على محفظتك اليوم</p></div><div class="spotii-popup__col"> <i class="spotii-popup__icon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> </i> <p class="spotii-popup__point-title">!لا يوجد سعر فائدة على الإطلاق</p><p class="spotii-popup__point-text">بدون تكاليف خفية، عند دفعك في الوقت المحدد لا يوجد أي تكاليف اضافية</p></div></div><div class="spotii-popup__cta"> <a class="spotii-popup__button" href="https://www.spotii.me/how-it-works.html?lang=ar" target="_black" rel="nofollow noopener">إقرأ المزيد</a> </div><div class="spotii-popup__footer"> * ينطبق على جميع الدفعات. يجب أن يتجاوز عمرك الـ18 عاماً وينطبق عليك معايير قبول أخرى. قد تنطبق تكاليف للدفعات المتأخرة. المبلغ التقريبي المبين على صفحة المنتج لا تشمل الضرائب وتكاليف الشحن، ستتم اضافتهم في صفحة الدفع. <a href="https://www.spotii.me/terms-and-conditions.html?lang=ar">انقر هنا</a>. للاطلاع على كل الأحكام والشروط</div><div class="spotii-popup__close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div></div>';var renderLogo=function(stylesString){return'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 563.84 182" style="'+stylesString+'">'+'<defs><style>.cls-1{fill:#ff4b44;}.cls-2{fill:#ffc4be;}</style></defs><title>Spotti_Brand_Ar2</title><path class="cls-1" d="M1157.42,407.12V418.6c0,10.72-1.33,16.21-11,16.21h-19.76a57.94,57.94,0,0,1-13.34-1.19l-7.92-1.88v22.87l3.35.87c8.81,2.28,8.81,5.57,8.81,6.65a3,3,0,0,1-1,2.09c-1.65,1.63-7.58,5.4-27,5.18-13.55-.15-23.38-5.54-30.06-16.46l-1.33-2.18-24,12.31,1.5,2.52c11.52,19.4,29.46,29.64,51.89,29.64h.62c33.9-.28,55.8-11.17,55.8-27.74a20.69,20.69,0,0,0-1.92-9h5c27.49,0,36.77-14.27,36.77-44.69V392.57Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1417.91,406.19v20.08c0,6.82-.77,8.54-6.56,8.54s-6.44-2.66-6.44-5.15V401.82l-26.4,14.57v9.88c0,6.92-.6,8.54-6.56,8.54s-6.41-2.66-6.41-5.15V411.54l-26.38,14.53,0,1.58c-.15,5.59-1,7.11-6.31,7.16-5.18-.05-15.87-2.62-15.87-10.24V391.88l-26.41,14.55V422.6c0,2.65.12,4.87.21,6.66.11,2,.25,4.54-.08,5-.13.12-.86.52-4.44.52h-20.67V424.15c0-9.08-2.75-16.94-7.94-22.74-5.9-6.59-14.75-10.07-25.6-10.07-20.48,0-35.92,15.14-35.92,35.21,0,19.13,14.89,32,37.06,32h3.23c-2.16,1.68-6.46,3.25-15.23,3.25-2.76,0-5.84-.24-9.11-.49l-4-.31,1.46,24.3,2.38.2c3.51.29,7,.43,10.25.43,25.58,0,39.18-8.71,42.59-27.38h21.49c5,0,6.36-.33,9.08-1.15.61-.19,1.32-.4,2.23-.65a26.31,26.31,0,0,0,9.77-4.76c5.55,4.43,16.5,6.52,25.41,6.56h.29c10.58,0,16.62-1.35,21.76-4.95,6.49,4.36,14.4,4.95,20.73,4.95,8.5,0,14.78-1.49,20.07-4.82a36.69,36.69,0,0,0,18.75,4.82c17.94,0,30-10.92,30-27.18V391.64Zm-186.67,4a14.73,14.73,0,1,1-14.73,14.73A14.75,14.75,0,0,1,1231.24,410.17Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1109.44,500.05a11.48,11.48,0,1,0,11.48,11.48A11.48,11.48,0,0,0,1109.44,500.05Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1082.32,500.05a11.48,11.48,0,1,0,11.47,11.48A11.48,11.48,0,0,0,1082.32,500.05Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1151.79,367.25A12.25,12.25,0,1,0,1164,355,12.25,12.25,0,0,0,1151.79,367.25Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1146.27,389.48A12.25,12.25,0,1,0,1134,401.73,12.26,12.26,0,0,0,1146.27,389.48Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1280.53,470.84A11.48,11.48,0,1,0,1292,482.32,11.48,11.48,0,0,0,1280.53,470.84Z" transform="translate(-1034.19 -341)"/><path class="cls-2" d="M1574.69,383.68,1598,360.34a66.1,66.1,0,0,0-103.6,13.14A66.06,66.06,0,0,1,1574.69,383.68Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1504.62,453.75l-23.33,23.33a66.1,66.1,0,0,0,103.6-13.14A66.08,66.08,0,0,1,1504.62,453.75Z" transform="translate(-1034.19 -341)"/><path class="cls-2" d="M1574.69,383.68l-70.07,70.07a66.08,66.08,0,0,0,80.27,10.19A66.05,66.05,0,0,0,1574.69,383.68Z" transform="translate(-1034.19 -341)"/><path class="cls-1" d="M1504.62,453.75l70.07-70.07a66.06,66.06,0,0,0-80.27-10.2A66.09,66.09,0,0,0,1504.62,453.75Z" transform="translate(-1034.19 -341)"/></svg>'};var isNumeric=function(source){return!isNaN(parseFloat(source))&&isFinite(source)};var isAlphabet=function(e){return/^[a-zA-Z()]+$/.test(e)};var parsePrice=function(source){var priceStr="",i=0;for(;i<source.length;i+=1){if(isNumeric(source[i])||source[i]==="."){if(i>0&&source[i]==="."&&isAlphabet(source[i-1])){continue}priceStr+=source[i]}}return parseFloat(priceStr)};function applyStyles(node,styles){if(styles){Object.keys(styles).forEach(function(key){node.style[key]=styles[key]})}return node}function getElement(selector){var el;if(Array.isArray(selector)){selector.find(function(cls){el=document.querySelector(cls);return!!el});return el}return document.querySelector(selector)}function Popup(config){this.config=config;this.hide=this.hide.bind(this);this.show=this.show.bind(this);this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this);this.render()}Popup.prototype.renderContent=function(){var content=document.createElement("div");content.className="spotii-popup__content";content.innerHTML=POPUP_CONTENT;return content};Popup.prototype.renderCloseButton=function(){var button=document.createElement("div");button.className="spotii-popup__close";button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';return button};Popup.prototype.render=function(){var container=doc.createElement("div"),backdrop=doc.createElement("div"),styles=doc.createElement("style"),wrap=doc.createElement("div"),closeBtn,content;this.container=container;container.className="spotii-popup";this.backdrop=backdrop;backdrop.className="spotii-popup__backdrop";backdrop.addEventListener("click",this.hide,false);container.appendChild(backdrop);this.wrap=wrap;wrap.className="spotii-popup__wrap";container.appendChild(wrap);this.content=content=this.renderContent();wrap.appendChild(content);this.closeBtn=closeBtn=this.renderCloseButton();closeBtn.addEventListener("click",this.hide,false);content.appendChild(closeBtn);this.styles=styles;styles.innerHTML=POPUP_CSS;document.body.appendChild(styles);document.body.appendChild(container)};Popup.prototype.show=function(){var content=this.content;content.classList.add("spotii-animation-zoom-in");this.container.style.display="block";win.requestAnimationFrame(function(){content.classList.add("spotii-animation-zoom-in-enter")});document.addEventListener("keydown",this.onDocumentKeyDown,false);if(window.spotiiConfig.numberOfPayment){document.getElementById('numberOfPayment').innerHTML=window.spotiiConfig.numberOfPayment;}};Popup.prototype.hide=function(){var content=this.content;content.classList.remove("spotii-animation-zoom-in","spotii-animation-zoom-in-enter");this.container.style.display="none";document.removeEventListener("keydown",this.onDocumentKeyDown,false)};Popup.prototype.onDocumentKeyDown=function(event){if(event.keyCode===27){this.hide()}};Popup.prototype.destroy=function(){this.backdrop.removeEventListener("click",this.hide,false);this.closeBtn.removeEventListener("click",this.hide,false);document.removeEventListener("keydown",this.onDocumentKeyDown,false);this.container.parentElement.removeChild(this.container);this.styles.parentElement.removeChild(this.styles);this.container=null;this.backdrop=null;this.wrap=null;this.content=null;this.closeBtn=null;this.styles=null;this.show=null;this.hide=null;this.onDocumentKeyDown=null};function Widget(config){this.config=Object.assign({},defaultConfig,config);this.config.textOne=this.config.textOne||"";this.config.textTwo=this.config.textTwo||"";this.config.textThree=this.config.textThree||"";this.config.templateLine=this.config.templateLine||"";this.timer=null;this.timerAttempts=0;this.initated=false;this.init()}Widget.prototype.init=function(){var targetXPath=this.config.targetXPath,renderToPath=this.config.renderToPath,elPrice=getElement(targetXPath),price=this.config.price||elPrice&&elPrice.innerText,tagetContainer=renderToPath?getElement(renderToPath):elPrice,self=this;if(price){this.initated=true;clearTimeout(this.timer);tagetContainer.appendChild(this.render({price:parsePrice(price),numberOfPayment:this.config.numberOfPayment,currency:this.config.currency,textOne:this.config.textOne,textTwo:this.config.textTwo,textThree:this.config.textThree}))}else if(this.timerAttempts<10){this.timerAttempts+=1;this.timer=window.setTimeout(function(){self.init()},1e3)}};Widget.prototype.renderLogo=function(props){var span=doc.createElement("span"),height="1.25em",svgStyles="max-height: 100%; vertical-align: text-bottom; height: "+height;applyStyles(span,{height:height,display:"inline-block"});span.className="spotii-logo";span.innerHTML=renderLogo(svgStyles);return span};Widget.prototype.renderInfo=function(props){var span=doc.createElement("span");applyStyles(span,{fontSize:"0.8em",textDecoration:"underline",marginLeft:"0.5em"});span.innerHTML="إقرأ المزيد";return span};Widget.prototype.renderAmount=function(props,styles){var span=doc.createElement("span"),price=props.price||0,numberOfPayment=props.numberOfPayment||defaultConfig.numberOfPayment,currency=props.currency,amount=(price/numberOfPayment).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",");applyStyles(span,styles);span.className="spotii-price";span.append(doc.createTextNode(currency+" "+amount));return span};Widget.prototype.renderNode=function(nodeName,props){if(nodeName==="number"){return doc.createTextNode(this.config.numberOfPayment)}if(nodeName==="textTwo"){return doc.createTextNode(props.textTwo);}if(nodeName==="textThree"){return doc.createTextNode(props.textThree);}if(nodeName==="textOne"){return doc.createTextNode(props.textOne);}if(nodeName==="amount"){return this.renderAmount(props)}if(nodeName==="logo"){return this.renderLogo(props)}if(nodeName==="info"){return this.renderInfo(props)}};Widget.prototype.render=function(props){var tagRegex=/(\$\{[a-zA-Z]+\})/g,nodeSchema=this.config.templateLine.split(tagRegex),container=doc.createElement("div");container.className="spotii-product-widget";applyStyles(container,{fontSize:"12px",fontWeight:"300",lineHeight:"1.25",cursor:"pointer",textAlign:"right"});nodeSchema.forEach(function(node){var el;if(tagRegex.test(node)){el=this.renderNode(node.slice(2,-1),props);el&&container.appendChild(el)}else{el=doc.createTextNode(node);container.appendChild(el)}}.bind(this));container.addEventListener("click",this.showPopup.bind(this),false);return container};Widget.prototype.showPopup=function(){if(!this.popup){this.popup=new Popup(this.config)}this.popup.show()};new Widget(doc.spotiiConfig||win.spotiiConfig)})(window,document);