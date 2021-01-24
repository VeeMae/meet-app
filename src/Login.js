import React from "react";


function Login() {
  return (
    <div className='App'>
          <h1>Welcome to the Meet App</h1>
          <h2>Please Read the Following Before Moving Forward with the Application</h2>
          <p>The Meet App is a project given to students who are part of the Full Stack Web Development Course at CareerFoundry. The intent of creating this app is to learn skills in building a serverless, progressive web application with React using a test-driven development technique. In addition, it uses the Google Calendar API to fetch upcoming web development events from a calendar that the curriculum team at CareerFoundry have created for this sole purpose. (Essentially, the app displays 2 informational charts depicting the number of events and popularity, and a list of events based on user input.) The login prompt is meant to demonstrate skills in using an API and OAuth2 authentication flow. <strong>This website is purely for educational purposes and has no commercial intent or use.</strong> As stated in the privacy policy, no personal data is collected or saved at any stage. Furthermore, the application is meant to be part of a portfolio that all CareerFoundry students work towards completing as they progress through the curriculum. As such, this application is meant to showcase the skills learned during the Full Stack immersion of the CareerFoundry program, fulfilling the requirement to add to one's own portfolio. Please refer to the privacy policy if needed. </p> <br />
      <h4>Please log in to use the application</h4>
      <div className='button_cont' align='center'>
        <div class='google-btn'>
          <div class='google-icon-wrapper'>
            <img
              class='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='Google sign-in'
            />
          </div>
          <a
            href='https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=239876640593-kac7khsulakidhvluo039913q9lgf0vf.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fveemae.github.io%2Fmeet-app%2F'
            rel='nofollow noopener'
            class='btn-text'
          >
            <b>Sign in with Google</b>
          </a>
        </div>
      </div>
      <a href='https://veemae.github.io/meet-app/privacyPolicy.html' className="privacyLink" rel='nofollow noopener'>
        Privacy Policy
      </a>
    </div>
  );
}
export default Login;
