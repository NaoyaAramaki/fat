/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

// 引数はHTMLのidと合わせる
window.addEventListener('load', function(){
  particlesJS('particles-js',{
    // パーティクルの設定
      "particles": {
        // シェイプの数
        "number": {
          // シェイプの数
          "value": 150,
          "density": {
            // 密度を変更する
            "enable": true,
            // 密集度
            "value_area": 800
          }
        },
        // 色
        "color": {
          "value": "#ff0000"
          // "value": ["#ff4444", "#ffcc00", "ff9999"]
        },
        // シェイプの形状
        "shape": {
          // シェイプの形(円)
          "type": "triangle",
          "stroke": {
            // 外線つけない
            "width": 0,
            // つける場合の線色
            "color": "#000000"
          },
          // typeがpolygon(多角形)の場合
          "polygon": {
            "nb_sides": 5
          },
          // typeがimageの場合
          "image": {
            // 画像の指定
            "src": "img/github.svg",
            // 画像の幅
            "width": 100,
            // 画像の高さ
            "height": 100
          }
        },
        // シェイプの透明度
        "opacity": {
          // 不透明度
          "value": 0.2,
          // 透明度をランダムにしない
          "random": false,
          // randomがtrueの場合
          "anim": {
            // 透明度のアニメーションをしない
            "enable": false,
            // アニメーションスピード
            "speed": 1,
            // 透明度の最小値
            "opacity_min": 0.1,
            // 各シェイプを同時に動かさない
            "sync": false
          }
        },
        // シェイプの大きさ
        "size": {
          // 大きさ
          "value": 5,
          // 大きさをランダムにする falseで均一
          "random": true,
          // randomがtrueの場合
          "anim": {
            // シェイプの大きさをアニメーションしない
            "enable": false,
            // アニメーションのスピード
            "speed": 40,
            // サイズの最小値
            "size_min": 1,
            // 各シェイプを同時に動かさない
            "sync": false
          }
        },
        // シェイプ間を結ぶ線
        "line_linked": {
          // 線をつける
          "enable": true,
          // 繋がりの数
          "distance": 150,
          // 線の色
          "color": "#ff0000",
          // 線の不透明度
          "opacity": 0.2,
          // 線の太さ
          "width": 1
        },
        // シェイプの動き
        "move": {
          // 動きを付ける
          "enable": true,
          // シェイプが動くスピード数値が大きいと早い
          "speed": 4,
          // 動きの方向(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-left)
          "direction": "none",
          "random": false,
          // 動きを動きを止めるか否か
          "straight": false,
          // 外枠に達した際のシェイプの動き
          // bounce: 跳ね返る　out: フレームアウト
          "out_mode": "out",
          // シェイプを引き寄せる
          "attract": {
            // 引き寄せない
            "enable": false,
            // 横軸の指定
            "rotateX": 600,
            // 縦軸の指定
            "rotateY": 1200
          }
        }
      },
      // 相互作用
      "interactivity": {
        "detect_on": "canvas",
        // カーソルを乗せた時の動き
        "events": {
          "onhover": {
            // 無効
            "enable": false,
            // enableがtrueの場合の動き
            // 下のmodesのいずれかの名前入れるとその動きが発動
            "mode": "repulse"
          },
          // クリックしたときの動き
          "onclick": {
            // 無効
            "enable": false,
            // enableがtrueの場合の動き
            // 下のmodesのいずれかの名前入れるとその動きが発動
            "mode": "push"
          },
          // リサイズしたとき拡縮しない
          "resize": true
        },
        // 各モード設定した場合の動き
        "modes": {
          // シェイプとカーソルの間に線ができる
          "grab": {
            // カーソルからの反応距離
            "distance": 400,
            "line_linked": {
              // 線の不当明度
              "opacity": 1
            }
          },
          // シェイプが膨らむ
          "bubble": {
            // カーソルからの反応距離
            "distance": 400,
            // 膨らむ際の大きさ
            "size": 40,
            // 持続時間
            "duration": 2,
            // 透明度
            "opacity": 8,
            // 速度
            "speed": 3
          },
          // シェイプに触れるとカーソルから逃げる
          "repulse": {
            // カーソルからの反応距離
            "distance": 200
          },
          // シェイプを増やす(数)
          "push": {
            "particles_nb": 4
          },
          // シェイプを減らす(数)
          "remove": {
            "particles_nb": 2
          }
        }
      },
      // Retina Display(*高画素密度のディスプレイ)を対応する
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  );
});