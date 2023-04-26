var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "陳晞",
          cover:
            "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
          address: "生日:87 /12 /14",
          tel: "星座: 射手座",
          opentime: "學號: 406730845",
          title_url: "https://www.facebook.com/IlluminationBooks/",
          bgimage: ""
        },
        {
            title: "樂觀",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "可能是因為射手座的關係",
            tel: "對於不開心的事很快就忘了",
            opentime: "沒有什麼事是過不去的",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "隨和",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "可以接受大部分的建議",
            tel: "沒什麼太多的意見",
            opentime: "很好相處",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          }
      ],      
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                
                type: "fraction",
            },
        })     

        }
  });