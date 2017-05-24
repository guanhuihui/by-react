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

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	
      	</section>
      	<nav className="contorller-nav">
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
