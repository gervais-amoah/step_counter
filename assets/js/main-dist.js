!function(){var t=[,function(){const t=d3.select("svg.today").selectAll("g").data(todayData).enter().append("g").attr("transform",((t,a)=>`translate(${36*a} ,0)`)),a=d3.scaleLinear().domain([0,2e3]).range([1,112]),e=d3.format("02");t.append("rect").attr("x",0).attr("y",10).attr("width",24).attr("height",120).attr("class","transparent"),t.append("rect").attr("x",0).attr("y",130).attr("width",24).attr("height",1).transition().delay(((t,a)=>20*a)).duration(300).attr("y",(t=>130-a(t))).attr("height",(t=>a(t))),t.append("text").attr("x",12).attr("y",150).attr("class","hours").text(((t,a)=>e(a))),t.append("text").attr("x",12).attr("y",((t,e)=>120-a(t))).attr("class","steps").text((t=>t))},function(){const t=d3.select("svg.month"),a=(t.selectAll("circle"),t.selectAll("g").data(monthData).enter().append("g"));a.attr("transform",((t,a)=>`translate(${a%7*120+60}, ${150*Math.floor(a/7)+60})`));const e=d3.scaleSqrt().domain([0,3e4]).range([1,50]),r=d3.format(",.0f");a.append("circle").attr("cx",0).attr("cy",0).attr("r",e(1e4)).attr("class","ring"),a.append("circle").attr("cx",0).attr("cy",0).attr("r",e(2e4)).attr("class","ring"),a.append("circle").attr("cx",0).attr("cy",0).attr("r",5).attr("class","actual").transition().duration(250).delay(((t,a)=>50*a)).ease(d3.easeCubicIn).attr("r",((t,a)=>e(t))),a.append("text").attr("class","day").attr("x",0).attr("y",70).text(((t,a)=>a+1)),a.append("text").attr("class","steps").attr("x",0).attr("y",70).text((t=>r(t)))},function(){const t=d3.format(",.0f");d3.select("p.worst-day").text(t(d3.min(monthData))+" steps"),d3.select("p.average-day").text(t(d3.mean(monthData))+" steps"),d3.select("p.best-day").text(t(d3.max(monthData))+" steps"),d3.select("p.total-month").text(t(d3.sum(monthData))+" steps"),d3.select("p.total-day").text(t(d3.sum(todayData))+" steps"),d3.select("p.difference").text(t(d3.max(monthData)-d3.min(monthData))+" steps")}],a={};function e(r){var n=a[r];if(void 0!==n)return n.exports;var s=a[r]={exports:{}};return t[r](s,s.exports,e),s.exports}e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,{a:a}),a},e.d=function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};!function(){"use strict";e.r(r);e(1),e(2),e(3)}()}();