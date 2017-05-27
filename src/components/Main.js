
require('styles/App.css');

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';


// let arr = (function genImageURL() {
//   var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

//   // Main
//   initHeader();
//   addListeners();

//   function initHeader() {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       target = {x: 0, y: height};

//       largeHeader = document.getElementById('large-header');
//       largeHeader.style.height = height+'px';

//       canvas = document.getElementById('demo-canvas');
//       canvas.width = width;
//       canvas.height = height;
//       ctx = canvas.getContext('2d');

//       // create particles
//       circles = [];
//       for(var x = 0; x < width*0.5; x++) {
//           var c = new Circle();
//           circles.push(c);
//       }
//       animate();
//   }

//   // Event handling
//   function addListeners() {
//       window.addEventListener('scroll', scrollCheck);
//       window.addEventListener('resize', resize);
//   }

//   function scrollCheck() {
//       if(document.body.scrollTop > height) animateHeader = false;
//       else animateHeader = true;
//   }

//   function resize() {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       largeHeader.style.height = height+'px';
//       canvas.width = width;
//       canvas.height = height;
//   }

//   function animate() {
//       if(animateHeader) {
//           ctx.clearRect(0,0,width,height);
//           for(var i in circles) {
//               circles[i].draw();
//           }
//       }
//       requestAnimationFrame(animate);
//   }

//   // Canvas manipulation
//   function Circle() {
//       var _this = this;

//       // constructor
//       (function() {
//           _this.pos = {};
//           init();
//           console.log(_this);
//       })();

//       function init() {
//           _this.pos.x = Math.random()*width;
//           _this.pos.y = height+Math.random()*100;
//           _this.alpha = 0.1+Math.random()*0.3;
//           _this.scale = 0.1+Math.random()*0.3;
//           _this.velocity = Math.random();
//       }

//       this.draw = function() {
//           if(_this.alpha <= 0) {
//               init();
//           }
//           _this.pos.y -= _this.velocity;
//           _this.alpha -= 0.0005;
//           ctx.beginPath();
//           ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
//           ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
//           ctx.fill();
//       };
//   }

//   return console.log(11111111111);
// })();


var GalleryByReactApp = React.createClass({
  getInitialState: function() {

    // windowWidth: window.innerWidth
    return {
      width:window.innerWidth,
      height:window.innerHeight,
      largeHeader:window.innerHeight,
      animateHeader:true
     


    };
  },

  handleResize: function(e) {
   // this.setState({windowWidth: window.innerWidth});


   this.setState({windowWidth: window.innerWidth});

  },
  scrollCheck:function(e){
    //this.setState({windowWidth: window.innerWidth});
    let Sets = this.state;
    document.body.scrollTop > Sets.height ? Sets.animateHeader = false: Sets.animateHeader = true;
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.scrollCheck);

    this.updateCanvas();
  },
  updateCanvas() {
        
  },   
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.scrollCheck);



  },

  render: function() {
    //return <div>Current window width: {this.state.windowWidth}</div>;

    // let ctxs = ctx.getContext('2d');

     return (
        <div className="container demo-2">
          <div className="content">
            <div className="large-header" style={{height:this.state.height}} >
              <div className="demo-div" style={{width:this.state.width,height:this.state.height}}></div>
              <span className="main-title"><a href="2.html">Spirit</a></span>
             
            </div>
          </div>
        </div>
      );
  }
});

export default GalleryByReactApp;