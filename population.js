
// ****************collect data in array of object and sort to population wise*******************************************

const sortPopulation=countries_data.sort((a,b)=>{
    return b.population-a.population;
})
let totalCountries=sortPopulation.length;

// console.log(totalCountries);

// *************To find total population in all countries**********************************************

let totalPopulation=0;

// for(let i=0;i<sortPopulation.length;i++){
//     total=total+sortPopulation[i].population;
// }
sortPopulation.map((add)=>{
    totalPopulation=totalPopulation+add.population;
})
// console.log(totalPopulation);

// ****Add the world total population in the array at first index using unshift method *************************************************


const worlddata={name:"World",population:totalPopulation};
// console.log(worlddata);
sortPopulation.unshift(worlddata);
// console.log(sortPopulation);

// *********add sentence on heading **************************************************


let heading=document.getElementById('headingdiv-p');
heading.innerText=`Currently,we have ${totalCountries} countries`;
heading.style.color='black'

//**********it's block show out put on front page at refreshing site************************************************ */


let outputDiv=document.getElementById('output-div');   // Target the out put div
    // outputDiv.innerHTML=" ";

let outputHeading=document.createElement('h4');
outputHeading.innerText='10 most populated countries in the world';
outputDiv.appendChild(outputHeading);
for(let i=0;i<11;i++){
    // top10Countries.push(sortPopulation[i]);
    let collectDiv=document.createElement('div');
    collectDiv.classList.add("collectDiv");
    // ****************************************************
    let countrieName=document.createElement('p')
    countrieName.innerText=sortPopulation[i].name;
    collectDiv.appendChild(countrieName);
    outputDiv.appendChild(collectDiv);
    // *************************************************************
    let percentagediv=document.createElement('div');
    let colordiv=document.createElement('div');
    let percentage=(sortPopulation[i].population/totalPopulation)*100;
    // console.log(percentage);
    colordiv.style.width=`${percentage}%`;
    colordiv.style.height="100%"
    colordiv.style.backgroundColor='orange';
    percentagediv.classList.add('percentagediv');
    percentagediv.appendChild(colordiv);
    collectDiv.appendChild(percentagediv);
    // ***************************************************
    let countriePopulation=document.createElement('p');
    countriePopulation.innerText=sortPopulation[i].population;
    collectDiv.appendChild(countriePopulation);

}



//*********************************************************** */
function population() {
   
    let outputDiv=document.getElementById('output-div');
    outputDiv.innerHTML=" ";
    
// countries_data.map((ele)=>{
//     console.log(ele.population);
// })
// const top10Countries=[];
let outputHeading=document.createElement('h4');
outputHeading.innerText='10 most populated countries in the world';
outputDiv.appendChild(outputHeading);
for(let i=0;i<11;i++){
    // top10Countries.push(sortPopulation[i]);
    let collectDiv=document.createElement('div');
    collectDiv.classList.add("collectDiv");
    // ****************************************************
    let countrieName=document.createElement('p')
    countrieName.innerText=sortPopulation[i].name;
    collectDiv.appendChild(countrieName);
    outputDiv.appendChild(collectDiv);
    // *************************************************************
    let percentagediv=document.createElement('div');
    let colordiv=document.createElement('div');
    let percentage=(sortPopulation[i].population/totalPopulation)*100;
    // console.log(percentage);
    colordiv.style.width=`${percentage}%`;
    colordiv.style.height="100%";
    colordiv.style.backgroundColor='orange';
    percentagediv.classList.add('percentagediv');
    percentagediv.appendChild(colordiv);
    collectDiv.appendChild(percentagediv);
    // ***************************************************
    let countriePopulation=document.createElement('p');
    countriePopulation.innerText=sortPopulation[i].population;
    collectDiv.appendChild(countriePopulation);
}
// console.log(top10Countries);
}