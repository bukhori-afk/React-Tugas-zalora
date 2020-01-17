import React, {Component, Fragment} from 'react';


class App extends Component {
  render(){
    return (
      <Fragment>
        <div id="header">
        <div class="container">
          <a href="#"> <img src={require('../images/header_z.PNG')}/></a>
          <ul>
          
            <li><a href="index.html">WANITA</a></li>
            <li><a href="index.html">PRIA</a></li>
            <li><a href="index.html">ANAK-ANAK</a></li>
          </ul>

            <input 
              id="input"
              type="text"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cari Produk Fashion dan Merek"
            />
            
          <span id="iconcari">
            <i><img src={require('../images/search_30px.png')}/></i>
          </span>

          <a href="#"><img src={require('../images/header1.PNG')}/></a>
          <a href="#"><img src={require('../images/header2.PNG')}/></a>
          <a href="#"><img src={require('../images/header3.PNG')}/></a>

        </div>
      </div>
      <div id="wrapper">
        <div id="header2">
          <div id="left">
            <img src={require('../images/bar1.PNG')} />
            <a href="#">PRODUK ORIGINAL & TERJAMIN</a>
            <img src={require('../images/bar2.PNG')} />
            <a href="#">RIBUAN FASHION BRAND</a>
            <img src={require('../images/bar3.PNG')} />
            <a href="#">GRATIS PENGEMBALIAN</a>
            <img src={require('../images/bar4.PNG')} />
            <a href="#">PERTANYAAN?</a>
          </div>
          <div id="right">
            <a href="#"><img src={require('../images/diskon.PNG')}/></a>
          </div>
        </div>
        <div id="slider">
          <a href="#"><img src={require('../images/anak-anak2.gif')}/></a>
        </div>
        <div id="slider2">
          <a href="#"><img src={require('../images/logo-1.jpg')}/></a>
        </div>
        <div id="slider3">
          <a href="#"><img src={require('../images/bank.PNG')}/></a>
        </div>
        <div id="brands">
            <h1>Top Brands on Zalora</h1>
            
              <a href="#"><img src={require('../images/zalora.png')}        width="150px"/></a>
              <a href="#"><img src={require('../images/guess.png')}         width="120px"/></a>
              <a href="#"><img src={require('../images/nike.png')}          width="120px"/></a>
              <a href="#"><img src={require('../images/logo/raven.png')}    width="120px"/></a>
              <a href="#"><img src={require('../images/logo/river.png')}    width="140px"/></a>
              <a href="#"><img src={require('../images/levis.png')}                     /></a>
              <a href="#"><img src={require('../images/puma.png')}          width="140" /></a>
              <a href="#"><img src={require('../images/logo/addidas.png')}  width="110px"/></a>
              <a href="#"><img src={require('../images/logo/sb.png')}       /></a>
              <a href="#"><img src={require('../images/logo/cotton.png')}   /></a>
              <a href="#"><img src={require('../images/mango.png')}         width="120px" /></a>
              <a href="#"><img src={require('../images/logo/keds.png')}     /></a>
              <a href="#"><img src={require('../images/logo/casio.png')}    width="150px"/></a>
              <a href="#"><img src={require('../images/vans.png')}          width="130px"/></a>
        </div>
        <div id="product">
          <h1>This Week's Highlights</h1>
          <div class="product_site">
            <a href="#"><img src={require('../images/promo1.PNG')}/></a>
            <a href="#"><h2>ALL UNDER IDR188.000</h2></a>
            <p>
              Temukan semua produk fashion terbaik anda dengan harga affordable
            </p>
          </div>
          <div class="product_site">
            <a href="#"><img src={require('../images/promo2.PNG')}/></a>
            <a href="#"><h2>KEMEJA DI BAWAH IDR249.000"</h2></a>
            <p>
              Tampil memukan dengan kemeja santai dan stylish dapat anda temukan
              disini
            </p>
          </div>
          <div class="product_site">
            <a href="#"><img src={require('../images/hinata1.jpg')}/></a>
            <a href="#"><h2>HINATA DARI CLAN HIYUGA</h2></a>
            <p>
              Mempunyai mata yang bisa menembus apapun yang ada di hadapannya dan bisa melihat aliran cakra
            </p>
          </div>
        </div>
        <div className="footer">
          
        </div>
      </div>
      </Fragment>
    )
   }
  } 

export default App;
