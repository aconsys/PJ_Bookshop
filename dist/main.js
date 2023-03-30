(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var a=t.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var n=a.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"bb351cb89344cf5316c4.png",a=t.p+"e376cccbc8f00d095ff1.svg",n=t.p+"b7733d7fef79909394bf.svg",o=(t,e)=>{let a=t.querySelector(`[data-book-info = "${e}"]`).dataset.bookid;localStorage.removeItem(a)},c=document.getElementById("cart-count"),i=(t,e)=>{t.innerHTML="In the cart",t.classList.add("btn_in-cart"),c.classList.remove("cart-btn__count_empty"),c.textContent=e},r=t=>{if(localStorage.length)for(let e=0;e<localStorage.length;e++)localStorage.key(e)===t.dataset.bookid&&(t.innerHTML="In the cart",t.classList.add("btn_in-cart"))},s=(t,s)=>{let l=document.getElementById("product-list"),d=null;s&&(l.innerHTML=""),t.items.forEach((t=>{let o=null,c=t.id,i="",r="",s="",d="",u="",g="";if(o=t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:e,t.volumeInfo.authors){let e=t.volumeInfo.authors,a="";e.forEach(((t,e,n)=>{e===n.length-1?a+=`${t}`:a+=`${t}, `})),i=`<p class="product__author" data-book-info="author">${a}</p>`}if(t.volumeInfo.title&&(r=`<h1 class="product__title" data-book-info="title">${t.volumeInfo.title}</h1>`),t.volumeInfo.averageRating){let e=t.volumeInfo.ratingsCount;s=`<div class="product__rating">\n                      <div class="rating__stars">\n                        <img src=${a} alt="Icon" class="star">\n                        <img src=${a} alt="Icon" class="star">\n                        <img src=${a}  alt="Icon" class="star">\n                        <img src=${n}  alt="Icon" class="star">\n                        <img src=${n}  alt="Icon" class="star">\n                      </div>\n                      <span class="review-nums">${e} review</span>\n                    </div>`}if(t.volumeInfo.description&&t.volumeInfo.description.length>90?d=`<p class="product__description" data-book-info="description">${t.volumeInfo.description.slice(0,91)+"..."}</p>`:t.volumeInfo.description&&(d=`<p class="product__description" data-book-info="description">${t.volumeInfo.description}</p>`),t.saleInfo.listPrice){let e=t.saleInfo.listPrice.amount;const a=77;u=`<div class="product__price">\n                    <span class="price__currency">$</span><span class="price__value" data-book-info="price">${Math.floor(100*e/a)/100}</span>\n                  </div>`}g=`<div class="products-list__item product">\n                      <img src="${o}" alt="Book cover" class="product__img" data-book-info="thumbnail">\n                      <div class="product__card">\n                        ${i}\n                        ${r}\n                        ${s}\n                        ${d}\n                        ${u}\n                        <button class="btn buy-button" data-book-info="id" data-bookid="${c}">Buy now</button>\n                      </div>\n                    </div>`,l.insertAdjacentHTML("beforeend",g)})),d=document.getElementsByClassName("buy-button"),(t=>{for(let e of t)r(e),e.addEventListener("click",(t=>{const e=t.target.parentElement.parentElement,a={id:"",thumbnail:"",author:"",title:"",description:"",price:""};for(let t in a){let n=e.querySelector(`[data-book-info = "${t}"]`);n&&"id"===t?a[t]=n.dataset.bookid:n&&"thumbnail"===t?a[t]=n.getAttribute("src"):n&&(a[t]=n.textContent)}var n,r,s;t.target.classList.contains("btn_in-cart")?(o(e,"id"),r=t.target,s=localStorage.length,r.innerHTML="Buy now",r.classList.remove("btn_in-cart"),0===s&&c.classList.add("cart-btn__count_empty"),c.textContent=s):(n=a,localStorage.getItem(`${n.id}`)||localStorage.setItem(`${n.id}`,JSON.stringify(n)),i(t.target,localStorage.length))}))})(d)},l=document.getElementById("btn-load"),d=document.querySelectorAll(".categories__item"),u="https://www.googleapis.com/books/v1/volumes",g={category:"Architecture",startIndex:0,maxResults:6,langRestrict:"en"},m=t=>{let e=document.querySelector(".categories__item_selected").dataset.category;return g.category=e,!0===t&&(g.startIndex=0),g},p=(t,e,a,n)=>{let o=`${t}?q="subject:${g.category}"&AIzaSyB7D4Uic0eTPc-0H3yYfiBbZ3VDM5k6sgc&printType=books&startIndex=${g.startIndex}&maxResults=${g.maxResults}&langRestrict=${g.langRestrict}`;fetch(o).then((t=>t.json())).then((t=>{a(t,n)})).catch((t=>console.log(t.message)))};var v;d.forEach((t=>t.addEventListener("click",(e=>{e.preventDefault(),(t=>{let e=t;document.querySelector(".categories__item_selected").classList.remove("categories__item_selected"),e.classList.add("categories__item_selected")})(t),m(!0),p(u,0,s,!0)})))),l.addEventListener("click",(()=>{m().startIndex+=6,p(u,0,s,!1)})),v=localStorage.length,localStorage.length&&(c.classList.remove("cart-btn__count_empty"),c.textContent=v),p(u,0,s,!1);let f=[{url:t.p+"c0c7ea9634c7a88c22d5.png"},{url:t.p+"579ee7cfd158848187a3.png"},{url:t.p+"203132e33aa6a0bf0404.png"}];let _={titles:!1,dots:!0,autoplay:!0,autoplayInterval:5e3};document.addEventListener("DOMContentLoaded",(function(){!function(t){if(!f||!f.length)return;t=t||{titles:!0,dots:!0,autoplay:!1};let e=document.querySelector(".slider__images"),a=document.querySelector(".slider__dots");function n(n){e.querySelector(".active").classList.remove("active"),e.querySelector(".n"+n).classList.add("active"),t.dots&&(a.querySelector(".active").classList.remove("active"),a.querySelector(".n"+n).classList.add("active")),t.titles&&function(t){f[t].title&&(e.querySelector(".slider__images-title").innerText=f[t].title)}(n)}f.forEach(((t,a)=>{let n=`<div class="image n${a} ${0===a?"active":""}" style="background-image:url(${f[a].url})" data-index="${a}"></div>`;e.innerHTML+=n})),t.dots&&(f.forEach(((t,e)=>{let n=`<div class="slider__dots-item n${e} ${0===e?"active":""}" data-index="${e}"></div>`;a.innerHTML+=n})),a.querySelectorAll(".slider__dots-item").forEach((t=>{t.addEventListener("click",(t=>{n(t.target.dataset.index)}))}))),t.titles&&function(){let t=`<div class="slider__images-title">${f[0].title}</div>`;e.innerHTML+=t}(),t.autoplay&&setInterval((()=>{let t=+e.querySelector(".active").dataset.index;n(t===f.length-1?0:t+1)}),t.autoplayInterval)}(_)}))})();
//# sourceMappingURL=main.js.map