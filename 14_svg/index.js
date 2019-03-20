/*
Kendrick Liang
SoftDev2 pd6
K #14: Learning to Swim
2019-03-21
*/
var array = [42]; //returns (1) [...] 0: 42 length: 1 <prototype>: Array [] 
var selection = d3.select("body"); //returns (1) [...] 0: Array [ body ] length: 1 <prototype>: Array [] 
d3.selectAll("h2"); //returns (1) [...] 0: (9) [...]  0: <h2>  1: <h2>  2: <h2>  3: <h2>  4: <h2>  5: <h2>  6: <h2>  7: <h2>  8: <h2>  length: 9  parentNode: <html class="ocks-org do-not-copy">  <prototype>: Array [] length: 1 <prototype>: Array [] 
d3.selectAll("tr").selectAll("td"); //returns (4) [...] 0: (4) [...]  0: <td>  1: <td>  2: <td>  3: <td>  length: 4  parentNode: <tr>  <prototype>: Array [] 1: (4) [...]  0: <td>  1: <td>  2: <td>  3: <td>  length: 4  parentNode: <tr>  <prototype>: Array [] 2: (4) [...]  0: <td>  1: <td>  2: <td>  3: <td>  length: 4  parentNode: <tr>  <prototype>: Array [] 3: (4) [...]  0: <td>  1: <td>  2: <td>  3: <td>  length: 4  parentNode: <tr>  <prototype>: Array [] length: 4 <prototype>: Array [] 
d3.selectAll("tr").selectAll("td").selectAll("span");//returns (16) [...] 0: Array [ span ] 1: Array [ span ] 2: Array [ span ] 3: Array [ span ] 4: Array [ span ] 5: Array [ span ] 6: Array [ span ] 7: Array [ span ] 8: Array [ span ] 9: Array [ span ] 10: Array [ span ] 11: Array [ span ] 12: Array [ span ] 13: Array [ span ] 14: Array [ span ] 15: Array [ span ] length: 16 <prototype>: Array [] 
d3.selectAll("section"); //returns (1) [...] 0: (4) [...]  0: <section>  1: <section>  2: <section>  3: <section>  length: 4  parentNode: <html class="ocks-org do-not-copy">  <prototype>: Array [] length: 1 <prototype>: Array [] 
d3.selectAll("section").append("p"); //returns (1) [...] 0: (4) [...]  0: <p>  1: <p>  2: <p>  3: <p>  length: 4  parentNode: <html class="ocks-org do-not-copy">  <prototype>: Array [] length: 1 <prototype>: Array [] 
d3.selectAll("section").select("aside"); //returns (1) [...] 0: (4) [...]  0: null  1: null  2: <aside>  3: <aside>  length: 4  parentNode: <html class="ocks-org do-not-copy">  <prototype>: Array [] length: 1 <prototype>: Array [] 
document.body.__data__ = 42; //returns 42
d3.select("body").datum(42); //returns (1) [...] 0: Array [ body ] length: 1 <prototype>: Array [] 
d3.select("body").datum(42).append("h1"); //returns (1) [...] 0: Array [ h1 ] length: 1 <prototype>: Array [] 
var numbers = [4, 5, 18, 23, 42];//returns Array(5) [ 4, 5, 18, 23, 42 ] 
var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
	       ];//returns (5) [...] 0: Object { name: "A", frequency: 0.08167 } 1: Object { name: "B", frequency: 0.01492 } 2: Object { name: "C", frequency: 0.0278 } 3: Object { name: "D", frequency: 0.04253 } 4: Object { name: "E", frequency: 0.12702 } length: 5 <prototype>: Array [] 
var matrix = [
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15]
	      ];//returns (4) [...] 0: (4) [...]  0: 0  1: 1  2: 2  3: 3  length: 4  <prototype>: Array [] 1: (4) [...]  0: 4  1: 5  2: 6  3: 7  length: 4  <prototype>: Array [] 2: (4) [...]  0: 8  1: 9  2: 10  3: 11  length: 4  <prototype>: Array [] 3: (4) [...]  0: 12  1: 13  2: 14  3: 15  length: 4  <prototype>: Array [] length: 4 <prototype>: Array [] 
d3.selectAll("div").data(numbers); //returns (1) [...] 0: (5) [...]  0: <div>  1: <div>  2: <div>  3: <div>  4: <div>  length: 5  parentNode: <html class="ocks-org do-not-copy">  <prototype>: Array [] enter: function enter() exit: function exit() length: 1 <prototype>: Array [] 
d3.selectAll("div").data(letters, name);//returns (1) [...] 0: Array(5) [ <5 empty slots> ] enter: function enter() exit: function exit() length: 1 <prototype>: Array [] 
var div = d3.selectAll("div").data(vowels, name);//returns (1) [...] 0: Array(5) [ <5 empty slots> ] enter: function enter() exit: function exit() length: 1 <prototype>: Array [] 
div.exit();//returns (1) [...] 0: (5) [...]  0: <div>  1: <div>  2: <div>  3: <div>  4: <div>  length: 5  parentNode: <html class="ocks-org do-not-copy">  <prototype>: Array [] length: 1 <prototype>: Array [] 
div.enter();//returns (1) [...] 0: (5) [...]  0: {...}   __data__: Object { name: "A", frequency: 0.08167 }   <prototype>: Object { ... }  1: {...}   __data__: Object { name: "E", frequency: 0.12702 }   <prototype>: Object { ... }  2: {...}   __data__: Object { name: "I", frequency: 0.06973 }   <prototype>: Object { ... }  3: {...}   __data__: Object { name: "O", frequency: 0.07507 }   <prototype>: Object { ... }  4: {...}   __data__: Object { name: "U", frequency: 0.02758 }   <prototype>: Object { ...  }  length: 5  parentNode: <html class="ocks-org do-not-copy">  update: Array(5) [ <5 empty slots> ]  <prototype>: Array [] length: 1 <prototype>: Array [] 
