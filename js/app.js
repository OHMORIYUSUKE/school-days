b2.style.visibility ="hidden";
b3.style.visibility ="hidden";

window.alert("！途中音声が流れます。！\n音量に注意してください。");
window.alert("表示されているボタンを押して進んでね");

document.getElementById('main').style.background=' rgb(255, 255, 255)';


/****************************************************************************************************************** */
let i=0; 
function test1(){ 
    if(i===0){
      test.insertAdjacentHTML('beforeend','<p class="kakko">ごめん』</p>');
      i++;
    }
    else if(i<12 && i>0){
    i++;
    test.insertAdjacentHTML('beforeend','<p class="kakko">』</p>');
    }else if(i===12){
      test.insertAdjacentHTML('beforeend','<p class="end">さよなら</p><br>');

        // javascriptでid=main領域にCSSを付与
        //document.getElementById("main").classList.add("addColor");
        document.getElementById('main').style.background=' #203672';
        b2.style.visibility ="visible";
        b1.style.visibility ="hidden";
      i++;
    }
  }

  /**************************************************************************************************************** */

  let j=0; 
  function test2(){
    if(j===0){
    document.getElementById('main').style.background='#790000';
    j++;
    }else if(j===1){
      //document.body.style.backgroundImage='url(img/makoto.png)';
      $(function() {
        $("body").css({
            "background-image": "url(img/makoto.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-attachment": "fixed",
            "background-color": "rgba(255, 255, 255, 0)",
          "background-blend-mode": "hard-light",
        });
      });

      $(function() {
        $(".end").css({
          "font-size": "25pt",
          "font-family": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
          "color": "rgb(255, 0, 0)",
        });
      });

      j++;
    }else if(j===2){
      $(function() {
        $("body").css({
            "background-image": "url(img/makoto.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-attachment": "fixed",
            "background-color": "rgba(2, 0, 112, 0.973)",
          "background-blend-mode": "hard-light",
        });
      });

      j++;
    }else if(j===3){
      $(function() {
        $("body").css({
            "background-image": "url(img/makoto.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-attachment": "fixed",
            "background-color": " rgba(17, 0, 255, 0.973)",
          "background-blend-mode": "hard-light",
        });
      });

      j++;
    }else if(j===4){
      $(function() {
        $("body").css({
            "background-image": "url(img/makoto.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-attachment": "fixed",
            "background-color": "rgba(245, 8, 8, 0.973)",
          "background-blend-mode": "hard-light",
        });
      });

      b3.style.visibility ="visible";
      b2.style.visibility ="hidden";

      j++;
    }
  }

 /*************************************************************************************** */

 let k=0;
 function test3(){
  if(k===0){

    document.getElementById( 'sound-file-3' ).play() ;

    $(function() {
      $(".kakko").css({
        "color": "rgb(255, 0, 0)",
      });
    });

    $(function() {
      $("body").css({
          "background-image": "url(img/makoto_die1.png)",
          "background-size": "cover",
          "background-position": "center",
          "background-attachment": "fixed",
          "background-color": "rgba(2, 0, 112, 0.973)",
        "background-blend-mode": "hard-light",
      });
    });

    k++;
  }else if(k===1){
    $(function() {
      $("body").css({
          "background-image": "url(img/makoto_die2.png)",
          "background-size": "cover",
          "background-position": "center",
          "background-attachment": "fixed",
          "background-color": " rgba(2, 0, 112, 0.973)",
        "background-blend-mode": "hard-light",
      });
    });

    // [ID:sound-file]の音声ファイルを再生[play()]する
    document.getElementById( 'sound-file' ).play() ;
    
    k++;
  }else if(k===2){

    b3.style.visibility ="hidden";

    document.getElementById( 'sound-file-2' ).play() ;

    var speed = 4.5; //時間あたりに移動するpx量です。デフォルトでは1pxにしていますが、自由に変えてください
    var interval = 100; //移動する間隔です。デフォルトでは0.1秒おきにしていますが、自由に変えてください
    var scrollTop = document.body.scrollTop;
    setInterval(function() {
    var scroll = scrollTop + speed;
    window.scrollBy(0, scroll)
    },interval);

    $(function() {
      $("body").css({
          "background-image": "url(img/makoto_die3.gif)",
          "background-size": "cover",
          "background-position": "center",
          "background-attachment": "fixed",
          "background-color": " rgba(2, 0, 112, 0.973)",
        "background-blend-mode": "hard-light",
      });
    });

    
    const kasi=['悲しみの向こうへと','辿り着けるなら','僕はもう要らないよ','ぬくもりも明日も',
                '<br>','<br>','<br>',
                '静寂の闇に','舞い降りた夢は','Who...?','束の間 零れた 頬の光',
                'Why...?','脆すぎた世界 留める術を知らずに','ただ僕は願ってた',
                'そう　忘却を','悲しみの向こうへと','辿り着けるなら','僕はもうこれ以上',
                '何も感じなくていい','・・・','<br>','<br>'
              ]

    for(let i=0;i<kasi.length;i++){
    test.insertAdjacentHTML('beforeend','<h4 class="kasi">'+kasi[i]+'</h4><br>');
    }

    const ps=['ここまで見てくれてありがとうございます','javascript・css・htmlを学び始めて間もないので',
              '今はこれが限界ですが','これからも勉強して','楽しんでもらえるものを作りたいです！'
              ]

              for(let j=0;j<ps.length;j++){
                test.insertAdjacentHTML('beforeend','<h4 class="ps">'+ps[j]+'</h4>');
              }
              
              test.insertAdjacentHTML('beforeend','<a class="button" onclick="test3()" href="#index"><input type="button" id="b4" value="TOPへ" onclick="test4()"></a>');
              k++;
  }else if(k===3){
   
     $('a').remove()
     $('h4').remove()
     $('br').remove()
     $('p').remove()

     $(function() {
      $("body").css({
          "background-image": "url(img/sekai.png)",
          "background-size": "cover",
          "background-position": "center",
          "background-attachment": "fixed",
          "background-color": " rgba(255, 255, 255, 0)",
        "background-blend-mode": "hard-light",
      });
    });

     test.insertAdjacentHTML('beforeend','<h4 class="last">西園寺 世界<br>しか勝たん</h4>');
 
  }
 }
