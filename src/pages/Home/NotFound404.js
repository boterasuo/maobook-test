import React from 'react';
import Logo from "../../img/LOGO_no_word.svg";
import NotFoundWord from "../../img/404/NotFound_word.svg";
import NotFoundImg from "../../img/404/NotFound_404.svg";
import ImgWord404 from "../../img/404/img_word_404.svg";
import "./NotFound404.scss";

function NotFound404(props) {
  return (
    <div className="main-content ">
    <div className="login-space-section">
      <div className="container">
          <div className="row position-relative">
              {/* 排版用空白區塊 */}
              <div className="col-lg-5 d-none d-lg-block"></div>
              {/* 右側區塊 */}
              <div className="col-lg-4">
                {/* 404 圖 */}
                <div className="not-found-img">
                  <img alt="" className="img-fluid" src={NotFoundImg}/>
                </div>                
                <h5 className="text-secondary text-center py-5 not-found-h5">
                頁面好像出錯了<br/>請重新整理再試試</h5>                
              </div>
              <div className="col-lg-3">
                
              </div>
          </div>
      </div>
        
    </div>
    <div className='bg-primary position-relative login-section'>       
        <div className="container"> 
            {/* logo 大圖  */}
            <div className="login-logo-noword position-absolute">
                <img alt="" className="img-fluid" src={Logo}/>
            </div>
            {/* MEO橫條字圖 */}
            <div className="position-absolute d-none d-lg-block img-meo-word">
                <img alt="" className="img-fluid" src={ImgWord404}/>
            </div>
            {/* NotFound 字 */}
            <div className="d-none d-lg-block position-absolute not-found-word">
                  <img alt="" className="img-fluid" src={NotFoundWord}/>
                </div>
            <div className="row">
                {/* 排版用區塊 */}
                <div className="col-lg-6"></div>
                {/* 右方第三方登入區塊 */}
                <div className="col-lg-4">                    
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </div>
  </div>
  )
}


export default NotFound404
