import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RenderBody = () => {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <h1>Credas</h1>
            <form
              name="Credas"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="Credas" />

              <input type="hidden" name="regTypeId" value="Cc466776a-9663-4812-8312-c5f00aa90796" />
              <input type="hidden" name="referenceId" value="HID/12345/336/10" />
              <input type="hidden" name="sendEmail" value="true" />
              <input type="hidden" name="diallingCode" value="+44" />
              <input type="hidden" name="duplicateAcknowledgement" value="false" />
              <input type="hidden" name="provideWebJourneyLink" value="true" />

              <div className="form-group">
                <label htmlFor="forename">First Name<sup>*</sup></label>
                <input className="form-control" type="text" name="forename" id="forename" required />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Last Name<sup>*</sup></label>
                <input className="form-control" type="text" name="surname" id="surname" required />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number<sup>*</sup></label>
                <input className="form-control" type="tel" name="phoneNumber" id="phoneNumber" required />
              </div>

              <div className="form-group">
                <label htmlFor="emailAddress">Email Address<sup>*</sup></label>
                <input className="form-control" type="emailAddress" name="emailAddress" id="emailAddress" required />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const CredasPage = props => {
  return (
    <Layout>
      <RenderBody />
    </Layout>
  )
}
export default CredasPage
