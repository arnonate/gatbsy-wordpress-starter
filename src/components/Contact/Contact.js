// import React from "react"

// const Contact = ({ data, lang }) => {
//   const handleEmailClick = email => {
//     window.location.href = "mailto:" + email
//   }

//   return (
//     <Styles.Section>
//       <Theme.Wrap size="wide">
//         <Styles.Container>
//           <div>
//             <h2>{data.supportHeading}</h2>
//             <div dangerouslySetInnerHTML={{ __html: data.supportCopy }} />
//             <p>{data.supportEmail}</p>
//             <Theme.Button onClick={() => handleEmailClick(data.supportEmail)}>
//               {data.supportButtonText}
//             </Theme.Button>

//             <h2>{data.feedbackHeading}</h2>
//             <div dangerouslySetInnerHTML={{ __html: data.feedbackCopy }} />
//             <p>{data.feedbackEmail}</p>
//             <Theme.Button onClick={() => handleEmailClick(data.feedbackEmail)}>
//               {data.feedbackButtonText}
//             </Theme.Button>
//           </div>

//           <form
//             name={lang === "en_us" ? "Contact" : "Contato"}
//             action={lang === "en_us" ? "/thanks/" : "/pt/thanks/"}
//             method="POST"
//             netlify-honeypot="bot-field"
//             data-netlify="true"
//           >
//             <input type="hidden" name="bot-field" />
//             <input
//               type="hidden"
//               name="form-name"
//               value={lang === "en_us" ? "Contact" : "Contato"}
//             />
//             <p>
//               <input
//                 className="half"
//                 type="text"
//                 name="First Name"
//                 placeholder={data.firstNameFieldLabel}
//                 required
//               />
//               <input
//                 className="half"
//                 type="text"
//                 name="Last Name"
//                 placeholder={data.lastNameFieldLabel}
//               />
//             </p>
//             <p>
//               <input
//                 className="half"
//                 type="email"
//                 name="Email"
//                 placeholder={data.emailFieldLabel}
//                 required
//               />
//               <input
//                 className="half"
//                 type="phone"
//                 name="Phone"
//                 placeholder={data.phoneFieldLabel}
//               />
//             </p>
//             <p>
//               <input
//                 type="text"
//                 name="Country"
//                 placeholder={data.countryFieldLabel}
//               />
//             </p>
//             <p>
//               <textarea
//                 name="Message"
//                 required
//                 placeholder={data.messageFieldLabel}
//               />
//             </p>
//             <p>
//               <Theme.Button type="submit">{data.submitButtonText}</Theme.Button>
//             </p>
//           </form>
//         </Styles.Container>
//       </Theme.Wrap>
//     </Styles.Section>
//   )
// }

// export default Contact
