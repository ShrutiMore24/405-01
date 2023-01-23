
   
 // ***Add languages array in veriable and use flat method to 2D array convert into 1D array***************************************************

 let languagesArray=countries_data.map((ele)=>{
    return ele.languages;
})
languagesArray=languagesArray.flat();
// console.log(languagesArray);

// ******Create empaty object and store the languages and this count*****************************************************

const objlanguagesCount={};
languagesArray.map((a)=>{
    objlanguagesCount[a]=(objlanguagesCount[a]|| 0)+1
})
// console.log(objlanguagesCount);

// ****The object convert into array using entries method*******************************************************

const arraylanguagesCount=Object.entries(objlanguagesCount);
// console.log(arraylanguagesCount,'arraylanguagesCount');

// *******sort the array at language and this count****************************************************

const sortLanguageArray=arraylanguagesCount.sort((a,b)=>{
    return b[1]-a[1];

})
// console.log(sortLanguageArray,'sortLanguages');

 // *****Calculate total language in the world******************************************************

const totalLanguages=sortLanguageArray.length-1;
// console.log(totalLanguages);
// console.log(sortLanguageArray[2][1]);




function languages() {
    let outputDiv=document.getElementById('output-div');
    outputDiv.innerHTML=" ";
    // ***********************************************************
    let outputHeading=document.createElement('h4');
    outputHeading.innerText='10 most spoken languages in the world';
    outputDiv.appendChild(outputHeading);
    // ***********************************************************

    for(let i=0;i<10;i++){
        let collectDiv=document.createElement('div');
    collectDiv.classList.add("collectDiv");
    // ***********************************************************

    let languagesName=document.createElement('p');
    languagesName.innerText=sortLanguageArray[i][0];
    collectDiv.appendChild(languagesName);
    outputDiv.appendChild(collectDiv);
    //*********************************************************** */
    let percentagediv=document.createElement('div');
    let colordiv=document.createElement('div');
    let percentage=(sortLanguageArray[i][1]/totalLanguages)*100;
    colordiv.style.width=`${percentage}%`;
    colordiv.style.height="100%"
    colordiv.style.backgroundColor='orange';
    percentagediv.classList.add('percentagediv');
    percentagediv.appendChild(colordiv);
    collectDiv.appendChild(percentagediv);
    //*********************************************************** */
    let languagesCount=document.createElement('p');
    languagesCount.innerText=sortLanguageArray[i][1];
    collectDiv.appendChild(languagesCount);
    }
}