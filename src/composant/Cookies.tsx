import CookieConsent from "react-cookie-consent"

function Cookies() {

  return (
    <div>
  <CookieConsent
    location="bottom"
    buttonText="Oui, J'accepte."
    cookieName="toukra-Universite"
    style={{ background:"black",padding:"5px 2px",fontSize:"13px",fontWeight:"500" }}
    buttonStyle={{ background: "#2dc0fe", padding:"10px 15px",color:"white", fontSize: "12px" }}
    expires={365}
    
  >
   Ce site utilise les cookies pour ameliorer votre experience utilisateur. <a href="" style={{color:"#2dc0fe",fontSize:"12px",textDecoration:"underline 1px solid #2dc0fe"}}>cliquer ici pour en savoir plus sur les cookies</a>{" "}
    <span style={{ fontSize: "13px" }}>En cliquer sur accepter,vous accepter nos conditions et droits.</span>
  </CookieConsent>
    </div>
  )
}
export default Cookies



