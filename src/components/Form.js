import React from "react";
import styled from "styled-components";
import "whatwg-fetch"; // Fetch Polyfill
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Link from "gatsby-link";
import Sound from "react-sound";
import background from "../images/birds-eye-full.jpg";
import khaled from "../sounds/another-one.mp3";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  min-height: 100vh;
  overflow: hidden;
  z-index: 0;
  &::before {
    content: "";
    background-image: url(${background});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    z-index: -3;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  border-radius: 2px;
  padding: 1rem;
  max-width: 800px;
  border: 1px solid ${props => props.theme.colors.tertiary};
  font-size: 1.1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2rem;
  }
  input[type="text"],
  input[type="email"],
  input[type="submit"],
  textarea {
    appearance: none;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    background: white;
    border: 1px solid ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
    &:focus {
      outline: none;
    }
    &:required {
      box-shadow: none;
    }
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
  }
`;

const Preface = styled.p`
  width: 100%;
  line-height: 1.5;
  margin: 0 0 2rem 0;

  em {
    font-size: 0.85rem;
  }
`;

const Name = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  flex: 0 1 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`;

const Email = styled.input`
  margin: 0 0 1rem 0;
  width: 100%;
  flex: 0 1 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
`;

const Dancing = styled.textarea`
  width: 100%;
  flex: 0 1 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 75px;
  resize: none;
`;

const Questions = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 150px;
  resize: none;
`;

const Checkboxes = styled.div`
  text-align: center;
  margin: 0.5rem 0 1.5rem 0;
  width: 100%;
  input:invalid {
    box-shadow: none;
  }
  span,
  label {
    margin: 0 1rem 0 0;
  }

  p {
    margin: 0 0 0.5rem 0;
  }

  strong {
    font-weight: 900;
  }
`;

const Responses = styled.div`
  margin-top: 1rem;
`;

const Note = styled.div`
  display: block;
  color: rgb(155, 155, 155);
  font-size: 0.85rem;
  margin: 0 0 0.75rem 0;
`;

const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  border: none !important;
  color: white !important;
  cursor: pointer;
  transition: 0.3s;
  &:disabled {
    background: gray !important;
    cursor: not-allowed;
  }
  margin-right: 0.5rem;
`;

const Close = styled(Link)`
  font-weight: 600;
  display: inline-block;
  margin: 0 0 1rem 0;
  align-self: flex-end;
  transition: 0.3s;
  &:hover {
    opacity: 0.75;
  }
  @media (hover: none) {
    opacity: 1 !important;
  }
`;

const Success = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 0.5px));
  text-align: center;
  z-index: -1;
  background: white;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.tertiary};
  text-decoration: none;
  h2 {
    font-weight: 600;
    padding: 1rem;
    font-size: 1.25em;
    background: ${props => props.theme.colors.highlight};
    color: white;
    width: 100%;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.75em;
    }
  }
  h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin: 1rem 1rem;
    text-decoration: underline;
  }
  p {
    padding: 1rem;
  }
`;

const GoLink = styled(Link)`
  font-size: 1.1em;
  font-weight: 600;
  margin: 2rem 1rem;
  display: block;
  text-decoration: underline;
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      rsvp: "",
      dancing: "",
      shuttle: "",
      questions: "",
      success: false,
      disabledSubmit: false,
      playStatus: Sound.status.STOPPED
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...this.state })
    })
      .then(this.handleSuccess)
      .catch(error => alert(error));
    event.preventDefault();
  };

  handleSuccess = () => {
    // eslint-disable-next-line
    this.setState({
      name: "",
      email: "",
      rsvp: "",
      dancing: "",
      shuttle: "",
      questions: "",
      success: true,
      disabledSubmit: true
    });
  };

  handleAnotha = () => {
    // play the sound and reset the form
    this.setState({
      name: "",
      email: "",
      rsvp: "",
      dancing: "",
      shuttle: "",
      questions: "",
      success: false,
      disabledSubmit: false,
      playStatus: Sound.status.PLAYING
    })
  };

  handleFinishedPlaying = () => {
    this.setState({
      playStatus: Sound.status.STOPPED
    })
  }

  render() {
    return (
      <Wrapper>
        <Fade>
          <Slide bottom when={!this.state.success} collapse duration={750}>
            <ContactForm
              name="rsvp"
              onSubmit={this.handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Close to="/">Go Back</Close>
              <Preface>
                We hope you are able to celebrate with us, but we have a few
                questions for you first!<br/>
                <em>*Please submit one RSVP per person. After clicking All Done you will be asked if you'd like to submit another one.</em>
              </Preface>
              <input type="hidden" name="form-name" value="rsvp" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot" onChange={this.handleInputChange} />
                </label>
              </p>
              <Name
                name="name"
                type="text"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
              <Email
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
              <Checkboxes>
                <p>
                  <strong>Are you able to make the wedding?</strong>
                </p>
                <Responses>
                  <label>
                    Yes, I'll be there{" "}
                    <input
                      name="rsvp"
                      type="radio"
                      value="yes"
                      checked={this.state.rsvp === "yes"}
                      onChange={this.handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    No, I can't attend{" "}
                    <input
                      name="rsvp"
                      type="radio"
                      value="no"
                      checked={this.state.rsvp === "no"}
                      onChange={this.handleInputChange}
                      required
                    />
                  </label>
                </Responses>
              </Checkboxes>
              <Checkboxes>
                <p>
                  <strong>
                    Would you like to reserve a seat on the shuttle?
                  </strong>
                </p>
                <Note>
                  <em>
                    (Note: The shuttle will travel between Birds Eye Cove Farm
                    and the 2 recommended accomodations)
                  </em>
                </Note>
                <Responses>
                  <label>
                    To the venue{" "}
                    <input
                      name="shuttle"
                      type="radio"
                      value="to-venue"
                      checked={this.state.shuttle === "to-venue"}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label>
                    To the hotels{" "}
                    <input
                      name="shuttle"
                      type="radio"
                      value="from-venue"
                      checked={this.state.shuttle === "from-venue"}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label>
                    Both ways{" "}
                    <input
                      name="shuttle"
                      type="radio"
                      value="both"
                      checked={this.state.shuttle === "both"}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label>
                    Neither{" "}
                    <input
                      name="shuttle"
                      type="radio"
                      value="neither"
                      checked={this.state.shuttle === "neither"}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </Responses>
              </Checkboxes>
              <Dancing
                name="dancing"
                type="text"
                placeholder="What's your favourite song to dance to?"
                value={this.state.dancing}
                onChange={this.handleInputChange}
                required
              />
              <Questions
                name="questions"
                type="text"
                placeholder="Any additionals questions, comments, dietary restrictions, or plus-one requests? (optional)"
                value={this.state.questions}
                onChange={this.handleInputChange}
              />
              <div>
                <Submit
                  disabled={this.state.disabledSubmit}
                  name="submit"
                  type="submit"
                  value="All done!"
                />
              </div>
            </ContactForm>
          </Slide>
        </Fade>

        <Success show={this.state.success ? true : undefined}>
          <h2>Thank You</h2>
          <p>We have received your RSVP!</p>
          <p>
            We will send you a reminder email, and perhaps other annoying
            updates closer to the wedding.
          </p>
          <GoLink to="/">Return to Main Page</GoLink>
          <GoLink onClick={this.handleAnotha} to="/rsvp">Anotha One!</GoLink>
        </Success>

        <Sound
          url={khaled}
          playStatus={this.state.playStatus}
          volume={80} 
          onFinishedPlaying={this.handleFinishedPlaying}
        />
      </Wrapper>
    );
  }
}

export default Form;
