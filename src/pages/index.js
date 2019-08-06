import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Countdown from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='countdown'>
      <div className='days'><span>Days</span> {hours}</div>
      <div className='hours'><span>Hours</span> {hours}</div>
      <div className='minutes'><span>Minutes</span> {minutes}</div>
      <div className='seconds'><span>Seconds</span> {seconds}</div>
    </div>
  )
};


const IndexPage = props => (
  <Layout>
    <SEO title="Homepage" />
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="https://images.unsplash.com/photo-1458413111252-87446cbff277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2495&q=80" alt="..." />
        </div>
        <div className="item">
          <img src="https://bx1d1websitecepprd.azureedge.net/sites/default/azbfiles/styles/xxl_9_4/public/2019-03/Global-Banner-Darker.jpg" alt="..." />
        </div>
      </div>

      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <main className="main" id="main" role="main">
            <h1>Buy or sell with Scottish Property Auctions</h1>
            <p>Welcome to BIDLOGIX Auctions, Scotland's largest auction house network, offering the biggest volume and widest variety of stock and asset offerings to the secondary market.</p>
            <h2 className="text-center">Latest Properties</h2>
            <div className='row'>
              <div className='col-xs-6 col-md-4'>
                <div className="thumbnail">
                  <img src="https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg" alt="..." />
                  <div className="caption">
                    <h3 className="h6 mb-0 text-muted">4 Bed Detatched House</h3>
                    <div className="h2 mt-0">£800,000</div>
                    <p className="text-muted">The Dalby, The Observatory, Canterbury</p>  
                    <a href="#test" className="btn btn-default btn-sm btn-block" role="button">View</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-md-4'>
                <div className="thumbnail">
                  <img src="https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg" alt="..." />
                  <div className="caption">
                    <h3 className="h6 mb-0 text-muted">4 Bed Detatched House</h3>
                    <div className="h2 mt-0">£800,000</div>
                    <p className="text-muted">The Dalby, The Observatory, Canterbury</p>               
                    <a href="#test" className="btn btn-default btn-sm btn-block" role="button">View</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-md-4'>
                <div className="thumbnail">
                  <img src="https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg" alt="..." />
                  <div className="caption">
                    <h3 className="h6 mb-0 text-muted">4 Bed Detatched House</h3>
                    <div className="h2 mt-0">£800,000</div>
                    <p className="text-muted">The Dalby, The Observatory, Canterbury</p>  
                    <a href="#test" className="btn btn-default btn-sm btn-block" role="button">View</a>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-center">Recently Sold</h2>
            <div className='row'>
              <div className='col-xs-6 col-md-4'>
                <div className="thumbnail">
                  <img src="https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg" alt="..." />
                  <div className="caption">
                    <h3 className="h6 mb-0 text-muted">4 Bed Detatched House</h3>
                    <div className="h2 mt-0">£800,000</div>
                    <p className="text-muted">The Dalby, The Observatory, Canterbury</p>  
                    <a href="#test" className="btn btn-default btn-sm btn-block" role="button">View</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-md-4'>
                <div className="thumbnail">
                  <img src="https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg" alt="..." />
                  <div className="caption">
                    <h3 className="h6 mb-0 text-muted">4 Bed Detatched House</h3>
                    <div className="h2 mt-0">£800,000</div>
                    <p className="text-muted">The Dalby, The Observatory, Canterbury</p>               
                    <a href="#test" className="btn btn-default btn-sm btn-block" role="button">View</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-md-4'>
                <div className="thumbnail">
                  <img src="https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg" alt="..." />
                  <div className="caption">
                    <h3 className="h6 mb-0 text-muted">4 Bed Detatched House</h3>
                    <div className="h2 mt-0">£800,000</div>
                    <p className="text-muted">The Dalby, The Observatory, Canterbury</p>  
                    <a href="#test" className="btn btn-default btn-sm btn-block" role="button">View</a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="col-xs-12 col-md-4">
          <aside role="complementary">
            <div className="well text-center">
              <h2 className="mt-0">Next Auction</h2>
              <Countdown date={Date.now() + 500000000} zeroPadTime='2' zeroPadDays='2' renderer={renderer} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
