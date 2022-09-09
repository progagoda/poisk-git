
export const cityArr=[
    {
        city1:'Вильнюс',
        city2:'Брест',
        distance:531
    },
    {
        city1:'Витебск',
        city2:'Брест',
        distance:648   
    },
    {
        city1:'Витебск',
        city2:'Вильнюс',
        distance:360  
    },
    {
        city1:'Воронеж',
        city2:'Витебск',
        distance:869 
    },
    {
        city1:'Воронеж',
        city2:'Волгоград',
        distance:581 
    },
    {
        city1:'Волгоград',
        city2:'Витебск',
        distance:1455 
    },
    {
        city1:'Витебск',
        city2:'Ниж.Новгород',
        distance:911 
    },
    {
        city1:'Вильнюс',
        city2:'Даугавпилс',
        distance:211
    },
    {
        city1:'Калининград',
        city2:'Брест',
        distance:699 
    },
    {
        city1:'Каунас',
        city2:'Вильнюс',
        distance:102 
    },
    {
        city1:'Киев',
        city2:'Вильнюс',
        distance:734 
    },
    {
        city1:'Киев',
        city2:'Житомир',
        distance:131 
    },
    {
        city1:'Житомир',
        city2:'Донецк',
        distance:863 
    },
    {
        city1:'Житомир',
        city2:'Донецк',
        distance:863 
    },
    {
        city1:'Житомир',
        city2:'Волгоград',
        distance:1493 
    },
    {
        city1:'Кишенев',
        city2:'Киев',
        distance:467 
    },
    {
        city1:'Кишенев',
        city2:'Киев',
        distance:467 
    },
    {
        city1:'Кишенев',
        city2:'Донецк',
        distance:812 
    },
    {
        city1:'С.Петербург',
        city2:'Витебск',
        distance:602 
    },
    {
        city1:'С.Петербург',
        city2:'Калининград',
        distance:739 
    },
    {
        city1:'С.Петербург',
        city2:'Рига',
        distance:641 
    },
    {
        city1:'Москва',
        city2:'Казань',
        distance:815 
    },
    {
        city1:'Москва',
        city2:'Ниж.Новгород',
        distance:411 
    },
    {
        city1:'Москва',
        city2:'Минск',
        distance:690 
    },
    {
        city1:'Москва',
        city2:'Донецк',
        distance:1084 
    },
    {
        city1:'Москва',
        city2:'С.Петербург',
        distance:664 
    },
    {
        city1:'Мурманск',
        city2:'С.Петербург',
        distance:1412 
    },
    {
        city1:'Мурманск',
        city2:'Минск',
        distance:2238 
    },
    {
        city1:'Орел',
        city2:'Витебск',
        distance:522 
    },
    {
        city1:'Орел',
        city2:'Донецк',
        distance:709 
    },
    {
        city1:'Орел',
        city2:'Москва',
        distance:368 
    },
    {
        city1:'Одесса',
        city2:'Киев',
        distance:487 
    },
    {
        city1:'Рига',
        city2:'Каунас',
        distance:267 
    },
    {
        city1:'Таллинн',
        city2:'Рига',
        distance:308 
    },
    {
        city1:'Харьков',
        city2:'Киев',
        distance:471 
    },
    {
        city1:'Харьков',
        city2:'Симферополь',
        distance:639
    },
    {
        city1:'Ярославль',
        city2:'Воронеж',
        distance:739
    },
    {
        city1:'Ярославль',
        city2:'Минск',
        distance:940
    },
    {
        city1:'Уфа',
        city2:'Казань',
        distance:525
    },
    {
        city1:'Уфа',
        city2:'Самара',
        distance:461
    },
]
export const cityArrGraph={  
    nodes: [
        {id:1, label:"Вильнюс", title:""},
        {id:2, label:"Брест", title:""},
        {id:3, label:"Витебск", title:""},
        {id:4, label:"Воронеж", title:""},
        {id:5, label:"Волгоград", title:""},
        {id:6, label:"Ниж.Новгород", title:""},
    ],
    edges:[
      {from:1,to:2 },
      {from:3,to:2 },
      {from:3,to:1 },
      {from: 4,to:3 },
      {from:4 ,to:5 },
      {from:5 ,to:3},
      {from:3 ,to:6},
    ] 
}
export const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

export const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };