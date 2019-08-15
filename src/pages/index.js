import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Countdown from 'react-countdown-now';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';

export const homeQuery = graphql`
  query {
    prismic {
      allHome_pages(uid: null) {
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
            body {
              ...on PRISMIC_Home_pageBodyImage_gallery {
                type
                fields {
                  hero_title
                  hero_image
                  hero_content
                }
              }
            }
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

const RenderBody = ({ homePage }) => {
  return (
    <React.Fragment>
      {homePage.body &&
        <React.Fragment>
          {homePage.body.map((slice, index) => {
            return (
              <div key={`slice-${index}`}>
                {slice.type ==='image_gallery' &&
                  <React.Fragment>
                    <div id='carousel-example-generic' className='carousel slide' data-ride='carousel'>
                      <div className='carousel-inner' role='listbox'>
                        {slice.fields.map((item, index) => {
                          return (
                            <div className={'item' + (index === 0 ? ' active' : '')} key={`item-${index}`}>
                              <img src={item.hero_image.url} alt={item.hero_image.alt} />
                              <div className='carousel-caption'>
                                {RichText.render(item.hero_title, linkResolver)}
                                {RichText.render(item.hero_content, linkResolver)}
                              </div>
                            </div>
                          )
                        })}
                        <a className='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>
                          <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                          <span className='sr-only'>Previous</span>
                        </a>
                        <a className='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>
                          <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                          <span className='sr-only'>Next</span>
                        </a>
                      </div>
                    </div>
                  </React.Fragment>
                }
              </div>
            )
          })}
        </React.Fragment>
      }
      <div className='container-fluid mt-2'>
        <div className='row'>
          <div className='col-xs-12 col-md-8 col-lg-9'>
            <main className='main' id='main' role='main'>
              <h1>{RichText.render(homePage.title, linkResolver)}</h1>
              {RichText.render(homePage.content, linkResolver)}
              <h2 className='text-center'>Latest Properties</h2>
              <div className='row'>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>  
                      <a href='#test' className='btn btn-primary btn-block' role='button'>View</a>
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
                      <a href='#test' className='btn btn-primary btn-block' role='button'>View</a>
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
                      <a href='#test' className='btn btn-primary btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
              </div>
{/*              <h2 className='text-center'>Recently Sold</h2>
              <div className='row'>
                <div className='col-xs-6 col-md-4'>
                  <div className='thumbnail'>
                    <img src='https://media.rightmove.co.uk/dir/crop/10:9-16:9/88k/87209/68312137/87209_FPS1001256_IMG_01_0004_max_656x437.jpg' alt='...' />
                    <div className='caption'>
                      <h3 className='h6 mb-0 text-muted'>4 Bed Detatched House</h3>
                      <div className='h2 mt-0'>£800,000</div>
                      <p className='text-muted'>The Dalby, The Observatory, Canterbury</p>  
                      <a href='#test' className='btn btn-primary btn-block' role='button'>View</a>
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
                      <a href='#test' className='btn btn-primary btn-block' role='button'>View</a>
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
                      <a href='#test' className='btn btn-primary btn-block' role='button'>View</a>
                    </div>
                  </div>
                </div>
              </div>*/}
            </main>
          </div>
          <div className='col-xs-12 col-md-4 col-lg-3'>
            <aside>
              <div className='panel panel-primary'>
                <div className='panel-body text-center'>
                  <div>{RichText.render(homePage.countdown_title, linkResolver)}</div>
                  <Countdown date={homePage.countdown_deadline} zeroPadTime={2} zeroPadDays={2} renderer={renderer} />
                  <div>{RichText.render(homePage.countdown_text, linkResolver)}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const HomePage = props => {
  const doc = props.data.prismic.allHome_pages.edges.slice(0,1).pop();
  if(!doc) return null;

  return (
    <Layout>
      <SEO title={doc.node.meta_title} keywords={doc.node.meta_keywords} description={doc.node.meta_description} lang='en-gb' />
      <RenderBody homePage={doc.node} />
    </Layout>
  )
}
export default HomePage
