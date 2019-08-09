import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Countdown from 'react-countdown-now';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';


export const indexQuery = graphql`
  query {
    prismic {
      allIndex_pages(uid:null) {
        edges {
          node {
            _meta {
              uid
              tags
            }
            meta_title
            meta_keywords
            meta_description
            title
            content
            countdown_deadline
            countdown_title
            countdown_text
            hero
            hero_title
            hero_text
          }
        }
      }
    }
  }
`

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

const RenderBody = ({ indexPage }) => {
  return (
    <div>
      <div id='carousel-example-generic' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carousel-example-generic' data-slide-to='0' className='active'></li>
        </ol>
        <div className='carousel-inner' role='listbox'>
          <div className='item active'>
            <div className='hero-text'>
              {RichText.render(indexPage.hero_title, linkResolver)}
              {RichText.render(indexPage.hero_text, linkResolver)}
            </div>
            <img src={indexPage.hero.url} alt={indexPage.hero.alt} />
          </div>
        </div>

        <a className='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>
          <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>
          <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
      <div className='container-fluid mt-2'>
        <div className='row'>
          <div className='col-xs-12 col-md-9'>
            <main className='main' id='main' role='main'>
              <h1>{indexPage.title}</h1>
              <div>{RichText.render(indexPage.content, linkResolver)}</div>
              <h2 className='text-center'>Latest Properties</h2>
              <div className='row'>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>  
                      <a href='#test' className='btn btn-secondary btn-sm btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>               
                      <a href='#test' className='btn btn-secondary btn-sm btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>  
                      <a href='#test' className='btn btn-secondary btn-sm btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className='text-center'>Recently Sold</h2>
              <div className='row'>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>  
                      <a href='#test' className='btn btn-secondary btn-sm btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>               
                      <a href='#test' className='btn btn-secondary btn-sm btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>  
                      <a href='#test' className='btn btn-secondary btn-sm btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className='col-xs-12 col-md-3'>
            <aside>
              <div className='well text-center'>
                <div>{RichText.render(indexPage.countdown_title, linkResolver)}</div>
                <Countdown date={indexPage.countdown_deadline} zeroPadTime={2} zeroPadDays={2} renderer={renderer} />
                <div>{RichText.render(indexPage.countdown_text, linkResolver)}</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = props => {
  const doc = props.data.prismic.allIndex_pages.edges.slice(0,1).pop();
  if(!doc) return null;

  return (
    <Layout>
      <SEO title={doc.node.meta_title} keywords={doc.node.meta_keywords} description={doc.node.meta_description} lang='en-gb' />
      <RenderBody indexPage={doc.node} />
    </Layout>
  )
}
export default IndexPage
