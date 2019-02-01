const newObj = {
    newList : [
        {
            name: 'George'
        },
        {
            name: 'Timothy'
        },
        {
            name: 'CJ'
        }
    ],
    secondList : [
        [
            {
                material: 'Gold'
            },
            {
                material: 'Silver'
            }
        ], 
        [
            {
                thirdList: 
                    {
                            station1: 'ABC',
                            station2: 'NBC',
                            station3: 'FOX',
                            companyList: ['TEKsystems', 'Google', 'Apple']
                   }
            }
        ] 
    ]
};

console.log(newObj.newList[0].name);
console.log(newObj.secondList[0][0].material);
console.log(newObj.secondList[1][0].thirdList.station1);
console.log(newObj.secondList[1][0].thirdList.companyList[0]);
