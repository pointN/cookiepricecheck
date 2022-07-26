setInterval(
  function(){
    if(Game.Achievements['Third-party'].won==0){
      Game.Win('Third-party');
    }
    if(Game.Objects.Bank.minigameLoaded){
      let rgAry = ["#ff0000","#ff2b2b","#ff5555","#ff8080","#ffaaaa","#ffd5d5","#ffeaea","#fff4f4","#ffffff","#fafff4","#f4ffea","#eaffd5","#d5ffaa","#bfff80","#aaff55","#95ff2b","#80ff00"];
      for(let [key,val] of Object.entries(Game.Objects.Bank.minigame.goods)){
        let price=val.val;
        let center=10+val.id*10+Game.Objects.Bank.level-1;
        let left=center/2;
        let right=center*2;
        if(center < price){
          let d=Math.min(8,Math.floor(8*(price-center)/(right-center)));
          val.valL.style.color=rgAry[8+d];
        }
        else if(price < center){
          let d=Math.min(8,Math.floor(8*(center-price)/(center-left)));
          val.valL.style.color=rgAry[8-d];
        }

        if(val.stock!==0){
          val.stockBoxL.style.color = "#ffff00";
        }
        else{
          val.stockBoxL.style.color = "#ffffffb3";
        }
      }
    }
  },
  1000
);
