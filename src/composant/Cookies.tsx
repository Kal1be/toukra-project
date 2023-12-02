import CookieConsent from "react-cookie-consent"

function Cookies() {
  return (
    <div>
    <CookieConsent
    location="bottom"
    buttonText="Oui, J'accepte."
    cookieName="toukraUniversite"
    style={{ background:"black",padding:"10px 2px",fontSize:"18px",fontWeight:"bold" }}
    buttonStyle={{ background: "#2dc0fe", padding:"10px 15px",color:"white", fontSize: "16px" }}
    expires={365}
  >
   Ce site utilise les cookies pour ameliorer votre experience utilisateur. <a href="" style={{color:"#2dc0fe",fontSize:"16px",textDecoration:"underline 1px solid #2dc0fe"}}>cliquer ici pour en savoir plus sur les cookies</a>{" "}
    <span style={{ fontSize: "16px" }}>En cliquer sur accepter,vous accepter nos conditions et droits.</span>
  </CookieConsent>
    </div>
  )
}

export default Cookies
