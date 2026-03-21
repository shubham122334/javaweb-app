const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  //foreach

//   for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
//   }


//   companies.forEach((company)=>{
//     console.log(company)
//   })

  //filter 

//   let canDrink=[];
//   for(let i=0;i<companies.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
//   }

//   console.log(canDrink)

//   let canDrink=ages.filter(age=>{
//     if(age>=21)
//         return true;
//   })

//   let canDrink=ages.filter(age => age>=21);
//   console.log(canDrink);

  //filter retail company

//   const retailcompany=companies.filter((company)=>{
//     if(company.category==='Retail')
//         return true
//   })

//   console.log(retailcompany);

//   const eightesCompanies=companies.filter(company => company.start>=1980 && company.start<1990)

//   console.log(eightesCompanies)

//   const lasted10Year=companies.filter(company=>(company.end - company.start >=10));

//   console.log(lasted10Year)

  //create arry of company name

//   const companyName=companies.map(company=> `${company.name} [ ${company.start} - ${company.end}]`)
//   console.log(companyName)

const ageP2=ages
.map(age=>Math.sqrt(age).toFixed(2))
.map(age => age*2)

console.log(ageP2);

const sorteedComapny=companies.sort(function(C1,C2){
    if(C1.start > C2.start)
        return
    else
    return -1;
});

console.log(sorteedComapny)

const sortAge=ages.sort((a,b)=> a-b)

console.log(sortAge)

const totalAge=ages.reduce((total,age)=>total+age,0)

console.log(totalAge);

const totalYear=companies.reduce((total,company)=>total+(company.end-company.start),0)

console.log(totalYear)
