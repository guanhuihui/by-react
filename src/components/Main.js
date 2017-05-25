require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关数据
let ImageDate = require('../data/imageDatas.json');

let ImageUrl = require('../images/yeoman.png');

//利用自执行函数，将图片名信息转成图片的url路径信息

let imageDatas = (function(ImageDateArr){

	for(var i = 0,j = ImageDateArr.length;i<j;i++){
		var singImageData = ImageDateArr[i];
		singImageData.imageUrl = require('../images/'+singImageData.fileName);
		ImageDateArr[i] = singImageData;
	}
	return ImageDateArr;

})(ImageDate);

var ImgFigure = React.createClass({
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.desc}</h2>
        </figcaption>
      </figure>
    )
  }
})

var GalleryByReactApp = React.createClass({
   Constant: {
    conterPos:{
      left:0,
      right:0
    },
    hPosRange: {//水平方向的取值范围
      leftSecX:[0,0],
      rightSecX:[0,0],
      y:[0,0]
    },
    vPosRange: {//垂直方向的取值范围
      x:[0,0],
      topY:[0,0]
    } 
  },
  rearrange:function(centerIndex) {

  },
  getInitialState:function(){
    return {
      imgsArrangeArr:[
       /* {
          pos:{
            left:0,
            top:0
          }
        }*/
      ]
    }
  },
  ComponentDidMount: function(){
    //拿到舞台的大小
    var stageDOM = this.refs.stage,
      stageW = stageDOM.scrollWidth,
      stageH = stageDOM.scrollHeight,
      halfStageW = Math.ceil(stageW / 2),
      halfStageH = Math.ceil(stageH / 2);

    //拿到imgFigure的大小
    // var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
    var imgFigureDOM = this.refs.imgFigure0.refs.figure,
      imgW = imgFigureDOM.scrollWidth,
      imgH = imgFigureDOM.scrollWidth,
      halfImgW = Math.ceil(imgW / 2),
      halfImgH = Math.ceil(imgH / 2);

    //计算中心图片的位置点
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH- halfImgH
    };

    //计算左侧，右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    //计算上侧区域图片排布位置的取值范围
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfStageW - imgW;
    this.Constant.vPosRange.x[1] = halfStageW;

    this.rearrange(0);

  },
  render: function() {
    var contorllerUnits = [],
        imgFigures = [];

         imageDatas.forEach(function (value, index) {

          imgFigures.push(<ImgFigure data = {value} key={'imgFigures'+index}/>);

        }.bind(this));


        return (
          <section className="stage">
          	<section className="img-sec">
          	   {imgFigures}
          	</section>
          	<nav className="contorller-nav">
              {contorllerUnits}
          	</nav>
          </section>
        );
  }
});

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;