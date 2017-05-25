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

class AppComponent extends React.Component {
  render() {
    var contorllerUnits = [],
        imgFigures = [];

        imageDatas.forEach((value, index) =>{

          console.log(value);
          imgFigures.push(<ImgFigure data = {value} key={'imgFigures'+index}/>);

        });



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
}

AppComponent.defaultProps = {
};

export default AppComponent;
